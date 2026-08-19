import { now, save } from './state.js';
import { ctx } from './store.js';
import * as All from './all.js';
import { spriteSVG, registerDynamicSprite, GACHA_P } from './graphics.js';
import { toast, takeoutNote, setTakeoutNote } from './witch.js';
import { openModal } from './shop.js';
import { charName, CS, SEC, extractJson, collectWorldbook, updateInjection, pushTakenLog, loadTakenLog, takenLog, removeTakenLogAt } from './events.js';
import { GACHA_PROMPT } from './prompt.js';
import { mutDescOf, bagName } from './logic.js';

/* ---------- Bản rút gọn: chỉ còn Gacha lấy đồ, quay MIỄN PHÍ không giới hạn ---------- */
/* Quay Thường  -> Rác / Thường
   Quay Đặc biệt -> Hiếm / Sử thi
   Quay Siêu cường -> Huyền thoại (luôn luôn) */

export function initGachaState() {
  if (!ctx.S.uniques) ctx.S.uniques = {};
}

export const RARITY_ORDER = ['Rác', 'Thường', 'Hiếm', 'Sử thi', 'Huyền thoại'];
export const RARITY_COLOR = { 'Rác': '#9e9e9e', 'Thường': '#b0bec5', 'Hiếm': '#4a90e2', 'Sử thi': '#a335ee', 'Huyền thoại': '#ff8000' };
export const RARITY_PRICE = { 'Rác': 100, 'Thường': 500, 'Hiếm': 2500, 'Sử thi': 8000, 'Huyền thoại': 20000 };

// Hàm hỗ trợ giới hạn concurrency (parallel)
async function pMap(array, asyncFn, concurrency) {
  const results = [];
  const executing = [];
  for (const item of array) {
    const p = Promise.resolve().then(() => asyncFn(item));
    results.push(p);
    if (concurrency <= array.length) {
      const e = p.then(() => executing.splice(executing.indexOf(e), 1));
      executing.push(e);
      if (executing.length >= concurrency) {
        await Promise.race(executing);
      }
    }
  }
  return Promise.all(results);
}

// Máy phát Procedural Sprite 32x32 dự phòng (khi AI chưa bật / offline / lỗi)
export function generateProcedural32x32Sprite(rarity) {
  const map = [];
  const borderChar = 'K';
  const mainChar = rarity === 'Huyền thoại' ? 'C' : rarity === 'Sử thi' ? 'V' : rarity === 'Hiếm' ? 'B' : rarity === 'Thường' ? 'G' : 'D';
  const subChar = rarity === 'Huyền thoại' ? 'Y' : rarity === 'Sử thi' ? 'v' : rarity === 'Hiếm' ? 'b' : rarity === 'Thường' ? 'g' : 'd';
  const highlightChar = 'W';
  const accentChar = rarity === 'Huyền thoại' ? 'R' : rarity === 'Sử thi' ? 'F' : rarity === 'Hiếm' ? 'E' : rarity === 'Thường' ? 'L' : 'D';

  const type = Math.floor(Math.random() * 4); 

  for (let y = 0; y < 32; y++) {
    let row = '';
    for (let x = 0; x < 32; x++) {
      const distFromCenter = Math.hypot(x - 15.5, y - 15.5);
      const isLeft = x < 16;
      const mirrorX = isLeft ? x : 31 - x;

      let ch = '.';

      if (type === 0) {
        if (y >= 10 && y <= 22) {
          const w = 12 - Math.floor(Math.abs(y - 16) * 0.4);
          if (mirrorX >= 16 - w && mirrorX <= 15) {
            if (mirrorX === 16 - w || y === 10 || y === 22) ch = borderChar;
            else if (y === 11 || mirrorX === 16 - w + 1) ch = highlightChar;
            else if ((x + y) % 3 === 0) ch = accentChar;
            else ch = (x % 2 === 0) ? mainChar : subChar;
          }
        }
      } else if (type === 1) {
        if (distFromCenter <= 11) {
          if (distFromCenter >= 10.2) ch = borderChar;
          else if (x <= 13 && y <= 13 && distFromCenter < 8) ch = highlightChar;
          else if (distFromCenter < 5) ch = accentChar;
          else ch = (x + y) % 2 === 0 ? mainChar : subChar;
        }
      } else if (type === 2) {
        const line = Math.abs(x - y);
        if (line <= 3 && x >= 4 && x <= 27 && y >= 4 && y <= 27) {
          if (line === 3) ch = borderChar;
          else if (line === 0) ch = highlightChar;
          else ch = (x + y) % 2 === 0 ? mainChar : subChar;
        }
      } else {
        const dx = Math.abs(x - 15.5), dy = Math.abs(y - 15.5);
        if (dx + dy <= 12 && dx + dy >= 2) {
          if (dx + dy >= 11) ch = borderChar;
          else if (dx <= 2 || dy <= 2) ch = highlightChar;
          else ch = (x % 2 === 0) ? mainChar : subChar;
        }
      }
      row += ch;
    }
    map.push(row);
  }
  return map;
}

