
import { ctx, extensionName, NS } from './store.js';
import * as All from './all.js';
import { pendingPick, setPendingPick } from './render.js';
import { toast } from './witch.js';
import { save, loadState } from './state.js';
import { esc, SEC, CS, clampN, saveSec, openSandbox, saveCharState, fetchModelList, testSecApi } from './events.js';
import { applyTheme, sh } from './ui.js';
import { openGachaModal } from './gacha.js';

/* ---------- Bảng ---------- */
export function openModal(title, bodyHTML, keepBetTable) {
  if (!keepBetTable && All.cashOut) All.cashOut();                     // Mở bảng khác = rời bàn cược, rút tiền về trước đã
  All.$id('mtitle-text').textContent = title;
  All.$id('mbody').innerHTML = bodyHTML;
  All.$id('modal').classList.add('open');
}
export function closeModal() { 
  if (All.cashOut) All.cashOut();                                        // Đóng bảng = tự động rút, không bao giờ mất tiền vì lỡ tay
  All.$id('modal').classList.remove('open'); 
  All.$id('mbody').innerHTML = ''; // Dọn dẹp rác DOM và event listeners bên trong
  setPendingPick(null); 
  bagSellMode = false; 
}   // Tự kiểm: đóng cửa sổ thì thoát chế độ tick chọn

