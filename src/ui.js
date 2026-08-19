
import { ctx } from './store.js';
import { styleCSS } from './style.js';
import * as All from './all.js';
import { BLOCK_PRICE_PG, WEATHERS, TEST_MODE, DAY_MS, CROPS, GROW, MIN, REGROW, FERTS, WATER_CD, REGROW_MAX, POKE_CD, TREASURE_CD, PETS_OUT_MAX, WITCH_STAY, witchGap, SNAP_EDGE, ZONE_NAME } from './data.js';
import { mulberry32, petSVG, spriteSVG, tileURI, warmUpCache, PETS, PASSES, P, LP, PET_P } from './graphics.js';
import { toast } from './witch.js';
import { save } from './state.js';
import { mode, renderPlots, renderStatus, renderToolbar, setMode } from './render.js';
import { pageUnlocked } from './utils.js';

/* ---------- DOM:Shadow root ---------- */
export let root;
export let sh;
export let $id;
export let fieldEl;
export let decoLayer;
export let fxLayer;
export let dungeonView;
let swX = null, swY = null;

export function applyTheme() { ctx.ui.classList.remove('theme-sakura', 'theme-sky'); ctx.ui.classList.add('theme-' + (ctx.S && ctx.S.theme === 'sky' ? 'sky' : 'sakura')); }

export function applyPageSkin() {
  const isExplore = ctx.S && ctx.S.view === 'explore';
  fieldEl.classList.toggle('pg2', !isExplore && ctx.S.page === 2);
  fieldEl.classList.toggle('pg3', !isExplore && ctx.S.page === 3);
  
  const titleH1 = sh.querySelector('.titlebar h1');
  if (isExplore) {
    fieldEl.style.backgroundImage = 'none';
    fieldEl.style.backgroundColor = '#d3c3a0';
    if (titleH1) titleH1.innerHTML = `${spriteSVG('mapIcon', 16)}Dạo quanh nào...`;
  } else {
    // @ts-ignore
    fieldEl.style.backgroundImage = tileURI(ctx.S.page === 2 ? 'water' : ctx.S.page === 3 ? 'mine' : 'grass', 4242);
    fieldEl.style.backgroundColor = '';
    if (titleH1) titleH1.innerHTML = `${spriteSVG('strawhat', 16)}Ai mà thèm làm nông dân chứ!`;
  }
  // @ts-ignore
  fieldEl.style.backgroundSize = '192px 192px';
}

/* ---------- Hàm tập trung quản lý trạng thái chuyển tab Nông trại / Khám phá ---------- */
export function applyViewState() {
  const isExplore = ctx.S && ctx.S.view === 'explore';
  const ctrlrow = sh.querySelector('.ctrlrow');
  const mascots = $id('mascots');
  const witch = $id('witch');
  const banner = $id('banner');
  const viewToggle = $id('viewToggle');
  const statBlocks = $id('stat-blocks');
  
  // Ẩn/hiện các thành phần chỉ thuộc về Nông trại
  if (ctrlrow) ctrlrow.style.display = isExplore ? 'none' : 'flex';
  if (mascots) mascots.style.display = isExplore ? 'none' : '';
  if (decoLayer) decoLayer.style.display = isExplore ? 'none' : '';
  if (witch) witch.style.display = isExplore ? 'none' : '';
  if (banner) banner.style.display = isExplore ? 'none' : '';
  if (statBlocks) statBlocks.style.display = isExplore ? 'none' : '';
  
  // Cập nhật class nền cho tab Khám phá
  const field = sh.querySelector('.field');
  if (field) {
    if (isExplore) field.classList.add('explore-mode');
    else field.classList.remove('explore-mode');
  }

  // Cập nhật nút chuyển tab
  if (viewToggle) {
    viewToggle.innerHTML = isExplore
      ? `${spriteSVG('strawhat', 16)} <span>Về Nông Trại</span>`
      : `${spriteSVG('mapIcon', 16)} <span>Khám phá</span>`;
  }
}

export function renderPager() {
  const pager = $id('pager');
  if (ctx.S && ctx.S.view === 'explore') {
    pager.style.display = 'none';
    return;
  }
  pager.style.display = 'flex';
  const names = { 1: 'Đồng cỏ', 2: 'Vùng nước', 3: 'Khu mỏ' };
  pager.innerHTML = [1, 2, 3].map(pg => {
    const un = pageUnlocked(pg);
    return `<span class="ptab p${pg}${ctx.S.page === pg ? ' active' : ''}${un ? '' : ' lock'}" data-pg="${pg}">${names[pg]}${un ? '' : ' 🔒'}</span>`;
  }).join('');
}

export function plotEmote(pi, name) {
  const p = sh.querySelector('.plot[data-pi="' + pi + '"]');
  if (!p) return;
  const pr = p.getBoundingClientRect(), fr = fieldEl.getBoundingClientRect();
  const el = document.createElement('span');
  el.className = 'emote';
  el.style.left = (pr.left - fr.left + pr.width / 2 - 12) + 'px';
  el.style.top = (pr.top - fr.top - 14) + 'px';
  el.innerHTML = spriteSVG(name, 24);
  fxLayer.appendChild(el);
  window.setTimeout(() => el.remove(), 1300);
}

export function initUI() {
  root = document.createElement('div');
  root.id = 'gachapon-only-root';
  document.body.appendChild(root);
  sh = root.attachShadow({ mode: 'open' });
  $id = id => sh.querySelector('#' + id);

  const style = document.createElement('style');
  style.textContent = styleCSS;
  sh.appendChild(style);

  ctx.ui = document.createElement('div');
  ctx.ui.innerHTML = `
  <div id="orb" title="Máy Gachapon">${spriteSVG('gachapon', 34)}</div>
  <div id="win">
    <div class="titlebar" id="drag">
      <h1>${spriteSVG('gachapon', 16)}Máy Gachapon</h1>
      <div class="close-x" id="close">×</div>
    </div>
    <div class="bottombar">
        <div class="btn" data-open="gacha">${spriteSVG('gachapon', 22)}Gachapon</div>
        <div class="btn" data-open="bag">${spriteSVG('bagIcon', 22)}Balo</div>
        <div class="btn" data-open="cfg">${spriteSVG('gearIcon', 22)}Cài đặt</div>
    </div>
    <div class="modal" id="modal">
      <div class="mpanel">
        <div class="mtitle"><span id="mtitle-text"></span><span class="grow"></span><div class="close-x" id="mclose">×</div></div>
        <div class="mbody" id="mbody"></div>
      </div>
    </div>
    <div class="toast" id="toast"></div>
  </div>`;
  sh.appendChild(ctx.ui);
  ctx.orb = $id('orb');
  ctx.win = $id('win');
}