// Gọi AI tạo Vật phẩm Độc nhất
export async function generateAIUniqueItemData(rarity, fusionSources) {
  if (!SEC.url || !SEC.model) return null;
  try {
    const simpleColors = Object.entries(GACHA_P).filter(e => typeof e[1] === 'string');
    const paletteStr = simpleColors.map(([k, v]) => `${k}: ${v}`).join(', ');

    let contextStr = '';
    let thinkingInstructions = '';

    const originStr = CS.gachaOrigin ? `\nNguồn gốc máy Gachapon này do người chơi tự đặt ra (hãy tôn trọng, coi đây là sự thật cố định trong thế giới này, đừng mâu thuẫn với nó): "${CS.gachaOrigin}"\n` : '';
    const hasWant = CS.wantItem || CS.wantAttr || CS.wantDesc;
    const wantStr = hasWant ? `\n[YÊU CẦU BẮT BUỘC CỦA NGƯỜI CHƠI — ƯU TIÊN TUYỆT ĐỐI]:${CS.wantItem ? ` Vật phẩm phải thuộc chủ đề/loại: "${CS.wantItem}".` : ''}${CS.wantAttr ? ` Thuộc tính/phong cách nên có: "${CS.wantAttr}".` : ''}${CS.wantDesc ? ` Hiệu ứng/công dụng nên hướng tới: "${CS.wantDesc}" (BẮT BUỘC thiết kế cơ chế/hiệu ứng của vật phẩm xoay quanh ý này, không bịa công dụng khác không liên quan).` : ''} BẮT BUỘC tuân thủ mọi yêu cầu trên (một biến thể/phiên bản ngẫu nhiên khác nhau mỗi lần, không lặp lại y hệt lần trước), CHỈ độ hiếm/sức mạnh chi tiết mới được ngẫu nhiên theo phẩm chất [${rarity}]. Không được lạc đề.\n` : '';

    if (fusionSources && fusionSources.length) {
      // Dung hợp: bắt buộc pha trộn hiệu ứng của các nguyên liệu, bỏ qua yêu cầu chủ đề riêng
      const matList = fusionSources.map((it, i) => `  ${i + 1}. [${it.rarity}] ${it.name} — ${it.desc}`).join('\n');
      contextStr = `[DUNG HỢP VẬT PHẨM] Đây là kết quả DUNG HỢP từ ${fusionSources.length} nguyên liệu sau, KHÔNG PHẢI vật phẩm ngẫu nhiên mới:\n${matList}\n\nBẮT BUỘC: vật phẩm mới phải là sự PHA TRỘN hợp lý của các nguyên liệu trên — hình dáng gợi nhớ tới cả các nguyên liệu, và hiệu ứng/công dụng PHẢI kết hợp/lai giữa hiệu ứng của từng nguyên liệu (không được bịa hiệu ứng hoàn toàn mới không liên quan). Có thể đặt tên ghép hoặc tên mới nghe hợp lý.`;
      thinkingInstructions = `1. ĐỌC KỸ nguyên liệu dung hợp ở trên, xác định đặc điểm/hiệu ứng cốt lõi của từng món.
2. THIẾT KẾ: Tạo vật phẩm mới là sự dung hợp — hình dáng pha trộn, hiệu ứng là tổ hợp/nâng cấp của các hiệu ứng nguyên liệu, phù hợp phẩm chất [${rarity}].
3. VẼ PIXEL: Khung pixel tối thiểu 32x32, BẮT BUỘC lưới HÌNH VUÔNG n x n, gợi hình ảnh pha trộn giữa các nguyên liệu.`;
    } else if (wantStr) {
      // Có yêu cầu cụ thể: LOẠI/chủ đề vật phẩm theo đúng yêu cầu người chơi, nhưng vẫn phải khớp bối cảnh nhân vật/đoạn chat hiện tại
      contextStr = wantStr;
      if (CS.link) {
        const worldbook = await collectWorldbook();
        contextStr += `\nBối cảnh thẻ nhân vật & đoạn chat hiện tại (BẮT BUỘC tham khảo để vật phẩm khớp với tình cảnh/thế giới quan hiện tại — ví dụ nguồn gốc, chất liệu, phong cách đặt tên, không khí câu chuyện — nhưng KHÔNG được đổi chủ đề/loại vật phẩm đã yêu cầu ở trên):\n${worldbook ? worldbook : '(Không có dữ liệu thế giới cụ thể — tự do sáng tạo bối cảnh phù hợp)'}\n`;
      } else {
        contextStr += `\n(Lưu ý: người chơi CHƯA bật "Liên kết thẻ nhân vật" nên không có dữ liệu bối cảnh cụ thể — tự do sáng tạo phần bối cảnh/nguồn gốc sao cho hợp lý.)\n`;
      }
      thinkingInstructions = `1. XÁC NHẬN YÊU CẦU: Đọc kỹ yêu cầu bắt buộc của người chơi ở trên${CS.wantItem ? ` (chủ đề: "${CS.wantItem}")` : ''} — nghĩ ra MỘT biến thể cụ thể ngẫu nhiên thoả mọi yêu cầu đó.
2. LỒNG GHÉP BỐI CẢNH: Dựa vào bối cảnh thẻ nhân vật/đoạn chat hiện tại (nếu có) để quyết định nguồn gốc, chất liệu, phong cách đặt tên và không khí mô tả của vật phẩm — sao cho nó như thể "thuộc về" thế giới đang diễn ra, không phải vật phẩm rời rạc vô căn cứ.
3. CƠ CHẾ: Căn cứ vào độ hiếm [${rarity}] để thiết lập cơ chế/hiệu ứng. Thao tác cụ thể, thú vị, phá vỡ sáo rỗng.
4. VẼ PIXEL: Khung pixel tối thiểu là 32x32, có thể lớn hơn, BẮT BUỘC là lưới HÌNH VUÔNG n x n.`;
    } else if (CS.link) {
      const worldbook = await collectWorldbook();
      contextStr = `Trích xuất bối cảnh thế giới (Worldbook) & Lịch sử trò chuyện gần nhất:
${worldbook ? worldbook : '(Không có dữ liệu thế giới cụ thể)'}
Nếu thấy phù hợp, hãy thiết kế kỳ vật liên kết với bối cảnh này, nếu không thì tự do sáng tạo. Tuy nhiên, KHÔNG ĐƯỢC tùy chỉnh kết quả thành "đáp án giải quyết khủng hoảng trước mắt". Kỳ vật phải duy trì tính độc lập ngẫu nhiên.`;
      
      thinkingInstructions = `1. TÌM Ý TƯỞNG: Đọc kỹ bối cảnh thế giới được cung cấp. Xác định Vực đề tài và Vực lối chơi.
2. CƠ CHẾ: Căn cứ vào độ hiếm [${rarity}] để thiết lập cơ chế. Thao tác cụ thể, cực kỳ thú vị và phá vỡ sáo rỗng (anti-cliché).
3. VẼ PIXEL: Khung pixel tối thiểu là 32x32. Bạn có thể mở rộng kích thước lớn hơn (ví dụ 40x40, 48x48), nhưng BẮT BUỘC phải là lưới HÌNH VUÔNG n x n (số dòng và số ký tự mỗi dòng phải bằng nhau).`;
    } else {
      contextStr = `KHÔNG CÓ CHỦ ĐỀ CỐ ĐỊNH. Để đảm bảo tính ngẫu nhiên tuyệt đối, bạn PHẢI tự bốc thăm Vực đề tài và Vực lối chơi bất kỳ. Mọi thứ trong vũ trụ đều có thể trở thành kỳ vật.`;
      
      thinkingInstructions = `1. BỐC THĂM CHỦ ĐỀ: Bốc thăm ngẫu nhiên Vực đề tài (Khí vật, sinh mệnh, quy tắc, không gian...) và Vực lối chơi (Xử lý thông tin, cải tạo bối cảnh, giao dịch đánh cược...).
2. CƠ CHẾ: Căn cứ vào độ hiếm [${rarity}] để thiết lập cơ chế. Thao tác cụ thể, cực kỳ thú vị và phá vỡ sáo rỗng (anti-cliché).
3. VẼ PIXEL: Khung pixel tối thiểu là 32x32. Bạn có thể mở rộng kích thước lớn hơn (ví dụ 40x40, 48x48), nhưng BẮT BUỘC phải là lưới HÌNH VUÔNG n x n (số dòng và số ký tự mỗi dòng phải bằng nhau).`;
    }
    contextStr = originStr + contextStr;

    const rarityGuidance = rarity === 'Huyền thoại' 
      ? "[Đột phá Quy tắc] Vật phẩm độc nhất vô nhị với khả năng bẻ cong hoặc viết lại một quy tắc cụ thể của trò chơi/thế giới. Sức mạnh vĩ mô, hiệu ứng hình ảnh hoành tráng. Dù cực mạnh, nó vẫn phải tuân theo logic của thế giới, không biến người chơi thành thần toàn năng nhàm chán."
      : rarity === 'Sử thi' 
      ? "[Tài sản Chiến lược] Đồ vật mang tính thay đổi lối chơi (Game-changer). Có sức mạnh lớn, đa dụng, hoặc tự động hóa một quy trình phức tạp. Tuy nhiên, để phát huy tối đa cần có sự tính toán của người chơi."
      : rarity === 'Hiếm'
      ? "[Cơ chế Đặc biệt] Vật phẩm bắt đầu có 'cơ chế hoạt động' riêng biệt. Có thể thay đổi một phần nhỏ cục diện, mang lại lợi ích rõ rệt nhưng sẽ có thời gian hồi chiêu (cooldown) hoặc điều kiện kích hoạt."
      : rarity === 'Thường'
      ? "[Công cụ Cơ bản] Vật phẩm có ích nhưng công năng đơn giản, giới hạn rõ ràng. Thường là đồ tiêu hao, công cụ hỗ trợ canh tác, sinh hoạt hoặc tăng chỉ số nhẹ."
      : "[Vật phẩm Tấu hài/Vô dụng] Những món đồ kỳ cục, hỏng hóc hoặc có công dụng cực kỳ vô thưởng vô phạt. Chúng tồn tại chủ yếu để gây cười, tạo tình huống trớ trêu trong tương tác đời thường.";

    const basePrice = rarity === 'Huyền thoại' ? 20000 : rarity === 'Sử thi' ? 8000 : rarity === 'Hiếm' ? 2500 : rarity === 'Thường' ? 500 : 100;

    const sysPrompt = `Bạn là một AI thiết kế "Kỳ vật dị giới" (Otherworldly Artifact) và chuyên gia Pixel Art (n x n, tối thiểu 32x32).
Hãy sáng tạo 1 KỲ VẬT ĐỘC NHẤT phẩm chất [${rarity}].
${contextStr}

--- QUY TẮC CỐT LÕI TỪ VẠN HỮU ĐẠO NGUYÊN ---
${GACHA_PROMPT}
--- KẾT THÚC QUY TẮC CỐT LÕI ---

BẢNG MÀU PIXEL CHO PHÉP (Ký tự: Mã màu Hex):
${paletteStr}

QUY TẮC BỔ SUNG:
1. Cấp độ sức mạnh hiện tại: Phẩm chất [${rarity}] - ${rarityGuidance}
2. Định giá hợp lý: Không được phá giá kinh tế game.

HƯỚNG DẪN TƯ DUY (Bắt buộc phải có thẻ <thinking> trước khi xuất mã):
${thinkingInstructions}

QUY TẮC ĐẦU RA BẮT BUỘC:
Sau khi đóng thẻ </thinking>, chỉ xuất đúng 1 khối mã \`\`\`json chứa cấu trúc:
{
  "name": "Tên kỳ vật (2~7 chữ, ấn tượng, gợi sự tò mò)",
  "desc": "Mô tả ngắn gọn CƠ CHẾ và CÁCH SỬ DỤNG của kỳ vật (dưới 100 chữ). Phải rõ ràng, thú vị, độc lạ.",
  "price": Số nguyên định giá. Giá tối thiểu: ${basePrice}G. NGHIÊM CẤM LẠM PHÁT, giá trị tối đa tuyệt đối KHÔNG ĐƯỢC VƯỢT QUÁ ${basePrice * 5}G,
  "spriteMap": [ mảng các chuỗi. Nếu chọn kích thước n x n, mảng PHẢI CÓ ĐÚNG n chuỗi, và mỗi chuỗi DÀI CHÍNH XÁC n ký tự. Phải là hình vuông (min 32x32). Chỉ dùng ký tự Bảng màu và dấu '.' cho điểm trong suốt ]
}`;

    const userPrompt = fusionSources && fusionSources.length
      ? `Hãy dung hợp các nguyên liệu đã cho thành 1 vật phẩm mới phẩm chất ${rarity}.`
      : `Hãy sáng tạo 1 vật phẩm đặc biệt ngẫu nhiên phẩm chất ${rarity}.`;

    console.groupCollapsed(`=== GACHA AI DEBUG: Bắt đầu tạo [${rarity}] ===`);
    console.log('[System Prompt]:\n', sysPrompt);
    console.log('[User Prompt]:\n', userPrompt);
    console.groupEnd();

    const ctrl = new AbortController();
    const to = setTimeout(() => ctrl.abort(), 150000); // Tăng timeout lên 150 giây để AI thoải mái viết thẻ <thinking>
    const res = await fetch(SEC.url.replace(/\/+$/, '') + '/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...(SEC.key ? { Authorization: 'Bearer ' + SEC.key } : {}) },
      body: JSON.stringify({
        model: SEC.model,
        messages: [
          { role: 'system', content: sysPrompt },
          { role: 'user', content: userPrompt }
        ]
      }),
      signal: ctrl.signal
    });
    clearTimeout(to);
    if (!res.ok) return null;
    const data = await res.json();
    const content = data.choices?.[0]?.message?.content || '';
    
    console.groupCollapsed(`=== GACHA AI DEBUG: Phản hồi [${rarity}] ===`);
    console.log('[Raw Content]:\n', content);
    console.groupEnd();

    let jsonStr = content;
    const match = content.match(/```(?:json)?\s*([\s\S]*?)\s*```/);
    if (match) jsonStr = match[1];

    let jtxt = extractJson(jsonStr) || extractJson(content);
    if (jtxt) {
      const o = JSON.parse(jtxt);
      if (o && o.name && o.desc && Array.isArray(o.spriteMap)) {
        // Tự động sửa lỗi AI vẽ nhầm kích thước (cắt hoặc bù thêm '.')
        const fixedMap = [];
        const size = Math.max(32, o.spriteMap.length);
        for (let i = 0; i < size; i++) {
          let row = typeof o.spriteMap[i] === 'string' ? o.spriteMap[i] : '';
          if (row.length < size) row = row.padEnd(size, '.');
          if (row.length > size) row = row.substring(0, size);
          fixedMap.push(row);
        }
        o.spriteMap = fixedMap;
        
        // Đảm bảo có giá để hiển thị, nếu AI thiếu thì fallback
        if (typeof o.price !== 'number') {
           o.price = rarity === 'Sử thi' ? 8000 : (rarity === 'Huyền thoại' ? 20000 : (rarity === 'Hiếm' ? 2500 : (rarity === 'Thường' ? 500 : 100)));
        }
        return o;
      }
    }
  } catch(e) {}
  return null;
}