export let shopTab = 'seed';
export let bagTab = 'crop';
export let bagSellMode = false, bagSel = {};              // Bán một chạm: chế độ tick chọn (mặc định chọn hết)
export let gachaSortMode = 'default';
export function openPanel(kind) {
  if (kind === 'gacha') {
    return openGachaModal();
  } else if (kind === 'bag') {
    return All.openBagModal();
  } else {
    openModal('Cài đặt', `
      <div style="font-size:11px; color:#a3763d; text-align:center; margin-bottom: 12px; font-weight: bold; background: rgba(0,0,0,0.05); padding: 4px; border-radius: 4px; user-select: text;">ID Người Chơi: ${ctx.S.playerId}</div>
      <div class="shead" style="margin-top:0">Tên người chơi (để giao dịch)</div>
      <div style="display:flex;gap:8px;margin-bottom:12px;">
        <input class="inp" id="cfgUsername" placeholder="Nhập tên của bạn..." value="${esc(ctx.S.username || '')}" style="flex:1;">
        <span class="buy" id="cfgSaveUsername">Lưu tên</span>
      </div>
      <div class="shead">Kết nối với cốt truyện</div>
      <label style="display:flex;align-items:center;gap:6px;font-size:12px;color:#7a5c38;font-weight:bold;cursor:pointer">
        <input type="checkbox" id="cfgCsLink" ${CS.link ? 'checked' : ''}> Liên kết thẻ nhân vật (AI tạo vật phẩm hợp bối cảnh thẻ nhân vật/thế giới quan hiện tại)
      </label>
      <label style="display:flex;align-items:center;gap:6px;font-size:12px;color:#7a5c38;font-weight:bold;cursor:pointer;margin-top:6px${CS.link ? '' : ';opacity:.4;pointer-events:none'}" id="cfgCsStoryRow">
        <input type="checkbox" id="cfgCsStory" ${CS.story ? 'checked' : ''}> Ảnh hưởng cốt truyện (báo cho AI biết khi bạn "Lấy ra" vật phẩm trong Balo, để AI đưa vào cốt truyện)
      </label>
      <div style="display:flex;flex-direction:column;gap:6px;margin-top:8px;padding:8px;background:rgba(0,0,0,0.03);border-radius:6px;${CS.link ? '' : 'opacity:.4;pointer-events:none'}" id="cfgCsSourcesRow">
        <div style="font-size:11px;color:#a3763d;font-weight:bold;">AI tạo vật phẩm dựa vào (nguồn dữ liệu):</div>
        <label style="display:flex;align-items:center;gap:6px;font-size:12px;color:#7a5c38;font-weight:bold;cursor:pointer">
          <input type="checkbox" id="cfgUseLorebook" ${CS.useLorebook ? 'checked' : ''}> Lorebook / World Info của thẻ nhân vật
        </label>
        <label style="display:flex;align-items:center;gap:6px;font-size:12px;color:#7a5c38;font-weight:bold;cursor:pointer">
          <input type="checkbox" id="cfgUseChatHistory" ${CS.useChatHistory ? 'checked' : ''}> Lịch sử chat gần đây
        </label>
      </div>
      <div class="shead">Chủ đề giao diện</div>
      <div class="picker" style="margin-bottom:4px">
        <span class="pick${ctx.S.theme !== 'sky' ? ' active' : ''}" data-settheme="sakura">🌸 Hồng anh đào</span>
        <span class="pick${ctx.S.theme === 'sky' ? ' active' : ''}" data-settheme="sky">☁️ Trời quang</span>
      </div>
      <div class="shead">API phụ (dùng để AI tạo vật phẩm Gacha)</div>
      <div style="display:flex;flex-direction:column;gap:6px">
        <input class="inp" id="secUrl" placeholder="Địa chỉ API, ví dụ https://xx.com/v1" value="${esc(SEC.url)}">
        <input class="inp" id="secKey" type="password" placeholder="API Key (chỉ lưu trong trình duyệt máy này, không vào save)" value="${esc(SEC.key)}">
        <input class="inp" id="secModel" placeholder="Tên model, ví dụ gemini-2.5-flash" value="${esc(SEC.model)}">
        <div class="mdrop" id="modelDrop" style="display:none"></div>
        <label style="display:flex;align-items:center;gap:6px;font-size:12px;color:#7a5c38;font-weight:bold;cursor:pointer">
          <input type="checkbox" id="secAuto" ${SEC.autoReset ? 'checked' : ''}> Tự động đặt lại sự kiện, mỗi
          <input class="inp" id="secHours" type="number" min="1" max="24" value="${SEC.resetHours}" style="width:60px;padding:3px 6px"> giờ một lần (1~24; tắt thì sự kiện giữ nguyên, chỉ gieo lại thủ công)
        </label>
        <label style="display:flex;align-items:center;gap:6px;font-size:12px;color:#7a5c38;font-weight:bold;cursor:pointer;margin-top:2px">
          Giới hạn chữ Lorebook gửi cho AI:
          <input class="inp" id="secWbLimit" type="number" min="0" max="1000000" value="${SEC.wbLimit !== undefined ? SEC.wbLimit : 20000}" style="width:80px;padding:3px 6px"> (0 = Không cắt, gửi toàn bộ)
        </label>
        <label style="display:flex;align-items:center;gap:6px;font-size:12px;color:#7a5c38;font-weight:bold;cursor:pointer;margin-top:10px">
          Giới hạn tin nhắn Chat gửi lên Context:
          <input class="inp" id="secChatDepth" type="number" min="0" max="200" value="${SEC.chatDepth !== undefined ? SEC.chatDepth : 15}" style="width:80px;padding:3px 6px"> (0 = Tắt)
        </label>
        <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:6px">
          <span class="buy" id="secSave">Lưu cấu hình</span>
          <span class="buy plain" id="secModels">Lấy model</span>
          <span class="buy plain" id="secTest">Kiểm tra kết nối</span>
        </div>
      </div>
      <div class="shead">Nguồn gốc máy Gachapon (tuỳ chỉnh, chỉ lưu ở thẻ nhân vật hiện tại)</div>
      <div class="note" style="margin-bottom:6px">Cho AI biết máy Gachapon này từ đâu ra, để nhân vật/cốt truyện nhắc tới nó hợp lý. Ví dụ: "Một cỗ máy cổ xưa trôi dạt vào làng từ ngoài biển", "Món quà bí ẩn của thương nhân lang thang"...</div>
      <textarea class="inp" id="csOrigin" placeholder="Ví dụ: Cỗ máy này là di vật của một vị thần buôn bán đã biến mất từ lâu.">${esc(CS.gachaOrigin)}</textarea>

      <div class="shead">Vật phẩm Gacha mong muốn (để trống = ngẫu nhiên hoàn toàn)</div>
      <div class="note" style="margin-bottom:6px">Ghi chủ đề/loại đồ bạn muốn quay ra, AI sẽ chỉ tạo vật phẩm thuộc chủ đề này (độ hiếm vẫn ngẫu nhiên theo loại vé quay). Ví dụ: "dép thỏ" → ra các loại dép thỏ khác nhau ngẫu nhiên.</div>
      <input class="inp" id="csWant" placeholder="Ví dụ: dép thỏ" value="${esc(CS.wantItem)}">
      <div class="note" style="margin:6px 0">Thuộc tính/loại đi kèm (tuỳ chọn) — ví dụ: mềm mại, nhanh nhẹn, phát sáng...</div>
      <input class="inp" id="csWantAttr" placeholder="Ví dụ: mềm mại, nhanh nhẹn" value="${esc(CS.wantAttr)}">
      <div class="note" style="margin:6px 0">Hiệu ứng/công dụng mong muốn (tuỳ chọn) — mô tả vật phẩm nên có tác dụng/hiệu ứng gì, AI sẽ dựa vào đó thiết kế công dụng cho hợp</div>
      <input class="inp" id="csWantDesc" placeholder="Ví dụ: giúp xoa dịu tâm trạng, mang lại cảm giác an toàn khi ôm" value="${esc(CS.wantDesc)}">

      <div style="display:flex;gap:8px;margin-top:6px"><span class="buy" id="csPromptSave">Lưu (chỉ thẻ này)</span></div>
      <div class="shead">Đã lấy ra dùng (thẻ nhân vật hiện tại)</div>
      <div style="display:flex;gap:8px;margin-top:6px"><span class="buy plain" id="openTakenLogBtn">Xem lịch sử đã lấy ra</span></div>
      <div class="shead">Công cụ dành cho Giám đốc Đồ hoạ / Dev</div>
      <div style="display:flex;gap:8px;margin-top:6px;align-items:center;flex-wrap:wrap;">
        <span class="buy plain" id="openSandboxBtn">🎨 Mở Xưởng Chế Tác AI</span>
      </div>
      <div class="shead">Thông tin & Tác giả</div>
      <div style="display:flex;gap:8px;margin-top:6px">
        <span class="buy plain" id="openCreditBtn">📜 Xem Credit (Lời cảm ơn)</span>
      </div>
      <div class="note" style="margin:12px 0 8px">
        <b>Hướng dẫn chơi</b><br>· Bật "Liên kết thẻ nhân vật": AI sẽ dựa theo thẻ nhân vật/thế giới quan hiện tại để tạo vật phẩm Gacha phù hợp bối cảnh<br>
        · Bật thêm "Ảnh hưởng cốt truyện": khi bạn "Lấy ra" vật phẩm trong Balo, AI sẽ được báo và đưa vào cốt truyện đang chat<br>
        · Save nằm trong chính SillyTavern, cập nhật phiên bản cứ nhập script mới, save không mất; API Key phụ chỉ nằm trong trình duyệt máy này<br>
        · Các bản SillyTavern khác nhau <b>không dùng chung</b> (cài thêm một bản trên điện thoại = một dữ liệu khác); trước khi cài lại SillyTavern nhớ sao lưu thư mục data</div>
      <span class="buy" id="resetSave">Đặt lại save (cẩn thận, bấm hai lần)</span>`);
    All.$id('cfgCsLink').addEventListener('change', (e) => {
      // @ts-ignore
      CS.link = e.target.checked;
      if (!CS.link) CS.story = false;
      saveCharState();
      const row = All.$id('cfgCsStoryRow');
      if (row) { row.style.opacity = CS.link ? '' : '.4'; row.style.pointerEvents = CS.link ? '' : 'none'; }
      const storyBox = All.$id('cfgCsStory');
      if (storyBox) storyBox.checked = CS.story;
      const srcRow = All.$id('cfgCsSourcesRow');
      if (srcRow) { srcRow.style.opacity = CS.link ? '' : '.4'; srcRow.style.pointerEvents = CS.link ? '' : 'none'; }
      All.updateInjection();
      toast(CS.link ? 'Đã bật liên kết thẻ nhân vật' : 'Đã tắt liên kết thẻ nhân vật');
    });
    All.$id('cfgUseLorebook').addEventListener('change', (e) => {
      // @ts-ignore
      CS.useLorebook = e.target.checked;
      saveCharState();
      toast(CS.useLorebook ? 'Đã bật dùng Lorebook' : 'Đã tắt dùng Lorebook');
    });
    All.$id('cfgUseChatHistory').addEventListener('change', (e) => {
      // @ts-ignore
      CS.useChatHistory = e.target.checked;
      saveCharState();
      toast(CS.useChatHistory ? 'Đã bật dùng lịch sử chat' : 'Đã tắt dùng lịch sử chat');
    });
    All.$id('cfgCsStory').addEventListener('change', (e) => {
      // @ts-ignore
      CS.story = e.target.checked;
      saveCharState();
      All.updateInjection();
      toast(CS.story ? 'AI sẽ biết khi bạn lấy vật phẩm ra dùng trong cốt truyện' : 'Đã tắt ảnh hưởng cốt truyện');
    });
    All.$id('secSave').addEventListener('click', () => {
      Object.assign(SEC, {
        // @ts-ignore
        url: All.$id('secUrl').value.trim(), key: All.$id('secKey').value.trim(), model: All.$id('secModel').value.trim(),
        // @ts-ignore
        autoReset: All.$id('secAuto').checked, resetHours: clampN(All.$id('secHours').value, 1, 24, 4),
        // @ts-ignore
        wbLimit: parseInt(All.$id('secWbLimit').value, 10) || 0,
        chatDepth: parseInt(All.$id('secChatDepth').value, 10) || 0,
      });
      saveSec(); toast('Đã lưu cấu hình API phụ');
    });
    All.$id('secTest').addEventListener('click', () => testSecApi());
    All.$id('secModels').addEventListener('click', () => fetchModelList());
    All.$id('cfgSaveUsername')?.addEventListener('click', () => {
      const uname = All.$id('cfgUsername').value.trim();
      if (!uname) return toast('Tên không được để trống!');
      ctx.S.username = uname;
      save();
      toast('Đã lưu tên người chơi');
    });
    if (All.$id('openSandboxBtn')) All.$id('openSandboxBtn').addEventListener('click', openSandbox);
    if (All.$id('openCreditBtn')) {
      All.$id('openCreditBtn').addEventListener('click', () => {
        openModal('Credit & Lời cảm ơn', `
          <div style="line-height:1.6; color:#4a3219; font-size:13px; text-align:left; padding:8px;">
            <b style="color:#a83a52;">Tên sản phẩm gốc (原真名):</b><br>
            【谁要在酒馆当农民啊！v1.1】<br><br>
            
            <b style="color:#a83a52;">Tên tiếng Việt (越南语译名):</b><br>
            【Ai thèm làm nông dân trong tửu quán chứ! v1.1】 Script Trợ thủ Tửu quán<br><br>

            <b style="color:#a83a52;">Tác giả gốc (原作者):</b><br>
            满身猫毛՞••՞ - Tranh thủ lén meo<br><br>

            <b style="color:#a83a52;">Mod và update game hiện tại credit từ:</b><br>
            Dev: Kaiz
          </div>
          <div style="margin-top:16px;text-align:center;">
            <span class="buy plain" id="closeCreditBtn">Quay lại Cài đặt</span>
          </div>
        `);
        All.$id('closeCreditBtn')?.addEventListener('click', () => openPanel('cfg'));
      });
    }
    All.$id('mbody').querySelectorAll('[data-settheme]').forEach(b => b.addEventListener('click', () => {
      // @ts-ignore
      ctx.S.theme = b.dataset.settheme; save(); applyTheme(); openPanel('cfg');
      toast(ctx.S.theme === 'sky' ? 'Đổi sang giao diện trời quang~' : 'Về lại giao diện hồng anh đào~');
    }));
    
    const cfgDragPet = All.$id('cfgDragPet');
    if (cfgDragPet) cfgDragPet.addEventListener('change', () => {
      ctx.S.dragPet = cfgDragPet.checked;
      save();
      const mas = All.$id('mascots');
      if (mas) mas.dataset.drag = ctx.S.dragPet ? '1' : '0';
      toast(ctx.S.dragPet ? 'Đã bật tính năng kéo thả thú cưng' : 'Đã tắt tính năng kéo thả thú cưng');
    });

    All.$id('csPromptSave').addEventListener('click', () => {
      // @ts-ignore
      CS.gachaOrigin = All.$id('csOrigin').value.slice(0, 2000);
      // @ts-ignore
      CS.wantItem = All.$id('csWant').value.slice(0, 300);
      // @ts-ignore
      CS.wantAttr = All.$id('csWantAttr').value.slice(0, 300);
      // @ts-ignore
      CS.wantDesc = All.$id('csWantDesc').value.slice(0, 500);
      saveCharState(); toast('Đã lưu vào thẻ nhân vật hiện tại');
    });
    All.$id('openTakenLogBtn').addEventListener('click', () => All.openTakenLogModal());
    let armed = false;
    All.$id('resetSave').addEventListener('click', () => {
      if (!armed) { armed = true; All.$id('resetSave').textContent = 'Bấm lần nữa để xác nhận đặt lại!'; return; }
      if (ctx.extension_settings[extensionName]) ctx.extension_settings[extensionName][NS] = null;
      loadState(); save(true); closeModal(); toast('Đã đặt lại · tải lại trang để áp dụng hoàn toàn');
    });
  }
}



export function initShop() {
All.$id('mclose').addEventListener('click', closeModal);
All.$id('mbody').addEventListener('click', e => {
  // @ts-ignore
  const el = e.target.closest('[data-pick]');
  if (!el || !pendingPick) return;
  const cb = pendingPick; setPendingPick(null);
  closeModal(); cb(el.dataset.pick);
});
All.$id('modal').addEventListener('click', e => { if (e.target === All.$id('modal')) closeModal(); });
// @ts-ignore
sh.querySelectorAll('[data-open]').forEach(b => b.addEventListener('click', () => openPanel(b.dataset.open)));
}
