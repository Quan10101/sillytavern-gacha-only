# Hướng dẫn build lại extension (bản Gacha-only)

Mình đã sửa toàn bộ mã nguồn trong `src/` để chỉ còn tính năng **Gachapon lấy đồ** (bỏ nông trại,
dungeon, thú cưng, cá cược, chợ, trade, đồng bộ mạng...). Do máy chạy Claude không có kết nối mạng
để tải esbuild/dotenv về cài, bạn cần tự build lại file `index.js` cuối cùng trên máy mình
(chỉ mất khoảng 30 giây, không cần biết code):

## Các bước

### Cách 1 — Để GitHub tự build giúp (khuyên dùng, không cần cài gì)

Project này đã có sẵn file `.github/workflows/build.yml` — mỗi khi bạn đẩy code lên nhánh
`main`/`master` của repo GitHub, GitHub sẽ **tự động** chạy `npm install` + `npm run build`
và tự commit file `index.js` mới vào ngay repo của bạn. Bạn chỉ cần:

1. Tạo repo GitHub (Public), đẩy toàn bộ nội dung thư mục này lên (nhớ để `manifest.json`
   ở ngoài cùng repo, không lồng trong thư mục con).
2. Vào tab **Actions** trên trang repo GitHub — nếu chưa tự chạy, bấm workflow "Build index.js"
   → **Run workflow** để chạy tay lần đầu.
3. Đợi khoảng 30–60 giây, refresh lại trang repo — file `index.js` sẽ tự xuất hiện/cập nhật.
4. Trong SillyTavern: Extensions → Install extension → dán URL repo GitHub → Install.

Từ giờ về sau, mỗi lần bạn (hoặc mình) sửa code trong `src/` và đẩy lên GitHub, `index.js`
sẽ tự build lại — không cần làm gì thêm.

### Cách 2 — Tự build trên máy (nếu không muốn dùng GitHub Actions)

1. Cài Node.js nếu máy chưa có (https://nodejs.org, bản LTS).
2. Mở terminal/cmd tại thư mục project này (thư mục chứa `package.json`).
3. Chạy:
   ```
   npm install
   npm run build
   ```
4. Sau khi chạy xong, file `index.js` mới (đã gộp toàn bộ `src/`) sẽ tự sinh ra tại thư mục gốc.
5. Copy `manifest.json` + `index.js` (2 file này thôi) vào thư mục extension của SillyTavern
   (nơi bạn đang để bản cũ), ghi đè lên bản cũ.
6. Khởi động lại / tải lại SillyTavern.

## Những gì đã thay đổi

- **Chỉ còn Gachapon**: mở bằng nút quả cầu (orb) hoặc lệnh `/farm`. Giao diện chỉ còn 3 nút:
  Gachapon, Balo, Cài đặt.
- **Quay miễn phí, không giới hạn** — không còn vé, không còn vàng, không còn tỉ lệ bảo hiểm (pity).
- **Bậc vật phẩm theo loại quay**:
  - Quay Thường → Rác / Thường
  - Quay Đặc biệt → Hiếm / Sử thi
  - Quay Siêu cường → luôn ra Huyền thoại
- **Balo**: xem toàn bộ vật phẩm đã quay được, bấm "Lấy ra" để mang vào cốt truyện.
- **Cài đặt**: vẫn giữ nguyên phần cấu hình API AI phụ (để AI tạo mô tả/tên vật phẩm theo bối cảnh
  thẻ nhân vật hiện tại) — đây là phần giúp Gacha "thông minh", ra vật phẩm hợp bối cảnh.
- Đã bỏ hẳn dependency `peerjs` (không cần cài gì thêm ngoài devDependencies có sẵn).
- File `render_hero_sprites.html` và `sandbox.html` vẫn giữ nguyên (công cụ xem sprite khi dev,
  không ảnh hưởng tới extension chạy thật).

Nếu build báo lỗi, gửi lại nguyên văn lỗi cho mình xem nhé.