export async function generateUniqueItem({ rarity, color, sellPrice, ticketType, fusionSources }) {
  initGachaState();

  const timestamp = now();
  const randId = Math.floor(Math.random() * 10000);
  const key = `unique@${timestamp}_${randId}`;
  const spKey = `gacha_sp_${timestamp}_${randId}`;

  let finalName = `Bảo vật ✦ ${randId}`;
  let finalDesc = `Vật phẩm độc nhất [${rarity}] mang theo ma lực kỳ diệu. Có thể "Lấy ra" trong Balo để dùng trong cốt truyện!`;
  let finalSpriteMap = null;

  if (SEC.url && SEC.model) {
    for (let attempt = 1; attempt <= 3; attempt++) {
      const aiData = await generateAIUniqueItemData(rarity, fusionSources);
      if (aiData) {
        finalName = aiData.name;
        finalDesc = aiData.desc;
        if (aiData.price !== undefined) sellPrice = parseInt(aiData.price) || sellPrice;
        finalSpriteMap = aiData.spriteMap;
        break;
      }
    }
  }

  if (!finalSpriteMap) {
    finalSpriteMap = generateProcedural32x32Sprite(rarity);
  }

  registerDynamicSprite(spKey, finalSpriteMap);

  let bonusDesc = '';

  ctx.S.uniques[key] = {
    key,
    name: finalName,
    rarity,
    color,
    desc: finalDesc,
    sell: sellPrice,
    sp: spKey,
    spriteMap: finalSpriteMap
  };
  
  // Lưu trực tiếp vào balo khi tỉnh thức xong
  ctx.S.bag[key] = (ctx.S.bag[key] || 0) + 1;
  save();

  return { key, name: finalName, rarity, color, desc: finalDesc, bonusDesc, sell: sellPrice, sp: spKey };
}

// Thực hiện quay Gacha Bất đồng bộ — MIỄN PHÍ, không giới hạn, không vé/vàng
export async function executeGachaRoll(ticketType, count, updateLoadingText) {
  initGachaState();

  const rollsPlan = [];
  for (let i = 0; i < count; i++) {
    let rarity, color, price;
    if (ticketType === 'super') {
      // Siêu cường: luôn luôn Huyền thoại
      rarity = 'Huyền thoại'; color = '#ff8000'; price = 20000;
    } else if (ticketType === 'spec') {
      // Đặc biệt: Hiếm hoặc Sử thi
      const roll = Math.random() * 100;
      if (roll < 50) { rarity = 'Sử thi'; color = '#a335ee'; price = 8000; }
      else { rarity = 'Hiếm'; color = '#4a90e2'; price = 2500; }
    } else {
      // Thường: Rác hoặc Thường
      const roll = Math.random() * 100;
      if (roll < 60) { rarity = 'Thường'; color = '#b0bec5'; price = 500; }
      else { rarity = 'Rác'; color = '#9e9e9e'; price = 100; }
    }
    rollsPlan.push({ rarity, color, price });
  }

  let doneCount = 0;
  const results = await pMap(rollsPlan, async (plan) => {
    doneCount++;
    if (updateLoadingText) {
      updateLoadingText(rollsPlan.length > 1 ? ('Đang tỉnh thức bảo vật... (' + doneCount + '/' + rollsPlan.length + ')') : 'Đang tỉnh thức bảo vật...');
    }
    const item = await generateUniqueItem({ rarity: plan.rarity, color: plan.color, sellPrice: plan.price, ticketType });
    return {
      type: 'unique',
      key: item.key,
      name: item.name,
      rarity: item.rarity,
      color: item.color,
      icon: spriteSVG(item.sp, 48),
      desc: item.desc,
      spKey: item.sp
    };
  }, 3);

  save();
  return results;
}


export function openGachaModal() {
  initGachaState();

  const bodyHTML = `
    <div class="gacha-wrap" style="text-align:center; position:relative; overflow:visible; padding:4px 0;">
      <div style="font-size:12px; color:#7a5c38; margin-bottom:10px;">Quay <b>miễn phí</b>, không giới hạn — cứ bấm là ra đồ!</div>

      <!-- Máy Gachapon -->
      <div class="gacha-machine-box" style="position:relative; width:130px; height:130px; margin:0 auto 14px; display:flex; justify-content:center; align-items:center;">
        <div id="gachaMachineSprite" style="display:inline-block; transition:transform 0.15s ease;">
          ${spriteSVG('gachapon', 120)}
        </div>
      </div>

      <!-- Các Nút Quay -->
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">
        <span class="buy" id="gachaRollNorm1" style="padding:10px 0; font-size:13px; font-weight:bold; background:#6cb457; border:1px solid #4e903a; color:#fff; text-shadow:0 1px 2px rgba(0,0,0,0.3); text-align:center; border-radius:6px;">Quay Thường ×1<br><span style="font-size:10px; font-weight:normal;">(Rác/Thường)</span></span>
        <span class="buy" id="gachaRollNorm10" style="padding:10px 0; font-size:13px; font-weight:bold; background:#4e903a; border:1px solid #3c702c; color:#fff; text-shadow:0 1px 2px rgba(0,0,0,0.3); text-align:center; border-radius:6px;">Quay Thường ×10<br><span style="font-size:10px; font-weight:normal;">(Rác/Thường)</span></span>
        <span class="buy" id="gachaRollSpec1" style="padding:10px 0; font-size:13px; font-weight:bold; background:#a335ee; border:1px solid #8a2acc; color:#fff; text-shadow:0 1px 2px rgba(0,0,0,0.3); text-align:center; border-radius:6px;">Quay Đặc Biệt ×1<br><span style="font-size:10px; font-weight:normal;">(Hiếm/Sử thi)</span></span>
        <span class="buy" id="gachaRollSpec10" style="padding:10px 0; font-size:13px; font-weight:bold; background:#8a2acc; border:1px solid #6a1aa3; color:#fff; text-shadow:0 1px 2px rgba(0,0,0,0.3); text-align:center; border-radius:6px;">Quay Đặc Biệt ×10<br><span style="font-size:10px; font-weight:normal;">(Hiếm/Sử thi)</span></span>
        <span class="buy" id="gachaRollSuper1" style="padding:10px 0; font-size:13px; font-weight:bold; background:linear-gradient(90deg, #ff8000, #ff4500); border:1px solid #cc3700; color:#fff; text-shadow:0 1px 2px rgba(0,0,0,0.3); text-align:center; border-radius:6px;">Quay Siêu Cường ×1<br><span style="font-size:10px; font-weight:normal;">(Huyền thoại)</span></span>
        <span class="buy" id="gachaRollSuper10" style="padding:10px 0; font-size:13px; font-weight:bold; background:linear-gradient(90deg, #cc3700, #9e2a00); border:1px solid #731e00; color:#fff; text-shadow:0 1px 2px rgba(0,0,0,0.3); text-align:center; border-radius:6px;">Quay Siêu Cường ×10<br><span style="font-size:10px; font-weight:normal;">(Huyền thoại)</span></span>
      </div>

      <div style="margin-top:10px;">
        <span class="buy plain" id="gachaOpenBagBtn" style="padding:6px 14px; font-size:12px; display:inline-flex; align-items:center; justify-content:center; gap:5px;">${spriteSVG('bagIcon', 16)}<span>Xem Balo đồ đã quay</span></span>
      </div>

      <!-- Result Overlay Animation (Lưới kết quả) -->
      <div id="gachaResultOverlay" style="display:none; position:absolute; inset:0; background:rgba(255,255,255,0.97); z-index:20; border-radius:8px; padding:12px; flex-direction:column; justify-content:center; align-items:center; box-shadow:0 4px 20px rgba(0,0,0,0.3);">
        <div id="gachaCapsuleAnim" style="position:relative; width:48px; height:48px; margin-bottom:10px;"></div>
        <div id="gachaResultTitle" style="font-weight:bold; font-size:16px; margin:4px 0 8px; color:#5a3f78;"></div>
        <div id="gachaResultGrid" style="display:flex; flex-wrap:wrap; gap:8px; justify-content:center; max-height:220px; overflow-y:auto; margin-bottom:14px; width:100%; padding:4px;"></div>
        <span class="buy" id="gachaCloseResultBtn" style="padding:6px 20px; font-size:12px;">Xác nhận nhận thưởng</span>
      </div>

      <!-- Showcase Modal (Khoe từng món độc nhất) -->
      <div id="gachaShowcaseOverlay" style="display:none; position:absolute; inset:0; background:rgba(0,0,0,0.85); z-index:40; flex-direction:column; justify-content:center; align-items:center; border-radius:8px; padding:20px; text-align:center; overflow-y:auto;">
        <div id="gachaShowcaseCard" style="background:#fff; border-radius:12px; padding:20px; box-shadow:0 0 20px rgba(255,128,0,0.5); width:100%; max-width:300px; display:flex; flex-direction:column; position:relative; margin:auto;">
          <div id="gachaShowcaseRarity" style="font-size:12px; font-weight:bold; margin-bottom:10px; text-transform:uppercase; flex:none;"></div>
          <div id="gachaShowcaseIcon" style="margin:10px auto; display:flex; justify-content:center; flex:none;"></div>
          <div id="gachaShowcaseName" style="font-size:18px; font-weight:bold; margin:15px 0 8px; color:#3a2c22; flex:none;"></div>
          <div id="gachaShowcaseDesc" style="font-size:12px; color:#555; flex:none;"></div>
          <div style="display:flex; gap:8px; margin-top:20px; justify-content:center;">
            <span class="buy plain" id="gachaShowcaseDelBtn" style="padding:8px 18px; font-size:13px; color:#a33;">🗑️ Xoá</span>
            <span class="buy" id="gachaShowcaseNextBtn" style="padding:8px 24px; font-size:13px; background:#a335ee; border-color:#8a2acc; color:#fff;">Tiếp tục</span>
          </div>
        </div>
      </div>

      <!-- Loading Overlay (Chờ AI Tỉnh thức) -->
      <div id="gachaLoadingOverlay" style="display:none; position:absolute; inset:0; background:rgba(255,255,255,0.85); z-index:30; flex-direction:column; justify-content:center; align-items:center; border-radius:8px;">
        <div style="width:48px; height:48px; animation: gachaShake 0.5s infinite alternate;">${spriteSVG('gachapon', 48)}</div>
        <div id="gachaLoadingText" style="margin-top:12px; font-size:13px; font-weight:bold; color:#5a3f78;">Đang quay...</div>
      </div>
    </div>
  `;

  openModal('Máy Gachapon', bodyHTML);

  All.$id('gachaOpenBagBtn')?.addEventListener('click', () => openBagModal());

  const triggerGridResult = (ticketType, count, results) => {
    const overlay = All.$id('gachaResultOverlay');
    const animSlot = All.$id('gachaCapsuleAnim');
    const title = All.$id('gachaResultTitle');
    const grid = All.$id('gachaResultGrid');

    if (!overlay || !animSlot || !title || !grid) return;
    const capsuleIcon = (ticketType === 'super') ? spriteSVG('gachaCapsuleSpec', 48) : (ticketType === 'spec' ? spriteSVG('gachaCapsuleSpec', 48) : spriteSVG('gachaCapsuleNorm', 48));
    animSlot.innerHTML = capsuleIcon;
    animSlot.style.animation = 'gachaDrop 0.5s ease-out';

    const tName = ticketType === 'super' ? 'Siêu cường' : (ticketType === 'spec' ? 'Đặc biệt' : 'Thường');
    title.textContent = `Kết quả Quay ${tName} ×${count}`;

    grid.innerHTML = results.map(r => `
      <div class="gacha-item-card rarity-${r.rarity.replace(/\s+/g, '-')}" style="border:2px solid ${r.color}; border-radius:8px; padding:6px 8px; background:#fff; display:flex; flex-direction:column; align-items:center; width:100px; text-align:center; box-shadow:0 2px 6px rgba(0,0,0,0.15);">
        <div style="font-size:10px; font-weight:bold; color:${r.color}; margin-bottom:2px;">${r.rarity}</div>
        <div style="margin:2px 0;">${r.icon}</div>
        <div style="font-size:11px; font-weight:bold; color:#3a2c22; margin-top:2px;">${r.name}</div>
      </div>
    `).join('');

    overlay.style.display = 'flex';
  };

  All.$id('gachaCloseResultBtn')?.addEventListener('click', () => {
    const overlay = All.$id('gachaResultOverlay');
    if (overlay) overlay.style.display = 'none';
  });

  const doRoll = async (ticketType, count) => {
    const machine = All.$id('gachaMachineSprite');
    const loadOverlay = All.$id('gachaLoadingOverlay');
    const loadText = All.$id('gachaLoadingText');

    if (machine) machine.style.animation = 'gachaShake 0.2s ease infinite';
    if (loadOverlay) loadOverlay.style.display = 'flex';
    if (loadText) loadText.textContent = 'Đang quay...';

    const results = await executeGachaRoll(ticketType, count, (txt) => {
      if (loadText) loadText.textContent = txt;
    });

    if (machine) machine.style.animation = '';
    if (loadOverlay) loadOverlay.style.display = 'none';

    if (results) {
      let currentShowcase = 0;
      const deletedIdx = new Set();
      const showcaseOverlay = All.$id('gachaShowcaseOverlay');
      const scRarity = All.$id('gachaShowcaseRarity');
      const scIcon = All.$id('gachaShowcaseIcon');
      const scName = All.$id('gachaShowcaseName');
      const scDesc = All.$id('gachaShowcaseDesc');
      const scCard = All.$id('gachaShowcaseCard');

      const showNextUnique = () => {
        if (currentShowcase >= results.length) {
          showcaseOverlay.style.display = 'none';
          const kept = results.filter((_, i) => !deletedIdx.has(i));
          if (kept.length) triggerGridResult(ticketType, count, kept);
          else toast('Bạn đã xoá hết vật phẩm vừa quay');
          return;
        }
        const u = results[currentShowcase];
        scRarity.textContent = u.rarity;
        scRarity.style.color = u.color;
        scCard.style.boxShadow = `0 0 30px ${u.color}80`;
        scIcon.innerHTML = spriteSVG(u.spKey, 64);
        scName.textContent = u.name;
        scDesc.textContent = u.desc;
        showcaseOverlay.style.display = 'flex';
        showcaseOverlay.scrollTop = 0;

        scCard.style.animation = 'none';
        void scCard.offsetWidth;
        scCard.style.animation = 'gachaDrop 0.5s ease-out';
      };

      All.$id('gachaShowcaseNextBtn').onclick = () => {
        currentShowcase++;
        showNextUnique();
      };

      All.$id('gachaShowcaseDelBtn').onclick = () => {
        const u = results[currentShowcase];
        if (u.key && ctx.S.uniques[u.key]) {
          delete ctx.S.bag[u.key];
          delete ctx.S.uniques[u.key];
          save();
        }
        deletedIdx.add(currentShowcase);
        toast('Đã xoá: ' + u.name);
        currentShowcase++;
        showNextUnique();
      };

      showNextUnique();
    }
  };

  All.$id('gachaRollNorm1')?.addEventListener('click', () => doRoll('norm', 1));
  All.$id('gachaRollNorm10')?.addEventListener('click', () => doRoll('norm', 10));
  All.$id('gachaRollSpec1')?.addEventListener('click', () => doRoll('spec', 1));
  All.$id('gachaRollSpec10')?.addEventListener('click', () => doRoll('spec', 10));
  All.$id('gachaRollSuper1')?.addEventListener('click', () => doRoll('super', 1));
  All.$id('gachaRollSuper10')?.addEventListener('click', () => doRoll('super', 10));
}

/* ---------- Balo: xem & lấy ra vật phẩm đã quay ---------- */
let bagMode = 'normal'; // 'normal' | 'fuse' | 'del'
let fuseSelected = []; // mảng key đã chọn để dung hợp
let delSelected = [];  // mảng key đã chọn để xoá hàng loạt
let bagFilterRarity = 'all'; // 'all' | tên bậc
let bagSortMode = 'new'; // 'new' | 'rarity'

function keyTimestamp(k) {
  const n = parseInt(String(k).split('@')[1], 10);
  return isNaN(n) ? 0 : n;
}

export function openBagModal() {
  initGachaState();
  bagMode = 'normal'; fuseSelected = []; delSelected = [];
  renderBagModal();
}

function renderBagModal() {
  let keys = Object.keys(ctx.S.bag || {}).filter(k => k.startsWith('unique@') && ctx.S.bag[k] > 0);
  const allCount = keys.length;

  if (bagFilterRarity !== 'all') {
    keys = keys.filter(k => ctx.S.uniques[k] && ctx.S.uniques[k].rarity === bagFilterRarity);
  }
  keys.sort((a, b) => {
    if (bagSortMode === 'rarity') {
      const ra = RARITY_ORDER.indexOf((ctx.S.uniques[a] || {}).rarity);
      const rb = RARITY_ORDER.indexOf((ctx.S.uniques[b] || {}).rarity);
      if (rb !== ra) return rb - ra; // hiếm nhất trước
      return keyTimestamp(b) - keyTimestamp(a);
    }
    return keyTimestamp(b) - keyTimestamp(a); // mới nhất trước
  });

  const filterBarHTML = (bagMode === 'normal' && allCount > 0) ? `
    <div style="display:flex;gap:6px;margin-bottom:10px;flex-wrap:wrap;align-items:center;">
      <select class="inp" id="bagFilterSel" style="flex:none;width:auto;padding:4px 6px;font-size:12px;">
        <option value="all" ${bagFilterRarity === 'all' ? 'selected' : ''}>Tất cả bậc</option>
        ${RARITY_ORDER.map(r => `<option value="${r}" ${bagFilterRarity === r ? 'selected' : ''}>${r}</option>`).join('')}
      </select>
      <select class="inp" id="bagSortSel" style="flex:none;width:auto;padding:4px 6px;font-size:12px;">
        <option value="new" ${bagSortMode === 'new' ? 'selected' : ''}>Mới nhất</option>
        <option value="rarity" ${bagSortMode === 'rarity' ? 'selected' : ''}>Hiếm nhất</option>
      </select>
      <span style="font-size:11px;color:#a3763d;">${keys.length}/${allCount} món</span>
    </div>` : '';

  const modeNote = bagMode === 'fuse'
    ? `<div class="note" style="margin-bottom:8px;background:rgba(163,53,238,0.1);border-color:#a335ee">🔮 <b>Chế độ Dung Hợp</b>: chọn 2–3 vật phẩm để gộp thành 1 vật phẩm mới (phẩm chất trung bình, hiệu ứng pha trộn). Các vật phẩm đã chọn sẽ <b>bị tiêu hao</b> (mất 1 cái mỗi loại).</div>`
    : bagMode === 'del'
    ? `<div class="note" style="margin-bottom:8px;background:rgba(170,51,51,0.08);border-color:#a33">🗑️ <b>Chế độ Xoá nhiều</b>: tick chọn các vật phẩm muốn xoá (xoá <b>toàn bộ số lượng</b> món đó khỏi Balo, không dùng lại được), rồi bấm Xoá.</div>`
    : '';

  const itemsHTML = keys.length ? keys.map(k => {
    const it = ctx.S.uniques[k];
    if (!it) return '';
    const have = ctx.S.bag[k];
    const fuseChecked = fuseSelected.includes(k);
    const delChecked = delSelected.includes(k);
    return `
      <div class="item" data-rowkey="${k}" style="border-left:3px solid ${it.color};${bagMode === 'fuse' || bagMode === 'del' ? 'cursor:pointer;' : ''}${(bagMode === 'fuse' && fuseChecked) || (bagMode === 'del' && delChecked) ? 'background:#f3e6c8;outline:2px solid #c9a273;' : ''}">
        ${bagMode === 'fuse' ? `<input type="checkbox" data-fusekey="${k}" ${fuseChecked ? 'checked' : ''} style="width:18px;height:18px;flex:none;pointer-events:none;">` : ''}
        ${bagMode === 'del' ? `<input type="checkbox" data-delkeycb="${k}" ${delChecked ? 'checked' : ''} style="width:18px;height:18px;flex:none;pointer-events:none;">` : ''}
        <span class="icon">${spriteSVG(it.sp, 32)}</span>
        <span class="info">
          <div class="name" style="color:${it.color};">${it.name} <span style="font-size:10px; color:#999;">×${have}</span></div>
          <div class="meta">[${it.rarity}] ${it.desc}</div>
        </span>
        ${bagMode === 'normal' ? `
          <span class="buy" data-takeoutkey="${k}" style="font-size:11px;padding:4px 8px;">Lấy ra</span>
          <span class="buy plain" data-delkey="${k}" style="font-size:11px;padding:4px 8px;color:#a33;">Xoá</span>
        ` : ''}
      </div>`;
  }).join('') : `<div class="note" style="text-align:center; padding:20px 0;">Balo trống — đi quay Gacha lấy đồ thôi!</div>`;

  const footerHTML = bagMode === 'fuse'
    ? `<div style="display:flex;gap:8px;margin-top:10px;">
        <span class="buy" id="fuseGoBtn" style="background:linear-gradient(90deg,#a335ee,#6a1aa3);border-color:#6a1aa3;">🔮 Dung hợp (${fuseSelected.length} món)</span>
        <span class="buy plain" id="fuseCancelBtn">Huỷ</span>
      </div>`
    : bagMode === 'del'
    ? `<div style="display:flex;gap:8px;margin-top:10px;flex-wrap:wrap;">
        <span class="buy plain" id="delAllToggleBtn" style="font-size:11px;">Chọn tất cả / Bỏ chọn</span>
        <span class="buy" id="delGoMultiBtn" style="background:#c94a4a;border-color:#a33;color:#fff;">🗑️ Xoá đã chọn (${delSelected.length})</span>
        <span class="buy plain" id="delCancelBtn">Huỷ</span>
      </div>`
    : (keys.length ? `<div style="margin-top:10px;display:flex;gap:8px;flex-wrap:wrap;">
        <span class="buy plain" id="fuseModeBtn">🔮 Dung hợp vật phẩm</span>
        <span class="buy plain" id="delModeBtn" style="color:#a33;">🗑️ Xoá nhiều</span>
      </div>` : '');

  openModal('Balo · Vật phẩm Gacha', `${modeNote}${filterBarHTML}<div class="items">${itemsHTML}</div>${footerHTML}`);

  if (bagMode === 'normal') {
    const filterSel = All.$id('bagFilterSel');
    if (filterSel) filterSel.addEventListener('change', (e) => { bagFilterRarity = e.target.value; renderBagModal(); });
    const sortSel = All.$id('bagSortSel');
    if (sortSel) sortSel.addEventListener('change', (e) => { bagSortMode = e.target.value; renderBagModal(); });
    All.$id('mbody').querySelectorAll('[data-takeoutkey]').forEach(b => {
      b.addEventListener('click', () => openTakeoutConfirm(b.dataset.takeoutkey));
    });
    All.$id('mbody').querySelectorAll('[data-delkey]').forEach(b => {
      b.addEventListener('click', () => openDeleteConfirm(b.dataset.delkey));
    });
    const fuseModeBtn = All.$id('fuseModeBtn');
    if (fuseModeBtn) fuseModeBtn.addEventListener('click', () => { bagMode = 'fuse'; fuseSelected = []; renderBagModal(); });
    const delModeBtn = All.$id('delModeBtn');
    if (delModeBtn) delModeBtn.addEventListener('click', () => { bagMode = 'del'; delSelected = []; renderBagModal(); });
  } else if (bagMode === 'fuse') {
    All.$id('mbody').querySelectorAll('[data-rowkey]').forEach(row => {
      row.addEventListener('click', () => {
        const k = row.dataset.rowkey;
        if (fuseSelected.includes(k)) {
          fuseSelected = fuseSelected.filter(x => x !== k);
        } else {
          if (fuseSelected.length >= 3) { toast('Chỉ chọn tối đa 3 món để dung hợp'); return; }
          fuseSelected.push(k);
        }
        renderBagModal();
      });
    });
    All.$id('fuseCancelBtn').addEventListener('click', () => { bagMode = 'normal'; fuseSelected = []; renderBagModal(); });
    All.$id('fuseGoBtn').addEventListener('click', doFusion);
  } else if (bagMode === 'del') {
    All.$id('mbody').querySelectorAll('[data-rowkey]').forEach(row => {
      row.addEventListener('click', () => {
        const k = row.dataset.rowkey;
        if (delSelected.includes(k)) { delSelected = delSelected.filter(x => x !== k); }
        else { delSelected.push(k); }
        renderBagModal();
      });
    });
    All.$id('delAllToggleBtn').addEventListener('click', () => {
      delSelected = delSelected.length < keys.length ? [...keys] : [];
      renderBagModal();
    });
    All.$id('delCancelBtn').addEventListener('click', () => { bagMode = 'normal'; delSelected = []; renderBagModal(); });
    All.$id('delGoMultiBtn').addEventListener('click', doBulkDelete);
  }
}

function doBulkDelete() {
  if (!delSelected.length) { toast('Chưa chọn vật phẩm nào'); return; }
  openModal('Xoá ' + delSelected.length + ' loại vật phẩm', `
    <div class="note" style="margin-bottom:8px">Xoá vĩnh viễn toàn bộ ${delSelected.length} loại vật phẩm đã chọn khỏi Balo. Không thể hoàn tác!</div>
    <div style="display:flex;gap:8px;">
      <span class="buy plain" id="bulkDelBack">Quay lại</span>
      <span class="buy" id="bulkDelConfirm" style="background:#c94a4a;border-color:#a33;color:#fff;">Xác nhận xoá hết</span>
    </div>`);
  All.$id('bulkDelBack').addEventListener('click', () => { bagMode = 'del'; renderBagModal(); });
  All.$id('bulkDelConfirm').addEventListener('click', () => {
    const n = delSelected.length;
    delSelected.forEach(k => { delete ctx.S.bag[k]; delete ctx.S.uniques[k]; });
    save();
    bagMode = 'normal'; delSelected = [];
    toast('Đã xoá ' + n + ' loại vật phẩm');
    openBagModal();
  });
}

function openDeleteConfirm(key) {
  const it = ctx.S.uniques[key];
  const have = ctx.S.bag[key] || 0;
  if (!it || have <= 0) return;
  openModal('Xoá vật phẩm · ' + it.name, `
    <div class="note" style="margin-bottom:8px">Xoá bỏ vĩnh viễn khỏi Balo (không dùng trong cốt truyện, không lấy lại được). Dùng khi bạn quay trúng đồ không cần dùng tới.</div>
    <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
      <input class="inp" id="delN" type="number" min="1" max="${have}" value="${have}" style="width:90px">
      <span style="font-size:12px;color:#7a5c38">/ đang có ${have}</span>
      <span class="buy plain" id="delGo" style="color:#a33;">Xác nhận xoá</span>
    </div>`);
  All.$id('delGo').addEventListener('click', () => {
    let n = parseInt(All.$id('delN').value, 10) || 1;
    n = Math.max(1, Math.min(have, n));
    ctx.S.bag[key] = have - n;
    if (ctx.S.bag[key] <= 0) { delete ctx.S.bag[key]; delete ctx.S.uniques[key]; }
    save();
    toast('Đã xoá ' + n + ' ' + it.name);
    openBagModal();
  });
}

async function doFusion() {
  if (fuseSelected.length < 2) { toast('Cần chọn ít nhất 2 vật phẩm'); return; }
  const sources = fuseSelected.map(k => ctx.S.uniques[k]).filter(Boolean);
  if (sources.length !== fuseSelected.length) { toast('Có vật phẩm không hợp lệ, thử lại'); bagMode = 'normal'; fuseSelected = []; openBagModal(); return; }

  // Tính phẩm chất trung bình (làm tròn)
  const idxAvg = Math.round(sources.reduce((s, it) => s + RARITY_ORDER.indexOf(it.rarity), 0) / sources.length);
  const rarity = RARITY_ORDER[Math.max(0, Math.min(RARITY_ORDER.length - 1, idxAvg))];
  const color = RARITY_COLOR[rarity];
  const price = RARITY_PRICE[rarity];

  const mbody = All.$id('mbody');
  const fuseKeys = [...fuseSelected];
  if (mbody) mbody.innerHTML = `<div style="text-align:center;padding:30px 0;">
    <div style="width:48px;height:48px;margin:0 auto;animation:gachaShake 0.5s infinite alternate;">${spriteSVG('gachapon', 48)}</div>
    <div style="margin-top:12px;font-size:13px;font-weight:bold;color:#5a3f78;">Đang dung hợp...</div>
  </div>`;

  const item = await generateUniqueItem({ rarity, color, sellPrice: price, ticketType: 'fuse', fusionSources: sources.map(it => ({ name: it.name, desc: it.desc, rarity: it.rarity })) });

  // Tiêu hao nguyên liệu (mỗi loại trừ 1)
  fuseKeys.forEach(k => {
    if (!ctx.S.bag[k]) return;
    ctx.S.bag[k] -= 1;
    if (ctx.S.bag[k] <= 0) delete ctx.S.bag[k];
  });
  save();

  bagMode = 'normal'; fuseSelected = [];

  openModal('Dung hợp thành công!', `
    <div style="text-align:center;">
      <div style="font-size:12px;font-weight:bold;color:${item.color};text-transform:uppercase;">${item.rarity}</div>
      <div style="margin:10px auto;display:flex;justify-content:center;">${spriteSVG(item.sp, 64)}</div>
      <div style="font-size:18px;font-weight:bold;margin:8px 0;color:#3a2c22;">${item.name}</div>
      <div style="font-size:12px;color:#555;text-align:left;padding:0 8px;">${item.desc}</div>
      <span class="buy" id="fuseDoneBtn" style="margin-top:16px;">Xong</span>
    </div>`);
  All.$id('fuseDoneBtn').addEventListener('click', () => openBagModal());
}

function openTakeoutConfirm(key) {
  const it = ctx.S.uniques[key];
  const have = ctx.S.bag[key] || 0;
  if (!it || have <= 0) return;
  openModal('Lấy ra · ' + it.name, `
    <div class="note" style="margin-bottom:8px">Lấy ra = mang khỏi balo để dùng trong cốt truyện. <b style="color:var(--accFg)">Không thể bỏ lại balo sau khi lấy ra!</b>${(!CS.link || !CS.story) ? '<br><br>⚠️ Bạn chưa bật <b>"Liên kết thẻ nhân vật"</b> + <b>"Ảnh hưởng cốt truyện"</b> trong Cài đặt, nên AI sẽ <b>không biết</b> bạn vừa lấy vật phẩm này ra.' : ''}</div>
    <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
      <input class="inp" id="takeN" type="number" min="1" max="${have}" value="1" style="width:90px">
      <span style="font-size:12px;color:#7a5c38">/ đang có ${have}</span>
      <span class="buy" id="takeGo">Xác nhận lấy ra</span>
    </div>`);
  All.$id('takeGo').addEventListener('click', () => {
    let n = parseInt(All.$id('takeN').value, 10) || 1;
    n = Math.max(1, Math.min(have, n));
    ctx.S.bag[key] = have - n;
    if (ctx.S.bag[key] <= 0) delete ctx.S.bag[key];
    const d = mutDescOf(key);
    const txt = n + ' ' + bagName(key) + (d ? ' (' + d + ')' : '');
    setTakeoutNote(((takeoutNote || []).filter(t => now() < t.until))
      .concat({ txt, until: now() + 10 * 60 * 1000 }));
    pushTakenLog({ txt, key, name: it.name, desc: it.desc, rarity: it.rarity, color: it.color, sp: it.sp, n, at: now() });
    save();
    updateInjection();
    toast('Đã lấy ra ' + n + ' ' + it.name);
    openBagModal();
  });
}

export function openTakenLogModal() {
  loadTakenLog();
  const list = takenLog || [];
  const html = list.length ? list.map((e, idx) => {
    const canRestore = e.key && ctx.S.uniques[e.key];
    return `
    <div class="item" style="align-items:flex-start;border-left:3px solid ${e.color || '#b0bec5'};">
      <span class="icon">${e.sp ? spriteSVG(e.sp, 28) : ''}</span>
      <span class="info">
        <div class="name" style="color:${e.color || '#7a5c38'};">${e.name || e.txt} <span style="font-size:10px;color:#999;">×${e.n || 1}</span></div>
        ${e.desc ? `<div class="meta">${e.desc}</div>` : ''}
        <div class="meta" style="opacity:.7;font-size:10px;">${new Date(e.at || 0).toLocaleString('vi-VN')}</div>
        ${!e.key ? `<div class="meta" style="opacity:.6;font-size:10px;font-style:italic;">(Log cũ từ trước bản cập nhật — không phục hồi được, chỉ xoá khỏi danh sách)</div>` : (!canRestore ? `<div class="meta" style="opacity:.6;font-size:10px;font-style:italic;">(Vật phẩm đã bị xoá vĩnh viễn khỏi Balo trước đó)</div>` : '')}
      </span>
      <span style="display:flex;flex-direction:column;gap:4px;flex:none;">
        ${canRestore ? `<span class="buy plain" data-putbackidx="${idx}" style="font-size:11px;padding:4px 8px;">↩ Lấy về Balo</span>` : ''}
        <span class="buy plain" data-removelogidx="${idx}" style="font-size:11px;padding:4px 8px;color:#a33;">Xoá khỏi lịch sử</span>
      </span>
    </div>`;
  }).join('') : `<div class="note" style="text-align:center;padding:20px 0;">Chưa lấy vật phẩm nào ra cho thẻ nhân vật này.</div>`;
  openModal('Đã lấy ra dùng · ' + charName(), `<div class="note" style="margin-bottom:8px">Danh sách vật phẩm đã "Lấy ra" cho thẻ nhân vật hiện tại. Nếu không muốn nhân vật dùng nữa, bấm "Lấy về Balo" để thu hồi.</div><div class="items">${html}</div>`);
  All.$id('mbody').querySelectorAll('[data-putbackidx]').forEach(b => {
    b.addEventListener('click', () => {
      const idx = parseInt(b.dataset.putbackidx, 10);
      const entry = takenLog[idx];
      if (!entry || !entry.key) return;
      if (!ctx.S.uniques[entry.key]) {
        toast('Vật phẩm này đã bị xoá vĩnh viễn, không thể lấy về');
        return;
      }
      ctx.S.bag[entry.key] = (ctx.S.bag[entry.key] || 0) + (entry.n || 1);
      save();
      removeTakenLogAt(idx);
      toast('Đã lấy về Balo: ' + (entry.name || entry.txt));
      openTakenLogModal();
    });
  });
  All.$id('mbody').querySelectorAll('[data-removelogidx]').forEach(b => {
    b.addEventListener('click', () => {
      const idx = parseInt(b.dataset.removelogidx, 10);
      removeTakenLogAt(idx);
      openTakenLogModal();
    });
  });
}
