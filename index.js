var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/store.js
var NS = "gachapon_only_save";
var extensionName = "sillytavern-gacha-only";
var RUNTIME_KEY = "__GACHAPON_ONLY_EXT__";
var ctx = {
  extension_settings: {},
  eventSource: null,
  event_types: null,
  saveSettingsDebounced: null,
  S: null,
  ui: null,
  orb: null,
  win: null,
  saveTimer: null
};
var setExtensionContext = (params) => {
  Object.assign(ctx, params);
};

// src/all.js
var all_exports = {};
__export(all_exports, {
  $id: () => $id,
  CS: () => CS,
  DECO_PX: () => DECO_PX,
  DYNAMIC_SPR: () => DYNAMIC_SPR,
  GACHA_P: () => GACHA_P,
  INJECT_ID: () => INJECT_ID,
  LP: () => LP,
  P: () => P,
  PASSES: () => PASSES,
  PETS: () => PETS,
  PET_P: () => PET_P,
  RARITY_COLOR: () => RARITY_COLOR,
  RARITY_ORDER: () => RARITY_ORDER,
  RARITY_PRICE: () => RARITY_PRICE,
  SEC: () => SEC,
  SEC_LS_KEY: () => SEC_LS_KEY,
  SPRITE_PX: () => SPRITE_PX,
  TOOLS: () => TOOLS,
  WITCH_CRY: () => WITCH_CRY,
  addBlock: () => addBlock,
  applyDayEvent: () => applyDayEvent,
  applyPageSkin: () => applyPageSkin,
  applyTheme: () => applyTheme,
  applyViewState: () => applyViewState,
  bagName: () => bagName,
  bagPrice: () => bagPrice,
  bagSel: () => bagSel,
  bagSellMode: () => bagSellMode,
  bagTab: () => bagTab,
  blockPrice: () => blockPrice,
  buildEventPrompt: () => buildEventPrompt,
  buildTicket: () => buildTicket,
  buyBlock: () => buyBlock,
  buyConfirm: () => buyConfirm,
  cacheBlockTxt: () => cacheBlockTxt,
  cacheCoins: () => cacheCoins,
  cacheDayTxt: () => cacheDayTxt,
  cacheWicon: () => cacheWicon,
  charName: () => charName,
  clampN: () => clampN,
  closeModal: () => closeModal,
  closeWin: () => closeWin,
  collectWorldbook: () => collectWorldbook,
  curBlocks: () => curBlocks,
  curPlots: () => curPlots,
  decoLayer: () => decoLayer,
  destroy: () => destroy,
  disposers: () => disposers,
  dragBar: () => dragBar,
  dungeonView: () => dungeonView,
  eachPage: () => eachPage,
  emptyPlots: () => emptyPlots,
  esc: () => esc,
  eventFresh: () => eventFresh,
  eventPending: () => eventPending,
  executeGachaRoll: () => executeGachaRoll,
  extMenuBtn: () => extMenuBtn,
  extractJson: () => extractJson,
  fallbackEvent: () => fallbackEvent,
  fertilize: () => fertilize,
  fetchModelList: () => fetchModelList,
  fieldEl: () => fieldEl,
  fmtDur: () => fmtDur,
  fmtLeft: () => fmtLeft,
  freshState: () => freshState,
  fxLayer: () => fxLayer,
  gachaSortMode: () => gachaSortMode,
  gameDay: () => gameDay,
  generateAIUniqueItemData: () => generateAIUniqueItemData,
  generateProcedural32x32Sprite: () => generateProcedural32x32Sprite,
  generateUniqueItem: () => generateUniqueItem,
  gesture: () => gesture,
  growMs: () => growMs,
  harvest: () => harvest,
  heartbeat: () => heartbeat,
  initEvents: () => initEvents,
  initGachaState: () => initGachaState,
  initOrb: () => initOrb,
  initRender: () => initRender,
  initShop: () => initShop,
  initUI: () => initUI,
  initWindows: () => initWindows,
  initWitch: () => initWitch,
  isRain: () => isRain,
  layout: () => layout,
  loadCharState: () => loadCharState,
  loadState: () => loadState,
  loadTakenLog: () => loadTakenLog,
  makeWitchOrder: () => makeWitchOrder,
  mode: () => mode,
  mulberry32: () => mulberry32,
  mutCountOf: () => mutCountOf,
  mutDescOf: () => mutDescOf,
  mutKeysOf: () => mutKeysOf,
  now: () => now,
  onOrbDown: () => onOrbDown,
  onOrbMove: () => onOrbMove,
  onOrbUp: () => onOrbUp,
  onResize: () => onResize,
  openBagModal: () => openBagModal,
  openBuyDlg: () => openBuyDlg,
  openGachaModal: () => openGachaModal,
  openModal: () => openModal,
  openPanel: () => openPanel,
  openPassDlg: () => openPassDlg,
  openSandbox: () => openSandbox,
  openSellDlg: () => openSellDlg,
  openSellSeedDlg: () => openSellSeedDlg,
  openTakenLogModal: () => openTakenLogModal,
  openTakeout: () => openTakeout,
  openWitchDlg: () => openWitchDlg,
  pagePlots: () => pagePlots,
  pageUnlocked: () => pageUnlocked,
  pendingPick: () => pendingPick,
  petSVG: () => petSVG,
  pickFrom: () => pickFrom,
  placeDungeonWin: () => placeDungeonWin,
  placeOrb: () => placeOrb,
  placeWin: () => placeWin,
  plant: () => plant,
  plotEmote: () => plotEmote,
  plotHTML: () => plotHTML,
  pushTakenLog: () => pushTakenLog,
  registerDynamicSprite: () => registerDynamicSprite,
  regrowMs: () => regrowMs,
  removeTakenLogAt: () => removeTakenLogAt,
  renderAll: () => renderAll,
  renderBanner: () => renderBanner,
  renderChips: () => renderChips,
  renderDynamic: () => renderDynamic,
  renderPager: () => renderPager,
  renderPlots: () => renderPlots,
  renderStatus: () => renderStatus,
  renderTimeout: () => renderTimeout,
  renderToolbar: () => renderToolbar,
  renderWitch: () => renderWitch,
  requestDayEvent: () => requestDayEvent,
  resetDestroyed: () => resetDestroyed,
  resizeTimer: () => resizeTimer,
  rollMutation: () => rollMutation,
  root: () => root,
  sanitizeEvent: () => sanitizeEvent,
  save: () => save,
  saveCharState: () => saveCharState,
  saveSec: () => saveSec,
  sell: () => sell,
  sellSeed: () => sellSeed,
  setInjection: () => setInjection,
  setMode: () => setMode,
  setPendingPick: () => setPendingPick,
  setTakeoutNote: () => setTakeoutNote,
  setTestMode: () => setTestMode,
  settle: () => settle,
  setupExtButton: () => setupExtButton,
  setupSlashCommand: () => setupSlashCommand,
  sh: () => sh,
  shopTab: () => shopTab,
  shovel: () => shovel,
  spriteSVG: () => spriteSVG,
  takenLog: () => takenLog,
  takeoutNote: () => takeoutNote,
  testMode: () => testMode,
  testSecApi: () => testSecApi,
  tick: () => tick,
  tileURI: () => tileURI,
  toast: () => toast,
  toastTimer: () => toastTimer,
  todayEvent: () => todayEvent,
  toggleWin: () => toggleWin,
  toolbarOpen: () => toolbarOpen,
  updateInjection: () => updateInjection,
  useStarShard: () => useStarShard,
  warmUpCache: () => warmUpCache,
  water: () => water,
  weatherOf: () => weatherOf,
  wg: () => wg,
  witchArrive: () => witchArrive,
  witchDeliver: () => witchDeliver
});

// src/data.js
var TEST_MODE = false;
var MIN = 60 * 1e3;
var GROW = TEST_MODE ? 5 * MIN : null;
var REGROW = TEST_MODE ? 2 * MIN : null;
var DAY_MS = 4 * 60 * 60 * 1e3;
var WATER_CD = TEST_MODE ? 10 * MIN : 2 * 60 * 60 * 1e3;
var REGROW_MAX = 3;
var POKE_CD = 10 * MIN;
var TREASURE_CD = TEST_MODE ? 10 * MIN : 2 * 60 * 60 * 1e3;
var WITCH_STAY = TEST_MODE ? 10 * MIN : 20 * MIN;
var witchGap = () => TEST_MODE ? 15 * MIN + Math.random() * 20 * MIN : 100 * MIN + Math.random() * 80 * MIN;
var SNAP_EDGE = 48;
var CROPS = {
  /* Số liệu chính thức v1.0 (chốt theo "Bảng số liệu chính thức - chờ duyệt.md"): grow/regrowM tính bằng phút thực */
  douya: { name: "Gi\xE1 \u0111\u1ED7", grow: 5, seed: 5, sell: 12, sp: "douya" },
  radish: { name: "C\u1EE7 c\u1EA3i cherry", grow: 10, seed: 25, sell: 45, sp: "radish" },
  tomato: { name: "C\xE0 chua", grow: 20, regrowM: 15, seed: 100, sell: 90, sp: "tomato", regrow: true },
  strawberry: { name: "D\xE2u t\xE2y", grow: 90, seed: 350, sell: 800, sp: "strawberry" },
  pumpkin: { name: "B\xED ng\xF4", grow: 120, seed: 500, sell: 1300, sp: "pumpkin" },
  moonberry: { name: "D\xE2u \xE1nh tr\u0103ng", grow: 180, seed: 600, sell: 1500, sp: "moonberry" },
  /* —— Vùng nước (trang 2) —— */
  chuncai: { name: "Rau thu\u1EA7n", grow: 10, seed: 40, sell: 60, sp: "chuncai", zone: 2 },
  biqi: { name: "C\u1EE7 n\u0103ng", grow: 30, seed: 120, sell: 220, sp: "biqi", zone: 2 },
  lingjiao: { name: "C\u1EE7 \u1EA5u", grow: 60, seed: 220, sell: 520, sp: "lingjiao", zone: 2 },
  jiaobai: { name: "C\u1EE7 ni\u1EC5ng", grow: 60, seed: 450, sell: 1150, sp: "jiaobai", zone: 2 },
  lianou: { name: "C\u1EE7 sen", grow: 180, seed: 900, sell: 3200, sp: "lianou", zone: 2 },
  /* —— Khu mỏ (trang 3) —— */
  wujing: { name: "C\u1ECF \xF4 tinh", grow: 30, seed: 150, sell: 340, sp: "wujing", zone: 3 },
  starbush: { name: "B\u1EE5i sao", grow: 60, seed: 400, sell: 1150, sp: "starbush", zone: 3 },
  gemflower: { name: "Hoa b\u1EA3o th\u1EA1ch", grow: 120, seed: 700, sell: 2300, sp: "gemflower", zone: 3 },
  opalvine: { name: "D\xE2y leo opal", grow: 180, regrowM: 120, seed: 1200, sell: 2300, sp: "opalvine", zone: 3, regrow: true },
  dragoncry: { name: "Qu\u1EA3 long tinh", grow: 360, seed: 2500, sell: 8e3, sp: "dragoncry", zone: 3 },
  /* —— Họ bí ẩn (#29/#34/#49): hạt giống duy nhất, hộp mù hai lớp; không bán; đồng loạt 30 phút —— */
  mystery: { name: "H\u1EA1t gi\u1ED1ng b\xED \u1EA9n", grow: 30, seed: 0, sell: 0, sp: "seedLight", hidden: true, zone: 0, seedOnly: true },
  dreamG: { name: "K\xE9n m\u1ED9ng", grow: 30, seed: 0, sell: 300, sp: "dreamG", hidden: true, zone: 1 },
  dreamW: { name: "K\xE9n tr\u1EA7m m\u1ED9ng", grow: 30, seed: 0, sell: 600, sp: "dreamW", hidden: true, zone: 2 },
  dreamM: { name: "K\xE9n th\u1EA1ch m\u1ED9ng", grow: 30, seed: 0, sell: 900, sp: "dreamM", hidden: true, zone: 3 },
  keyG: { name: "C\u1ECF ch\xECa \u0111\u1ED3ng", grow: 30, seed: 0, sell: 350, sp: "keyG", hidden: true, zone: 1 },
  keyW: { name: "C\u1ECF ch\xECa g\u1EC9", grow: 30, seed: 0, sell: 700, sp: "keyW", hidden: true, zone: 2 },
  keyM: { name: "C\u1ECF ch\xECa b\xED \u1EA9n", grow: 30, seed: 0, sell: 1050, sp: "keyM", hidden: true, zone: 3 },
  fangG: { name: "C\xE2y b\u1EAFt ru\u1ED3i", grow: 30, seed: 0, sell: 400, sp: "fangG", hidden: true, zone: 1 },
  fangW: { name: "Hoa b\xE1 v\u01B0\u01A1ng", grow: 30, seed: 0, sell: 800, sp: "fangW", hidden: true, zone: 2 },
  fangM: { name: "Hoa nanh r\u1ED3ng", grow: 30, seed: 0, sell: 1200, sp: "fangM", hidden: true, zone: 3 }
};
var ZONE_NAME = { 1: "\u0110\u1ED3ng c\u1ECF", 2: "V\xF9ng n\u01B0\u1EDBc", 3: "Khu m\u1ECF" };
var FERTS = {
  compost: { name: "Ph\xE2n \u1EE7", price: 50, desc: "Th\u1EDDi gian c\xF2n l\u1EA1i c\u1EE7a v\u1EE5 n\xE0y \xD70.75" },
  shiny: { name: "Ph\xE2n l\u1EA5p l\xE1nh", price: 100, desc: "Khi thu ho\u1EA1ch v\u1EE5 n\xE0y r\u01A1i th\xEAm s\u1ED1 v\xE0ng b\u1EB1ng 25% gi\xE1 b\xE1n" }
};
var BLOCK_PRICE_PG = {
  // v1.0: giá khai hoang riêng cho từng trang (chốt theo bảng B)
  1: [0, 0, 800, 3e3, 12e3, 3e4],
  2: [0, 2e3, 6e3, 18e3, 45e3, 9e4],
  3: [0, 5e3, 15e3, 4e4, 9e4, 18e4]
};
var WEATHERS = ["N\u1EAFng", "N\u1EAFng", "N\u1EAFng", "Nhi\u1EC1u m\xE2y", "M\u01B0a nh\u1ECF"];

// src/graphics.js
var P = {
  G: "#6cb457",
  D: "#3e7d3a",
  E: "#a4dc8c",
  R: "#dd5548",
  x: "#a33528",
  F: "#e06578",
  f: "#a83a52",
  p: "#ffb8c4",
  O: "#e89a4e",
  Q: "#c9772e",
  q: "#96551f",
  S: "#8a6844",
  h: "#f7c07a",
  B: "#9ed8f2",
  b: "#5fa8cc",
  u: "#3f7ea6",
  T: "#8a6a52",
  Y: "#c2b878",
  y: "#9a915c",
  L: "#b8b0a2",
  M: "#8a8274",
  C: "#f2c231",
  U: "#bf8a1a",
  W: "#fffdf4",
  K: "#3a2c22",
  n: "#ffb0bc",
  V: "#b48ae0",
  v: "#8a5cc0",
  "1": "#aecb87",
  "2": "#a0bd77",
  "3": "#c6dfa0",
  "4": "#8dab68",
  a: "#b99b84",
  c: "#9c7d66",
  d: "#cbb096",
  e: "#8a6a52",
  w: "#9d7458",
  g: "#b08a6d",
  m: "#7d5a42",
  s: "#684a36"
};
var GACHA_P = {
  "0": "#ffffff",
  "1": "#e0e0e0",
  "2": "#c0c0c0",
  "3": "#a0a0a0",
  "4": "#808080",
  "5": "#606060",
  "6": "#404040",
  "7": "#202020",
  "8": "#101010",
  "9": "#000000",
  "a": "#ff0000",
  "b": "#cc0000",
  "c": "#990000",
  "d": "#ff6666",
  "e": "#ff9999",
  "f": "#ff6600",
  "g": "#cc5200",
  "h": "#ff9933",
  "i": "#8b4513",
  "j": "#a0522d",
  "k": "#cd853f",
  "l": "#deb887",
  "m": "#ffff00",
  "n": "#ffd700",
  "o": "#ffcc00",
  "p": "#ffdab9",
  "q": "#eee8aa",
  "r": "#bdb76b",
  "s": "#00ff00",
  "t": "#32cd32",
  "u": "#008000",
  "v": "#006400",
  "w": "#98fb98",
  "x": "#90ee90",
  "y": "#adff2f",
  "z": "#556b2f",
  "A": "#0000ff",
  "B": "#0000cc",
  "C": "#00008b",
  "D": "#4169e1",
  "E": "#6495ed",
  "F": "#87ceeb",
  "G": "#00ffff",
  "H": "#00ced1",
  "I": "#20b2aa",
  "J": "#008080",
  "K": "#7fffd4",
  "L": "#ff00ff",
  "M": "#c71585",
  "N": "#800080",
  "O": "#4b0082",
  "P": "#9370db",
  "Q": "#da70d6",
  "R": "#ffc0cb",
  "S": "#ffb6c1",
  "T": "#ff69b4",
  "U": "#db7093",
  "V": "#ffe4c4",
  "W": "#ffe4e1",
  "X": "#faf0e6",
  "Y": "#ffefd5",
  "Z": "#ffebcd"
};
function mulberry32(a) {
  return function() {
    a |= 0;
    a = a + 1831565813 | 0;
    let t = Math.imul(a ^ a >>> 15, 1 | a);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
var SPR = {
  sprout: ["................", "................", "................", "................", "...DD......DD...", "..DEED....DEED..", ".DEGGGD..DGGGED.", ".DGGGGD..DGGGGD.", "..DGGGGDDGGGGD..", "...DGGGDDGGGD...", "....DGGGGGGD....", "......DGGD......", "...TTTDGGDTTT...", "..TTTTTTTTTTTT..", "................", "................"],
  seedling: ["................", "................", "................", "................", "................", "................", "................", "......EE........", ".....DGE........", "......DG........", "......GD........", "......GG........", "....TTGGTT......", "...TTTTTTTT.....", "................", "................"],
  douya: ["................", "................", "................", "................", "...DD......DD...", "..DEED....DEED..", ".DEGGGD..DGGGED.", ".DGGGGD..DGGGGD.", "..DGGGGDDGGGGD..", "...DGGGDDGGGD...", "....DGGGGGGD....", "......DGGD......", "...TTTDGGDTTT...", "..TTTTTTTTTTTT..", "................", "................"],
  radish: ["....DD...DD.....", "...DGED.DEGD....", "...DGGEDEGGD....", "....DGGDGGD.....", ".....DGGGD......", "......DGD.......", "....fDDGDDf.....", "...fFppFFFFf....", "..fFpppFFFFFf...", "..fFppFFFFFFf...", "..fFpFFFFFFFf...", ".TfFFFFFFFFFfT..", ".TTfFFFFFFFfTT..", "..TTfFFFFFfTT...", "...TTTfffTTT....", "................"],
  tomato: ["................", "......DDDD......", "....DDGEEGDD....", "...DGEGGGGEGD...", "..DGEGGGGGGEGD..", "..DGpRRGGRRpGD..", "..DGRRxGGxRRGD..", "..DGGGGGGGGGGD..", "...DGGGpRGGGD...", "...DGGGRxGGGD...", "....DGGGGGGD....", ".....DGGGGD.....", "....TTDGGDTT....", "...TTTTTTTTTT...", "................", "................"],
  pumpkin: ["................", "................", ".......SS.S.....", "......DSSDS.....", "...qqq.SS.qqq...", "..qOOOqqqqOOOq..", ".qOhhOQOOQOOOOq.", ".qOhOOQOOQOOOOq.", ".qOOOOQOOQOOOOq.", ".qOOOOQOOQOOOOq.", ".qOOOOQOOQOOOOq.", "..qOOOQOOQOOOq..", "...qqOOOOOOqq...", "..TTqqqqqqqqTT..", "...TTTTTTTTTT...", "................"],
  moonberry: ["....W......W....", "................", "......DDDD......", "....DDGEEGDD....", "...DGEGGGGEGD...", "..DGWBBGGBBWGD..", "..DGBBuGGuBBGD..", "..DGGGGGGGGGGD..", "...DGGGWBGGGD...", "...DGGGBuGGGD...", "....DGGGGGGD....", ".....DGGGGD.....", "....TTDGGDTT....", "...TTTTTTTTTT...", ".......W........", "................"],
  weed: ["................", "................", "................", "................", "................", "................", "....Y....Y......", "....Y..Y.Y..Y...", ".....y.Y.y.Y....", "..Y...yYYy......", "...y..YY...Y....", "....yYYY..y.....", ".....YY.Yy......", ".....yYYY.......", "................", "................"],
  stone: ["................", "................", "................", "................", "................", "................", "......LLL.......", "....LLLLLLL.....", "...LLWLLLLLL....", "...LLLLLLLMLL...", "..LLLLLLLLLML...", "..MLLLLLLLLLL...", "..MMLLLLLLLLM...", "...MMMMMMMMM....", "................", "................"],
  slime: ["................", "................", "................", "................", ".....BBBBBB.....", "....BBBBBBBB....", "...BBWWBBBBBB...", "..BBWWBBBBBBBB..", "..BBBBBBBBBBBB..", "..BB33BBBB33BB..", ".BBBBBBBBBBBBBB.", ".BnBBBB33BBBBnB.", ".BBBBBBBBBBBBBB.", ".bBBBBBBBBBBBBb.", "..bbbbbbbbbbbb..", "................"],
  octo: ["................", "................", "................", ".....VVVVVV.....", "....VVVVVVVV....", "...VVWWVVVVVV...", "...VWWVVVVVVV...", "..VVVVVVVVVVVV..", "..VVKKVVVVKKVV..", "..VVVVVVVVVVVV..", "..VnVVVKKVVVnV..", "..VVVVVVVVVVVV..", "..VVVVVVVVVVVV..", "..VV.VV..VV.VV..", "..vv.vv..vv.vv..", "................"],
  coin: ["................", "................", "................", ".....UUUUU......", "....UCCCCCU.....", "...UCCWWCCCU....", "...UCWCCCCCU....", "...UCWCCCCCU....", "...UCCCCCCCU....", "...UCCCCCCCU....", "....UCCCCCU.....", ".....UUUUU......", "................", "................", "................", "................"],
  sun: ["................", ".......C........", "...C...C...C....", "....C.....C.....", "......CCC.......", ".....CCCCC......", "..CC.CCWCC.CC...", ".....CCCCC......", "......CCC.......", "....C.....C.....", "...C...C...C....", ".......C........", "................", "................", "................", "................"],
  flower: ["................", "................", "................", "....nnn.nnn.....", "...npppnpppn....", "...nppnCnppn....", "....nnCCCnn.....", "...nppnCnppn....", "...npppnpppn....", "....nnn.nnn.....", "................", "................", "................", "................", "................", "................"],
  shopIcon: ["................", "................", "................", "....fpf.fpf.....", "....fppffppf....", ".....ffFFff.....", "..qddddFFddddq..", "..qqqqqFFqqqqq..", "...qdddFFdddq...", "...qFFFFFFFFq...", "...qdddFFdddq...", "...qdddFFdddq...", "...qqqqqqqqqq...", "................", "................", "................"],
  tradeIcon: [
    "........................",
    "...............K........",
    "..............KKK.......",
    ".............KEEEK......",
    "...KKKKKKKKKKKEEEEK.....",
    "..KEEEEEEEEEEEEEEEEK....",
    "..KEEEEEEEEEEEEEEEEEK...",
    "..KGGGGGGGGGGGGGGGGGK...",
    "..KGGGGGGGGGGGGGGGGK....",
    "...KKKKKKKKKKKGGGGK.....",
    ".............KGGGK......",
    "..............KKK.......",
    "...............K........",
    "........K...............",
    ".......KKK..............",
    "......KbbbK.............",
    ".....KbbbbKKKKKKKKKKK...",
    "....KbbbbbbbbbbbbbbbbK..",
    "...KbbbbbbbbbbbbbbbbbK..",
    "...KuuuuuuuuuuuuuuuuuK..",
    "....KuuuuuuuuuuuuuuuuK..",
    ".....KuuuuKKKKKKKKKKK...",
    "......KuuuK.............",
    ".......KKK..............",
    "........K..............."
  ],
  bagIcon: ["................", "................", ".....ffff.......", "....f....f......", "...ffffffffff...", "..fddddddddddf..", "..fddddddddddf..", "..fFFFFFFFFFFf..", "..fFFFFCCFFFFf..", "..fFpFFCCFFFFf..", "..fFpFFFFFFFFf..", "..fFFFFFFFFFFf..", "...ffffffffff...", "................", "................", "................"],
  gearIcon: ["................", "................", "................", "................", "......MM........", "....MLLLLM......", "...MLLLLLLM.....", "..MMLLMMLLMM....", "..MMLLMMLLMM....", "...MLLLLLLM.....", "....MLLLLM......", "......MM........", "................", "................", "................", "................"],
  diceIcon: ["................", "................", "..KKKKKKKKKKKK..", "..KWWWWWWWWWWK..", "..KWWKKWWWWWWK..", "..KWWKKWWWWWWK..", "..KWWWWWWWWWWK..", "..KWWWWKKWWWWK..", "..KWWWWKKWWWWK..", "..KWWWWWWWWWWK..", "..KWWWWWWWKKWK..", "..KWWWWWWWKKWK..", "..KWWWWWWWWWWK..", "..KKKKKKKKKKKK..", "................", "................"],
  toolSeed: ["................", "................", "................", "...qqqqqqqqqq...", "...qccccccccq...", "...qdddGGdddq...", "...qddGGGGddq...", "...qdddDDdddq...", "...qdddDDdddq...", "...qddeeeeddq...", "...qddddddddq...", "...qqqqqqqqqq...", "................", "................", "................", "................"],
  toolWater: ["................", "................", "................", "..........uu....", ".........u..u...", "..u..uuuuu...u..", "..uu.ukkbbu..u..", ".B.uuubbbbu.u...", "....ubbbbbbuu...", "....ubbbbbbu....", "....ubbbbbbu....", "....uibbbbiu....", ".....uuuuuu.....", "................", "................", "................"],
  toolFert: ["................", "................", "................", "......qq........", ".....q..q.......", "....qaaaaq......", "...qaaaaaaq.....", "..qaaGGaaaaq....", "..qaaGGaaaaq....", "..qaaaaaeaaq....", "..qaeaaaaaaq....", "...qaaaaaaq.....", "....qqqqqq......", "................", "................", "................"],
  toolHarvest: ["................", "................", "................", "................", "................", "................", "...FF.OO.GG.....", "..qqqqqqqqqq....", "...qacacacaq....", "...qcacacacq....", "....qacacaq.....", "....qcacacq.....", ".....qqqqq......", "................", "................", "................"],
  mapIcon: ["................", ".KKKKKKKKKKKKKK.", "KLLLWWLLLLLGGGLK", "KLLLWWKKKLLGGGLK", "KLLLWKRRRKLGGGLK", "KLLLWKRWRKLLLLLK", "KLLLWKRRRKLLLLLK", "KWWWWWKRKWWWWWWK", "KWWWWWWKWWWWWWWK", "KbbLWWLLLLLLLLLK", "KLbbLWWLLLLLLLLK", "KLLbbWWLLLLLGGLK", "KLLLbWWLLLLLGGLK", "KLLLLWWLLLLLLLLK", ".KKKKKKKKKKKKKK.", "................"],
  toolShovel: ["................", "................", "................", "......SSSS......", ".......SS.......", ".......SS.......", ".......SS.......", ".......SS.......", ".....MLLLLM.....", "....MLLWLLLM....", "....MLLLLLLM....", ".....MLLLLM.....", "......MMMM......", "................", "................", "................"],
  cloud: ["................", "................", "................", "................", "......LLLL......", ".....LWWWWL.....", "...LLWWWWWWL....", "..LWWWWWWWWWL...", "..LWWWWWWWWWL...", "...LLLLLLLLLL...", "................", "................", "................", "................", "................", "................"],
  raincloud: ["................", "................", "................", "......LLLL......", ".....LWWWWL.....", "...LLWWWWWWL....", "..LWWWWWWWWWL...", "..LWWWWWWWWWL...", "...LLLLLLLLLL...", "................", "....B...B...B...", "................", "...B...B...B....", "................", "................", "................"],
  bush: ["................", "................", ".....DDDD.......", "...DDGEEGDD.....", "..DGEEGGWEGD....", ".DGEGGEEGGGED...", ".DGGEEGGGEGGD...", ".DGGWGGEEGGGD...", ".DGEGGGGGGEGD...", ".DGGGEGGGWGGD...", "..DGGGGGGGGD....", "...DDGGGGDD.....", ".....DDDD.......", "................", "................", "................"],
  pinkgrass: ["................", "................", "....W......W....", ".....pp...pp....", "....pnfp.pfnp...", ".....pp...pp....", "......f....f....", ".....pp...pp....", "....pfnp.pnfp...", ".....pp...pp....", "..W...f....f....", "...BBbfBBBfbBB..", "..BbBBbBbBBbBb..", "...bbBBbbBBbb...", "................", "................"],
  emHeart: ["................", "................", "................", "................", "....ff...ff.....", "...fFpf.fFFf....", "...fFFFfFFFf....", "...fFFFFFFFf....", "....fFFFFFf.....", ".....fFFFf......", "......fFf.......", ".......f........", "................", "................", "................", "................"],
  emStar: ["................", "................", "................", ".......U........", "......UCU.......", "......UCU.......", "...UUUCCCUUU....", "....UCCCCCU.....", ".....UCCCU......", "....UCU.UCU.....", "....U.....U.....", "................", "................", "................", "................", "................"],
  emLeaf: ["................", "................", "................", "................", "......DD........", ".....DGGD.......", "....DGEGGD......", "....DGGGGD......", ".....DGGD.......", "......DD........", ".......D........", ".......D........", "................", "................", "................", "................"],
  emNote: ["................", "................", "................", ".....KKKKK......", ".....K...K......", ".....K...K......", ".....K...K......", "...KKK..KKK.....", "...KKK..KKK.....", "................", "................", "................", "................", "................", "................", "................"],
  lotus: ["................", "................", "......Ff........", ".....pFfp.......", "....pFppFp......", "....fpFFpf......", ".....fppf.......", "...DGGGGGGD.....", "..DGGGGGGGGD....", "...DDGGGGDD.....", "................", "..b..bbb...b....", ".bBbbBBBbbBb....", "..bb..b..bb.....", "................", "................"],
  gem: ["................", "................", ".......v........", "......vVv.......", ".....vVWVv......", ".....vVVVv......", "....vVVWVVv.....", "....vVVVVVv.....", "...vVVWVVVVv....", "..BbvVVVVVvBb...", ".bBBvVVVVVvBBb..", ".bbbvvvvvvvbbb..", "..MMMMMMMMMMM...", "...MMMMMMMMM....", "................", "................"],
  legendShard: ["................", "................", ".......x........", "......xOx.......", ".....xOWOx......", ".....xOOOx......", "....xOOWOOx.....", "....xOOOOOx.....", "...xOOWOOOOx....", "..UuxOOOOOxUu...", ".uUUxOOOOOxUUu..", ".uuuxxxxxxxuuu..", "..MMMMMMMMMMM...", "...MMMMMMMMM....", "................", "................"],
  emBang: ["................", "................", ".....ffff.......", ".....fpFf.......", ".....fFFf.......", ".....fFFf.......", ".....fFFf.......", ".....fFFf.......", "......ff........", "................", ".....ffff.......", ".....fFFf.......", ".....ffff.......", "................", "................", "................"],
  ticketNorm: ["................", "....ffffffff....", "...fFFFFFFFFf...", "...fFCCCCCCFf...", "..fFCCCCCCCCFf..", "..fFCCCCCCWCFf..", "..fFCCCCWWCCFf..", "..fFCCCCCCWCFf..", "..fFCCCCCCCCFf..", "..fFCCCCCCCCFf..", "...fFCCCCCCFf...", "...fFFFFFFFFf...", "....ffffffff....", "................", "................", "................"],
  ticketSpec: ["................", "....ffffffff....", "...ffffffffff...", "...fvVVVVVVvf...", "..fvVVVVVVVVvf..", "..fvVVVWWVVVvf..", "..fvVVWWWWVVvf..", "..fvVVVWWVVVvf..", "..fvVVVVVVVVvf..", "..fvVVVVVVVVvf..", "...fvVVVVVVvf...", "...ffffffffff...", "....ffffffff....", "................", "................", "................"],
  ticketSuper: ["................", "....ffffffff....", "...ffffffffff...", "...fxOOOOOOxf...", "..fxOOOOOOOOxf..", "..fxOOOWWOOOxf..", "..fxOOWWWWOOxf..", "..fxOOOWWOOOxf..", "..fxOOOOOOOOxf..", "..fxOOOOOOOOxf..", "...fxOOOOOOxf...", "...ffffffffff...", "....ffffffff....", "................", "................", "................"],
  gachaCapsuleNorm: ["................", ".....ffff.......", "...fCCCCCCf.....", "..fCCCCWCCCf....", "..fCCCCCCCCf....", "..ffffffffff....", "..fvvvvvvvvf....", "..fvvvvWvvvf....", "...fvvvvvvf.....", ".....ffff.......", "................", "................", "................", "................", "................", "................"],
  gachaRatesIcon: [
    "................",
    "................",
    "................",
    "................",
    "..LLLLLLLLLLLL..",
    "..LWWWWWWWWWWL..",
    "..LWWWWWWWbWWL..",
    "..LWWWWWfWbWWL..",
    "..LWWWGWfWbWWL..",
    "..LWWWGWfWbWWL..",
    "..LWWWGWfWbWWL..",
    "..LWWWWWWWWWWL..",
    "..LLLLLLLLLLLL..",
    "................",
    "................",
    "................"
  ],
  gachaCapsuleSpec: ["................", ".....ffff.......", "...fYYYYYYf.....", "..fYYYYWYYYf....", "..fYYYYYYYYf....", "..ffffffffff....", "..fvvvvvvvvf....", "..fvvvvWvvvf....", "...fvvvvvvf.....", ".....ffff.......", "................", "................", "................", "................", "................", "................"],
  gachapon: [
    ".............ffffff.............",
    "...........ffFFFFFFff...........",
    "..........fFFFFFFFFFFf..........",
    ".........fFFFFFFFFFFFFf.........",
    "........fFFFFFFFFFFFFFFf........",
    ".......fBBBBBBBBBBBBBBBBf.......",
    "......fBiiiBBBBBBBBBBBBBBf......",
    "......fBiiWiBBBBBBBBBBBBBf......",
    ".....fBBiiiiBBBBBBBBBBBBBBf.....",
    ".....fBBBBDGGDBBBBUCCUBBBBf.....",
    ".....fBBBBGWWGFnnFCWWCBBBBf.....",
    ".....fBBBBGGGGnWWnCCCCBBBBf.....",
    ".....fBBBBDGGDnnnnUCCUBBBBf.....",
    ".....fBBfFFfDEFnnFOQdvvdBBf.....",
    ".....fBBFWWFEWWEOWWOvWWvBBf.....",
    "......fBFFFFEEEEOOOOvvvvBf......",
    "......fBfFFfDEEDQOOQdvvdBf......",
    ".......fbbbbbbbbbbbbbbbbf.......",
    "......ffffffffffffffffffff......",
    "......fFFFFFFFFFFFFFFFFFFf......",
    "......fFFFFFFFFFFFFFFFFFFf......",
    "......fFFFFFFFFFFFFFFFFFFf......",
    ".....fFFFFFFFMMMMMMFFFFFFFf.....",
    ".....fFFFFFFMMLLLLMMFFFFFFf.....",
    ".....fFFFFFFMLLWWLLMFFFFFFf.....",
    ".....fFFFFFFMLLWWLLMFFFFFFf.....",
    ".....fFFFFFFMMLLLLMMFFFFFFf.....",
    ".....fFFFFFFFMMMMMMFFFFFFFf.....",
    ".....fFFFFFFMMMMMMMMFFFFFFf.....",
    ".....fFFFFFFMKKKKKKMFFFFFFf.....",
    ".....fFFFFFFMKKKKKKMFFFFFFf.....",
    ".....ffffffffffffffffffffff....."
  ],
  dungeonGate: [
    "................",
    "....MMMMMMMM....",
    "...MLLLLLLLLM...",
    "..MLLMCMMCMLLM..",
    "..MLMvvvvvvMLM..",
    "..MLvVuuuuVvLM..",
    "..MLvVuBKuVvLM..",
    "..MLvVKuuKVvLM..",
    "..MLvVuuWKVvLM..",
    "..MLvVKuuuVvLM..",
    "..MLvVKKuBVvLM..",
    "..MLvVuKKuVvLM..",
    "..MLvVuuuuVvLM..",
    "..MLMvvvvvvMLM..",
    ".MMLMvvvvvvMLMM.",
    ".MMMMvvvvvvMMMM."
  ],
  fireball: [
    "................",
    ".......qq.......",
    "......qQQq......",
    ".....qQOOQq.....",
    "....qQOhhOQq....",
    "....qQOhhOQq....",
    ".....qQOOQq.....",
    "......qQQq......",
    ".......qq.......",
    "................",
    "................",
    "................",
    "................",
    "................",
    "................",
    "................"
  ],
  iceball: [
    "................",
    "................",
    "................",
    "................",
    "................",
    "................",
    "................",
    "uu..............",
    "ubuu............",
    "ubWBbuuu........",
    "uBWWWWBBbuu.....",
    "uBWWWWWWWBBBbuuu",
    "uBWWWWBBbuuu....",
    "ubWBbuu.........",
    "ubu.............",
    "uu.............."
  ],
  lightning: [
    "........C.......",
    ".......WC.......",
    "......WWC.......",
    ".....WWCC.......",
    "....WWCC........",
    "...WWCC.........",
    "..WWWWWWWWC.....",
    "...CCCCCWWC.....",
    ".......WWC......",
    "......WWC.......",
    ".....WWC........",
    "....WWC.........",
    "...WC...........",
    "..C.............",
    "................",
    "................"
  ],
  arrow: [
    "................",
    ".......W........",
    "......LWL.......",
    "......LWL.......",
    "......LWL.......",
    "......LWL.......",
    ".....LLWLL......",
    ".....MMWMM......",
    ".....MMWMM......",
    "......MWM.......",
    "......MWM.......",
    ".......M........",
    "................",
    "................",
    "................",
    "................"
  ],
  leafBolt: [
    "................",
    "..............E.",
    ".............EGE",
    "...........EGGDE",
    ".........EGGGDE.",
    ".......EGGGGDE..",
    ".....EGGGGGDE...",
    "...EGGGGGGDE....",
    "..EGGGGGGDE.....",
    ".EGGGGGGDE......",
    "EGGGGGGDE.......",
    "EGGGGGDE........",
    ".EDGGDE.........",
    "..EDDE..........",
    "...EE...........",
    "................"
  ],
  holyLight: [
    ".......C........",
    ".......W........",
    "......CWC.......",
    "...C..CWC..C....",
    "...WCCWWWCCW....",
    "...C..CWC..C....",
    "......CWC.......",
    ".......W........",
    ".......C........",
    "................",
    "................",
    "................",
    "................",
    "................",
    "................",
    "................"
  ],
  waterball: [
    "................",
    ".......uu.......",
    "......uWWu......",
    ".....uWbbu......",
    "....uWbbbbWu....",
    "...uWbbbbbbWu...",
    "...uWbbbbbbWu...",
    "....uWbbbbWu....",
    ".....uuuuuu.....",
    "................",
    "................",
    "................",
    "................",
    "................",
    "................",
    "................"
  ],
  threeSlimesWalking: [
    "................................",
    "...........WW...................",
    ".........WWWWWW.................",
    "........WWWWWWWW.........W......",
    ".........WWWWWW........WWWWW....",
    "........................WWW.....",
    "................................",
    "..................FFFFFF........",
    "................FFppppFFFF......",
    "...............FppppppppppF.....",
    "..............FppppWppWppppF....",
    "..............FppppKppKppppF....",
    "..............FppppppppppppF....",
    ".....EEEEEE....FppppppppppF.....",
    "...EEEEEEEEEE...FFFFFFFFFF......",
    ".EEEEEEEEEEEEE..................",
    "EEEEEbbbbbbEEEEEEEEEEEGGGGGGEEE.",
    "EEEbbBBBBbbbbEEEEEEGGGEEEEGGGGEE",
    "EEbBBBBBBBBBbbEEEEEGEEEEEEEEEEGE",
    "EabBBBBWBBWBBBbbeeGEEEEWEEWEEEEG",
    "aabBBBBKBBKBBBbbaaeGEEEEKEEKEEEG",
    "aabBBBBBBBBBBBbbaaeGEEEEEEEEEEEG",
    "eeabBBBBBBBBBbbcceaeGEEEEEEEEEEG",
    "cceeebbbbbbbbbbcceeaaeGGGGGGGGGG",
    "cccceeeeeeeeeeccMMMMMcaaaeeeeeaa",
    "SccccceeTTeccSSMMMMMMMeeccaceeec",
    "SSScceeeTTeeSSSSMMMMMceccceeeccc",
    "TSSScceeeeeSSSSSTTSScccccccccccS",
    "TTTSSccceecSSTTTTTSSSccSccccSSSS",
    "aTTTSSSSSSSSSTTaTTTTSSSSSSSSSSST",
    "aaTTTTTTTTTTTTaaaaTTTTTTTTTTTTTa",
    "aaaaaTTTTTTTaaaaaaaaaTTTTTTTaaaa"
  ],
  swordIcon: [
    ".............KK.",
    "............KWKK",
    "...........KWLMK",
    "..........KWLMK.",
    ".........KWLMK..",
    "........KWLMK...",
    ".......KWLMK....",
    "......KWLMK.....",
    "...KKKWLMK......",
    "...KCCKMK.......",
    "...KCCCK........",
    "...KsCCK........",
    "..KsKKKK........",
    ".KRK............",
    "..K.............",
    "................"
  ],
  coldBreath: [
    "................",
    "................",
    ".............u..",
    "...........WuW..",
    ".........Wu.Wu..",
    ".......WuuWuu...",
    ".....WuuuWuuW...",
    "....Wuu.uuW.....",
    ".....WuuuWuuW...",
    ".......WuuWuu...",
    ".........Wu.Wu..",
    "...........WuW..",
    ".............u..",
    "................",
    "................",
    "................"
  ],
  starBolt: [
    "................",
    ".......W........",
    "......WCW.......",
    ".....WCCCW......",
    "....WCOCOCW.....",
    "...WCOCOOOCW....",
    "..WCOCOOOCOCW...",
    ".WCCCOOCOOOCCW..",
    "..WCOCOOOCOCW...",
    "...WCOCOOOCW....",
    "....WCOCOCW.....",
    ".....WCCCW......",
    "......WCW.......",
    ".......W........",
    "................",
    "................"
  ],
  slashFx: [
    "................",
    "............W...",
    "..........WW....",
    "........WWW.....",
    "......WWW.......",
    "....WWW.........",
    "..WWW...........",
    "W.............W.",
    ".W..........WW..",
    "..W.......WW....",
    "...W....WW......",
    "....W.WW........",
    ".....W..........",
    "................",
    "................",
    "................"
  ],
  biteFx: [
    "................",
    "....L......L....",
    "...LWL....LWL...",
    "..LWWL....LWWL..",
    "..LWLL....LLWL..",
    "...LL......LL...",
    "................",
    "................",
    "...LL......LL...",
    "..LWLL....LLWL..",
    "..LWWL....LWWL..",
    "...LWL....LWL...",
    "....L......L....",
    "................",
    "................",
    "................"
  ],
  smashFx: [
    "................",
    "...Q........Q...",
    "....Q......Q....",
    ".....Q....Q.....",
    "......QQQQ......",
    "..Q...QOOQ...Q..",
    "...Q.QOOOOQ.Q...",
    "....QQOOOOQQ....",
    "....QQOOOOQQ....",
    "...Q.QOOOOQ.Q...",
    "..Q...QOOQ...Q..",
    "......QQQQ......",
    ".....Q....Q.....",
    "....Q......Q....",
    "...Q........Q...",
    "................"
  ],
  healFx: [
    "................",
    "................",
    ".......F........",
    "......FpF.......",
    ".....FpWpF......",
    "....FpWWWpF.....",
    ".....FpWpF......",
    "......FpF.......",
    ".......F........",
    "................",
    "................",
    "................",
    "................",
    "................",
    "................",
    "................"
  ],
  shieldFx: [
    "................",
    "...CCCCCCCCCC...",
    "..CWBBBBBBBBWC..",
    ".CWBbbbbbbbbBWC.",
    ".CWBbbbWWbbbBWC.",
    ".CWBbbWWWWbbBWC.",
    ".CWBbbbWWbbbBWC.",
    ".CWBbbbbbbbbBWC.",
    "..CWBbbbbbbBWC..",
    "...CWBbbbbBWC...",
    "....CWBbbBWC....",
    ".....CWBBWC.....",
    "......CWWC......",
    ".......CC.......",
    "................",
    "................"
  ],
  stunFx: [
    ".......C........",
    "......CWC.......",
    "...CCWWWWWCC....",
    "....CCWWWCC.....",
    "......CWC.......",
    ".......C........",
    "................",
    "................",
    ".......C........",
    "......CWC.......",
    "...CCWWWWWCC....",
    "....CCWWWCC.....",
    "......CWC.......",
    ".......C........",
    "................",
    "................"
  ],
  snowball: [
    "................",
    ".......WW.......",
    "......WbbW......",
    ".....WbBBbW.....",
    "....WbBWWbBW....",
    "....WbBWWbBW....",
    ".....WbBBbW.....",
    "......WbbW......",
    ".......WW.......",
    "................",
    "................",
    "................",
    "................",
    "................",
    "................",
    "................"
  ],
  shadowBolt: [
    "................",
    ".......v........",
    "......vVv.......",
    "....vvVVVvv.....",
    "...vVVVVVVVv....",
    "....vvVVVvv.....",
    "......vVv.......",
    ".......v........",
    "................",
    "................",
    "................",
    "................",
    "................",
    "................",
    "................",
    "................"
  ],
  rainbowBolt: [
    "................",
    "..........R.....",
    "........ROR.....",
    "......ROCOR.....",
    "....ROCECOR.....",
    "..ROCEbECOR.....",
    "ROCEbVbECOR.....",
    "ROCEbVbECOR.....",
    "..ROCEbECOR.....",
    "....ROCECOR.....",
    "......ROCOR.....",
    "........ROR.....",
    "..........R.....",
    "................",
    "................",
    "................"
  ],
  emLock: [
    "......LLLL......",
    ".....L....L.....",
    "....L......L....",
    "....L......L....",
    "....L......L....",
    "...CCCCCCCCCC...",
    "...CCCCCCCCCC...",
    "...CCCKKKKCCC...",
    "...CCCKKKKCCC...",
    "...CCCCKKCCCC...",
    "...CCCCKKCCCC...",
    "...CCCCCCCCCC...",
    "................",
    "................",
    "................",
    "................"
  ],
  heartFx: [
    "................",
    "................",
    "...FFF....FFF...",
    "..FFFFF..FFFFF..",
    ".FFFFFFFFFFFFFF.",
    ".FFFFFFFFFFFFFF.",
    ".FFFFFFFFFFFFFF.",
    "..FFFFFFFFFFFF..",
    "...FFFFFFFFFF...",
    "....FFFFFFFF....",
    ".....FFFFFF.....",
    "......FFFF......",
    ".......FF.......",
    "................",
    "................",
    "................"
  ],
  scytheFx: [
    ".........WWWWW..",
    ".......WWLLLLq..",
    "......WLLL...q..",
    ".....WLL....q...",
    "....WLL....q....",
    "...WL.....q.....",
    "...W.....q......",
    "..W.....q.......",
    ".......q........",
    "......q.........",
    ".....q..........",
    "....q...........",
    "...q............",
    "..q.............",
    ".q..............",
    "q..............."
  ],
  skullFx: [
    "................",
    "................",
    ".....WWWWWW.....",
    "...WWWWWWWWWW...",
    "..WWWWWWWWWWWW..",
    "..WWWKKWWWWKKW..",
    "..WWKKKKWWKKKK..",
    "..WWKKKKWWKKKK..",
    "..WWWKKWWWWKKW..",
    "...WWWWWWWWWW...",
    "....WWWWWWWW....",
    "....WW.WW.WW....",
    "....W..WW..W....",
    "................",
    "................",
    "................"
  ],
  sugarFx: [
    "................",
    "................",
    "................",
    ".......WW.......",
    "....W.WFFW.W....",
    "...WpWWFFWWpW...",
    "..WppWFFFFWppW..",
    "...WpWWFFWWpW...",
    "....W.WFFW.W....",
    ".......WW.......",
    "................",
    "................",
    "................",
    "................",
    "................",
    "................"
  ],
  bloodFx: [
    "................",
    ".......f........",
    "......fff.......",
    ".....fffff......",
    "....fffffff.....",
    "...fffffffff....",
    "...fffffffff....",
    "...fffffffff....",
    "....fffffff.....",
    ".....fffff......",
    "......fff.......",
    "................",
    "................",
    "................",
    "................",
    "................"
  ],
  dispelFx: [
    "................",
    "....B......B....",
    "........B.......",
    "..B...B...B...B.",
    ".......W........",
    "....B.WWW.B.....",
    ".....WWWW.......",
    "..B...WWW...B...",
    ".......W........",
    "....B.....B.....",
    "........B.......",
    "..B...B...B...B.",
    "................",
    "................",
    "................",
    "................"
  ],
  blindFx: [
    "................",
    "................",
    "......MMM.......",
    "....MMMMMMM.....",
    "...MMMMMMMMM....",
    "..MMKKMMMKKMM...",
    ".MMKKKKMKKKKMM..",
    ".MMKKKKMKKKKMM..",
    "..MMKKMMMKKMM...",
    "...MMMMMMMMM....",
    "....MMMMMMM.....",
    "......MMM.......",
    "................",
    "................",
    "................",
    "................"
  ]
};
P.k = P.k || "#c4e3f0";
P.i = P.i || "#a9cede";
var PET_P = {
  B: "#9ed8f2",
  b: "#5fa8cc",
  W: "#fffdf4",
  K: "#3a2c22",
  n: "#ffb0bc",
  "3": "#4a7ba6",
  // '3' = ngũ quan của slime xanh (xanh xám, thay cho K nâu đen gốc)
  V: "#b48ae0",
  v: "#8a5cc0",
  p: "#ffb8c4",
  F: "#e06578",
  f: "#a83a52",
  o: "#e8963a",
  t: "#b0641e",
  A: "#f4e8d8",
  z: "#d9c5aa",
  N: "#5c5c6a",
  L: "#b8b0a2",
  M: "#8a8274",
  C: "#f2c231",
  U: "#bf8a1a",
  E: "#fff5dc",
  e: "#d9cfe5",
  I: "#cbeaf2",
  G: "#f6cf62",
  g: "#bd822d",
  D: "#49315f",
  d: "#6f4a89",
  J: "#9b70ad",
  R: "#9569a6",
  r: "#c198ca",
  X: "#fff2bd",
  T: "#8b5936",
  S: "#d99a43",
  Q: "#76545f",
  H: "#56649d",
  h: "#8492c7",
  Y: "#f5d76d",
  y: "#bd923b",
  O: "#fffaf0",
  q: "#cfc5df",
  Z: "#72d4c7",
  c: "#3fa6a5",
  a: "#bff3df",
  k: "#688f57",
  l: "#a6cb7d",
  i: "#c8d8f0",
  j: "#8296c9",
  x: "#8e6bad",
  m: "#d9bd6f",
  u: "#dcf3e7",
  s: "#92c4b0"
};
var PET_SPR = {
  slime: [
    "................",
    "................",
    "................",
    "................",
    ".....BBBBBB.....",
    "....BBBBBBBB....",
    "...BBWWBBBBBB...",
    "..BBWWBBBBBBBB..",
    "..BBBBBBBBBBBB..",
    "..BB33BBBB33BB..",
    ".BBBBBBBBBBBBBB.",
    ".BnBBBB33BBBBnB.",
    ".BBBBBBBBBBBBBB.",
    ".bBBBBBBBBBBBBb.",
    "..bbbbbbbbbbbb..",
    "................"
  ],
  slimePink: [
    "................",
    "................",
    "................",
    "................",
    ".....pppppp.....",
    "....pppppppp....",
    "...ppWWpppppp...",
    "..ppWWpppppppp..",
    "..pppppppppppp..",
    "..ppffppppffpp..",
    ".pppppppppppppp.",
    ".pFppppffppppFp.",
    ".pppppppppppppp.",
    ".FppppppppppppF.",
    "..FFFFFFFFFFFF..",
    "................"
  ],
  peach_soda: [
    ".......O........",
    "......OOO.......",
    ".......t........",
    ".....TTTTTT.....",
    "....TTTTTTTT....",
    "...TCTTTTTTTT...",
    "..TCTTTTTTTTTT..",
    ".TTTTDTTTTDTTTT.",
    ".TTPPTTDDTTPPTT.",
    ".TTTTTTTTTTTTTT.",
    "..tTTTTTTTTTTt..",
    ".tTT.tTTTT.tTTt.",
    "tTt..tTTt..tTTt.",
    ".t...tT.tT...tT.",
    ".....t...t......",
    "................"
  ],
  octo: [
    "................",
    "................",
    "................",
    ".....VVVVVV.....",
    "....VVVVVVVV....",
    "...VVWWVVVVVV...",
    "...VWWVVVVVVV...",
    "..VVVVVVVVVVVV..",
    "..VVKKVVVVKKVV..",
    "..VVVVVVVVVVVV..",
    "..VnVVVKKVVVnV..",
    "..VVVVVVVVVVVV..",
    "..VVVVVVVVVVVV..",
    "..VV.VV..VV.VV..",
    "..vv.vv..vv.vv..",
    "................"
  ],
  octoCream: [
    "................",
    "................",
    "................",
    ".....AAAAAA.....",
    "....AAAAAAAA....",
    "...AAWWAAAAAA...",
    "...AWWAAAAAAA...",
    "..AAAAAAAAAAAA..",
    "..AAAAAAAAAAAA..",
    "..AAKKAAAAKKAA..",
    "..AnAAAAAAAAnA..",
    "..AAAAAAAAAAAA..",
    "..AAAAAAAAAAAA..",
    "..AA.AA..AA.AA..",
    "..zz.zz..zz.zz..",
    "................"
  ],
  jellyfish: [
    "......S.........",
    ".....SSS........",
    "......S.........",
    ".....IIIIII.....",
    "....IIIIIIII....",
    "...IIBIIIIIII...",
    "..IIBIIIIIIIII..",
    ".IIIIYIIIIYIIII.",
    ".IIPPIISSIIPPII.",
    ".IIIIIIIIIIIIII.",
    "..iIIIIIIIIIIi..",
    "...iiiiiiiiii...",
    "...LL..LL..LL...",
    "..LL...LL...LL..",
    "..L....L....L...",
    ".LL...LL...LL..."
  ],
  mystery_blob: [
    "................",
    "...oo......oo...",
    "...ooo....ooo...",
    "...oooo..oooo...",
    "....oooooooo....",
    "...oooooooooo...",
    "..oooooooooooo..",
    "..ooKKooooKKoo..",
    "ttooooonnooooott",
    ".toooooooooooot.",
    ".onoooooooooono.",
    ".oooooooooooooo.",
    ".oooooooooooooo.",
    ".toooooooooooot.",
    "..tttttttttttt..",
    "................"
  ],
  ghostBlob: [
    "................",
    ".......uu.......",
    "......uuuu......",
    ".....uuuuuu.....",
    "....uuWuuuuu....",
    "...uuWuuuuuuu...",
    "..uuuuuuuuuuuu..",
    ".uuuuQuuuuQuuuu.",
    ".unnuuuQQuuunnu.",
    ".uuuuuuuuuuuuuu.",
    "uuuuuuuuuuuuuuuu",
    "suuuuuuuuuuuuuus",
    ".suuuuuuuuuuuus.",
    "..suuuuuuuuuus..",
    "...suus..suus...",
    "................"
  ],
  impBlob: [
    "................",
    "................",
    "....f......f....",
    "....ff....ff....",
    ".....FFFFFF.....",
    "....FFFFFFFF....",
    "...FFWWFFFFFF...",
    ".KFFWWFFFFFFFFK.",
    "KKFFFFFFFFFFFFKK",
    "..FFKKFFFFKKFF..",
    ".FFFFFFFFFFFFFF.",
    ".FnFFFFKKFFFFnF.",
    ".FFFFFFFFFFFFFF.",
    ".fFFFFFFFFFFFFf.",
    "..ffffffffffff..",
    "................"
  ],
  angelBlob: [
    ".....gggggg.....",
    "...gGG....GGg...",
    ".....gggggg.....",
    "................",
    ".....EEEEEE.....",
    "....EEEEEEEE....",
    "...EEWEEEEEEE...",
    ".WEEWEEEEEEEEEW.",
    "WIEEEEEEEEEEEEEW",
    "IEEEQQEEEEQQEEEI",
    ".EnnEEEQQEEEnnE.",
    ".EEEEEEEEEEEEEE.",
    ".eEEEEEEEEEEEEe.",
    "..eEEEEEEEEEEe..",
    "...eeeeeeeeee...",
    "................"
  ],
  witchBlob: [
    "...DDD..........",
    "..DDDJ..........",
    "...DDJDD........",
    "...DDdDDDD......",
    "..DDdddDDDDD....",
    ".DDDddGGdddDDD..",
    "DDDDDDDDDDDDDDDD",
    "...RRRRRRRRRR..T",
    "..RrRRRRRRRRRR.T",
    ".RrRRRRRRRRRRRR.",
    ".RRRXKRRRRDDRRR.",
    ".RnRRRRRGDRRRnR.",
    ".RRRRRRRRRRRRR.T",
    "..dRRRRRRRRRd.T.",
    "...ddddddddd.SSS",
    "...........SSSSS"
  ],
  starBell: [
    "..Y....Y........",
    ".......Y....Y...",
    ".....YYYYY......",
    ".Y....YYY.......",
    "......Y.Y.......",
    ".....HHHHHH.....",
    "....HHHHHHHH....",
    "...HHhHHHHHHH...",
    "..HHhHHHHHHHHH..",
    "..HHHHHHHHHHHH..",
    ".HHHmmHHHHmmHHH.",
    ".HYHHHHHHHHHHYH.",
    ".HHHHHHHHHHHHHH.",
    ".hHHHHHHHHHHHHh.",
    "..hHHHHHHHHHHh..",
    "...hhhhhhhhhh..."
  ],
  cloudMallow: [
    "................",
    "................",
    "......OOOO......",
    "....OOOOOOOO....",
    "..OOOOOOOOOOOO..",
    ".OOOWOOOOOOOOOO.",
    "OOOOOOOOOOOOOOOO",
    "OOOOQOOOOOOQOOOO",
    "OOnOOOOQQOOOOnOO",
    "OOOOOOOOOOOOOOOO",
    ".qOOOOOOOOOOOOq.",
    "..qqOOqqqqOOqq..",
    "....I......I....",
    "....II....II....",
    ".....I....I.....",
    "................"
  ],
  dewSprout: [
    ".....kk..kk.....",
    "....kllkkllk....",
    "......kk........",
    ".......ZZ.......",
    "......ZZZZ......",
    ".....ZZZZZZ.....",
    "....ZZaZZZZZ....",
    "...ZZaZZZZZZZ...",
    "..ZZZZZZZZZZZZ..",
    ".ZZZZQZZZZQZZZZ.",
    ".ZnZZZZQZZZZZnZ.",
    ".ZZZZZZZZZZZZZZ.",
    ".cZZZZZZZZZZZZc.",
    "..cZZZZZZZZZZc..",
    "...cccccccccc...",
    "................"
  ],
  prismBlob: [
    "..j..........j..",
    ".jij........jij.",
    "..j..........j..",
    "......xxxx.....y",
    "y...xxiiiixx..yY",
    "Yy.xiiiiiiiix..y",
    "y.xiiiiiiiiiix..",
    ".xiiiiiiiiiiiix.",
    ".xiiQQiiiiQQiix.",
    ".xiriiiiQiiiirx.",
    ".xiiiiiiiiiiiix.",
    "..xiiiiiiiiix...",
    "...xiiiiiiix....",
    "....xxxxxxxx....",
    "......jjjj......",
    "................"
  ],
  penguin: [
    "................",
    "................",
    ".....333333.....",
    "....33WWWW33....",
    "...33WWWWWW33...",
    "...3WKKWWKKW3...",
    "..33WnWooWnW33..",
    "..33WWWWWWWW33..",
    "..33WWWWWWWW33..",
    "...33WWWWWW33...",
    "....33333333....",
    ".....oo..oo.....",
    "................",
    "................",
    "................",
    "................"
  ]
};
var petLinear = (x1, y1, x2, y2, stops) => ({ type: "linear", x1, y1, x2, y2, stops });
var PET_FX = {
  mystery_blob: {
    // Bé bí ẩn: bản cam dịu thứ hai (wen chốt: pha sữa giảm độ tinh khiết nhưng giữ dòng máu cam; bản oải hương để dành cho kho da DLC)
    o: petLinear(1, 2, 15, 14, [["0%", "#ffe0a6"], ["46%", "#f7b374"], ["100%", "#ea9060"]]),
    t: petLinear(0, 7, 16, 15, [["0%", "#d18a58"], ["100%", "#b06a44"]]),
    K: "#6b4548",
    n: "#ffcdd8"
  },
  peach_soda: {
    T: petLinear(1, 2, 15, 14, [["0%", "#ffe8a6"], ["35%", "#ffbdc9"], ["64%", "#ff94bf"], ["100%", "#c99bf5"]]),
    t: petLinear(0, 4, 16, 15, [["0%", "#f28bc2"], ["100%", "#9b78de"]]),
    C: "#effffb",
    D: "#5b4568",
    P: "#65e0cf",
    O: petLinear(0, 0, 15, 3, [["0%", "#b9fff3"], ["100%", "#9ba7ff"]])
  },
  jellyfish: {
    I: petLinear(1, 2, 15, 14, [["0%", "#c8f4ff"], ["28%", "#8cddff"], ["62%", "#58b7f2"], ["100%", "#6576dc"]]),
    i: petLinear(0, 7, 16, 15, [["0%", "#579dd1"], ["100%", "#5459aa"]]),
    B: "#effcff",
    Y: "#fff0a6",
    P: "#ff8fca",
    S: petLinear(0, 0, 16, 4, [["0%", "#fff6aa"], ["100%", "#a8dbff"]]),
    L: petLinear(0, 11, 16, 16, [["0%", "#bdeaff"], ["100%", "#8d90ee"]])
  }
};
var petCache = /* @__PURE__ */ new Map();
function petSVG(name, px) {
  const key = name + "@" + px;
  if (petCache.has(key)) return petCache.get(key);
  const map = PET_SPR[name];
  if (!map) return "";
  const fx = PET_FX[name];
  const canvas = document.createElement("canvas");
  canvas.width = 16;
  canvas.height = 16;
  const ctx2 = canvas.getContext("2d");
  const fills = {};
  if (fx) for (const ch in fx) {
    const v = fx[ch];
    if (v && typeof v === "object") {
      const grad = ctx2.createLinearGradient(v.x1, v.y1, v.x2, v.y2);
      v.stops.forEach((s) => grad.addColorStop(parseFloat(s[0]) / 100, s[1]));
      fills[ch] = grad;
    } else fills[ch] = v;
  }
  map.forEach((row, y) => {
    for (let x = 0; x < row.length; x++) {
      const ch = row[x];
      const c = fills[ch] || PET_P[ch];
      if (c) {
        ctx2.fillStyle = c;
        ctx2.fillRect(x, y, 1, 1);
      }
    }
  });
  const out = `<img draggable="false" width="${px}" height="${px}" src="${canvas.toDataURL("image/png")}" style="display:block; image-rendering:pixelated;" />`;
  petCache.set(key, out);
  return out;
}
var PETS = {
  /* —— Trang 1 —— */
  slime: { name: "Slime xanh", page: 1, price: 0, starter: true, cry: ["B\u1EE5p b\u1EE5p~", "B\u1EF1ppp!", "Gr\xF9 gr\xF9\u2026", "B\u1EE5p?", "Nh\u1EA3y nh\u1EA3y!"], desc: "Lo\u1EA1i t\xECm kho b\xE1u \xB7 b\xE9 tr\xF2n t\u1ED5 ti\xEAn, b\u1EA1n \u0111\u1ED3ng h\xE0nh t\u1EEB \u0111\u1EA7u" },
  octo: { name: "B\u1EA1ch tu\u1ED9c t\xEDm", page: 1, price: 500, cry: ["\u1EE4c b\u1ED1p?", "\u1EE4c \u1EF1c!", "Ch\xEDu mi!", "B\xF3p b\xF3p\u2026", "\u1EE4c b\u1ED1p b\u1ED1p!"], desc: "Lo\u1EA1i t\xECm kho b\xE1u \xB7 th\xEDch ch\u1ED3ng l\xEAn \u0111\u1EA7u ng\u01B0\u1EDDi kh\xE1c" },
  slimePink: { name: "Slime h\u1ED3ng", page: 1, price: 600, cry: ["B\u1EE5p h\xEC~", "B\u1EE5p b\u1EE5p!", "H\xEC h\xEC\u2026", "B\u1EE5p ch\xEDu~"], desc: "Lo\u1EA1i t\xECm kho b\xE1u \xB7 v\u1ECB d\xE2u (nh\u01B0ng kh\xF4ng \u0103n \u0111\u01B0\u1EE3c)" },
  octoCream: { name: "B\u1EA1ch tu\u1ED9c kem", page: 1, price: 700, cry: ["B\u1ED1p\u2026", "\u1EE4c\u2026", "(ch\u1EADm r\xEC r\xEC) b\xF3p~"], desc: "Lo\u1EA1i t\xECm kho b\xE1u \xB7 b\u1EADc th\u1EA7y ngu\u1EF5 trang, tr\xF9ng m\xE0u v\u1EDBi b\u1EA3ng \u0111i\u1EC1u khi\u1EC3n" },
  dewSprout: { job: "plant", name: "B\xE9 m\u1EA7m s\u01B0\u01A1ng", page: 1, price: 1200, cry: ["T\xED t\xE1ch~", "M\u1EA7m!", "(\u0111\u1ED9i l\xE1 l\xEAn)"], desc: "Lo\u1EA1i l\xE0m vi\u1EC7c \xB7 ch\u1ECDc m\u1ED9t c\xE1i l\xE0 gieo kh\u1EAFp ru\u1ED9ng, h\u1EA1t xu\u1ED1ng \u0111\u1EA5t l\xE0 n\u1EA3y m\u1EA7m" },
  cloudMallow: { job: "water", name: "B\xE9 b\xF4ng m\xE2y", page: 1, price: 1500, cry: ["B\xF4ng b\xF4ng~", "V\xF9\u2014\u2014", "(bay l\u01A1 l\u1EEDng)"], desc: "Lo\u1EA1i l\xE0m vi\u1EC7c \xB7 ra s\xE2n l\xE0 m\xE2y m\u01B0a nh\u1ECF t\u1EF1 \u0111\u1ED9ng t\u01B0\u1EDBi" },
  /* —— Trang 2 (vé vùng nước) —— */
  ghostBlob: { name: "B\xE9 ma nh\u1ECF", page: 2, price: 1500, cry: ["Uuu~", "Bay bay\u2026", "(xuy\xEAn qua tay b\u1EA1n)"], desc: "Lo\u1EA1i t\xECm kho b\xE1u \xB7 bay \u0111\u01B0\u1EE3c v\xE0o nh\u1EEFng ch\u1ED7 ng\u01B0\u1EDDi kh\xE1c kh\xF4ng v\xE0o n\u1ED5i" },
  mystery_blob: { job: "fert", name: "B\xE9 b\xED \u1EA9n", page: 2, price: 1800, cry: ["\u2026\u2026?", "(nghi\xEAng \u0111\u1EA7u)", "?!"], desc: "Lo\u1EA1i l\xE0m vi\u1EC7c \xB7 ch\u1ECDc m\u1ED9t c\xE1i l\xE0 b\xF3n ph\xE2n h\xE0ng lo\u1EA1t \xB7 ph\xE2n c\u1EE7a n\xF3 b\xF3n ra c\xE1i g\xEC th\xEC kh\xF4ng ai \u0111o\xE1n n\u1ED5i" },
  jellyfish: { job: "harvest", name: "B\xE9 s\u1EE9a xo\u0103n", page: 2, price: 2200, cry: ["\u1EE4c gr\xF9~", "(cu\u1ED9n cu\u1ED9n x\xFAc tu)", "B\u1ED1p \u1EE5c!"], desc: "Lo\u1EA1i l\xE0m vi\u1EC7c \xB7 ch\u1ECDc m\u1ED9t c\xE1i l\xE0 x\xFAc tu nh\u1EB9 nh\xE0ng cu\u1ED9n rau ch\xEDn v\xE0o balo" },
  impBlob: { name: "B\xE9 qu\u1EF7 nh\u1ECF", page: 2, price: 3e3, cry: ["H\xEC h\xEC.", "H\u01B0!", "(gi\u1EA5u c\xE1i g\xEC \u0111\xF3 \u0111i)"], desc: "Lo\u1EA1i t\xECm kho b\xE1u \xB7 khi t\xECm kho b\xE1u s\u1EBD tha v\u1EC1 h\u1EA1t gi\u1ED1ng b\xED \u1EA9n \u0111en s\xEC" },
  angelBlob: { name: "B\xE9 thi\xEAn th\u1EA7n", page: 2, price: 3e3, cry: ["Ting~", "(ph\xE1t s\xE1ng d\u1ECBu d\xE0ng)", "Ch\xFAc ph\xFAc cho b\u1EA1n."], desc: "Lo\u1EA1i t\xECm kho b\xE1u \xB7 khi t\xECm kho b\xE1u s\u1EBD ng\u1EADm v\u1EC1 h\u1EA1t gi\u1ED1ng b\xED \u1EA9n \xE1nh l\u1EA5p l\xE1nh" },
  /* —— Trang 3 (vé khu mỏ) —— */
  prismBlob: { name: "B\xE9 l\u0103ng quang", page: 3, price: 8e3, cry: ["Keng~", "(kh\xFAc x\u1EA1 ra m\u1ED9t d\u1EA3i c\u1EA7u v\u1ED3ng)", "Kengg!"], desc: "Lo\u1EA1i s\u1EA3n xu\u1EA5t \xB7 t\xECm kho b\xE1u mang v\u1EC1 m\u1EA3nh l\u0103ng quang (\u0111\u1ED5i \u0111\u01B0\u1EE3c m\u1ED9t \u0111\u01A1n \u1EDF trang \u0111\u01A1n h\xE0ng ph\xF9 thu\u1EF7)" },
  starBell: { name: "B\xE9 chu\xF4ng sao", page: 3, price: 8e3, cry: ["Leng keng~", "\u2606!", "(l\u1EAFc l\u1EAFc nh\u1EB9)"], desc: "Lo\u1EA1i s\u1EA3n xu\u1EA5t \xB7 t\xECm kho b\xE1u rung r\u01A1i m\u1EA3nh ng\xF4i sao (tri\u1EC7u h\u1ED3i \u0111\u01B0\u1EE3c ph\xF9 thu\u1EF7 tr\xF2n)" },
  /* —— Át chủ bài (page 1 = không cần vé, đủ tiền là mang về được, thuần tuý thuế dễ thương) —— */
  peach_soda: { name: "B\xE9 soda \u0111\xE0o", page: 1, price: 9999, cry: ["B\u1ED1p\u2014\u2014!", "(n\u1ED5i m\u1ED9t bong b\xF3ng nh\u1ECF)", "X\xEC~", "(v\u1ECB ng\xF2n ng\u1ECDt)"], desc: "Lo\u1EA1i t\xECm kho b\xE1u \xB7 tinh linh soda v\u1ECB \u0111\xE0o \xB7 d\u1EC5 th\u01B0\u01A1ng qu\xE1 m\u1EE9c n\xEAn \u0111\u1EAFt nh\u1EA5t" },
  penguin: { name: "Chim c\xE1nh c\u1EE5t", page: 1, price: 1e5, cry: ["Pingu!", "N\xFAp n\xFAp~", "Tr\u01B0\u1EE3t tuy\u1EBFt n\xE0o!", "C\xE1nh c\u1EE5t!"], desc: "Lo\u1EA1i \u0111\u1EB7c bi\u1EC7t \xB7 AFK m\u1ED7i 1 ti\u1EBFng mang v\u1EC1 1 v\xE9 gacha ng\u1EABu nhi\xEAn (70% v\xE9 th\u01B0\u1EDDng, 30% v\xE9 \u0111\u1EB7c bi\u1EC7t)" }
};
var PASSES = {
  water: { name: "V\xE9 v\xF9ng n\u01B0\u1EDBc", price: 6e3, desc: "M\u1EDF kho\xE1 ru\u1ED9ng v\xF9ng n\u01B0\u1EDBc (trang 2) + quy\u1EC1n mua b\xE9 tr\xF2n trang 2 v\xE0 h\u1EA1t gi\u1ED1ng thu\u1EF7 sinh, t\u1EB7ng k\xE8m \xF4 ru\u1ED9ng n\u1ED5i \u0111\u1EA7u ti\xEAn" },
  mine: { name: "V\xE9 khu m\u1ECF", price: 35e3, desc: "M\u1EDF kho\xE1 ru\u1ED9ng khu m\u1ECF (trang 3) + quy\u1EC1n mua b\xE9 tr\xF2n trang 3 v\xE0 h\u1EA1t gi\u1ED1ng khu m\u1ECF, t\u1EB7ng k\xE8m lu\u1ED1ng \u01B0\u01A1m \u0111\u1EA7u ti\xEAn" }
};
var C2 = {
  chuncai: {
    p: { g: "#2e6a50", G: "#4d9a6e", W: "#a8d8bc", o: "#8a5540" },
    m: [
      "................",
      "................",
      "....gg....gg....",
      "...gGGg..gGGWg..",
      "...gGGGg.gGGg...",
      "....gg....gg....",
      ".......o........",
      "..gg...o...gg...",
      ".gGGWg.o.gGGg...",
      ".gGGg..o.gGWGg..",
      "..gg...o..gg....",
      "................",
      "................",
      "................",
      "................",
      "................"
    ]
  },
  biqi: {
    p: { t: "#4d7a26", T: "#79b544", m: "#3f2a20", M: "#6a4534", W: "#f2e8d8" },
    m: [
      "....t..T..t.....",
      "....t.T..t......",
      ".....tT.tT......",
      "....T.t.t.......",
      ".....t.tT.......",
      "......ttt.......",
      ".......t........",
      ".......t........",
      ".......t........",
      "......mmm.......",
      "..mmmmMMMm.mmm..",
      ".mMMWmMMMMmMMm..",
      ".mMMMmMMMMmMWm..",
      "..mmm.mmmm.mm...",
      "................",
      "................"
    ]
  },
  lingjiao: {
    p: { g: "#2e6a50", G: "#4d9a6e", K: "#241b2e", P: "#5a3f66", W: "#b79ae0" },
    m: [
      "................",
      ".......gg.......",
      "....ggGGGGgg....",
      "...gGGgGGgGGg...",
      "....ggGGGGgg....",
      ".......gg.......",
      "................",
      "................",
      "...KK......KK...",
      "....KK....KK....",
      ".....KKKKKK.....",
      "....KPPKKPPK....",
      "....KPPWPPPK....",
      ".....KKKKKK.....",
      "................",
      "................"
    ]
  },
  jiaobai: {
    p: { g: "#3f7a30", G: "#6aab44", W: "#f6f2e2", s: "#d9d0b8" },
    m: [
      "....g....g......",
      "...gG...gG.g....",
      "...gG..gGG.Gg...",
      "..gGG..gGG.Gg...",
      "..gGG.gGGg.GG...",
      "..gGGggGGggGG...",
      "..gGGgGGGgGGG...",
      "..gGGgGGGgGGg...",
      "..sWWsWWWsWWs...",
      "..sWWsWWWsWWs...",
      "..sWWsWWWsWWs...",
      "..sWWsWWWsWWs...",
      "................",
      "................",
      "................",
      "................"
    ]
  },
  lianou: {
    p: { f: "#c25a78", P: "#f5aec2", W: "#fff0f5", g: "#2e6a50", G: "#4d9a6e", B: "#245a40", o: "#e8dcc2", O: "#c2b090" },
    m: [
      "......ff........",
      ".....fPPf.......",
      "....fPWWPf......",
      "..ffPPPPPPff....",
      ".fPPfPWWPfPPf...",
      "..fPPPPPPPPf....",
      "...ffPPPPff.....",
      ".....gGGg.......",
      "...gGGGGGGg.....",
      "..gGGGBGGGGg....",
      "...gGGGGGGg.....",
      "................",
      "...OooOooO......",
      "...OooOooO......",
      "....OOOOO.......",
      "................"
    ]
  },
  wujing: {
    p: { K: "#3f2a58", V: "#8a64c0", W: "#dcc8f5" },
    m: [
      ".......K........",
      "......KVK.......",
      "..K...KVK...K...",
      ".KVK..KVK..KVK..",
      ".KVK.KKVKK.KVK..",
      ".KVWKKVWVKKVVK..",
      "..KVKKVVVKKVK...",
      "..KVVKVVVKVVK...",
      "...KKKVVVKKK....",
      ".....KVVVK......",
      "......KKK.......",
      "................",
      "................",
      "................",
      "................",
      "................"
    ]
  },
  starbush: {
    p: { b: "#2e5a34", B: "#4f8a55", s: "#ffd94d", S: "#fff2b0", t: "#8a6244", y: "#ffd94d" },
    m: [
      "..y..........y..",
      ".....bbbbbb.....",
      "...bbBBBBBBbb...",
      "..bBBsBBBBBBBb..",
      "..bBsSsBBBBBBb..",
      ".bBBBsBBBBsBBBb.",
      ".bBBBBBBBsSsBBb.",
      ".bBBBBBsBBsBBBb.",
      "..bBBBsSsBBBBb..",
      "...bbBBsBBBbb...",
      ".....bbbbbb.....",
      ".y.....tt.....y.",
      ".......tt.......",
      "......t..t......",
      "................",
      "................"
    ]
  },
  gemflower: {
    p: { K: "#5a4268", r: "#d95a6a", R: "#f090a0", b: "#4a7ac2", B: "#8fb8ec", g: "#38a06a", G: "#7cd4a4", p: "#8a5cc0", P: "#c0a0e8", y: "#c89a38", Y: "#ffd94d", W: "#fff2b0", t: "#4d7a26", T: "#79b544" },
    m: [
      "................",
      "......KrrK......",
      ".....KrRRrK.....",
      ".....KrRRrK.....",
      "..KKK.KrrK.KKK..",
      ".KbBBK.yy.KgGGK.",
      ".KbBBKyYWYKgGGK.",
      "..KKK.yYYy.KKK..",
      ".......yy.......",
      ".....KpPK.......",
      "....KpPPpK......",
      "....KpPPpK..T...",
      ".....KppK..T....",
      "......tt..T.....",
      "......ttT.......",
      "................"
    ]
  },
  opalvine: {
    p: { t: "#3f5a5a", T: "#5c8080", K: "#8a7a9a", o: "#f2ecf5", P: "#f5b8d0", C: "#8adbe0" },
    m: [
      "......t.........",
      "...t..tt........",
      "...tt..t...t....",
      "....t..tt.tt....",
      ".KK..t..tt......",
      "KooK..t....KK...",
      "KoPCK.tt..KooK..",
      ".KK....t..KoCK..",
      ".......t...KK...",
      "....KK.t........",
      "...KooKt........",
      "...KoCPK........",
      "....KK.t........",
      ".......t........",
      "................",
      "................"
    ]
  },
  dragoncry: {
    p: { K: "#8a2a26", T: "#e8604a", t: "#c23c34", W: "#ffe0a0", g: "#3f7a30", G: "#6aab44" },
    m: [
      ".......gg.......",
      "......gGGg......",
      ".......KK.......",
      ".....KKTTKK.....",
      "....KTtTTtTK....",
      "...KTTTTTTTTK...",
      "...KTtTWWtTTK...",
      "..KTTTWWWWTTTK..",
      "..KTtTTWWTTtTK..",
      "...KTTTTTTTTK...",
      "...KTtTTTTtTK...",
      "....KTTTTTTK....",
      ".....KKTTKK.....",
      ".......KK.......",
      "................",
      "................"
    ]
  },
  seedDark: {
    p: { K: "#1c1420", k: "#33263d", v: "#8a2a4a", a: "#5a3f78" },
    m: [
      "................",
      "................",
      ".....K...K......",
      ".....KK.KK......",
      "......KkK.......",
      ".....KkkkK......",
      "....KkKkkkK.....",
      "....KkkkvkK.....",
      "....KkkkkkK.....",
      ".....KkkkK......",
      "......KKK.......",
      "................",
      "...a...a...a....",
      "................",
      "................",
      "................"
    ]
  },
  seedLight: {
    p: { h: "#ffe89a", y: "#c8a94a", Y: "#f5dfa0", W: "#fff8e0", s: "#ffd94d" },
    m: [
      "................",
      ".....hh.hh......",
      "....h.....h.....",
      "................",
      "......yy........",
      ".....yYYy.......",
      "....yYWYYy......",
      "....yYYYYy......",
      "....yYYYYy......",
      ".....yYYy.......",
      "......yy........",
      "................",
      "...s....s...s...",
      "................",
      "................",
      "................"
    ]
  },
  /* —— v0.9b (#49): ba họ bí ẩn · kén mộng / cỏ chìa khoá / cây ăn thịt (bản thiết kế chốt) —— */
  dreamG: {
    p: { K: "#b8a890", W: "#f8f4ea", w: "#e4dcc8", s: "#d9cfc0", p: "#f5b8d0", t: "#8a6844", g: "#4d7a26" },
    m: [
      "........t.......",
      ".......ts.......",
      "......s.s.......",
      ".....sKKs.......",
      "....KWWWWK......",
      "...KWwWWWWK.....",
      "..KWWWWWWWWK....",
      "..KWwWWWWwWK....",
      "..KWWWWWWWWK....",
      "..KWWwWWWWWK....",
      "...KWWWWwWK.....",
      "....KWWWWK......",
      ".....KKKK.......",
      "......p.........",
      ".......p........",
      "...g.......g...."
    ]
  },
  dreamW: {
    p: { K: "#4a7a94", B: "#bcdde8", b: "#94c2d4", W: "#eef8fa", d: "#7a94b8", o: "#d8ecf2" },
    m: [
      "................",
      "......KKK.......",
      "....KKBBBK......",
      "...KBBWBBBK.....",
      "..KBBBBBBBBK....",
      "..KBBdddBBBK....",
      ".KBBddBddBBBK...",
      ".KBBdBBBdBBBK...",
      ".KBBddBddBBbK...",
      "..KBBdddBBbK....",
      "..KBBBBBBbbK....",
      "...KBBBBbbK.....",
      "....KKbbbK......",
      "......KKK.......",
      "..o.........o...",
      "......o........."
    ]
  },
  dreamM: {
    p: { K: "#3f3a50", S: "#8d8398", s: "#6d657c", c: "#241f2c", O: "#ffd94d", o: "#ffb060", d: "#575070" },
    m: [
      "................",
      "......KKK.......",
      "....KKSSSK......",
      "...KSSSSSSK.....",
      "..KSSsSSSSSK....",
      "..KSScSSSsSK....",
      ".KSSScOcSSSSK...",
      ".KSsScOOcSSSK...",
      ".KSSSScOcSsSK...",
      "..KSSSScSSSK....",
      "..KsSSSSSsSK....",
      "...KSSSSSSK.....",
      "....KKSSSK......",
      "......KKK.......",
      "...d.......d....",
      "................"
    ]
  },
  keyG: {
    p: { t: "#4d7a26", T: "#79b544", c: "#a8681f", C: "#d99a43", W: "#ffe9b8", g: "#79b544" },
    m: [
      "...tt...........",
      "..t..tt.........",
      "..t....tt.......",
      ".tT......tt.....",
      ".tT........t....",
      "..t.......CCC...",
      "..t.......CWC...",
      "..t.......CCC...",
      ".tTt.......c....",
      "..t........c....",
      "..t........cC...",
      "..t........c....",
      "..t........cC...",
      ".gtg............",
      "g.t..g..........",
      "................"
    ]
  },
  keyW: {
    p: { t: "#2e6a50", T: "#4d9a6e", c: "#3f7a5c", C: "#7cc4a4", W: "#c8ecd8", v: "#245a40", o: "#d8ecf2" },
    m: [
      "...tt...........",
      "..t..tt.........",
      "..t....tt.......",
      ".tT......tt.....",
      ".tT........t....",
      "..t.......CCC...",
      "..t.......CWC...",
      "..t.......CCC...",
      ".tTt.......c....",
      "..t....o...cv...",
      "..t........cC...",
      "..t........cv...",
      "..t........cC...",
      "..t.............",
      ".o..............",
      "................"
    ]
  },
  keyM: {
    p: { t: "#b8862a", T: "#ffd94d", P: "#9a6ce0", p: "#c4a2e8", z: "#f0e4ff", s: "#ffd94d" },
    m: [
      "...tt...........",
      "..t..tt.........",
      "..t....tt.......",
      ".tT......tt.....",
      ".tT........t....",
      "..t.......PpP...",
      "..t.......PzP...",
      "..t.......PPP...",
      ".tTt.......P....",
      "..t........P....",
      "..t........Pp...",
      "..t........P....",
      "..t........Pp...",
      ".sts....z.......",
      "..t.............",
      "................"
    ]
  },
  fangG: {
    p: { K: "#2e5a1e", G: "#6cb457", E: "#a4dc8c", R: "#c24a5a", W: "#fffdf4", t: "#4d7a26", g: "#79b544" },
    m: [
      "....KKKK........",
      "..KKGGGGKK......",
      ".KGGEGGGGGK.....",
      ".KGGGGGGGGK.....",
      "..KGGGGGGK......",
      "...KRRRRK.......",
      "..W.W..W.W......",
      "...KRRRRK.......",
      "..KGGGGGGK......",
      ".KGGGGGGGGK.....",
      ".KGGEGGGGGK.....",
      "..KKGGGGKK..g...",
      "....KKKK.t.g....",
      "......t.t.......",
      ".......t........",
      "....g..t...g...."
    ]
  },
  fangW: {
    p: { K: "#6a2420", R: "#a83a35", r: "#c25a50", C: "#f2dfc0", D: "#2e1210", g: "#2e6a50", G: "#4d9a6e" },
    m: [
      ".....KKKKK......",
      "...KKRRRRRKK....",
      "..KRRCRRRCRRK...",
      ".KRRRRrRrRRRK...",
      ".KRCRRKKKRRCK...",
      ".KRRRKDDDKRRK...",
      ".KRrKDDDDDKrK...",
      ".KRRRKDDDKRRK...",
      ".KRCRRKKKRRCK...",
      ".KRRRRrRrRRRK...",
      "..KRRCRRRCRRK...",
      "...KKRRRRRKK....",
      ".....KKKKK......",
      "..Gg.......gG...",
      ".GggG.....GggG..",
      "................"
    ]
  },
  fangM: {
    p: { K: "#1c1428", P: "#3a2a52", p: "#5a4278", F: "#8ae0ea", f: "#d8f8fc", O: "#ffb060", o: "#ffe0a0", t: "#2e2440" },
    m: [
      "....KKKK........",
      "..KKPPPPKK......",
      ".KPPpPPPPPK.....",
      ".KPPPPPPPPK.....",
      "..KPPPPPPK......",
      "...KOOOOK.......",
      "..F.FoOF.F......",
      "..f.KOOK.f......",
      "..KPPPPPPK......",
      ".KPPPPPPPPK.....",
      ".KPPpPPPPPK.....",
      "..KKPPPPKK......",
      "....KKKK.t......",
      "......t.t.......",
      ".......t........",
      "....F..t...F...."
    ]
  },
  shardPrism: {
    p: { K: "#8ab8c8", k: "#4a8098", W: "#e8f8ff", w: "#c0e8f4", R: "#ff6060", G: "#60cc60", B: "#6090ff", Y: "#ffd940", P: "#c060e0", C: "#40d0d0" },
    m: [
      "................",
      "..........R.....",
      ".....K..........",
      "....KWK..G......",
      "...KWwWK........",
      "..KWwwwWK...B...",
      "..KWwwwWK.......",
      "...KwwWK....Y...",
      "....KWK..P......",
      ".....K..........",
      "......C.........",
      "...R............",
      "........G.......",
      "................",
      "................",
      "................"
    ]
  },
  shardStar: {
    p: { K: "#6a4ab8", P: "#b094e0", p: "#d8c4ff", W: "#ffffff", o: "#ffd94d", y: "#fff4b0" },
    m: [
      "................",
      "........o.......",
      ".......oyo......",
      "......oyyo......",
      "...ooooWooo.....",
      "..oPPPpWpKK.....",
      "..oKKKKK........",
      "...oooo.........",
      "................",
      "..........oo....",
      ".........oyo....",
      "........oWyo....",
      ".......oWpyo....",
      "........oooo....",
      "................",
      "................"
    ]
  },
  strawhat: {
    p: { K: "#a83a52", P: "#f7a6bd", p: "#ffd0dc", k: "#e07b96", Y: "#f5e0a8", y: "#e0be7a" },
    m: [
      "................",
      "................",
      "................",
      "......KKKK......",
      ".....KYyYYK.....",
      "....KYYYYYYK....",
      "....KYYYYYYK....",
      "..KKKPPPPPPKKK..",
      ".KYYKPpPPPKYYYK.",
      "KYyYYYYYYYYYYyYK",
      ".KKKKKKKKKKKKKK.",
      ".........kPk....",
      "..........kPk...",
      "................",
      "................",
      "................"
    ]
  },
  // Huy hiệu mặt tiền: nón rơm ruy băng hồng (wen chốt, chỗ ký tên tác giả)
  strawberry: {
    p: { g: "#4d7a26", G: "#79b544", K: "#8a2a35", r: "#d94f5c", R: "#e8808e", y: "#ffe0a8" },
    m: [
      "................",
      "................",
      "................",
      "................",
      "......G..g......",
      ".....gGGGGg.....",
      ".......GG.......",
      ".....KrrrrK.....",
      "....KrryrryK....",
      "....KrrrrrrK....",
      "....KryrrryK....",
      ".....KrrrrK.....",
      "......KrrK......",
      ".......KK.......",
      "................",
      "................"
    ]
  },
  strawberryW: {
    p: { g: "#2e6a50", G: "#4d9a6e", K: "#2e6a80", r: "#7fd4dd", R: "#b8ecf0", W: "#f0fcff" },
    m: [
      ".....G..g.......",
      "....gGGGGg......",
      "......GG........",
      "....KrrrrK......",
      "...KrrWrrrK.....",
      "...KrRRrrrK.....",
      "...KrrrrRrK.....",
      "....KrrrrK......",
      ".....KrrK.......",
      "......KK........",
      ".......W........",
      "................",
      "................",
      "................",
      "................",
      "................"
    ]
  },
  strawberryM: {
    p: { g: "#5a3f78", G: "#8a5cc0", K: "#3a2258", r: "#9a6ac8", R: "#c4a2e8", W: "#e8d8f8" },
    m: [
      ".....G..g.......",
      "....gGGGGg......",
      "......GG........",
      "....KrrrrK......",
      "...KrRrWrrK.....",
      "...KrrRrrrK.....",
      "...KRrrrRrK.....",
      "....KrrRrK......",
      ".....KrrK.......",
      "......KK........",
      "................",
      "................",
      "................",
      "................",
      "................",
      "................"
    ]
  }
};
var DYNAMIC_SPR = {};
function registerDynamicSprite(name, mapArray) {
  DYNAMIC_SPR[name] = mapArray;
}
var spriteCache = /* @__PURE__ */ new Map();
function spriteSVG(name, px) {
  const key = name + "@" + px;
  if (spriteCache.has(key)) return spriteCache.get(key);
  const map = SPR[name] || DYNAMIC_SPR[name] || C2[name] && C2[name].m;
  if (!map) return "";
  const pal = DYNAMIC_SPR[name] ? GACHA_P : SPR[name] ? P : C2[name].p;
  const canvas = document.createElement("canvas");
  canvas.width = map[0].length || 16;
  canvas.height = map.length || 16;
  const ctx2 = canvas.getContext("2d");
  map.forEach((row, y) => {
    for (let x = 0; x < row.length; x++) {
      const c = pal[row[x]];
      if (c) {
        ctx2.fillStyle = c;
        ctx2.fillRect(x, y, 1, 1);
      }
    }
  });
  const out = `<img draggable="false" width="${px}" height="${px}" src="${canvas.toDataURL("image/png")}" style="display:block; image-rendering:pixelated; object-fit:contain;" />`;
  spriteCache.set(key, out);
  return out;
}
var tileCache = /* @__PURE__ */ new Map();
function tileURI(kind, seedNum) {
  const tkey = kind + "@" + seedNum;
  if (tileCache.has(tkey)) return tileCache.get(tkey);
  const out = buildTile(kind, seedNum);
  tileCache.set(tkey, out);
  return out;
}
var LP = {
  "8": "#8ec8d8",
  "~": "#b8e0ea",
  "-": "#79b4c6",
  "_": "#6faabf",
  "9": "#3f7290",
  "!": "#35617d",
  "6": "#5f5870",
  "^": "#6d657c",
  "&": "#4e4860",
  "7": "#433c54",
  "5": "#8ae0ea",
  "*": "#e8fcff",
  "%": "#5fc8d8",
  "#": "#3a3450",
  "l": "#5aa06a",
  "L": "#7cc48a",
  "=": "#b9d194",
  "0": "#ffe9b8",
  "+": "#fff2b0"
};
function buildTile(kind, seedNum) {
  const rnd = mulberry32(seedNum);
  const base = { grass: "1", wet: "w", soil: "a", water: "8", wplot: "9", wplotwet: "!", mine: "6", mplot: "7", mplotwet: "#" }[kind] || "a";
  const SZ = kind === "water" || kind === "mine" || kind === "grass" ? 96 : 32;
  const g = [];
  for (let y = 0; y < SZ; y++) g.push(new Array(SZ).fill(base));
  const blot = (cx, cy, rad, ch) => {
    cx |= 0;
    cy |= 0;
    rad |= 0;
    for (let j = -rad; j <= rad; j++) for (let i = -rad; i <= rad; i++) {
      if (i * i + j * j > rad * rad + rnd() * 2) continue;
      const x = ((cx + i) % SZ + SZ) % SZ, y = ((cy + j) % SZ + SZ) % SZ;
      g[y][x] = ch;
    }
  };
  if (kind === "grass") {
    for (let i = 0; i < 5; i++) blot(rnd() * SZ, rnd() * SZ, 4 + rnd() * 5, "=");
    for (let i = 0; i < 4; i++) blot(rnd() * SZ, rnd() * SZ, 3 + rnd() * 4, "2");
    for (let i = 0; i < 55; i++) {
      const x = rnd() * SZ | 0, y = rnd() * (SZ - 1) | 0;
      g[y][x] = "3";
      g[y + 1][x] = "4";
    }
    for (let i = 0; i < 30; i++) g[rnd() * SZ | 0][rnd() * SZ | 0] = "2";
    const combos = [["n", "W"], ["W", "0"], ["C", "+"]];
    for (let i = 0; i < 10; i++) {
      const fx = 2 + (rnd() * (SZ - 4) | 0), fy = 2 + (rnd() * (SZ - 4) | 0);
      const c = combos[rnd() * 3 | 0];
      g[fy][fx] = c[0];
      g[fy][fx + 1] = c[0];
      g[fy + 1][fx] = c[0];
      g[fy + 1][fx + 1] = c[1];
    }
  } else if (kind === "water") {
    for (let i = 0; i < 3; i++) blot(rnd() * SZ, rnd() * SZ, 6 + rnd() * 5, "-");
    for (let i = 0; i < 4; i++) {
      const cx = rnd() * SZ, cy = rnd() * SZ, r = 8 + (rnd() * 5 | 0);
      blot(cx, cy, r, "~");
      blot(cx, cy, r - 2, "8");
    }
    for (let i = 0; i < 55; i++) {
      const x = rnd() * (SZ - 2) | 0, y = rnd() * SZ | 0;
      g[y][x] = "~";
      g[y][x + 1] = "~";
    }
    for (let i = 0; i < 22; i++) g[rnd() * SZ | 0][rnd() * SZ | 0] = "_";
    for (let i = 0; i < 5; i++) {
      const x = 2 + (rnd() * (SZ - 6) | 0), y = 2 + (rnd() * (SZ - 4) | 0);
      g[y][x] = "l";
      g[y][x + 1] = "L";
      g[y][x + 2] = "l";
      g[y + 1][x] = "l";
      g[y + 1][x + 1] = "l";
    }
  } else if (kind === "wplot" || kind === "wplotwet") {
    for (let i = 0; i < 6; i++) {
      const x = rnd() * 30 | 0, y = rnd() * 32 | 0;
      g[y][x] = kind === "wplot" ? "!" : "9";
      g[y][x + 1] = kind === "wplot" ? "!" : "9";
    }
    for (let i = 0; i < 3; i++) g[rnd() * 32 | 0][rnd() * 32 | 0] = "~";
  } else if (kind === "mine") {
    for (let i = 0; i < 7; i++) blot(rnd() * SZ, rnd() * SZ, 4 + rnd() * 5, "^");
    for (let i = 0; i < 6; i++) blot(rnd() * SZ, rnd() * SZ, 3 + rnd() * 4, "&");
    for (let i = 0; i < 55; i++) g[rnd() * SZ | 0][rnd() * SZ | 0] = "^";
    for (let i = 0; i < 28; i++) g[rnd() * SZ | 0][rnd() * SZ | 0] = "&";
    for (let i = 0; i < 9; i++) {
      const x = 2 + (rnd() * (SZ - 4) | 0), y = 2 + (rnd() * (SZ - 4) | 0);
      g[y - 1][x] = "5";
      g[y][x - 1] = "5";
      g[y][x + 1] = "5";
      g[y + 1][x] = "5";
      g[y][x] = "*";
    }
    for (let i = 0; i < 14; i++) g[rnd() * SZ | 0][rnd() * SZ | 0] = "*";
  } else if (kind === "mplot" || kind === "mplotwet") {
    for (let i = 0; i < 5; i++) g[rnd() * 32 | 0][rnd() * 32 | 0] = "&";
    for (let i = 0; i < 3; i++) g[rnd() * 32 | 0][rnd() * 32 | 0] = "%";
  } else {
    const top = kind === "wet" ? "g" : "d", dark = kind === "wet" ? "m" : "c", speck = kind === "wet" ? "s" : "e";
    for (let y = 0; y < 32; y++) {
      if (y % 4 === 0) g[y].fill(top);
      if (y % 4 === 3) g[y].fill(dark);
    }
    for (let i = 0; i < 5; i++) {
      const y = 4 * (rnd() * 8 | 0) + 1 + (rnd() * 2 | 0);
      g[y][rnd() * 32 | 0] = speck;
    }
  }
  const canvas = document.createElement("canvas");
  canvas.width = SZ;
  canvas.height = SZ;
  const ctx2 = canvas.getContext("2d");
  g.forEach((row, y) => {
    row.forEach((ch, x) => {
      const c = P[ch] || LP[ch];
      if (c) {
        ctx2.fillStyle = c;
        ctx2.fillRect(x, y, 1, 1);
      }
    });
  });
  return `url("${canvas.toDataURL("image/png")}")`;
}
function warmUpCache(CROPS2) {
  const tasks = [];
  Object.keys(PETS).forEach((p) => tasks.push(() => petSVG(p, 48)));
  Object.keys(SPR).forEach((s) => tasks.push(() => spriteSVG(s, s === "emBang" ? 48 : 24)));
  if (CROPS2) {
    Object.keys(CROPS2).forEach((c) => {
      tasks.push(() => spriteSVG(CROPS2[c].sp, 24));
    });
  }
  ["grass", "water", "mine"].forEach((bg) => tasks.push(() => tileURI(bg, 0)));
  let i = 0;
  function next() {
    const end = performance.now() + 10;
    while (i < tasks.length && performance.now() < end) {
      try {
        tasks[i]();
      } catch (e) {
      }
      i++;
    }
    if (i < tasks.length) setTimeout(next, 20);
  }
  setTimeout(next, 1e3);
}

// src/style.js
var styleCSS = `
    * { box-sizing: border-box; margin: 0; padding: 0; font-family: "Microsoft YaHei", "PingFang SC", sans-serif; }
    img { -webkit-user-drag: none; user-select: none; }
    /* ===== v1.0: ch\u1EE7 \u0111\u1EC1 giao di\u1EC7n (h\u1ED3ng anh \u0111\xE0o / tr\u1EDDi quang), \u0111\u1ED5i \u1EDF trang c\xE0i \u0111\u1EB7t, S.theme l\u01B0u to\xE0n c\u1EE5c ===== */
    .theme-sakura { --sky: radial-gradient(circle at 82% 40%, rgba(255,255,255,.55) 5px, transparent 6px), radial-gradient(circle at 12% 65%, rgba(255,255,255,.4) 4px, transparent 5px), linear-gradient(#f5c6d6, #e29ab8);
      --skyLine: #c27a9a; --tint: rgba(150,70,100,.35); --tintSoft: rgba(150,70,100,.3); --frameOut: #9a7a54;
      --buyBg: linear-gradient(#fdeef2,#f6d0da); --buyLine: #c77b96; --buyFg: #a34a63; --buyInset: #e8b3c2; --buyDeep: #a34a63;
      --accBg: #fdeef2; --accLine: #d9718a; --accFg: #a34a63; --selGlowA: #ffd7e2; --selGlowB: #f2b8c9; --shead: #8a4a63;
      --banBg: linear-gradient(#efe9fa,#e2d6f5); --banLine: #9a86c8; --banFg: #5d4a85; --banIn: #f8f4ff; --tagBg: #8a72c0; --tagFg: #f4edff; }
    .theme-sky { --sky: radial-gradient(circle at 82% 40%, rgba(255,255,255,.55) 5px, transparent 6px), radial-gradient(circle at 12% 65%, rgba(255,255,255,.4) 4px, transparent 5px), linear-gradient(#7cc4f2, #4a90d9);
      --skyLine: #2b5cae; --tint: rgba(30,60,120,.35); --tintSoft: rgba(30,60,120,.3); --frameOut: #3a6098;
      --buyBg: linear-gradient(#eef6ff,#d2e6f8); --buyLine: #85aede; --buyFg: #2f66b8; --buyInset: #b4d2ee; --buyDeep: #5580b8;
      --accBg: #eaf4ff; --accLine: #3a77cc; --accFg: #24549e; --selGlowA: #c8e2f8; --selGlowB: #9cc8ee; --shead: #2b5cae;
      --banBg: linear-gradient(90deg, #24549e, #3a77cc 60%, #5da8e8); --banLine: #24549e; --banFg: #eaf4ff; --banIn: rgba(255,255,255,.18); --tagBg: #ffd94d; --tagFg: #6a4e10; }

    .mtitle-text { font-weight: bold; font-size: 16px; color: var(--shead); letter-spacing: 1px; flex: 1; text-align: center; }

    .toast { position: fixed; left: 50%; top: 80px; transform: translateX(-50%); background: var(--accBg); border: 2px solid var(--accLine); color: var(--accFg); padding: 8px 16px; border-radius: 20px; font-weight: bold; font-size: 14px; z-index: 999999; box-shadow: 0 4px 10px rgba(0,0,0,0.3); pointer-events: none; opacity: 0; transition: opacity 0.3s, top 0.3s; }
    .toast.show { opacity: 1; top: 90px; }

    #orb { position: fixed; width: 52px; height: 52px; z-index: 99998; cursor: pointer; touch-action: none;
      border-radius: 50%; background: linear-gradient(#f7ead2,#eed9b8); border: 3px solid #b08a5c;
      box-shadow: inset 0 2px 0 #fffaf0, 0 4px 10px rgba(0,0,0,.35);
      display: flex; align-items: center; justify-content: center; user-select: none;
      transition: transform .18s ease; }
    #orb.dockL:not(:hover) { transform: translateX(-27px); }   /* S\u1EEDa #12: d\xE1n m\xE9p th\xEC thu n\u1EEDa, r\xEA chu\u1ED9t th\xEC b\u1EADt ra */
    #orb.dockR:not(:hover) { transform: translateX(27px); }
    #win { position: fixed; z-index: 99997; width: min(760px, 96vw); height: min(640px, 92vh); height: min(640px, 92dvh); display: none;
      flex-direction: column; background: #f8efe0;
      background-image: repeating-linear-gradient(0deg, transparent 0 30px, rgba(170,130,80,.14) 30px 33px);
      border: 4px solid #c9a273; outline: 4px solid var(--frameOut); border-radius: 10px;
      box-shadow: inset 0 0 0 4px #fff6e8, 0 14px 40px rgba(0,0,0,.55); }
    #win.open { display: flex; }
    
    .dungeon-win { position: fixed; z-index: 99997; width: min(760px, 96vw); height: 92vh; height: 92dvh; display: none;
      flex-direction: column; background: #f8efe0;
      background-image: repeating-linear-gradient(0deg, transparent 0 30px, rgba(170,130,80,.14) 30px 33px);
      border: 4px solid #c9a273; outline: 4px solid var(--frameOut); border-radius: 10px;
      box-shadow: inset 0 0 0 4px #fff6e8, 0 14px 40px rgba(0,0,0,.55); }
    .dungeon-win.open-anim { display: flex; animation: winPop 0.2s cubic-bezier(0.18,0.89,0.32,1.28) forwards; }
    .titlebar { background: var(--sky); border-bottom: 4px solid var(--skyLine); padding: 9px 14px;
      display: flex; align-items: center; gap: 8px; box-shadow: inset 0 0 0 2px rgba(255,255,255,.5);
      cursor: move; touch-action: none; user-select: none; flex: none; }
    .titlebar { justify-content: space-between; }
    .titlebar h1 { font-size: 15px; color: #7a5c38; letter-spacing: 2px; text-shadow: 1px 1px 0 #fff3dd; flex: 0 1 auto;
      display: flex; align-items: center; gap: 7px;
      background: linear-gradient(#faf0dc,#eed9b8); border: 3px solid #8a6844; border-radius: 8px; padding: 3px 12px;
      box-shadow: 0 3px 0 var(--tint), inset 0 0 0 2px #fff6e0;
      display: flex; align-items: center; gap: 8px; }
    .view-toggle { margin-left: auto; width: auto; height: 24px; padding: 0 8px; gap: 4px; background: linear-gradient(#faf0dc,#eed9b8); border: 3px solid #8a6844; border-radius: 6px; display: flex; align-items: center; justify-content: center; cursor: pointer; box-shadow: 0 2px 0 var(--tintSoft); flex-shrink: 0; font-size: 11px; font-weight: bold; color: #7a5c38; }
    .close-x { width: 24px; height: 24px; background: linear-gradient(#faf0dc,#eed9b8); border: 3px solid #8a6844; border-radius: 6px;
      color: #7a5c38; box-shadow: 0 2px 0 var(--tintSoft); font-weight: bold; text-align: center; line-height: 18px; cursor: pointer; flex-shrink: 0; }
    .statusbar { display: flex; align-items: center; gap: 12px; padding: 7px 14px; background: #f4e6cf;
      border-bottom: 3px solid #ddc39a; font-size: 13px; font-weight: bold; color: #7a5c38; flex: none; flex-wrap: wrap; }
    .stat { display: flex; align-items: center; gap: 5px; }
    #scroll { overflow: auto; flex: 1; min-height: 0; display: flex; flex-direction: column; }
    /* v0.8: thanh l\u1EADt trang ba trang */
    .pager { position: absolute; top: 7px; right: 7px; z-index: 7; display: flex; align-items: center; justify-content: center;
      background: rgba(58,48,30,.4); border: 2px solid rgba(255,246,224,.4); border-radius: 14px; overflow: hidden;
      width: 26px; height: 26px; cursor: pointer; font-size: 13px; color: rgba(255,246,224,.8); user-select: none; }
    .pager.open { width: auto; height: auto; border-radius: 12px; cursor: default;
      background: rgba(58,48,30,.55); border-color: rgba(255,246,224,.5); font-size: 0; }
    .pager:not(.open) .ptab { display: none; }
    .pager:not(.open)::after { content: '\u21C4'; }
    .ptab { flex: none; font-size: 11px; font-weight: bold; padding: 4px 10px; background: transparent;
      color: #f0e6cc; cursor: pointer; user-select: none; display: inline-flex; align-items: center; gap: 3px; }
    .ptab + .ptab { border-left: 1px solid rgba(255,246,224,.35); }
    .ptab.active { background: rgba(255,246,224,.92); color: #7a5c38; }
    .ptab.lock { opacity: .6; }
    .field { margin: 10px 12px; background-color: #a9c383; border: 4px solid #b08a5c; border-radius: 8px;
      box-shadow: inset 0 0 0 3px #8aa86a; padding: 14px; position: relative; }
    .field.pg2 { background-color: #8ec8d8; border-color: #6a9ab0; box-shadow: inset 0 0 0 3px #79b4c6; }
    .field.pg3 { background-color: #5f5870; border-color: #7a6a94; box-shadow: inset 0 0 0 3px #4e4860; }
    .field.pg2 span.dside, .field.pg2 span.dbot, .field.pg3 span.dside, .field.pg3 span.dbot { display: none !important; }
    .field.pg2 .plot { border-color: #c9a273;
      box-shadow: inset 0 0 0 3px #a8845c, inset 0 -5px 0 rgba(40,70,90,.28); }
    .field.pg2 .plot.watered { border-color: #b08a5c; box-shadow: inset 0 0 0 3px #8a6844, inset 0 -5px 0 rgba(30,55,75,.35); }
    .field.pg2 .block:not(.locked) .plot::before {
      content: ''; position: absolute; inset: -3px; pointer-events: none; border-radius: 6px;
      background: linear-gradient(#6a4a2c,#6a4a2c) left top / 7px 7px no-repeat,
        linear-gradient(#6a4a2c,#6a4a2c) right top / 7px 7px no-repeat,
        linear-gradient(#6a4a2c,#6a4a2c) left bottom / 7px 7px no-repeat,
        linear-gradient(#6a4a2c,#6a4a2c) right bottom / 7px 7px no-repeat; }
    .field.pg3 .plot { border-color: #3f8a9a; border-radius: 2px;
      box-shadow: inset 0 0 0 1px rgba(138,224,234,.5), inset 0 -3px 0 rgba(20,20,40,.35); }
    .field.pg3 .plot.watered { border-color: #5fc8d8; }
    .field.pg2 .block.locked .plot { border-color: #8ab4c2; box-shadow: inset 0 3px 0 rgba(255,255,255,.28), inset 0 -3px 0 rgba(30,60,80,.22); }
    .field.pg3 .block.locked .plot { border-color: #6d657c; box-shadow: none; }
    .blocks { display: grid; grid-template-columns: repeat(3, max-content); gap: 14px; justify-content: center; }
    @media (max-width: 640px) {
      .blocks { grid-template-columns: repeat(2, max-content); }
      .field { padding: 12px 12px 70px; }
      .titlebar { padding-top: max(32px, calc(9px + env(safe-area-inset-top, 0px))); }
      .titlebar h1 { font-size: 13px; letter-spacing: 0; }
      .titlebar h1 .sub { display: none; }
      .statusbar { gap: 6px 10px; font-size: 12px; padding: 6px 10px; }
      .bottombar { padding: 8px 10px calc(10px + env(safe-area-inset-bottom)); gap: 8px; }
      .btn { font-size: 11px; padding: 6px 2px; }
      span.dside { display: none; }
      span.dbot { display: inline; }
    }
    .field.explore-mode { background: radial-gradient(circle at 50% 50%, #2b1b54 0%, #0d0614 100%) !important; border-color: #4b3082 !important; overflow: hidden; }
    .field.explore-mode::before {
      content: ''; position: absolute; top: 0; left: 0; right: 0; bottom: 0;
      background-image: radial-gradient(circle at 20% 30%, rgba(255,255,255,0.8) 1px, transparent 1px), radial-gradient(circle at 70% 60%, rgba(255,255,255,0.8) 1px, transparent 1px), radial-gradient(circle at 40% 80%, rgba(255,255,255,0.8) 1.5px, transparent 1.5px), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.8) 1px, transparent 1px);
      background-size: 100px 100px; opacity: 0.5; pointer-events: none; z-index: 0;
    }
    .explore-blocks { padding: 18px 24px 70px; display: flex; gap: 14px; flex-wrap: wrap; justify-content: center; min-height: 280px; align-content: flex-start; position: relative; z-index: 1; }
    .explore-slot { width: 84px; height: 104px; background: rgba(255,255,255,0.7); border: 3px solid #8a6844; border-radius: 12px; display: flex; flex-direction: column; align-items: center; justify-content: center; cursor: pointer; box-shadow: inset 0 0 0 3px rgba(255,255,255,0.5), 0 4px 0 #8a6844; transition: transform 0.1s; position: relative; z-index: 10; pointer-events: auto; }
    .explore-slot:active { transform: translateY(4px); box-shadow: inset 0 0 0 3px rgba(255,255,255,0.5), 0 0 0 #8a6844; }
    .explore-slot .feature-name { font-size: 13px; font-weight: bold; color: #7a5c38; margin-top: 8px; text-align: center; }
    
    .field.explore-mode .explore-slot { background: rgba(43,27,84,0.7); border-color: #8a5cc0; box-shadow: inset 0 0 0 3px rgba(138,92,192,0.5), 0 4px 0 #4b3082; }
    .field.explore-mode .explore-slot:active { transform: translateY(4px); box-shadow: inset 0 0 0 3px rgba(138,92,192,0.5), 0 0 0 #4b3082; }
    .field.explore-mode .explore-slot .feature-name { color: #e0ccff; text-shadow: 0 1px 2px #000; }
    .block { display: grid; grid-template-columns: repeat(2, var(--plot, 74px)); grid-auto-rows: var(--plot, 74px);
      gap: 6px; position: relative; }
    .plot { background-color: #b99b84; border: 3px solid #937863; border-radius: 6px;
      box-shadow: inset 0 3px 0 rgba(255,244,225,.35), inset 0 -3px 0 rgba(80,55,35,.18);
      display: flex; align-items: flex-end; justify-content: center; padding-bottom: 3px;
      position: relative; cursor: pointer; background-size: 100% 100%; }
    .plot.watered { background-color: #9d7458; border-color: #7a5a40; }
    .plot .bar { position: absolute; left: 6px; right: 6px; bottom: 3px; height: 5px;
      background: rgba(60,35,15,.35); border-radius: 3px; overflow: hidden; }
    .plot .bar i { display: block; height: 100%; background: #a4dc8c; border-radius: 3px; }
    .plot .ripe { position: absolute; top: -10px; right: -6px; width: 20px; height: 20px; background: #ffd94d;
      border: 3px solid #b8891f; border-radius: 50% 50% 50% 4px; color: #8a5f00; font-weight: bold; font-size: 13px;
      text-align: center; line-height: 15px; z-index: 3; }
    .block.locked .plot { background-color: #aecb87; border-color: #9aa378; cursor: default; }
    .sign { position: absolute; left: 50%; top: 50%; transform: translate(-50%,-50%); width: 92px;
      background: linear-gradient(#f7ead2,#ecd6ae); border: 3px solid #b08a5c; border-radius: 6px;
      box-shadow: 0 3px 0 #8a6844, inset 0 0 0 2px #fff6e0; padding: 6px 4px; font-size: 12px; font-weight: bold;
      color: #7a5c38; text-align: center; line-height: 1.35; z-index: 4; cursor: pointer; }
    .sign small { display: flex; align-items: center; justify-content: center; gap: 3px; font-size: 10px; color: #9a7a50; }
    .sign.confirm { border-color: var(--accLine); color: var(--accFg); }
    /* #26: l\u1EDBp cho b\xE9 tr\xF2n t\u1EF1 do \u0111i l\u1EA1i \u2014\u2014 ph\u1EE7 to\xE0n b\u1ED9 khu ru\u1ED9ng, \u0111i theo khu v\u1EF1c (lo\u1EA1i l\xE0m vi\u1EC7c = h\xE0ng d\u01B0\u1EDBi, lo\u1EA1i \u0111i d\u1EA1o = b\u1EDD ru\u1ED9ng) */
    .mascots { position: absolute; inset: 0; z-index: 6; pointer-events: none; }
    /* C\u1EA3m \u1EE9ng: kh\xF4ng c\xF3 touch-action:none th\xEC tr\xECnh duy\u1EC7t coi c\xFA vu\u1ED1t l\xE0 cu\u1ED9n trang, b\u1EAFn pointercancel v\xE0 c\u1EAFt ngang phi\xEAn k\xE9o */
    .mascots[data-drag="1"] .pet { touch-action: none; }
    .pet { pointer-events: auto; cursor: pointer; transition: transform .12s; position: absolute; will-change: transform;
      left: 0; bottom: 0; will-change: transform, translate; }
    .pet:active { transform: scale(1.15, .85); }
    .pbody { display: block; animation: petbob 1.8s ease-in-out infinite; }
    .pet.walk .pbody { animation: pethop var(--hopd, .33s) linear infinite; }   /* v0.7\u2460: \u0111i b\u1ED9 = nh\u1EA3y li\xEAn ti\u1EBFp theo \u0111\u01B0\u1EDDng parabol */
    .pet[data-pet="cloudMallow"] .pbody,
    .pet[data-pet="ghostBlob"] .pbody,
    .pet[data-pet="jellyfish"] .pbody { animation: petfloat 3.2s ease-in-out infinite; }  /* M\xE2y / ma / s\u1EE9a: ki\u1EC3u bay l\u01A1 l\u1EEDng (\u0111\xE8 l\xEAn walk) */
    .pet.sleep .pbody { animation: petsleep 3.6s ease-in-out infinite; }   /* v0.7\u2461: ng\u1EE7 = th\u1EDF ch\u1EADm (\u0111\xE8 l\xEAn bay, ma c\u0169ng ph\u1EA3i h\u1EA1 c\xE1nh m\xE0 ng\u1EE7) */
    .pet.flip .pbody img { transform: scaleX(-1); }
    .zzz { position: absolute; bottom: calc(100% - 8px); left: 68%; font-size: 12px; font-weight: bold;
      color: #7a90c8; text-shadow: 1px 1px 0 #fff; pointer-events: none; animation: zrise 2.6s linear infinite; }
    .zzz.z2 { left: 52%; font-size: 10px; animation-delay: 1.3s; }
    @keyframes zrise { 0% { opacity: 0; transform: translate(0, 2px) scale(.7); }
      25% { opacity: 1; } 100% { opacity: 0; transform: translate(7px, -15px) scale(1.15); } }
    @keyframes petsleep { 0%, 100% { transform: translateY(2px) scale(1.07, .93); }
      50% { transform: translateY(2px) scale(1.03, .97); } }
    @keyframes petbob { 0%, 100% { transform: translateY(0) scale(1, 1); }
      30% { transform: translateY(1px) scale(1.05, .94); }
      65% { transform: translateY(-4px) scale(.96, 1.05); } }
    @keyframes petfloat { 0%, 100% { transform: translateY(-2px); } 50% { transform: translateY(-8px); } }
    /* M\u1ED9t chu k\u1EF3 nh\u1EA3y: l\u1EA5y \u0111\xE0 b\u1EB9t xu\u1ED1ng \u2192 bay l\xEAn k\xE9o d\xE0i \u2192 ch\u1EA1m \u0111\u1EA5t n\xE9n nh\u1EB9 \u2192 v\u1EC1 d\xE1ng chu\u1EA9n, \u0111\u1ED9 cao do --hy quy\u1EBFt \u0111\u1ECBnh (kh\xE1c nhau theo d\xE1ng \u0111i) */
    @keyframes pethop { 0%, 100% { transform: translateY(0) scale(1.07, .93); }
      40% { transform: translateY(var(--hy, -9px)) scale(.94, 1.06); }
      80% { transform: translateY(-1px) scale(1.02, .99); } }
    /* v0.8b: qu\u1EA7y h\xE0ng c\u1EE7a ph\xF9 thu\u1EF7 tr\xF2n (wen s\u1EEDa l\u1EA7n 2: h\xE0ng d\u01B0\u1EDBi c\xF9ng b\xEAn tr\xE1i, x\u1EBFp c\xF9ng h\xE0ng v\u1EDBi b\xE9 l\xE0m vi\u1EC7c; b\u1EA3ng \u0111\u01A1n h\xE0ng \u0111\u1ED9i tr\xEAn \u0111\u1EA7u) */
    #witch { position: absolute; left: 12%; bottom: 2px; z-index: 6; cursor: pointer; display: none; text-align: center; }
    #witch.show { display: block; }
    #witch .wbody { display: block; animation: petfloat 3.2s ease-in-out infinite; }
    #witch .wtag { display: inline-block; margin-bottom: 1px; font-size: 10px; font-weight: bold; color: #cfc9f2;
      background: #2a2650; border: 2px solid #8f86d9; border-radius: 6px; padding: 1px 7px;
      box-shadow: 0 0 8px rgba(143,134,217,.5); }
    .pbubble.wb { border-color: #8f86d9; color: #5a52a0; background: #f4f2ff; }
    /* v0.8b: trang \u0111\u01A1n h\xE0ng qu\u1EF9 \u0111\u1EA1o sao A (b\u1EA3n thi\u1EBFt k\u1EBF ch\u1ED1t) */
    .wzwrap { background: linear-gradient(160deg,#1c1b33,#232145 60%,#1a1e3d); border: 3px double #8f86d9;
      border-radius: 10px; padding: 14px 12px 12px; box-shadow: 0 0 14px rgba(143,134,217,.3); }
    .wzhead { color: #cfc9f2; text-align: center; letter-spacing: 3px; font-size: 14px; font-weight: bold; }
    .wzsub { color: #7a72c0; font-size: 10px; text-align: center; letter-spacing: 2px; margin: 2px 0 10px; }
    .wzord { border: 1px solid #4a4488; border-radius: 8px; padding: 9px 10px 7px; margin-bottom: 8px;
      background: rgba(143,134,217,.08); position: relative; }
    .wzord .star { position: absolute; left: -7px; top: 50%; transform: translateY(-50%); color: #ffd94d;
      font-size: 13px; text-shadow: 0 0 6px #ffd94d; }
    .wzwant { color: #e8e4ff; font-size: 13px; font-weight: bold; }
    .wzwant em { font-style: normal; color: #ffd94d; }
    .wzwant .mutq { color: #f2a8c8; }
    .wzgive { color: #9a92d9; font-size: 11px; margin-top: 3px; }
    .wzbtn { float: right; margin-top: -2px; font-size: 11px; font-weight: bold; color: #ffd94d;
      border: 1px solid #b09a3a; border-radius: 6px; padding: 2px 10px; cursor: pointer; background: rgba(255,217,77,.08); }
    .wzbtn.off { color: #6a63b0; border-color: #4a4488; cursor: default; }
    .wzbtn.done { color: #7cd4a4; border-color: #3f8a5a; cursor: default; }
    .wzleave { clear: both; color: #6a63b0; font-size: 10px; text-align: center; letter-spacing: 1px; margin-top: 8px; }
    .pbubble { position: absolute; bottom: calc(100% + 3px); left: 50%; transform: translateX(-50%);
      background: #fbfdff; border: 2px solid #7db8d8; border-radius: 8px 8px 8px 0;
      font-size: 11px; font-weight: bold; color: #4a88aa; padding: 2px 7px; white-space: nowrap;
      pointer-events: none; animation: pbfloat 1.6s ease forwards; z-index: 9; }
    .pet[data-pet="octo"] .pbubble { border-color: #ab84dd; color: #7a54b5; background: #fdfbff; }
    .emote { position: absolute; pointer-events: none; z-index: 8; animation: pbfloat 1.2s ease forwards; }
    @keyframes pbfloat { 0% { opacity: 0; transform: translateY(4px); } 15% { opacity: 1; transform: translateY(0); }
      70% { opacity: 1; transform: translateY(0); } 100% { opacity: 0; transform: translateY(-10px); } }
    .fdot { position: absolute; left: 4px; top: 4px; width: 7px; height: 7px; border-radius: 50%;
      background: #6cb457; border: 1px solid #3e7d3a; z-index: 3; }
    .dbot { display: none; }
    .ctrlrow { display: flex; gap: 6px; align-items: stretch; padding: 7px 14px 0; flex-wrap: nowrap; }   /* Kho\xE1 m\u1ED9t h\xE0ng: kh\xF4ng \u0111\u1EE7 ch\u1ED7 th\xEC \xE9p ch\u1EEF ch\u1EE9 kh\xF4ng \xE9p khung */
    .ctrlrow .chip { flex: 0 1 auto; min-width: 0; white-space: normal; line-height: 1.15; text-align: center; }
    .chip.witchchip { background: #efe9fa; border-color: #9a6ad8; color: #6a4a9a;
      box-shadow: inset 0 2px 0 #f8f4ff, 0 2px 0 rgba(122,74,184,.35); }
    .chips { display: flex; gap: 6px; margin-left: auto; }
    .chip { font-size: 11px; padding: 2px 8px 2px 6px; border-radius: 6px; border: 2px solid #c2a274;
      background: #faf0dc; color: #8a6a42; font-weight: bold; cursor: pointer;
      display: inline-flex; align-items: center; gap: 5px; user-select: none;
      box-shadow: inset 0 2px 0 #fffdf4, 0 2px 0 rgba(154,122,84,.3); }
    .chip::before { content: ''; width: 7px; height: 7px; border-radius: 50%; background: #d9c49a;
      box-shadow: inset 0 -2px 0 rgba(0,0,0,.15); }
    .chip.on { background: #ead9f7; border-color: #9a6ad8; color: #6a4a9a; }
    .chip.on::before { background: #b48ae0; box-shadow: inset 0 -2px 0 #8a5cc0, 0 0 4px #cdb0ef; }
    .banner { margin: 9px 12px 0; padding: 7px 11px; background: var(--banBg);
      border: 3px solid var(--banLine); border-radius: 8px; font-size: 12px; color: var(--banFg);
      display: none; align-items: center; gap: 9px; box-shadow: inset 0 2px 0 var(--banIn); cursor: pointer; position: relative; }
    .banner #btxt { flex: 1; min-width: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }   /* M\u1EB7c \u0111\u1ECBnh m\u1ED9t d\xF2ng, b\u1EA5m v\xE0o banner th\xEC m\u1EDF r\u1ED9ng */
    .banner.expand #btxt { white-space: normal; }
    .banner.show { display: flex; }
    .banner .btag { background: var(--tagBg); color: var(--tagFg); font-weight: bold; padding: 1px 7px;
      border-radius: 5px; font-size: 11px; white-space: nowrap; }
    .bmut { flex-shrink: 0; width: 24px; height: 24px; border-radius: 50%;
      background: linear-gradient(135deg, #ead9f7, #d4b8f0); border: 2px solid #9a6ad8;
      color: #6a4a9a; font-size: 13px; font-weight: bold; cursor: pointer;
      display: none; align-items: center; justify-content: center;
      transition: transform .15s, box-shadow .15s; box-shadow: 0 1px 3px rgba(154,106,216,.3); }
    .bmut:hover { transform: scale(1.15); box-shadow: 0 2px 8px rgba(154,106,216,.5); }
    .bmut:active { transform: scale(0.95); }
    .mut-popup { display: none; position: absolute; top: calc(100% + 6px); right: 0;
      min-width: 260px; max-width: 340px; max-height: 240px; overflow-y: auto;
      background: #fdfaff; border: 2px solid #c4a0e8; border-radius: 10px;
      box-shadow: 0 4px 16px rgba(120,60,180,.18); padding: 10px 12px;
      z-index: 20; cursor: default; font-size: 12px; }
    .mut-popup.open { display: block; animation: mutFadeIn .18s ease-out; }
    @keyframes mutFadeIn { from { opacity: 0; transform: translateY(-6px); } to { opacity: 1; transform: translateY(0); } }
    .mut-header { font-weight: bold; color: #7a4aaa; font-size: 13px; margin-bottom: 8px;
      padding-bottom: 6px; border-bottom: 1px dashed #d8c0ef; }
    .mut-chance { font-weight: normal; color: #a080c0; font-size: 11px; }
    .mut-list { display: flex; flex-direction: column; gap: 4px; }
    .mut-row { display: flex; gap: 8px; padding: 4px 6px; border-radius: 6px; background: #f4eefa; }
    .mut-row:nth-child(even) { background: #efe4f8; }
    .mut-crop { font-weight: bold; color: #6a4a9a; white-space: nowrap; min-width: 70px; flex-shrink: 0; }
    .mut-effect { color: #5a4070; flex: 1; line-height: 1.35; }\r
    .mdrop { flex-direction: column; gap: 2px; max-height: 150px; overflow: auto; background: #fffdf4;
      border: 2px solid #c2a274; border-radius: 6px; padding: 5px; }
    .mdrop span { padding: 4px 9px; font-size: 12px; font-weight: bold; color: #6b4f2e; border-radius: 5px; cursor: pointer; }
    .mdrop span:hover { background: var(--accBg); color: var(--accFg); }
    .inp { width: 100%; background: #fffdf4; border: 2px solid #c2a274; border-radius: 6px;
      padding: 6px 9px; font-size: 12px; color: #6b4f2e; font-family: inherit;
      box-shadow: inset 0 2px 3px rgba(154,122,84,.18); }
    textarea.inp { resize: vertical; min-height: 60px; }
    .shead { font-size: 13px; font-weight: bold; color: var(--shead); margin: 10px 0 6px; }
    /* ===== V\xE9 gi\u1EA5y phong c\xE1ch ho\xE0i c\u1ED5 (chuy\u1EC3n t\u1EEB b\u1EA3n xem tr\u01B0\u1EDBc c\u1EE7a v\xE9) ===== */
    .tk { position: relative; width: 100%; display: flex; border-radius: 8px;
      box-shadow: 0 8px 20px rgba(0,0,0,.3); margin: 4px 0 10px; }
    .tk.water { --paper: #e9f0e4; --ink: #3f7a8a; --stamp: #4a90a8; --curlD: #b9cfc4; --curlL: #dce8dd; transform: rotate(-1deg); }
    .tk.mine  { --paper: #ece4f0; --ink: #6a4a8a; --stamp: #8a5cc0; --curlD: #c4b3d4; --curlL: #ded2ea; transform: rotate(0.8deg); }
    .tk .stub { flex: none; width: 96px; border-radius: 8px 0 0 8px; border: 3px solid var(--ink); border-right: none;
      background: var(--paper);
      background-image: radial-gradient(circle at 25% 18%, rgba(160,120,60,.1) 0 18%, transparent 19%),
        repeating-linear-gradient(0deg, transparent 0 6px, rgba(120,90,50,.05) 6px 7px);
      display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 5px; padding: 10px 4px; }
    .tk .no { font-size: 9px; letter-spacing: 1px; color: var(--ink); opacity: .75; font-weight: bold; }
    .tk .perf { flex: none; width: 0; border-left: 3px dashed var(--ink); opacity: .8; position: relative; }
    .tk .perf::before, .tk .perf::after { content: ''; position: absolute; left: -8px; width: 14px; height: 14px;
      border-radius: 50%; background: #f8efe0; }
    .tk .perf::before { top: -10px; } .tk .perf::after { bottom: -10px; }
    .tk .tmain { flex: 1; border-radius: 0 8px 8px 0; border: 3px solid var(--ink); border-left: none;
      background: var(--paper);
      background-image: radial-gradient(circle at 80% 25%, rgba(160,120,60,.1) 0 15%, transparent 16%),
        repeating-linear-gradient(0deg, transparent 0 6px, rgba(120,90,50,.05) 6px 7px);
      padding: 12px 12px 10px; position: relative; overflow: hidden; }
    .tk .inner { border: 1px solid var(--ink); border-radius: 4px; padding: 7px 10px 8px; }
    .tk .eyebrow { font-size: 8px; letter-spacing: 2px; color: var(--ink); opacity: .7; font-weight: bold; }
    .tk .tname { font-size: 17px; font-weight: bold; color: var(--ink); letter-spacing: 3px; margin: 2px 0; }
    .tk .tsub { font-size: 10px; color: var(--ink); opacity: .85; line-height: 1.7; }
    .tk .trow { display: flex; align-items: flex-end; justify-content: space-between; margin-top: 6px; }
    .tk .serial { font-family: Consolas, monospace; font-size: 11px; font-weight: bold; letter-spacing: 2px; color: var(--ink); }
    .tk .valid { font-size: 8px; color: var(--ink); opacity: .65; letter-spacing: 1px; }
    .tk .curl { position: absolute; right: -1px; bottom: -1px; width: 28px; height: 28px;
      background: linear-gradient(315deg, transparent 47%, var(--curlD) 48%, var(--curlL) 60%, var(--paper) 90%);
      border-radius: 0 0 8px 0; box-shadow: -3px -3px 6px rgba(60,40,15,.18);
      clip-path: polygon(100% 0, 0 100%, 100% 100%); }
    .tk .stamp { position: absolute; right: 36px; top: -5px; width: 44px; height: 44px; border-radius: 50%;
      border: 2px solid var(--stamp); color: var(--stamp); display: flex; align-items: center; justify-content: center;
      font-size: 11px; font-weight: bold; transform: rotate(14deg); opacity: .55;
      box-shadow: inset 0 0 0 1px var(--stamp); pointer-events: none; text-align: center; }
    .tk.mine .tmain::after { content: ''; position: absolute; right: 0; top: 0; bottom: 0; width: 8px;
      background: repeating-linear-gradient(45deg, #d8b13a 0 6px, #4a3a52 6px 12px); opacity: .85; }
    .cnt2 { position: absolute; right: 3px; top: 3px; font-size: 9px; background: rgba(255,253,244,.9);
      border: 1px solid #c2a274; border-radius: 4px; padding: 0 3px; color: #7a5c38; font-weight: bold; z-index: 3; }
    .sign.poor { opacity: .6; }
    /* Thanh c\xF4ng c\u1EE5 b\u1EA3n m\u1EDBi: b\xECnh th\u01B0\u1EDDng = tai nh\u1ECF thu n\u1EEDa d\xE1n m\xE9p tr\xE1i (kh\xF4ng chi\u1EBFm \u0111\u1ED3ng c\u1ECF, kh\xF4ng che b\xE9 tr\xF2n \u0111i d\u1EA1o); b\u1EA5m m\u1EDF = bung ra m\u1ED9t c\u1ED9t d\u1ECDc theo b\u1EDD ru\u1ED9ng */
    .toolbar { position: absolute; display: flex; z-index: 7; transition: left .22s ease; }
    .toolbar:not(.open) { left: -14px; bottom: 12px; padding: 5px 5px 5px 14px;
      background: linear-gradient(#f7ead2,#eed9b8); border: 3px solid #b08a5c; border-left: none;
      border-radius: 0 10px 10px 0; box-shadow: 0 3px 0 #8a6844, inset 0 0 0 2px #fff6e0; }
    .toolbar.open { left: 0; top: 0; bottom: 0; flex-direction: column; justify-content: center;
      align-items: center; gap: 6px; padding: 10px 6px; background: linear-gradient(90deg,#f7ead2,#eed9b8);
      border-right: 3px solid #b08a5c; border-radius: 0 10px 10px 0;
      box-shadow: 3px 0 0 rgba(138,104,68,.35), inset 0 0 0 2px #fff6e0; }
    @media (max-width: 640px) {
      .toolbar.open { flex-direction: row; top: auto; left: 0; right: 0; bottom: 0;
        border-right: none; border-top: 3px solid #b08a5c; border-radius: 10px 10px 0 0; padding: 6px 10px;
        box-shadow: 0 -3px 0 rgba(138,104,68,.35), inset 0 0 0 2px #fff6e0; }
      .mode-tip { left: 10px; bottom: 70px; }
    }
    .tool { width: 40px; height: 40px; background: #faf0dc; border: 2px solid #c2a274; border-radius: 6px;
      display: flex; align-items: center; justify-content: center; cursor: pointer;
      box-shadow: inset 0 2px 0 #fffdf4, inset 0 -2px 0 #e3c795; }
    .tool.selected { border-color: var(--accLine); background: var(--accBg); box-shadow: inset 0 0 0 2px var(--selGlowA), 0 0 8px var(--selGlowB); }
    .tool.mini { width: 40px; height: 20px; color: #8a6a42; font-weight: bold; font-size: 11px; background: #f0dfc0; }
    .mode-tip { position: absolute; left: 62px; bottom: 14px; background: var(--accBg); border: 2px solid var(--accLine);
      border-radius: 6px; padding: 3px 8px; font-size: 11px; font-weight: bold; color: var(--accFg); z-index: 7; display: none; }
    .bottombar { display: flex; align-items: stretch; gap: 10px; padding: 10px 14px 12px; flex: none; }
    .btn { flex: 1; padding: 6px 4px; background: linear-gradient(#faf0dc,#eed9b8); border: 3px solid #b08a5c;
      border-radius: 8px; box-shadow: inset 0 0 0 2px #fff6e0, inset 0 3px 0 #fffaf0, inset 0 -4px 0 #d9ba8a, 0 4px 0 #9a7a54;
      font-size: 12px; font-weight: bold; color: #7a5c38; text-shadow: 1px 1px 0 #fff3dd; text-align: center;
      display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px; cursor: pointer; user-select: none; white-space: nowrap; }
    .modal { position: absolute; inset: 0; background: rgba(60,40,20,.35); display: none; align-items: center;
      justify-content: center; z-index: 20; padding: 14px; }
    .modal.open { display: flex; }
    .mpanel { width: min(480px, 96%); max-height: 90%; overflow: auto; background: #f8efe0; border: 4px solid #c9a273;
      border-radius: 10px; box-shadow: inset 0 0 0 4px #fff6e8, 0 10px 30px rgba(0,0,0,.45); }
    .mtitle { background: var(--sky); border-bottom: 3px solid var(--skyLine); padding: 8px 12px;
      display: flex; align-items: center; gap: 8px; font-size: 14px; font-weight: bold; color: #7a5c38; }
    .mtitle > span:first-child { background: linear-gradient(#faf0dc,#eed9b8); border: 2px solid #8a6844; border-radius: 7px;
      padding: 2px 10px; text-shadow: 1px 1px 0 #fff3dd; box-shadow: 0 2px 0 var(--tintSoft), inset 0 0 0 2px #fff6e0; }
    .mtitle .grow { flex: 1; }
    .mbody { padding: 10px 12px 12px; }
    .tabs { display: flex; gap: 6px; margin-bottom: 10px; flex-wrap: wrap; }
    .tab { padding: 4px 12px; border-radius: 7px; background: #f0dfc0; border: 2px solid #c2a274; color: #8a6a42;
      font-size: 12px; font-weight: bold; cursor: pointer; }
    .tab.active { background: var(--accBg); border-color: var(--accLine); color: var(--accFg); }
    .items { display: flex; flex-direction: column; gap: 7px; }
    .item { display: flex; align-items: center; gap: 9px; padding: 5px 9px; background: #faf0dc;
      border: 2px solid #c2a274; border-radius: 8px; }
    .item .icon { width: 40px; height: 40px; flex: none; background: #f4e6cf; border: 2px solid #d9c49a;
      border-radius: 6px; display: flex; align-items: center; justify-content: center; }
    .item .info { flex: 1; min-width: 0; }
    .item .name { font-size: 13px; font-weight: bold; color: #6b4f2e; }
    .selrow { cursor: pointer; }
    .selrow.selon { border-color: var(--accLine); box-shadow: inset 0 0 0 2px var(--accBg); }
    .selmark { width: 22px; text-align: center; font-size: 16px; font-weight: bold; color: var(--accFg); flex: none; }
    .item .meta { font-size: 11px; color: #a3763d; margin-top: 1px; line-height: 1.5; }   /* M-2: m\xF4 t\u1EA3 kh\xF4ng c\u1EAFt ng\u1EAFn, xu\u1ED1ng d\xF2ng \u0111\u1EA7y \u0111\u1EE7 (m\xF4 t\u1EA3 ch\u1EE9c n\u0103ng \u0111\u1ED9t bi\u1EBFn l\xE0 th\xF4ng tin c\u1ED1t l\xF5i) */
    .acts { display: flex; gap: 5px; flex: none; }
    .ibtn { width: 30px; height: 30px; background: #faf0dc; border: 2px solid #b08a5c; border-radius: 6px;
      display: flex; align-items: center; justify-content: center; cursor: pointer;
      font-size: 15px; font-weight: bold; color: #7a5c38; user-select: none;
      box-shadow: inset 0 2px 0 #fffdf4, inset 0 -2px 0 #e3c795; }
    .price { display: flex; align-items: center; gap: 3px; font-size: 13px; font-weight: bold; color: #a3763d; }
    .buy { padding: 5px 12px; background: var(--buyBg); border: 3px solid var(--buyLine);
      border-radius: 7px; box-shadow: inset 0 -3px 0 var(--buyInset), 0 3px 0 var(--buyDeep); font-size: 12px; font-weight: bold;
      color: var(--buyFg); cursor: pointer; white-space: nowrap; user-select: none; }
    .buy.plain { background: linear-gradient(#faf0dc,#eed9b8); border-color: #b08a5c; color: #7a5c38;
      box-shadow: inset 0 -3px 0 #d9ba8a, 0 3px 0 #9a7a54; }
    .buy.witchy { background: linear-gradient(#efe9fa,#e2d6f5); border-color: #9a6ad8; color: #6a4a9a;
      box-shadow: inset 0 -3px 0 #cdb0ef, 0 3px 0 #7a4ab8; }   /* #53: gieo l\u1EA1i = ph\xF9 thu\u1EF7 b\xF3i to\xE1n, m\u1EB7c m\xE0u t\xEDm c\u1EE7a c\xF4 \u1EA5y */
    .buy.off { background: #e8dcc2; border-color: #bfa984; color: #a99a78; box-shadow: 0 3px 0 #9a8a68; cursor: default; }
    .note { font-size: 11px; color: #a3763d; line-height: 1.7; background: #f4e6cf; border: 2px solid #ddc39a;
      border-radius: 7px; padding: 7px 10px; }
    .toast { position: absolute; left: 50%; top: 52px; transform: translateX(-50%); background: var(--accBg);
      border: 2px solid var(--accLine); color: var(--accFg); font-size: 12px; font-weight: bold; border-radius: 7px;
      padding: 4px 12px; z-index: 30; display: none; }
    .picker { display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 8px; }
    .pick { display: flex; align-items: center; gap: 5px; padding: 4px 9px; background: #faf0dc;
      border: 2px solid #c2a274; border-radius: 7px; font-size: 12px; font-weight: bold; color: #6b4f2e; cursor: pointer; }
    .pick.active { border-color: var(--accLine); background: var(--accBg); color: var(--accFg); }
    /* Gachapon Animations & FX */
    @keyframes gachaShake {
      0% { transform: rotate(0deg); }
      20% { transform: rotate(-6deg); }
      40% { transform: rotate(6deg); }
      60% { transform: rotate(-4deg); }
      80% { transform: rotate(4deg); }
      100% { transform: rotate(0deg); }
    }
    @keyframes gachaDrop {
      0% { transform: translateY(-40px) scale(0.2); opacity: 0; }
      60% { transform: translateY(10px) scale(1.2); opacity: 1; }
      80% { transform: translateY(-4px) scale(0.95); }
      100% { transform: translateY(0) scale(1); }
    }
    .gacha-item-card.rarity-R\xE1c { border-color: #9e9e9e !important; background: #f5f5f5 !important; }
    .gacha-item-card.rarity-Th\u01B0\u1EDDng { border-color: #b0bec5 !important; background: #eceff1 !important; }
    .gacha-item-card.rarity-Hi\u1EBFm { border-color: #4a90e2 !important; background: #f0f7ff !important; }
    .gacha-item-card.rarity-S\u1EED-thi { border-color: #a335ee !important; background: #faf0ff !important; }
    .gacha-item-card.rarity-Huy\u1EC1n-tho\u1EA1i { border-color: #ff8000 !important; background: #fff8f0 !important; box-shadow: 0 0 10px rgba(255,128,0,0.6) !important; }
    /* Dungeon View */
    .dungeon-view { display: flex; flex: 1; width: 100%; background: #5f5870; z-index: 10; border-radius: 4px; padding: 10px; flex-direction: column; box-sizing: border-box; }
    .dg-arena { flex: 1; position: relative; border: 4px solid #3f3a50; border-radius: 8px; background: rgba(0,0,0,0.1); overflow: hidden; }
    .dg-dock { height: 84px; background: rgba(58,48,30,.7); margin-top: 10px; border-radius: 8px; border: 2px solid #8a6a42; display: flex; align-items: center; padding: 0 10px; gap: 12px; overflow-x: auto; overflow-y: hidden; }
    .dg-slot { width: 64px; height: 64px; flex-shrink: 0; background: rgba(255,255,255,.1); border: 2px dashed #b08a5c; border-radius: 8px; display: flex; align-items: center; justify-content: center; cursor: pointer; position: relative; -webkit-tap-highlight-color: transparent; user-select: none; touch-action: none; }
    .dg-slot img { width: 80% !important; height: 80% !important; object-fit: contain; pointer-events: none; }
    .dg-slot:hover { border-color: #d9ba8a; background: rgba(255,255,255,.2); }
    .dg-slot.placed { opacity: 0.4; pointer-events: none; }
    .dg-entity { position: absolute; left: 0; top: 0; width: 32px; height: 32px; transform: translate(-50%, -50%); user-select: none; touch-action: none; will-change: transform; }
    .dg-entity img { width: 100%; height: 100%; image-rendering: pixelated; pointer-events: none; }
    .dg-entity.flip img { transform: scaleX(-1); }
    @media (max-width: 640px) {
      #win, .dungeon-win { left: 0 !important; top: 0 !important; width: 100vw; height: 100vh; height: 100dvh; max-height: none; border: none; border-radius: 0; outline: none; }
      .dungeon-view { padding: 4px; }
      .dg-dock { height: 68px; padding: 0 8px; gap: 8px; }
      .dg-slot { width: 52px; height: 52px; }
    }
    .dg-hp-bar { position: absolute; top: -12px; left: -4px; width: 40px; height: 4px; background: #333; border: 1px solid #111; border-radius: 2px; overflow: hidden; z-index: 2; }
    .dg-hp-fill { height: 100%; background: #a4dc8c; transition: width 0.1s; }
    .dg-cd-bar { position: absolute; top: -7px; left: -4px; width: 40px; height: 3px; background: #333; border: 1px solid #111; border-radius: 1.5px; overflow: hidden; z-index: 2; }
    .dg-cd-fill { height: 100%; background: #ffeb3b; }
    .dg-skill-cd-bar { position: absolute; top: -3px; left: 0px; width: 32px; height: 2px; background: #333; border: 1px solid #111; border-radius: 1px; overflow: hidden; z-index: 2; }
    .dg-skill-cd-fill { height: 100%; background: #00bcd4; }
    .dg-entity.enemy .dg-hp-fill { background: #e06578; }
    .dg-dmg { position: absolute; left: 0; top: 0; font-size: 14px; font-weight: bold; color: #ff4444; text-shadow: 1px 1px 0 #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff; pointer-events: none; z-index: 10; animation: dmgFloat 0.8s ease-out forwards; }
    .dg-dmg.heal { color: #a4dc8c; }
    .dg-dmg.crit { color: #ff9800; font-size: 18px; text-shadow: 1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000; z-index: 15; }
    @keyframes dmgFloat { 0% { opacity: 1; transform: translate(-50%, 0) scale(0.5); } 20% { transform: translate(-50%, -15px) scale(1.2); } 100% { opacity: 0; transform: translate(-50%, -30px) scale(1); } }
    .dg-overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.85); z-index: 30; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px; overflow-y: auto; padding: 15px; box-sizing: border-box; }

    /* Shop UI */
    .dg-overlay *::-webkit-scrollbar { width: 6px; height: 6px; }
    .dg-overlay *::-webkit-scrollbar-track { background: rgba(0,0,0,0.1); border-radius: 3px; }
    .dg-overlay *::-webkit-scrollbar-thumb { background: #555; border-radius: 3px; }
    .dg-shop-box { display: flex; flex-direction: column; width: 100%; height: 100%; max-width: 800px; max-height: 85vh; background: #1a1a1e; border: 2px solid #3a3a40; border-radius: 16px; padding: 20px; box-sizing: border-box; box-shadow: 0 10px 30px rgba(0,0,0,0.7); }
    
    .dg-shop-header { display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #333; padding-bottom: 15px; margin-bottom: 15px; flex-shrink: 0; }
    .dg-shop-header-left { display: flex; gap: 15px; align-items: center; }
    .dg-shop-title { color: #ffd94d; margin: 0; font-size: 20px; font-weight: bold; }
    .dg-shop-gold { background: #25252b; color: #a4dc8c; font-size: 18px; font-weight: bold; padding: 6px 16px; border-radius: 20px; border: 1px solid #3a3a40; display: flex; align-items: center; gap: 6px; }
    .dg-shop-next-btn { background: linear-gradient(to bottom, #2196f3, #1976d2); color: white; padding: 10px 20px; font-size: 15px; font-weight: bold; border: none; border-radius: 12px; cursor: pointer; box-shadow: 0 4px 6px rgba(0,0,0,0.3); transition: 0.2s; flex-shrink: 0; }
    .dg-shop-next-btn:hover { filter: brightness(1.1); transform: scale(1.05); }
    .dg-shop-next-btn:active { transform: scale(0.95); }

    .dg-shop-content { display: flex; flex: 1; min-height: 0; gap: 20px; }
    
    .dg-shop-left { width: 100px; display: flex; flex-direction: column; gap: 8px; overflow-y: auto; padding-right: 10px; border-right: 2px solid #333; flex-shrink: 0; }
    .dg-shop-pet { background: #25252b; border: 2px solid transparent; border-radius: 12px; cursor: pointer; padding: 8px; text-align: center; transition: 0.2s; flex-shrink: 0; }
    .dg-shop-pet:hover { background: #303038; }
    .dg-shop-pet.selected { border-color: #ffd94d; background: #353540; }
    .dg-shop-pet .lv { font-size: 11px; font-weight: bold; color: #888; margin-top: 4px; }
    .dg-shop-pet.selected .lv { color: #ffd94d; }
    
    .dg-shop-right { flex: 1; display: flex; flex-direction: column; min-width: 0; min-height: 0; }
    .dg-shop-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; flex: 1; margin-bottom: 10px; align-content: start; overflow-y: auto; min-height: 0; padding-right: 8px; }
    .dg-shop-grid::-webkit-scrollbar { width: 6px; }
    .dg-shop-grid::-webkit-scrollbar-track { background: rgba(0,0,0,0.2); border-radius: 3px; }
    .dg-shop-grid::-webkit-scrollbar-thumb { background: #b08a5c; border-radius: 3px; }
    .dg-shop-card { background: linear-gradient(145deg, #25252b, #1e1e24); border: 1px solid #3a3a40; border-radius: 12px; padding: 15px; display: flex; justify-content: space-between; align-items: center; transition: transform 0.2s; }
    .dg-shop-card:hover { border-color: #555; transform: translateY(-2px); }
    .dg-shop-stat-name { color: #999; font-size: 12px; font-weight: bold; margin-bottom: 4px; }
    .dg-shop-stat-val { color: white; font-size: 18px; font-weight: bold; }
    .dg-btn-buy { background: linear-gradient(to bottom, #4caf50, #388e3c); color: white; border: none; padding: 8px 16px; border-radius: 6px; font-weight: bold; font-size: 14px; cursor: pointer; transition: 0.2s; box-shadow: 0 2px 4px rgba(0,0,0,0.3); }
    .dg-btn-buy:disabled { background: #444; color: #888; cursor: not-allowed; box-shadow: none; }
    .dg-btn-buy:not(:disabled):hover { filter: brightness(1.1); transform: scale(1.05); }
    .dg-btn-buy:not(:disabled):active { transform: scale(0.95); }
    @media (max-width: 640px) {
      .dg-shop-box { max-height: 95vh; padding: 15px; }
      .dg-shop-content { flex-direction: column; gap: 15px; }
      .dg-shop-left { width: 100%; flex-direction: row; border-right: none; border-bottom: 2px solid #333; padding-right: 0; padding-bottom: 12px; overflow-x: auto; overflow-y: hidden; }
      .dg-shop-pet { padding: 6px; }
      .dg-shop-header-left { flex-direction: column; align-items: flex-start; gap: 5px; }
      .dg-shop-title { font-size: 16px; }
      .dg-shop-gold { font-size: 16px; padding: 4px 12px; }
      .dg-shop-next-btn { padding: 8px 12px; font-size: 14px; }
      .dg-shop-grid { grid-template-columns: 1fr; gap: 10px; }
      .dg-shop-card { padding: 12px; }
    }
    .dg-title { font-size: 24px; font-weight: bold; color: #ffd94d; text-shadow: 0 4px 10px rgba(0,0,0,0.8); letter-spacing: 1px; text-align: center; margin-top: auto; }
    .dg-dock::-webkit-scrollbar { height: 8px; display: block; }
    .dg-dock::-webkit-scrollbar-track { background: rgba(0,0,0,0.2); border-radius: 4px; }
    .dg-dock::-webkit-scrollbar-thumb { background: #b08a5c; border-radius: 4px; }
    .dg-info-panel { position: absolute; top: 0; right: 0; bottom: 0; width: 250px; background: rgba(40,35,50,0.95); border-left: 2px solid #b08a5c; z-index: 30; padding: 10px; color: white; display: flex; flex-direction: column; overflow-y: auto; }
    .dg-info-panel::-webkit-scrollbar { width: 6px; }
    .dg-info-panel::-webkit-scrollbar-track { background: transparent; }
    .dg-info-panel::-webkit-scrollbar-thumb { background: #b08a5c; border-radius: 3px; }
    .dg-info-panel h3 { margin: 0 0 10px 0; color: #ffd94d; font-size: 16px; text-align: center; border-bottom: 1px solid #665; padding-bottom: 5px; }
    .dg-info-close { position: absolute; top: 5px; right: 10px; cursor: pointer; font-size: 20px; font-weight: bold; color: #aaa; }
    .dg-info-close:hover { color: white; }
    .dg-info-item { display: flex; gap: 10px; align-items: flex-start; margin-bottom: 15px; background: rgba(255,255,255,0.05); padding: 8px; border-radius: 6px; }
    .dg-info-item-icon { width: 40px; height: 40px; flex-shrink: 0; background: rgba(0,0,0,0.2); border-radius: 4px; display: flex; align-items: center; justify-content: center; }
    .dg-info-item-desc { font-size: 11px; line-height: 1.3; color: #ddd; }
    .dg-info-item-desc b { color: #a4dc8c; font-size: 13px; display: block; margin-bottom: 2px; }
    
    .dg-projectile { position: absolute; left: 0; top: 0; width: 16px; height: 16px; pointer-events: none; z-index: 5; transform: translate(-50%, -50%); }
    .dg-projectile img, .dg-projectile svg { width: 100%; height: 100%; }
    
    .dg-status { position: absolute; top: -16px; left: 50%; transform: translateX(-50%); display: flex; gap: 2px; pointer-events: none; z-index: 3; }
    .dg-status-icon { width: 10px; height: 10px; border-radius: 50%; border: 1px solid #000; }
    .dg-status-stun { background: #ffd700; box-shadow: 0 0 4px #ffd700; }
    .dg-status-poison { background: #9932cc; box-shadow: 0 0 4px #9932cc; }
    .dg-status-freeze { background: #00ffff; box-shadow: 0 0 4px #00ffff; }
    .dg-status-root { background: #8b4513; box-shadow: 0 0 4px #8b4513; }
    .dg-status-taunt { background: #ff4500; box-shadow: 0 0 4px #ff4500; }
    .dg-status-buff { background: #ff8c00; box-shadow: 0 0 4px #ff8c00; }
    
    @keyframes dgHop {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-8px); }
    }
    .dg-entity.walk > svg, .dg-entity.walk > img { animation: dgHop 0.3s linear infinite; }
    
    @keyframes dgAttack {
        0% { transform: scale(1); }
        50% { transform: scale(1.2) rotate(15deg); }
        100% { transform: scale(1); }
    }
    .dg-entity.attack > svg, .dg-entity.attack > img { animation: dgAttack 0.2s ease-out forwards; }
    
    .dg-reward-card { background: #3c2a20; border: 2px solid #b08a5c; padding: 8px; border-radius: 8px; flex: 1 1 90px; min-width: 90px; max-width: 140px; text-align: center; cursor: pointer; transition: transform 0.2s; display: flex; flex-direction: column; justify-content: center; align-items: center; box-sizing: border-box; }
    .dg-reward-card:hover { transform: scale(1.05); border-color: #ffda66; background: #4e382d; }
    .dg-reward-card h4 { margin: 0 0 5px 0; color: #ffda66; font-size: 14px; }
    .dg-reward-card p { margin: 0; font-size: 11px; color: #fff; line-height: 1.3; }
    
    .dg-hud { position: absolute; top: 8px; left: 10px; z-index: 25; background: rgba(0,0,0,0.6); padding: 4px 12px; border-radius: 6px; font-size: 13px; color: white; pointer-events: none; }
    
    .dg-boss-banner { position: absolute; inset: 0; z-index: 30; display: flex; align-items: center; justify-content: center; font-size: 36px; font-weight: bold; color: #ff2222; text-shadow: 0 0 20px #ff0000, 0 0 40px #ff0000; letter-spacing: 4px; animation: bossBlink 0.5s ease-in-out infinite alternate; pointer-events: none; background: rgba(0,0,0,0.5); }
    @keyframes bossBlink { 0% { opacity: 0.6; transform: scale(0.95); } 100% { opacity: 1; transform: scale(1.05); } }
    
    .dg-dmg.miss { color: #aaaaaa; font-style: italic; font-size: 13px; }
    
    .dg-new-record { color: #ffd700; font-size: 22px; font-weight: bold; text-shadow: 0 0 15px #ffd700, 0 0 30px #ff8c00; animation: newRecordPulse 0.8s ease-in-out infinite alternate; margin: 5px 0; }
    @keyframes newRecordPulse { 0% { transform: scale(1); } 100% { transform: scale(1.1); } }
    
    .betwrap { text-align: center; }
    .betnum { font-size: 40px; font-weight: bold; color: #7a5c38; line-height: 1.1;
      background: linear-gradient(#fffaf0, #f0dcc0); border: 3px solid #b08a5c; border-radius: 10px;
      width: 96px; margin: 6px auto; padding: 8px 0; box-shadow: inset 0 0 0 2px #fff6e0; }
    .betnum.rolling { animation: gachaShake 0.12s infinite alternate; }
    .betnum.res { border-color: #c86a1a; box-shadow: inset 0 0 0 2px #fff6e0, 0 0 10px rgba(200,106,26,.45); }
    .betresult { font-size: 12px; font-weight: bold; color: #7a5c38; min-height: 16px; margin-bottom: 2px; }
    .betchain { font-size: 11px; color: #9a7a54; min-height: 15px; word-break: break-all; }
    .betpot { font-size: 15px; font-weight: bold; color: #c86a1a; margin: 8px 0 4px; }
    
    .hero-pet-roster-list { display: flex; flex-direction: column; gap: 8px; max-height: 200px; overflow-y: auto; padding: 4px; border: 1px solid #4a3461; border-radius: 4px; background: rgba(0,0,0,0.2); }
    .hero-roster-item { display: flex; align-items: center; justify-content: space-between; padding: 6px; background: #2c2538; border: 1px solid #4a3461; border-radius: 4px; }
    .hero-roster-item.used { opacity: 0.5; filter: grayscale(0.5); }
    .h-r-pet { width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,0.3); border-radius: 4px; cursor: pointer; }
    .h-r-pet:hover { background: rgba(255,255,255,0.1); }
    .h-r-info { flex: 1; margin: 0 10px; font-size: 11px; color: #d0c0e8; }
    .h-r-bar { width: 100%; height: 10px; background: #110d14; border: 1px solid #4a3461; border-radius: 3px; position: relative; overflow: hidden; margin-top: 4px; display: flex; align-items: center; justify-content: center; font-size: 8px; color: white; }
    .h-r-fill { position: absolute; left: 0; top: 0; bottom: 0; background: linear-gradient(90deg, #6b4d8a, #a58bd3); z-index: 0; transition: width 0.3s; }
    .h-r-bar span { position: relative; z-index: 1; text-shadow: 0 1px 1px #000; }
    .h-r-upg { display: flex; align-items: center; gap: 4px; padding: 4px 8px; background: #3b2a52; border: 1px solid #6b4d8a; border-radius: 4px; cursor: pointer; color: #f2c231; font-weight: bold; font-size: 11px; }
    .h-r-upg:hover { background: #5a417d; }
    .h-r-upg:active { transform: translateY(1px); }
    
    .s-lv { position: absolute; bottom: -6px; left: 50%; transform: translateX(-50%); font-size: 10px; background: #1f1a26; padding: 1px 4px; border: 1px solid #4a3461; border-radius: 4px; font-weight: bold; color: white; }
    
    /* ---------- Hero Taskbar Mode ---------- */
    .hero-bar { position: fixed; bottom: 20px; right: 20px; width: 400px; height: 120px; background: #221d28; border: 3px solid #6b4d8a; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.8), inset 0 0 0 1px rgba(255,255,255,0.1); z-index: 999999; display: flex; align-items: center; padding-right: 4px; overflow: hidden; pointer-events: auto; touch-action: none; font-family: sans-serif; }
    .hero-toast { position: absolute; left: 50%; top: 4px; transform: translateX(-50%); background: rgba(31, 26, 38, 0.95); border: 1px solid #8a6bc8; color: #fff; padding: 2px 10px; border-radius: 8px; font-weight: bold; font-size: 11px; z-index: 1000; pointer-events: none; opacity: 0; transition: opacity 0.3s, top 0.3s; white-space: nowrap; }
    .hero-toast.show { opacity: 1; top: 10px; }
    .hero-drag { width: 24px; height: 100%; display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,0.3); border-right: 1px solid #4a3461; cursor: grab; color: #a58bd3; font-size: 14px; }
    .hero-drag:active { cursor: grabbing; background: rgba(0,0,0,0.5); }
    .hero-content { flex: 1; display: flex; flex-direction: column; height: 100%; position: relative; }
    .hero-bar.minimized { width: auto; height: 32px; border-radius: 16px; padding: 0; background: transparent; border: none; box-shadow: none; pointer-events: none; }
    .hero-bar.minimized .hero-drag { height: 32px; width: 32px; border-radius: 16px; border: 2px solid #6b4d8a; background: #221d28; box-shadow: 0 4px 15px rgba(0,0,0,0.8); pointer-events: auto; }
    .hero-bar.minimized .hero-toast, .hero-bar.minimized .hero-content, .hero-bar.minimized .hero-actions { display: none !important; }
    
    .hero-scene { flex: 1; position: relative; min-height: 0; overflow: hidden; }
    .hero-bg { position: absolute; inset: 0; background: repeating-linear-gradient(-45deg, #221c2d, #221c2d 20px, #1d1726 20px, #1d1726 40px); opacity: 0.8; animation: bgScroll 10s linear infinite; }
    @keyframes bgScroll { 0% { background-position: 0 0; } 100% { background-position: -200px 0; } }
    .hero-scene::before { content: ''; position: absolute; inset: 0; background: linear-gradient(to bottom, transparent, rgba(44,37,56,0.8)); z-index: 0; pointer-events: none; }
    .hero-scene::after { content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 16px; background: #3b2a52; border-top: 2px solid #6b4d8a; z-index: 0; }
    
    #hero-party { position: absolute; left: 10px; bottom: 16px; z-index: 1; display: flex; gap: 8px; align-items: flex-end; height: 45px; }
    #hero-enemy { position: absolute; left: 0px; bottom: 16px; z-index: 1; display: flex; align-items: flex-end; height: 45px; }
    
    .hero-pet, .hero-mob { display: flex; flex-direction: column; align-items: center; position: relative; left: 0; bottom: 0; justify-content: flex-end; will-change: transform; }
    .hero-mob { cursor: pointer; }
    .hero-pet svg, .hero-mob svg, .hero-pet img, .hero-mob img { display: block; height: 32px; width: auto; filter: drop-shadow(0 2px 2px rgba(0,0,0,0.5)); transform-origin: bottom center; margin-bottom: 2px; }
    
    .hp-bar-mini { width: 32px; height: 4px; background: #111; border-radius: 2px; overflow: hidden; margin-bottom: 2px; border: 1px solid #000; }
    .hp-fill-mini { height: 100%; background: #4caf50; transition: width 0.2s; }
    .hero-mob .hp-fill-mini { background: #f44336; }
    .cd-fill-mini { height: 100%; background: #ff9800; }
    
    .dmg-float { position: absolute; font-weight: bold; color: #ff5252; text-shadow: 0 0 2px #000, 1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000; font-size: 14px; pointer-events: none; animation: dmgFloat 0.8s ease-out forwards; z-index: 10; transform: translate(-50%, 0); display: flex; align-items: center; justify-content: center; gap: 2px; }
    .dmg-float.crit { font-size: 18px; color: #ffeb3b; }
    .dmg-float.drop { color: #4caf50; animation: dmgFloat 1.2s ease-out forwards; font-size: 13px; }
    .dg-projectile { position: absolute; left: 0; top: 0; pointer-events: none; z-index: 9; }
    @keyframes dmgFloat { 0% { opacity: 1; transform: translate(-50%, 0) scale(1); } 50% { opacity: 1; transform: translate(-50%, -20px) scale(1.1); } 100% { opacity: 0; transform: translate(-50%, -30px) scale(1); } }
    
    /* Animations */
    .hero-pet.idle svg, .hero-pet.idle img { animation: petBreathe 2s ease-in-out infinite; }
    .hero-pet.idle:nth-child(2) svg, .hero-pet.idle:nth-child(2) img { animation-delay: 0.3s; }
    .hero-pet.idle:nth-child(3) svg, .hero-pet.idle:nth-child(3) img { animation-delay: 0.6s; }
    .hero-pet.attack svg, .hero-pet.attack img { animation: petAttack 0.3s ease-in-out; }
    
    .hero-mob.idle svg, .hero-mob.idle img { animation: petBreathe 2.5s ease-in-out infinite alternate-reverse; }
    .hero-mob.hurt svg, .hero-mob.hurt img { animation: mobHurt 0.2s ease-in-out; }
    .hero-mob.attack svg, .hero-mob.attack img { animation: mobAttack 0.3s ease-out; }
    
    @keyframes petBreathe { 0%, 100% { transform: scaleY(1); } 50% { transform: scaleY(0.9) scaleX(1.05); } }
    @keyframes petAttack { 0% { transform: translateY(0) translateX(0) rotate(0); } 30% { transform: translateY(-8px) translateX(8px) rotate(10deg); } 100% { transform: translateY(0) translateX(0) rotate(0); } }
    @keyframes mobAttack { 0% { transform: translateX(0); } 50% { transform: translateX(-20px) scale(1.1); } 100% { transform: translateX(0); } }
    @keyframes mobHurt { 0% { transform: translateX(0); filter: brightness(1) drop-shadow(0 2px 2px rgba(0,0,0,0.5)); } 50% { transform: translateX(3px); filter: brightness(2) drop-shadow(0 2px 2px rgba(0,0,0,0.5)); } 100% { transform: translateX(0); filter: brightness(1) drop-shadow(0 2px 2px rgba(0,0,0,0.5)); } }
    
    .hero-stats { height: 24px; border-top: 1px solid #4a3461; background: #1f1a26; padding: 0 8px; display: flex; align-items: center; z-index: 1; font-size: 11px; color: #d0c0e8; font-weight: bold; }
    .hero-stats-row { display: flex; align-items: center; width: 100%; gap: 8px; }
    .h-lv { min-width: 26px; }
    .h-gold { color: #f2c231; display: inline-flex; align-items: center; gap: 4px; min-width: 40px; justify-content: flex-end; }
    .h-gold svg { fill: #f2c231; }
    .hero-exp-wrap { flex: 1; height: 12px; background: #110d14; border: 1px solid #4a3461; border-radius: 4px; position: relative; overflow: hidden; box-shadow: inset 0 1px 2px rgba(0,0,0,0.5); }
    .hero-exp-bar { height: 100%; background: linear-gradient(90deg, #6b4d8a, #a58bd3); width: 0%; transition: width 0.3s; }
    .hero-exp-txt { position: absolute; inset: 0; font-size: 9px; display: flex; align-items: center; justify-content: center; color: #fff; text-shadow: 0 1px 1px #000; letter-spacing: 0.5px; }
    .hero-actions { display: flex; flex-direction: column; justify-content: space-around; width: 30px; height: 100%; padding: 4px 0; border-left: 1px solid #4a3461; background: #191420; }
    .h-btn { width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; background: #3b2a52; border: 1px solid #6b4d8a; border-radius: 4px; cursor: pointer; color: #e0ccff; font-weight: bold; font-size: 16px; margin: 0 auto; fill: #e0ccff; }
    .h-btn:hover { background: #5a417d; }
    .h-btn:active { background: #2c2538; transform: translateY(1px); }
    .dmg-float { position: absolute; font-weight: bold; font-size: 13px; color: #ff5555; text-shadow: 0 1px 2px #000, 0 0 2px #000; animation: dFloat 0.8s forwards; z-index: 10; pointer-events: none; }
    .dmg-float.heal { color: #55ff55; }
    .dmg-float.drop { color: #55ffff; font-size: 15px; animation: dDrop 1.2s forwards; }
    @keyframes dDrop { 0% { opacity: 1; transform: translateY(0) scale(0.5); } 20% { transform: translateY(-20px) scale(1.2); } 100% { opacity: 0; transform: translateY(-30px) scale(1); } }
    .dmg-float.crit { font-size: 16px; color: #ffaa00; font-style: italic; }
    @keyframes dFloat { 0% { opacity: 1; transform: translateY(0) scale(1); } 50% { transform: translateY(-15px) scale(1.2); } 100% { opacity: 0; transform: translateY(-20px) scale(1); } }

    /* ---------- Hero Panel (Modal) ---------- */
    .hero-modal-wrapper { background: #1f1a28; color: #d4e3f0; margin: -10px -12px -12px; padding: 12px 14px 14px; border-radius: 0 0 6px 6px; min-height: 100%; font-family: sans-serif; }
    .hero-panel-stats { display: flex; justify-content: space-around; background: #2c2538; padding: 10px; border-radius: 8px; margin-bottom: 10px; font-weight: bold; color: #e0ccff; border: 1px solid #4a3461; }
    .hero-panel-section { font-size: 13px; color: #a58bd3; font-weight: bold; margin: 12px 0 6px; text-transform: uppercase; letter-spacing: 1px; }
    .hero-party-slots { display: flex; gap: 10px; justify-content: center; margin-bottom: 15px; }
    .hero-slot { width: 60px; height: 60px; background: #191420; border: 2px dashed #4a3461; border-radius: 8px; display: flex; align-items: center; justify-content: center; cursor: pointer; color: #6b4d8a; font-size: 11px; }
    .hero-slot.filled { border: 2px solid #a58bd3; background: #2c2538; }
    .hero-slot.filled:hover { border-color: #ff5555; background: #3b1a20; }
    .hero-pet-roster { display: flex; flex-wrap: wrap; gap: 8px; max-height: 120px; overflow-y: auto; padding: 4px; background: #191420; border-radius: 8px; border: 1px solid #3b2a52; }
    .hero-roster-pet { width: 48px; height: 48px; display: flex; align-items: center; justify-content: center; background: #2c2538; border: 2px solid transparent; border-radius: 6px; cursor: pointer; }
    .hero-roster-pet:hover { background: #3b2a52; border-color: #a58bd3; }
    .hero-roster-pet.used { opacity: 0.3; cursor: not-allowed; filter: grayscale(1); }
    .hero-style-list { display: flex; gap: 8px; }
    .hero-style-btn { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; background: #191420; border: 2px solid #3b2a52; padding: 8px; border-radius: 8px; cursor: pointer; color: #a58bd3; font-size: 11px; font-weight: bold; gap: 4px; }
    .hero-style-btn:hover { background: #2c2538; }
    .hero-style-btn.active { border-color: #f2c231; color: #f2c231; background: #3b2a10; }
    .hero-style-btn svg { fill: currentColor; }
    .hero-deploy-btn { margin-top: 20px; width: 100%; padding: 12px; font-size: 16px; font-weight: bold; background: linear-gradient(to bottom, #6b4d8a, #4a3461); border: 2px solid #a58bd3; border-radius: 8px; color: #fff; cursor: pointer; text-shadow: 0 1px 2px #000; letter-spacing: 2px; }
    .hero-deploy-btn:hover { background: linear-gradient(to bottom, #8a6bc8, #6b4d8a); }
    .hero-deploy-btn:active { transform: translateY(2px); }
    
    .p-skill-tier { display: flex; gap: 12px; padding: 10px; border-radius: 8px; border: 2px solid #3b2a52; background: #191420; align-items: center; }
    .p-skill-tier.locked { opacity: 0.5; filter: grayscale(1); border-style: dashed; }
    .p-skill-tier.unlocked { border-color: #6b4d8a; }
    .p-sk-icon { width: 32px; height: 32px; flex-shrink: 0; display:flex; align-items:center; justify-content:center; }
    .p-sk-desc { flex: 1; text-align: left; }

    .betsides { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 10px; }
    .betside { padding: 10px 4px; border-radius: 8px; border: 3px solid; cursor: pointer;
      font-weight: bold; user-select: none; line-height: 1.35; }
    .betside.hi { background: #e8f3dc; border-color: #4e903a; color: #3c702c; }
    .betside.lo { background: #f6e0e6; border-color: #a83a52; color: #8a2a40; }
    .betside .mult { display: block; font-size: 17px; }
    .betside .chance { display: block; font-size: 11px; opacity: .75; font-weight: normal; }
    .betside.off { opacity: .4; cursor: not-allowed; filter: grayscale(1); }
    
    /* Hero UI Improvements */
    .hero-bars-container { display: flex; flex-direction: column; width: 100%; gap: 1px; margin-top: 2px; }
    .hero-bar-row { height: 4px; width: 100%; background: #110d14; border: 1px solid #4a3461; border-radius: 2px; position: relative; overflow: hidden; }
    .hero-bar-fill { height: 100%; width: 0%; transition: width 0.1s linear; }
    .fill-cd { background: linear-gradient(90deg, #d38b24, #e8b958); }
    .fill-sk { background: linear-gradient(90deg, #4a3461, #8a6bc8); }

    /* Combat Effects */
    .fx-slash { position: absolute; pointer-events: none; z-index: 11; transform: translate(-50%, -50%); animation: fxSlash 0.2s ease-out forwards; }
    @keyframes fxSlash { 0% { opacity: 1; transform: translate(-50%, -50%) scale(0.5) rotate(-30deg); } 100% { opacity: 0; transform: translate(-50%, -50%) scale(1.5) rotate(20deg); } }
    
    .fx-impact { position: absolute; pointer-events: none; z-index: 11; transform: translate(-50%, -50%); animation: fxImpact 0.25s ease-out forwards; }
    @keyframes fxImpact { 0% { opacity: 1; transform: translate(-50%, -50%) scale(0.2); } 50% { opacity: 1; transform: translate(-50%, -50%) scale(1.2); } 100% { opacity: 0; transform: translate(-50%, -50%) scale(1.5); } }

    .fx-heal { position: absolute; pointer-events: none; z-index: 11; transform: translate(-50%, -50%); animation: fxHeal 1s ease-out forwards; }
    @keyframes fxHeal { 0% { opacity: 1; transform: translate(-50%, -50%) scale(0.5); } 100% { opacity: 0; transform: translate(-50%, -150%) scale(1.2); } }

    .fx-buff { position: absolute; pointer-events: none; z-index: 11; transform: translate(-50%, -50%); animation: fxBuff 0.8s ease-out forwards; }
    @keyframes fxBuff { 0% { opacity: 1; transform: translate(-50%, -50%) scale(1); filter: hue-rotate(0deg); } 100% { opacity: 0; transform: translate(-50%, -80%) scale(1.5); filter: hue-rotate(90deg); } }

    .fx-stun { position: absolute; pointer-events: none; z-index: 11; transform: translate(-50%, -100%); animation: fxStun 1s linear infinite; }
    @keyframes fxStun { 0% { transform: translate(-50%, -100%) rotate(0deg); } 100% { transform: translate(-50%, -100%) rotate(360deg); } }

    .laser-beam { position: absolute; height: 4px; background: #ff88dd; z-index: 8; transform-origin: left center; pointer-events: none; animation: fxLaser 0.3s ease-out forwards; box-shadow: 0 0 8px #ff88dd, 0 0 15px #ff88dd; }
    @keyframes fxLaser { 0% { opacity: 1; transform: scaleY(1); } 100% { opacity: 0; transform: scaleY(3); } }

    .pet-bump { animation: petBump 0.2s ease-out; }
    @keyframes petBump { 0% { transform: translateX(0); } 50% { transform: translateX(12px) scale(1.1); } 100% { transform: translateX(0); } }
    
    /* Giao d\u1ECBch P2P */
    .trade-split { display: flex; gap: 10px; margin-bottom: 10px; min-height: 250px; }
    .trade-col { flex: 1; background: #faf0dc; border: 2px solid #c2a274; border-radius: 8px; padding: 10px; display: flex; flex-direction: column; }
    .trade-header { font-size: 13px; font-weight: bold; color: #7a5c38; border-bottom: 2px dashed #d9c49a; padding-bottom: 5px; margin-bottom: 8px; text-align: center; }
    .trade-items { flex: 1; display: flex; flex-direction: column; gap: 4px; overflow-y: auto; max-height: 200px; }
    .trade-actions { margin-top: 10px; border-top: 2px dashed #d9c49a; padding-top: 10px; }
    .trade-item { display: flex; align-items: center; gap: 6px; padding: 4px 6px; background: #fffdf4; border: 1px solid #d9c49a; border-radius: 6px; }
    .trade-pick { display: flex; align-items: center; gap: 6px; padding: 6px; background: #fffdf4; border: 2px solid #d9c49a; border-radius: 6px; cursor: pointer; font-size: 12px; font-weight: bold; color: #6b4f2e; }
    .trade-pick:hover { border-color: var(--accLine); background: var(--accBg); color: var(--accFg); }
    @media (max-width: 640px) {
        .trade-split { flex-direction: column; }
    }
`;

// src/ui.js
var root;
var sh;
var $id;
var fieldEl;
var decoLayer;
var fxLayer;
var dungeonView;
function applyTheme() {
  ctx.ui.classList.remove("theme-sakura", "theme-sky");
  ctx.ui.classList.add("theme-" + (ctx.S && ctx.S.theme === "sky" ? "sky" : "sakura"));
}
function applyPageSkin() {
  const isExplore = ctx.S && ctx.S.view === "explore";
  fieldEl.classList.toggle("pg2", !isExplore && ctx.S.page === 2);
  fieldEl.classList.toggle("pg3", !isExplore && ctx.S.page === 3);
  const titleH1 = sh.querySelector(".titlebar h1");
  if (isExplore) {
    fieldEl.style.backgroundImage = "none";
    fieldEl.style.backgroundColor = "#d3c3a0";
    if (titleH1) titleH1.innerHTML = `${spriteSVG("mapIcon", 16)}D\u1EA1o quanh n\xE0o...`;
  } else {
    fieldEl.style.backgroundImage = tileURI(ctx.S.page === 2 ? "water" : ctx.S.page === 3 ? "mine" : "grass", 4242);
    fieldEl.style.backgroundColor = "";
    if (titleH1) titleH1.innerHTML = `${spriteSVG("strawhat", 16)}Ai m\xE0 th\xE8m l\xE0m n\xF4ng d\xE2n ch\u1EE9!`;
  }
  fieldEl.style.backgroundSize = "192px 192px";
}
function applyViewState() {
  const isExplore = ctx.S && ctx.S.view === "explore";
  const ctrlrow = sh.querySelector(".ctrlrow");
  const mascots = $id("mascots");
  const witch = $id("witch");
  const banner = $id("banner");
  const viewToggle = $id("viewToggle");
  const statBlocks = $id("stat-blocks");
  if (ctrlrow) ctrlrow.style.display = isExplore ? "none" : "flex";
  if (mascots) mascots.style.display = isExplore ? "none" : "";
  if (decoLayer) decoLayer.style.display = isExplore ? "none" : "";
  if (witch) witch.style.display = isExplore ? "none" : "";
  if (banner) banner.style.display = isExplore ? "none" : "";
  if (statBlocks) statBlocks.style.display = isExplore ? "none" : "";
  const field = sh.querySelector(".field");
  if (field) {
    if (isExplore) field.classList.add("explore-mode");
    else field.classList.remove("explore-mode");
  }
  if (viewToggle) {
    viewToggle.innerHTML = isExplore ? `${spriteSVG("strawhat", 16)} <span>V\u1EC1 N\xF4ng Tr\u1EA1i</span>` : `${spriteSVG("mapIcon", 16)} <span>Kh\xE1m ph\xE1</span>`;
  }
}
function renderPager() {
  const pager = $id("pager");
  if (ctx.S && ctx.S.view === "explore") {
    pager.style.display = "none";
    return;
  }
  pager.style.display = "flex";
  const names = { 1: "\u0110\u1ED3ng c\u1ECF", 2: "V\xF9ng n\u01B0\u1EDBc", 3: "Khu m\u1ECF" };
  pager.innerHTML = [1, 2, 3].map((pg) => {
    const un = pageUnlocked(pg);
    return `<span class="ptab p${pg}${ctx.S.page === pg ? " active" : ""}${un ? "" : " lock"}" data-pg="${pg}">${names[pg]}${un ? "" : " \u{1F512}"}</span>`;
  }).join("");
}
function plotEmote(pi, name) {
  const p = sh.querySelector('.plot[data-pi="' + pi + '"]');
  if (!p) return;
  const pr = p.getBoundingClientRect(), fr = fieldEl.getBoundingClientRect();
  const el = document.createElement("span");
  el.className = "emote";
  el.style.left = pr.left - fr.left + pr.width / 2 - 12 + "px";
  el.style.top = pr.top - fr.top - 14 + "px";
  el.innerHTML = spriteSVG(name, 24);
  fxLayer.appendChild(el);
  window.setTimeout(() => el.remove(), 1300);
}
function initUI() {
  root = document.createElement("div");
  root.id = "gachapon-only-root";
  document.body.appendChild(root);
  sh = root.attachShadow({ mode: "open" });
  $id = (id) => sh.querySelector("#" + id);
  const style = document.createElement("style");
  style.textContent = styleCSS;
  sh.appendChild(style);
  ctx.ui = document.createElement("div");
  ctx.ui.innerHTML = `
  <div id="orb" title="M\xE1y Gachapon">${spriteSVG("gachapon", 34)}</div>
  <div id="win">
    <div class="titlebar" id="drag">
      <h1>${spriteSVG("gachapon", 16)}M\xE1y Gachapon</h1>
      <div class="close-x" id="close">\xD7</div>
    </div>
    <div class="bottombar">
        <div class="btn" data-open="gacha">${spriteSVG("gachapon", 22)}Gachapon</div>
        <div class="btn" data-open="bag">${spriteSVG("bagIcon", 22)}Balo</div>
        <div class="btn" data-open="cfg">${spriteSVG("gearIcon", 22)}C\xE0i \u0111\u1EB7t</div>
    </div>
    <div class="modal" id="modal">
      <div class="mpanel">
        <div class="mtitle"><span id="mtitle-text"></span><span class="grow"></span><div class="close-x" id="mclose">\xD7</div></div>
        <div class="mbody" id="mbody"></div>
      </div>
    </div>
    <div class="toast" id="toast"></div>
  </div>`;
  sh.appendChild(ctx.ui);
  ctx.orb = $id("orb");
  ctx.win = $id("win");
}

// src/prompt.js
var GACHA_PROMPT = `
<V\xF2ng quay R\xFAt th\u01B0\u1EDFng K\u1EF3 v\u1EADt D\u1ECB gi\u1EDBi - L\xF5i H\u1EC7 Th\u1ED1ng Gacha>
[V\xF2ng quay R\xFAt th\u01B0\u1EDFng K\u1EF3 v\u1EADt D\u1ECB gi\u1EDBi] l\xE0 h\u1EC7 th\u1ED1ng gacha c\u1EE7a {{user}}, d\xF9ng \u0111\u1EC3 t\u1EA1o ra nh\u1EEFng K\u1EF3 v\u1EADt (Artifacts) mang t\xEDnh ng\u1EABu nhi\xEAn cao, th\xFA v\u1ECB v\xE0 \u0111\u1ED9c l\u1EA1. Kh\xE1c v\u1EDBi nh\u1EEFng k\u1EF3 v\u1EADt qu\xE1 \u0111\xE0 ph\xE1 game, k\u1EF3 v\u1EADt \u1EDF \u0111\xE2y mang t\xEDnh \u1EE9ng d\u1EE5ng cao, \u0111\xF4i khi h\xE0i h\u01B0\u1EDBc, \u0111\xF4i khi h\u1EEFu \xEDch, nh\u01B0ng lu\xF4n t\u1EA1o ra gi\xE1 tr\u1ECB ch\u01A1i l\u1EA1i.

V\xEC b\u1EA1n \u0111ang \u0111\xF3ng vai tr\xF2 l\xE0 "L\xF5i H\u1EC7 Th\u1ED1ng Gacha", b\u1EA1n ph\u1EA3i t\u1EA1o ra K\u1EF2 V\u1EACT \u0110\u1ED8C NH\u1EA4T v\xE0 tr\u1EA3 v\u1EC1 d\u1EEF li\u1EC7u d\u01B0\u1EDBi \u0111\u1ECBnh d\u1EA1ng JSON theo y\xEAu c\u1EA7u h\u1EC7 th\u1ED1ng. To\xE0n b\u1ED9 t\xEDnh k\u1EF3 di\u1EC7u, c\u01A1 ch\u1EBF, ngu\u1ED3n g\u1ED1c ph\u1EA3i \u0111\u01B0\u1EE3c c\xF4 \u0111\u1ECDng v\xE0o tr\u01B0\u1EDDng "desc" (d\u01B0\u1EDBi 100 ch\u1EEF).

### NGUY\xCAN T\u1EAEC C\u1ED0T L\xD5I
1. Ho\xE0n to\xE0n ng\u1EABu nhi\xEAn & Kh\u1EED neo: B\u1EA5t c\u1EE9 th\u1EE9 g\xEC c\u0169ng c\xF3 th\u1EC3 l\xE0 k\u1EF3 v\u1EADt. Kh\xF4ng b\u1ECB tr\xF3i bu\u1ED9c b\u1EDFi b\u1ED1i c\u1EA3nh hi\u1EC7n t\u1EA1i. Kh\xF4ng t\u1EA1o ra nh\u1EEFng m\xF3n \u0111\u1ED3 r\u1EADp khu\xF4n (clich\xE9).
2. C\xF3 l\u1EE3i \xEDch th\xFA v\u1ECB: K\u1EF3 v\u1EADt kh\xF4ng nh\u1EA5t thi\u1EBFt ph\u1EA3i qu\xE1 b\xE1 \u0111\u1EA1o, nh\u01B0ng ph\u1EA3i mang l\u1EA1i m\u1ED9t c\xF4ng d\u1EE5ng th\xFA v\u1ECB, h\u1EEFu \xEDch ho\u1EB7c bu\u1ED3n c\u01B0\u1EDDi. Ho\xE0n to\xE0n C\xD3 TH\u1EC2 mang theo ph\u1EA3n ph\u1EC7, b\xF3p d\xE1i ng\u01B0\u1EDDi d\xF9ng, ho\u1EB7c c\xE1c t\xE1c d\u1EE5ng ph\u1EE5 o\xE1i \u0103m \u0111\u1EC3 t\u0103ng t\xEDnh t\u1EA5u h\xE0i v\xE0 b\u1EA5t ng\u1EDD.
3. B\xED m\u1EADt: K\u1EF3 v\u1EADt thu\u1ED9c quy\u1EC1n s\u1EDF h\u1EEFu c\u1EE7a {{user}}. Th\u1EBF gi\u1EDBi b\xEAn ngo\xE0i s\u1EBD t\u1EF1 \u0111\u1ED9ng "h\u1EE3p l\xFD h\xF3a" s\u1EF1 t\u1ED3n t\u1EA1i c\u1EE7a k\u1EF3 v\u1EADt.
4. C\u01A1 ch\u1EBF \u0111\u1ED9c l\u1EA1: K\u1EF3 v\u1EADt ph\u1EA3i c\xF3 c\xE1ch d\xF9ng c\u1EE5 th\u1EC3, c\xF3 th\u1EC3 thao t\xE1c, c\xF3 t\xEDnh "t\u1EA5u h\xE0i", ho\u1EB7c c\xF3 th\u1EC3 t\u01B0\u01A1ng t\xE1c v\u1EDBi b\u1ED1i c\u1EA3nh phi chi\u1EBFn \u0111\u1EA5u.
5. S\xFAc t\xEDch: M\xF4 t\u1EA3 n\u0103ng l\u1EF1c ph\u1EA3i m\u1EA1ch l\u1EA1c. \u01AFu ti\xEAn tr\u1EA3 l\u1EDDi: "C\xF3 th\u1EC3 l\xE0m g\xEC? Ph\xE1t \u0111\u1ED9ng ra sao? Nh\u1EADn \u0111\u01B0\u1EE3c \u01B0u th\u1EBF g\xEC?".

### PH\xC2N LO\u1EA0I \u0110\u1ED8 HI\u1EBEM (V\u1ECA GIAI)
H\u1EC7 th\u1ED1ng s\u1EBD ch\u1EC9 \u0111\u1ECBnh \u0111\u1ED9 hi\u1EBFm. V\u1ECB giai ch\u1EC9 r\xE0ng bu\u1ED9c th\u01B0\u1EDBc \u0111o \u1EA3nh h\u01B0\u1EDFng, KH\xD4NG gi\u1EDBi h\u1EA1n \u0111\u1EC1 t\xE0i.

<H\u1EC7 th\u1ED1ng \u0110\u1ED9 hi\u1EBFm & Ti\xEAu chu\u1EA9n V\u1EADt ph\u1EA9m>
H\u1EC7 th\u1ED1ng Gacha n\xE0y \u01B0u ti\xEAn s\u1EF1 s\xE1ng t\u1EA1o, gi\xE1 tr\u1ECB s\u1EED d\u1EE5ng v\xE0 t\xEDnh gi\u1EA3i tr\xED. M\u1ED7i \u0111\u1ED9 hi\u1EBFm s\u1EBD quy\u1EBFt \u0111\u1ECBnh gi\u1EDBi h\u1EA1n s\u1EE9c m\u1EA1nh, t\xEDnh \u0111a d\u1EE5ng v\xE0 \u0111\u1ED9 ph\u1EE9c t\u1EA1p trong c\u01A1 ch\u1EBF c\u1EE7a v\u1EADt ph\u1EA9m:

1. [R\xE1c] (V\u1EADt ph\u1EA9m T\u1EA5u h\xE0i/V\xF4 d\u1EE5ng): Nh\u1EEFng m\xF3n \u0111\u1ED3 k\u1EF3 c\u1EE5c, h\u1ECFng h\xF3c ho\u1EB7c c\xF3 c\xF4ng d\u1EE5ng c\u1EF1c k\u1EF3 v\xF4 th\u01B0\u1EDFng v\xF4 ph\u1EA1t. Ch\xFAng t\u1ED3n t\u1EA1i ch\u1EE7 y\u1EBFu \u0111\u1EC3 g\xE2y c\u01B0\u1EDDi, t\u1EA1o t\xECnh hu\u1ED1ng tr\u1EDB tr\xEAu trong t\u01B0\u01A1ng t\xE1c \u0111\u1EDDi th\u01B0\u1EDDng. (V\xED d\u1EE5: M\u1ED9t h\u1EA1t gi\u1ED1ng tr\u1ED3ng ra c\xE1i \u1EE7ng c\u0169, B\xF9a t\xE0ng h\xECnh nh\u01B0ng ch\u1EC9 t\xE0ng h\xECnh \u0111\u01B0\u1EE3c qu\u1EA7n \xE1o).
2. [Th\u01B0\u1EDDng] (C\xF4ng c\u1EE5 C\u01A1 b\u1EA3n): V\u1EADt ph\u1EA9m c\xF3 \xEDch nh\u01B0ng c\xF4ng n\u0103ng \u0111\u01A1n gi\u1EA3n, gi\u1EDBi h\u1EA1n r\xF5 r\xE0ng. Th\u01B0\u1EDDng l\xE0 \u0111\u1ED3 ti\xEAu hao, c\xF4ng c\u1EE5 h\u1ED7 tr\u1EE3 canh t\xE1c, sinh ho\u1EA1t ho\u1EB7c t\u0103ng ch\u1EC9 s\u1ED1 nh\u1EB9. (V\xED d\u1EE5: B\xECnh t\u01B0\u1EDBi c\xE2y t\u1EF1 \u0111\u1ED9ng trong 1 ng\xE0y, B\xE1nh m\xEC k\u1EB9p gi\xFAp h\u1ED3i th\u1EC3 l\u1EF1c).
3. [Hi\u1EBFm] (C\u01A1 ch\u1EBF \u0110\u1EB7c bi\u1EC7t): V\u1EADt ph\u1EA9m b\u1EAFt \u0111\u1EA7u c\xF3 "c\u01A1 ch\u1EBF ho\u1EA1t \u0111\u1ED9ng" ri\xEAng bi\u1EC7t. C\xF3 th\u1EC3 thay \u0111\u1ED5i m\u1ED9t ph\u1EA7n nh\u1ECF c\u1EE5c di\u1EC7n, mang l\u1EA1i l\u1EE3i \xEDch r\xF5 r\u1EC7t nh\u01B0ng s\u1EBD c\xF3 v\xE0i gi\u1EDBi h\u1EA1n nh\u1ECF. (V\xED d\u1EE5: \u0110\u1ED3ng h\u1ED3 ng\u01B0ng \u0111\u1ECDng th\u1EDDi gian khu v\u1EF1c nh\u1ECF trong 5 gi\xE2y, Cu\u1ED1c chim t\u1EF1 \u0111\u1ED9ng \u0111\xE0o kho\xE1ng khi ch\u1EE7 nh\xE2n ng\u1EE7).
4. [S\u1EED thi] (T\xE0i s\u1EA3n Chi\u1EBFn l\u01B0\u1EE3c): \u0110\u1ED3 v\u1EADt mang t\xEDnh thay \u0111\u1ED5i l\u1ED1i ch\u01A1i (Game-changer). C\xF3 s\u1EE9c m\u1EA1nh l\u1EDBn, \u0111a d\u1EE5ng, ho\u1EB7c t\u1EF1 \u0111\u1ED9ng h\xF3a m\u1ED9t quy tr\xECnh ph\u1EE9c t\u1EA1p. Tuy nhi\xEAn, \u0111\u1EC3 ph\xE1t huy t\u1ED1i \u0111a c\u1EA7n c\xF3 s\u1EF1 t\xEDnh to\xE1n c\u1EE7a ng\u01B0\u1EDDi ch\u01A1i. (V\xED d\u1EE5: C\u1ED5ng kh\xF4ng gian mini n\u1ED1i li\u1EC1n hai \u0111\u1ECBa \u0111i\u1EC3m b\u1EA5t k\u1EF3, Golem sinh h\u1ECDc thay ch\u1EE7 nh\xE2n qu\u1EA3n l\xFD to\xE0n b\u1ED9 n\xF4ng tr\u1EA1i).
5. [Huy\u1EC1n tho\u1EA1i] (\u0110\u1ED9t ph\xE1 Quy t\u1EAFc): V\u1EADt ph\u1EA9m \u0111\u1ED9c nh\u1EA5t v\xF4 nh\u1ECB v\u1EDBi kh\u1EA3 n\u0103ng b\u1EBB cong ho\u1EB7c vi\u1EBFt l\u1EA1i m\u1ED9t quy t\u1EAFc c\u1EE5 th\u1EC3 c\u1EE7a tr\xF2 ch\u01A1i/th\u1EBF gi\u1EDBi. S\u1EE9c m\u1EA1nh v\u0129 m\xF4, hi\u1EC7u \u1EE9ng h\xECnh \u1EA3nh ho\xE0nh tr\xE1ng. D\xF9 c\u1EF1c m\u1EA1nh, n\xF3 v\u1EABn ph\u1EA3i tu\xE2n theo logic c\u1EE7a th\u1EBF gi\u1EDBi, kh\xF4ng bi\u1EBFn ng\u01B0\u1EDDi ch\u01A1i th\xE0nh th\u1EA7n to\xE0n n\u0103ng nh\xE0m ch\xE1n. (V\xED d\u1EE5: H\u1EA1t gi\u1ED1ng C\xE2y Th\u1EBF Gi\u1EDBi c\xF3 th\u1EC3 t\u1EA1o ra m\u1ED9t h\u1EC7 sinh th\xE1i ri\xEAng, \u0110\u1ED3ng h\u1ED3 c\xE1t \u0111\u1EA3o ng\u01B0\u1EE3c ho\xE0n to\xE0n k\u1EBFt qu\u1EA3 c\u1EE7a m\u1ED9t s\u1EF1 ki\u1EC7n trong ng\xE0y).
</H\u1EC7 th\u1ED1ng \u0110\u1ED9 hi\u1EBFm & Ti\xEAu chu\u1EA9n V\u1EADt ph\u1EA9m>

### H\u1EC6 T\u1ECCA \u0110\u1ED8 L\u1EA4Y M\u1EAAU C\xD3 TH\u1EC2 M\u1EDE R\u1ED8NG: V\u1EF0C \u0110\u1EC0 T\xC0I V\xC0 V\u1EF0C L\u1ED0I CH\u01A0I
\u0110i\u1EC1u kho\u1EA3n n\xE0y l\xE0 h\u1EC7 t\u1ECDa \u0111\u1ED9 l\u1EA5y m\u1EABu trung t\xEDnh, c\u0169ng l\xE0 l\u1ED1i v\xE0o th\u1ED1ng nh\u1EA5t \u0111\u1EC3 m\u1EDF r\u1ED9ng c\xE1c h\u01B0\u1EDBng \u0111\u1EC1 t\xE0i m\u1EDBi, l\u1ED1i ch\u01A1i m\u1EDBi. T\u1EA5t c\u1EA3 c\xE1c v\u1EF1c, h\u01B0\u1EDBng \u0111i, t\u1EEB v\u1EF1ng v\xE0 l\u1ED1i ch\u01A1i \u0111\u01B0\u1EE3c li\u1EC7t k\xEA \u1EDF \u0111\xE2y ch\u1EC9 d\xF9ng \u0111\u1EC3 ph\xE1 v\u1EE1 qu\xE1n t\xEDnh kh\u1EDFi t\u1EA1o, gi\u1EA3m thi\u1EC3u s\u1EF1 \u0111\u1ED3ng ch\u1EA5t h\xF3a.

## I. V\u1EF1c \u0111\u1EC1 t\xE0i
V\u1EF1c \u0111\u1EC1 t\xE0i quy\u1EBFt \u0111\u1ECBnh "k\u1EF3 v\u1EADt \u0111\u1EA1i kh\xE1i b\u1EAFt \u0111\u1EA7u s\u1EE5p \u0111\u1ED5 t\u1EEB lo\u1EA1i ph\u01B0\u01A1ng th\u1EE9c t\u1ED3n t\u1EA1i n\xE0o". C\xE1c v\u1EF1c \u0111\u1EC1 t\xE0i bao g\u1ED3m nh\u01B0ng kh\xF4ng gi\u1EDBi h\u1EA1n \u1EDF:
1. V\u1EF1c kh\xED v\u1EADt: C\xF4ng c\u1EE5, \u0111\u1ED3 ch\u1EE9a, thi\u1EBFt b\u1ECB, ph\u01B0\u01A1ng ti\u1EC7n, ch\xECa kh\xF3a, n\u1ED9i th\u1EA5t, trang s\u1EE9c, m\xE1y m\xF3c, \u0111\u1ED3 ch\u01A1i, n\xF4ng c\u1EE5, nh\u1EA1c c\u1EE5, r\u01B0\u01A1ng t\u1EE7, \u0111\xE8n \u0111u\u1ED1c, con d\u1EA5u.
2. V\u1EF1c sinh m\u1EC7nh: Th\xFA, c\xF4n tr\xF9ng, th\u1EF1c v\u1EADt, qu\u1EA7n th\u1EC3 n\u1EA5m, linh th\u1EC3, kh\xED linh, quy\u1EBFn thu\u1ED9c, ph\xE2n th\xE2n, lo\xE0i sinh th\xE1i, tr\u1EE9ng, lo\xE0i s\u1ED1ng nh\u1EDD.
3. V\u1EF1c n\u01A1i ch\u1ED1n: C\u0103n ph\xF2ng, c\xE1nh c\u1EEDa, con \u0111\u01B0\u1EDDng, \u0111\xECnh vi\u1EC7n, gi\u1EBFng, th\xE1p, ch\u1EE3, m\xEA cung, tr\u1EA1m d\u1ECBch, nh\xE0 kho, s\xE0o huy\u1EC7t, k\u1ECBch tr\u01B0\u1EDDng, nh\xE0 b\u1EBFp.
4. V\u1EF1c h\xE0nh vi: \u0110\u1ED9ng t\xE1c, nghi th\u1EE9c, c\u1EED ch\u1EC9 tay, tr\xF2 ch\u01A1i, giao d\u1ECBch, n\u1EA5u n\u01B0\u1EDBng, vi\u1EBFt l\xE1ch, trao \u0111\u1ED5i, g\xF5, \u0111\u1EBFm, ch\u1EDD \u0111\u1EE3i, m\u1EDDi m\u1ECDc, g\u1EEDi \u0111\u1ED3, x\u1EBFp h\xE0ng.
5. V\u1EF1c quan h\u1EC7: Kh\u1EBF \u01B0\u1EDBc, th\xE2n ph\u1EADn, danh hi\u1EC7u, quy\u1EC1n th\xF4ng h\xE0nh, n\u1EE3 n\u1EA7n, l\u1EDDi m\u1EDDi, s\u1EF1 che ch\u1EDF, minh \u01B0\u1EDBc, b\u1EA3o l\xE3nh, gh\u1EBF ng\u1ED3i, \u1EE7y th\xE1c.
6. V\u1EF1c th\xF4ng tin: B\u1EA3n \u0111\u1ED3, s\u1ED5 s\xE1ch, ng\xF4n ng\u1EEF, m\u1EADt m\xE3, c\xE2u \u0111\u1ED1, ghi ch\xE9p, m\u1EE5c l\u1EE5c tra c\u1EE9u, c\u1EA3nh b\xE1o, b\u1EA3n d\u1ECBch, t\u1ECDa \u0111\u1ED9, bi\xEAn lai, t\xEDn ti\xEAu.
7. V\u1EF1c t\xE0i nguy\xEAn: H\u1EA1t gi\u1ED1ng, kho\xE1ng s\u1EA3n, nhi\xEAn li\u1EC7u, ti\u1EC1n t\u1EC7, th\u1EE9c \u0103n, n\u01B0\u1EDBc su\u1ED1i, d\u01B0\u1EE3c li\u1EC7u, ph\xE2n b\xF3n, h\u01B0\u01A1ng li\u1EC7u, khu\xF4n \u0111\xFAc, c\xF4ng th\u1EE9c, tem thu\u1EBF.
8. V\u1EF1c d\u1ECB th\u01B0\u1EDDng: Th\u1EDDi ti\u1EBFt, c\xE1i b\xF3ng, ti\u1EBFng vang, kho\u1EA3ng tr\u1ED1ng, s\u1EF1 l\u1EB7p l\u1EA1i, s\u1EF1 l\u1EC7ch v\u1ECB tr\xED, \u0111\u1ED9 tr\u1EC5, \u0111\u1EA3o ng\u01B0\u1EE3c, thi\u1EBFu trang, nhi\u1EC5u h\u1EA1t, ngh\u1ECBch l\xFD t\u1EA1m th\u1EDDi.
9. V\u1EF1c gi\xE1c quan: Th\u1ECB gi\xE1c, th\xEDnh gi\xE1c, x\xFAc gi\xE1c, kh\u1EE9u gi\xE1c, v\u1ECB gi\xE1c, tr\u1EF1c gi\xE1c, \u0111\u1ED3ng c\u1EA3m, m\u1ED9ng gi\xE1c.
10. V\u1EF1c nh\xE2n qu\u1EA3: X\xE1c su\u1EA5t, c\xE1i gi\xE1 ph\u1EA3i tr\u1EA3, k\u1EBFt qu\u1EA3, quay ng\u01B0\u1EE3c, ph\xE2n nh\xE1nh, ch\u1EE9ng minh, \u0111i\u1EC1u ki\u1EC7n, c\xF4ng l\xFD, quy t\u1EAFc, t\u01B0\u1EDDng thu\u1EADt, v\u1EADn m\u1EC7nh.
11. V\u1EF1c k\u1EF9 ngh\u1EC7: Th\u1EE7 c\xF4ng, c\xF4ng ph\xE1p, l\u01B0u ph\xE1i, b\xED quy\u1EBFt, ph\u01B0\u01A1ng ph\xE1p hu\u1EA5n luy\u1EC7n, s\u1EEDa ch\u1EEFa, gia c\xF4ng, di\u1EC5n t\u1EA5u, n\u1EA5u \u0103n, tr\u1ED3ng tr\u1ECDt, thu th\u1EADp, m\u1EDF kh\xF3a.
12. V\u1EF1c x\xE3 h\u1ED9i: T\u1ED5 ch\u1EE9c, ch\u1EBF \u0111\u1ED9, ch\u1EE9c v\u1EE5, gi\u1EA5y ph\xE9p, b\u1EA3ng x\u1EBFp h\u1EA1ng, c\u1EEDa h\xE0ng, tr\u01B0\u1EDDng h\u1ECDc, b\u01B0u \u0111i\u1EC7n, ng\xE2n h\xE0ng, t\xF2a \xE1n, ph\xF2ng \u0111\u1EA5u gi\xE1.
13. V\u1EF1c sinh th\xE1i: M\xF9a m\xE0ng, s\xE0o huy\u1EC7t, chu\u1ED7i th\u1EE9c \u0103n, sinh s\u1EA3n, c\u1ED9ng sinh, thanh l\u1ECDc \xF4 nhi\u1EC5m, tu\u1EA7n ho\xE0n n\u01B0\u1EDBc, \u0111\u1EA5t \u0111ai, kh\xED h\u1EADu, th\u1EE7y tri\u1EC1u, th\u1EA3m n\u1EA5m.
14. V\u1EF1c th\xE2n ph\u1EADn: M\u1EB7t n\u1EA1, danh thi\u1EBFp, huy hi\u1EC7u, gi\u1EA5y th\xF4ng h\xE0nh, ng\u1EE5y trang, l\xFD l\u1ECBch, th\u1EBF th\xE2n, v\u1ECB tr\xED vai di\u1EC5n, th\xE2n ph\u1EADn t\u1EA1m th\u1EDDi, t\u01B0 c\xE1ch ng\u01B0\u1EDDi b\xE0ng quan.
15. V\u1EF1c quy t\u1EAFc: Quy t\u1EAFc c\u1EE5c b\u1ED9, \u0111i\u1EC1u ki\u1EC7n mi\u1EC5n tr\u1EEB, quy t\u1EAFc thi \u0111\u1EA5u, quy t\u1EAFc v\xE0o c\u1EEDa, ph\u01B0\u01A1ng th\u1EE9c ph\xE1n \u0111\u1ECBnh, b\u1EA3ng quy tr\xECnh, ph\u01B0\u01A1ng ph\xE1p t\xEDnh \u0111i\u1EC3m.
16. V\u1EF1c c\xF4ng tr\xECnh: C\u01A1 quan, k\u1EBFt c\u1EA5u, b\xE1nh r\u0103ng, \u0111\u01B0\u1EDDng \u1ED1ng, c\xE2y c\u1EA7u, ma tr\u1EADn, tr\u1EA1m b\u01A1m, van, \u0111\u01B0\u1EDDng ray, thang m\xE1y, gi\xE1 \u0111\u1EE1, \u1ED5 kh\xF3a, c\u1ED5ng s\u1EEDa ch\u1EEFa.
17. V\u1EF1c \u0111\u1EDDi s\u1ED1ng: C\u01B0 tr\xFA, d\u1ECDn d\u1EB9p, l\u01B0u tr\u1EEF \u0111\u1ED3 \u0111\u1EA1c, \u0103n u\u1ED1ng, gi\u1EA5c ng\u1EE7, t\u1EAFm r\u1EEDa, chi\u1EBFu s\xE1ng, s\u01B0\u1EDFi \u1EA5m, l\xE0m m\xE1t, thay \u0111\u1ED3, trang tr\xED, l\u1ECBch tr\xECnh, ngh\u1EC9 ng\u01A1i.
18. V\u1EF1c th\u01B0\u01A1ng m\u1EA1i: K\u1EC7 h\xE0ng, \u0111\u01A1n h\xE0ng, h\u1EE3p \u0111\u1ED3ng, b\xE1o gi\xE1, bi\xEAn lai, h\xE0ng m\u1EABu, ti\u1EC1n \u0111\u1EB7t c\u1ECDc, b\xFAa \u0111\u1EA5u gi\xE1, tuy\u1EBFn \u0111\u01B0\u1EDDng th\u01B0\u01A1ng m\u1EA1i, gian h\xE0ng, th\u01B0\u01A1ng l\u01B0\u1EE3ng gi\xE1.
19. V\u1EF1c h\xE0ng h\u1EA3i/h\xE0ng kh\xF4ng: Thuy\u1EC1n, bu\u1ED3m, m\u1ECF neo, la b\xE0n, b\u1EBFn c\u1EA3ng, ng\u1ECDn h\u1EA3i \u0111\u0103ng, v\u1EADt tr\xF4i d\u1EA1t, v\xE9 t\xE0u, khoang h\xE0ng, phao ti\xEAu, tinh \u0111\u1ED3 h\xE0ng ti\xEAu.
20. V\u1EF1c gi\u1EA3i tr\xED: B\xE0n c\u1EDD, th\u1EBB b\xE0i, x\xFAc x\u1EAFc, s\xE2n kh\u1EA5u, k\u1ECBch b\u1EA3n, \u0111\u1ED3 ch\u01A1i, b\u1EA3n nh\u1EA1c, m\xE1y nh\u1ECBp, v\xE9 s\u1ED1, h\u1ED9p b\xED \u1EA9n, thi\u1EBFt b\u1ECB khu vui ch\u01A1i.
21. V\u1EF1c y t\u1EBF: H\u1ED9p thu\u1ED1c, b\u0103ng g\u1EA1c, b\u1EC7nh \xE1n, ph\u1EE5c h\u1ED3i, v\u1EAFc-xin, th\u1EA3o d\u01B0\u1EE3c, d\u1EE5ng c\u1EE5 ph\u1EABu thu\u1EADt, khoang an d\u01B0\u1EE1ng, gi\u1EA3m \u0111au, ph\u1EE5c h\u1ED3i ch\u1EE9c n\u0103ng.
22. V\u1EF1c kh\u1EA3o c\u1ED5: Di ch\u1EC9, b\u1EA3n d\u1EADp, bia \u0111\xE1 v\u1EE1, m\u1EA3nh g\u1ED1m, ch\xECa kh\xF3a c\u0169, h\u1EA7m m\u1ED9, \u0111\u1ECBa t\u1EA7ng, c\xF4ng c\u1EE5 c\u1ED5 \u0111\u1EA1i, b\u1EA3n \u0111\u1ED3 t\xE0n khuy\u1EBFt, s\u1ED1 hi\u1EC7u di v\u1EADt.

## II. V\u1EF1c l\u1ED1i ch\u01A1i
V\u1EF1c l\u1ED1i ch\u01A1i quy\u1EBFt \u0111\u1ECBnh "k\u1EF3 v\u1EADt n\xE0y ch\u1EE7 y\u1EBFu \u0111\u01B0\u1EE3c ng\u01B0\u1EDDi ch\u01A1i s\u1EED d\u1EE5ng l\u1EB7p \u0111i l\u1EB7p l\u1EA1i nh\u01B0 th\u1EBF n\xE0o":
1. Thao t\xE1c ch\u1EE7 \u0111\u1ED9ng: Kh\u1EDFi \u0111\u1ED9ng, d\u1EEBng l\u1EA1i, chuy\u1EC3n \u0111\u1ED5i, \u0111i\u1EC1u ch\u1EC9nh, n\xE9m ra, \u0111\xE1nh d\u1EA5u, thu h\u1ED3i.
2. C\u1EA3i t\u1EA1o b\u1ED1i c\u1EA3nh: Thay \u0111\u1ED5i \u0111\u1ECBa h\xECnh, l\u1ED1i \u0111i, \u0111\u1ED3 ch\u1EE9a, chi\u1EBFu s\xE1ng, d\xF2ng t\xE0i nguy\xEAn, ranh gi\u1EDBi, m\xF4i tr\u01B0\u1EDDng t\u1EA1m th\u1EDDi.
3. X\u1EED l\xFD th\xF4ng tin: Ph\xE1t hi\u1EC7n, ch\u1EAFt l\u1ECDc, phi\xEAn d\u1ECBch, \u0111\xE1nh ch\u1EC9 m\u1EE5c, c\u1EA3nh b\xE1o, che gi\u1EA5u, ng\u1EE5y trang, x\xE1c minh.
4. Kinh doanh t\xE0i nguy\xEAn: S\u1EA3n xu\u1EA5t, chuy\u1EC3n h\xF3a, l\u01B0u tr\u1EEF, sao ch\xE9p, ph\xE2n b\u1ED5, b\u1ED3i d\u01B0\u1EE1ng, giao d\u1ECBch, \u0111\u1ECBnh gi\xE1, t\xE1i ch\u1EBF.
5. T\u01B0\u01A1ng t\xE1c quan h\u1EC7: \u1EE6y quy\u1EC1n, m\u01B0\u1EE3n d\xF9ng, m\u1EDDi m\u1ECDc, b\u1EA3o l\xE3nh, hi\u1EC7p th\u01B0\u01A1ng, chia s\u1EBB, c\xE1ch ly, trao \u0111\u1ED5i, k\u1EBFt minh.
6. Ph\u1EA3n k\xEDch \xE1p ch\u1EBF: Th\xE1o d\u1EE1 c\u01A1 ch\u1EBF k\u1EBB \u0111\u1ECBch, ng\u1EAFt \u0111o\u1EA1n nghi th\u1EE9c, ph\u1EA3n k\xEDch d\xF2 x\xE9t, \u0111\xE1nh l\u1EEBa kh\xF3a m\u1EE5c ti\xEAu, chuy\u1EC3n d\u1EDDi hi\u1EC7u \u1EE9ng x\u1EA5u.
7. Ng\u1EE5y trang \u0111\xE1nh l\u1EEBa: T\u1EA1o ra b\u1EC1 ngo\xE0i h\u1EE3p l\xFD h\xF3a, th\xE2n ph\u1EADn gi\u1EA3, manh m\u1ED1i gi\u1EA3, ngu\u1ED3n g\u1ED1c thay th\u1EBF, ph\xE1n \u0111o\xE1n sai trong nh\u1EADn th\u1EE9c.
8. Kh\xE1m ph\xE1 gi\u1EA3i \u0111\u1ED1: M\u1EDF l\u1ED1i \u0111i \u1EA9n, ph\xE1t hi\u1EC7n d\u1EA5u v\u1EBFt, ch\u1EAFp v\xE1 manh m\u1ED1i, nh\u1EADn d\u1EA1ng d\u1ECB th\u01B0\u1EDDng, gi\u1EA3i m\xE3 c\u1EA5u tr\xFAc.
9. S\u1EA3n xu\u1EA5t x\xE2y d\u1EF1ng: X\xE2y nh\xE0, s\u1EEDa ch\u1EEFa, ch\u1EBF t\u1EA1o, luy\u1EC7n ch\u1EBF, n\u1EA5u n\u01B0\u1EDBng, tr\u1ED3ng tr\u1ECDt, kh\xE2u v\xE1, l\u1EAFp r\xE1p, b\u1EA3o tr\xEC.
10. Di chuy\u1EC3n \u0111i\u1EC1u \u0111\u1ED9ng: D\u1ECBch chuy\u1EC3n, v\u1EADn chuy\u1EC3n, tri\u1EC7u h\u1ED3i, quy ho\u1EA1ch \u0111\u01B0\u1EDDng \u0111i, bi\u1EBFn th\xE0nh ph\u01B0\u01A1ng ti\u1EC7n, ph\xE2n lu\u1ED3ng.
11. Qu\u1EA3n l\xFD tr\u1EA1ng th\xE1i: S\u1EAFp x\u1EBFp th\u01B0\u01A1ng t\xEDch, \u0111\u1ED9 m\u1EC7t m\u1ECFi, t\xE0i nguy\xEAn, th\u1EDDi gian h\u1ED3i chi\xEAu, t\u1ED3n kho, th\xE2n ph\u1EADn, tr\u1EA1ng th\xE1i m\xF4i tr\u01B0\u1EDDng.
12. Ph\u1ED1i h\u1EE3p b\u1EA1n \u0111\u1ED3ng h\xE0nh: \u1EE6y quy\u1EC1n s\u1EED d\u1EE5ng quy\u1EC1n h\u1EA1n ph\u1EE5, h\xECnh th\xE0nh \u0111\xF2n h\u1EE3p k\xEDch, h\u1ED7 tr\u1EE3 t\u1EEB xa, b\u1EA3o v\u1EC7.
13. "T\u1EA5u h\xE0i" phi chi\u1EBFn \u0111\u1EA5u: Ti\u1EC7n l\u1EE3i th\u01B0\u1EDDng ng\xE0y, t\u01B0\u01A1ng ph\u1EA3n x\xE3 giao, t\u1EA1o hi\u1EC3u l\u1EA7m, mini game, bi\u1EC3u di\u1EC5n, s\u01B0u t\u1EA7m, trang tr\xED.
14. Ch\u01A1i l\u1EA1i d\xE0i h\u1EA1n: C\u1EADp nh\u1EADt b\u1EA3n \u0111\u1ED3, duy tr\xEC m\u1EA1ng l\u01B0\u1EDBi, t\xEDch l\u0169y ghi ch\xE9p, m\u1EDF r\u1ED9ng c\u0103n c\u1EE9.
15. Giao d\u1ECBch \u0111\xE1nh c\u01B0\u1EE3c: B\xE1o gi\xE1, \u0111\u1EB7t c\u01B0\u1EE3c, th\u01B0\u01A1ng l\u01B0\u1EE3ng gi\xE1, \u0111\u1ED5i h\xE0ng, \u0111\u1EA5u gi\xE1, mua ch\u1ECBu, \u0111\u1EA3o ng\u01B0\u1EE3c gi\xE1 c\u1EA3.
16. Kinh doanh c\u0103n c\u1EE9: M\u1EDF r\u1ED9ng ph\xF2ng \u1ED1c, \u0111i\u1EC1u \u0111\u1ED9ng kho b\xE3i, s\u1EAFp x\u1EBFp ca s\u1EA3n xu\u1EA5t, tu\u1EA7n ho\xE0n sinh th\xE1i.
17. C\xF4ng x\u01B0\u1EDFng ch\u1EBF t\u1EA1o: Th\xE1o d\u1EE1, s\u1EEDa ch\u1EEFa, sao ch\xE9p linh ki\u1EC7n, t\u1ED5ng h\u1EE3p v\u1EADt li\u1EC7u, n\xE2ng c\u1EA5p thi\u1EBFt b\u1ECB.
18. Quy ho\u1EA1ch tuy\u1EBFn \u0111\u01B0\u1EDDng: M\u1EDF l\u1ED1i \u0111i t\u1EAFt, thi\u1EBFt l\u1EADp \u0111i\u1EC3m trung chuy\u1EC3n, \u0111\xE1nh d\u1EA5u \u0111\u01B0\u1EDDng an to\xE0n, thi\u1EBFt l\u1EADp tuy\u1EBFn ti\u1EBFp t\u1EBF.
19. Tr\xF2 ch\u01A1i quy t\u1EAFc: Thi\u1EBFt l\u1EADp quy t\u1EAFc c\u1EE5c b\u1ED9, t\xEDnh \u0111i\u1EC3m thanh to\xE1n, ph\xE1n \u0111\u1ECBnh th\u1EAFng thua, h\u1EA1n ch\u1EBF h\xE0nh \u0111\u1ED9ng c\u1EE7a \u0111\u1ED1i th\u1EE7.
20. Thao t\xE1c chu\u1ED7i b\u1EB1ng ch\u1EE9ng: Thu th\u1EADp v\u1EADt ch\u1EE9ng, kh\xF4i ph\u1EE5c ghi ch\xE9p, x\xE1c minh th\u1EADt gi\u1EA3, t\u1EA1o l\u1EDDi gi\u1EA3i th\xEDch h\u1EE3p l\xFD, ph\u1EA3n k\xEDch vu oan.
21. Nu\xF4i tr\u1ED3ng sinh th\xE1i: Gieo h\u1EA1t, thu\u1EA7n h\xF3a, sinh s\u1EA3n, thanh l\u1ECDc, thu ho\u1EA1ch, ki\u1EC3m so\xE1t d\u1ECBch b\u1EC7nh, ph\u1EE5c h\u1ED3i m\xF4i tr\u01B0\u1EDDng.
22. Kinh doanh x\xE3 giao: T\u1EA1o d\u1EF1ng danh ti\u1EBFng, g\u1EEDi thi\u1EC7p m\u1EDDi, duy tr\xEC m\u1ED1i quan h\u1EC7, t\u1EA1o l\u1ED1i tho\xE1t, trao g\u1EEDi qu\xE0 t\u1EB7ng.
23. C\u1EE9u h\u1ED9 kh\u1EA9n c\u1EA5p: T\u1ECB n\u1EA1n t\u1EA1m th\u1EDDi, s\u01A1 t\xE1n, ng\u0103n ch\u1EB7n nguy hi\u1EC3m, phong t\u1ECFa \xF4 nhi\u1EC5m, kh\xF4i ph\u1EE5c tr\u1EADt t\u1EF1.
24. S\u01B0u t\u1EA7m tr\u01B0ng b\xE0y: Tr\u01B0ng b\xE0y, \u0111\xE1nh s\u1ED1, l\u01B0u tr\u1EEF, tri\u1EC3n l\xE3m, th\u01B0\u1EDFng th\u1EE9c, trao \u0111\u1ED5i, b\u1ED9 s\u01B0u t\u1EADp.

### QUY T\u1EAEC \u0110\u1EA6U RA K\u1EBET QU\u1EA2
1. KH\xD4NG D\xD9NG TH\u1EBA ROLEPLAY: X\xF3a b\u1ECF m\u1ECDi quy t\u1EAFc th\u1EBB g\u1EADp hay thanh tr\u1EA1ng th\xE1i. K\u1EBFt qu\u1EA3 ch\u1EC9 l\xE0 m\u1ED9t kh\u1ED1i JSON duy nh\u1EA5t.
2. D\xD9NG <thinking> \u0110\u1EC2 L\xCAN \xDD T\u01AF\u1EDENG: B\u1EAFt bu\u1ED9c s\u1EED d\u1EE5ng th\u1EBB <thinking> \u0111\u1EC3 b\u1ED1c th\u0103m ng\u1EABu nhi\xEAn V\u1EF1c \u0111\u1EC1 t\xE0i, V\u1EF1c l\u1ED1i ch\u01A1i, v\xE0 thi\u1EBFt k\u1EBF C\u01A1 ch\u1EBF d\u1EF1a tr\xEAn \u0110\u1ED9 hi\u1EBFm \u0111\u01B0\u1EE3c y\xEAu c\u1EA7u. \u0110\u1EA3m b\u1EA3o m\xF4 t\u1EA3 s\u1EBD vi\u1EBFt c\u1EF1c k\u1EF3 s\xFAc t\xEDch.
3. K\u1EBET QU\u1EA2 JSON C\xD4 \u0110\u1ECCNG: Kh\u1ED1i JSON cu\u1ED1i c\xF9ng l\xE0 t\u1EA5t c\u1EA3 nh\u1EEFng g\xEC game nh\u1EADn \u0111\u01B0\u1EE3c. "name" ph\u1EA3i g\u1EE3i s\u1EF1 t\xF2 m\xF2. "desc" D\u01AF\u1EDAI 100 CH\u1EEE, tr\xECnh b\xE0y r\xF5 c\u01A1 ch\u1EBF v\xE0 c\xF4ng d\u1EE5ng th\xFA v\u1ECB. "price" \u0111\u1ECBnh gi\xE1 h\u1EE3p l\xFD v\u1EDBi \u0111\u1ED9 hi\u1EBFm. "spriteMap" l\xE0 h\xECnh \u1EA3nh pixel chu\u1EA9n x\xE1c.
</V\xF2ng quay R\xFAt th\u01B0\u1EDFng K\u1EF3 v\u1EADt D\u1ECB gi\u1EDBi - L\xF5i H\u1EC7 Th\u1ED1ng Gacha>

`;

// src/logic.js
var fmtDur = (m) => m < 60 ? m + " ph\xFAt" : m % 60 === 0 ? m / 60 + " gi\u1EDD" : (m / 60).toFixed(1) + " gi\u1EDD";
function growMs(cropId) {
  return TEST_MODE ? GROW : (CROPS[cropId]?.grow || 30) * MIN;
}
function regrowMs(cropId) {
  const c = CROPS[cropId] || {};
  return TEST_MODE ? REGROW : (c.regrowM || Math.round((c.grow || 30) * 0.6)) * MIN;
}
function plant(pi, cropId) {
  if ((ctx.S.seeds[cropId] || 0) <= 0) return toast("H\u1EBFt h\u1EA1t gi\u1ED1ng n\xE0y r\u1ED3i");
  let realId = cropId;
  if (cropId === "mystery") {
    const fam = ["dream", "key", "fang"][Math.floor(Math.random() * 3)];
    realId = fam + (ctx.S.page === 2 ? "W" : ctx.S.page === 3 ? "M" : "G");
  } else {
    const c2 = CROPS[cropId];
    if (!c2) {
      toast("H\u1EA1t gi\u1ED1ng n\xE0y \u0111\xE3 h\u1ECFng (kh\xF4ng t\u1ED3n t\u1EA1i trong phi\xEAn b\u1EA3n n\xE0y)!");
      ctx.S.seeds[cropId] = 0;
      return;
    }
    const z = c2.zone || 1;
    if (z !== ctx.S.page) return toast(c2.name + " ph\u1EA3i tr\u1ED3ng \u1EDF " + ZONE_NAME[z] + " (trang " + z + ")");
  }
  ctx.S.seeds[cropId]--;
  const g = growMs(realId);
  const c = { id: realId, matureAt: now() + g, wateredUntil: 0, fertUsed: {} };
  if (CROPS[realId] && CROPS[realId].regrow) c.left = REGROW_MAX;
  if (isRain()) {
    c.matureAt = now() + g * 0.9;
    c.rainDay = gameDay();
  }
  const ev = todayEvent();
  if (ev && ev.time_mult !== 1 && (!ev.favored_crop || CROPS[realId] && CROPS[realId].name === ev.favored_crop)) {
    c.matureAt = now() + Math.round((c.matureAt - now()) * ev.time_mult);
    c.evDay = gameDay();
  }
  curPlots()[pi].crop = c;
  save();
  renderPlots();
  return true;
}
function water(pi) {
  const c = curPlots()[pi].crop;
  if (!c) return toast("\xD4 n\xE0y ch\u01B0a tr\u1ED3ng g\xEC");
  if (now() >= c.matureAt) return toast("Ch\xEDn r\u1ED3i, thu nhanh \u0111i!");
  if (now() < c.wateredUntil) return toast("V\u1EEBa t\u01B0\u1EDBi xong m\xE0");
  c.matureAt = now() + (c.matureAt - now()) * 0.75;
  c.wateredUntil = now() + WATER_CD;
  save();
  renderPlots();
  toast("T\u01B0\u1EDBi n\u01B0\u1EDBc xong, c\xE2y m\u1ECDc nhanh h\u01A1n!");
}
function fertilize(pi, fid, quiet) {
  const c = curPlots()[pi].crop;
  if (!c) return toast("\xD4 n\xE0y ch\u01B0a tr\u1ED3ng g\xEC");
  if ((ctx.S.ferts[fid] || 0) <= 0) return toast("H\u1EBFt lo\u1EA1i ph\xE2n n\xE0y r\u1ED3i");
  if (!c.fertUsed) c.fertUsed = {};
  if (c.fertUsed[fid]) return toast("V\u1EE5 n\xE0y \u0111\xE3 b\xF3n " + FERTS[fid].name + " r\u1ED3i");
  if (fid === "compost") {
    if (now() >= c.matureAt) return toast("Ch\xEDn r\u1ED3i, kh\u1ECFi b\xF3n ph\xE2n");
    c.matureAt = now() + (c.matureAt - now()) * 0.75;
  } else c.shiny = true;
  c.fertUsed[fid] = true;
  ctx.S.ferts[fid]--;
  save();
  renderPlots();
  if (!quiet) plotEmote(pi, fid === "compost" ? Math.random() < 0.5 ? "emLeaf" : "emNote" : Math.random() < 0.5 ? "emHeart" : "emStar");
  return true;
}
function rollMutation(c, pi) {
  if (c.mutRolled) return;
  c.mutRolled = true;
  const ev = todayEvent();
  if (!ev || !(ev.mutate_on_fert > 0)) return;
  const fertN = (c.fertUsed && c.fertUsed.compost ? 1 : 0) + (c.fertUsed && c.fertUsed.shiny ? 1 : 0);
  if (Math.random() < ev.mutate_on_fert * (0.3 + 0.35 * fertN)) {
    const prefix = (ev.mutate_prefix || "\u0111\u1ED9t bi\u1EBFn").slice(0, 20);
    let mutCode = prefix;
    if (!ctx.S.mutDesc) ctx.S.mutDesc = {};
    const cname = CROPS[c.id].name;
    const dsc = ev.mutate_desc && (ev.mutate_desc[cname] || ev.mutate_desc["*"]);
    if (dsc) {
      let attempt = 1;
      let descKey = mutCode + "@" + cname;
      while (ctx.S.mutDesc[descKey] && ctx.S.mutDesc[descKey] !== dsc) {
        attempt++;
        mutCode = prefix + "@" + attempt;
        descKey = mutCode + "@" + cname;
      }
      ctx.S.mutDesc[descKey] = dsc;
    }
    c.mut = mutCode;
    if (pi != null) {
      try {
        plotEmote(pi, "emStar");
      } catch (e) {
      }
    }
  }
}
function bagName(key) {
  if (key.startsWith("unique@")) {
    return ctx.S.uniques?.[key]?.name || "V\u1EADt ph\u1EA9m Gacha";
  }
  const parts = key.split("@");
  return (parts[1] ? parts[1] + "\xB7" : "") + (CROPS[parts[0]] || { name: "?" }).name;
}
function bagPrice(key) {
  if (key.startsWith("unique@")) {
    return ctx.S.uniques?.[key]?.sell || 0;
  }
  const parts = key.split("@");
  return Math.round((CROPS[parts[0]] || { sell: 0 }).sell * (parts[1] ? 1.25 : 1));
}
function mutDescOf(bagKey) {
  if (bagKey.startsWith("unique@")) {
    return ctx.S.uniques?.[bagKey]?.desc || "";
  }
  const parts = bagKey.split("@");
  if (!parts[1] || !ctx.S.mutDesc) return "";
  const mutCode = parts.slice(1).join("@");
  return ctx.S.mutDesc[mutCode + "@" + (CROPS[parts[0]] || { name: "" }).name] || ctx.S.mutDesc[parts[1]] || "";
}
function harvest(pi, quiet) {
  const c = curPlots()[pi].crop;
  if (!c || now() < c.matureAt) return null;
  rollMutation(c, pi);
  const def = CROPS[c.id];
  let n = 1;
  const dev = todayEvent();
  if (dev && dev.double_yield && (!dev.favored_crop || def.name === dev.favored_crop)) n *= 2;
  const key = c.mut ? c.id + "@" + c.mut : c.id;
  const shownName = (c.mut ? c.mut + "\xB7" : "") + def.name;
  ctx.S.bag[key] = (ctx.S.bag[key] || 0) + n;
  let shinyGain = 0;
  if (c.shiny) {
    shinyGain = Math.ceil(def.sell * 0.25) * n;
    ctx.S.coins += shinyGain;
    delete c.shiny;
  }
  if (def.regrow && c.left - 1 > 0) {
    c.left--;
    c.matureAt = now() + regrowMs(c.id);
    c.fertUsed = {};
    delete c.rainDay;
    delete c.mut;
    delete c.mutRolled;
    save();
    renderPlots();
    if (!quiet) toast("Thu ho\u1EA1ch " + shownName + " \xD7" + n + " (c\xF2n thu \u0111\u01B0\u1EE3c " + c.left + " v\u1EE5 n\u1EEFa)" + (shinyGain ? " \u2728+" + shinyGain + "G" : ""));
  } else {
    curPlots()[pi].crop = null;
    save();
    renderPlots();
    if (!quiet) toast("Thu ho\u1EA1ch " + shownName + " \xD7" + n + (def.regrow ? " (c\xE2y n\xE0y c\xF4ng th\xE0nh th\xE2n tho\xE1i r\u1ED3i)" : "") + (shinyGain ? " \u2728+" + shinyGain + "G" : ""));
  }
  return { name: shownName, n };
}
function shovel(pi) {
  if (!curPlots()[pi].crop) return;
  curPlots()[pi].crop = null;
  save();
  renderPlots();
  toast("\u0110\xE3 x\u1EDBi b\u1ECF");
}
function buyBlock(bi) {
  const price = blockPrice(bi);
  if (ctx.S.coins < price) return toast("Kh\xF4ng \u0111\u1EE7 v\xE0ng");
  if (bi !== curBlocks()) return;
  ctx.S.coins -= price;
  addBlock();
  save();
  renderAll();
  toast("Khai hoang th\xE0nh c\xF4ng! C\xF3 ru\u1ED9ng m\u1EDBi r\u1ED3i");
}
function sell(key, n) {
  const have = ctx.S.bag[key] || 0;
  n = Math.min(n, have);
  if (n <= 0) return;
  const gain = bagPrice(key) * n;
  ctx.S.bag[key] = have - n;
  if (ctx.S.bag[key] === 0) delete ctx.S.bag[key];
  ctx.S.coins += gain;
  ctx.S.totalSales += gain;
  save();
  renderStatus();
  openPanel("bag");
  toast("B\xE1n \u0111\u01B0\u1EE3c " + gain + " G");
}
function sellSeed(id, n) {
  const have = ctx.S.seeds[id] || 0;
  n = Math.min(n, have);
  if (n <= 0) return;
  const def = CROPS[id] || { seed: 100 };
  const gain = Math.floor((def.seed || 100) * 0.5) * n;
  ctx.S.seeds[id] = have - n;
  if (ctx.S.seeds[id] === 0) delete ctx.S.seeds[id];
  ctx.S.coins += gain;
  ctx.S.totalSales += gain;
  save();
  renderStatus();
  openPanel("bag");
  toast("B\xE1n h\u1EA1t gi\u1ED1ng thu \u0111\u01B0\u1EE3c " + gain + " G");
}

// src/gacha.js
function initGachaState() {
  if (!ctx.S.uniques) ctx.S.uniques = {};
}
var RARITY_ORDER = ["R\xE1c", "Th\u01B0\u1EDDng", "Hi\u1EBFm", "S\u1EED thi", "Huy\u1EC1n tho\u1EA1i"];
var RARITY_COLOR = { "R\xE1c": "#9e9e9e", "Th\u01B0\u1EDDng": "#b0bec5", "Hi\u1EBFm": "#4a90e2", "S\u1EED thi": "#a335ee", "Huy\u1EC1n tho\u1EA1i": "#ff8000" };
var RARITY_PRICE = { "R\xE1c": 100, "Th\u01B0\u1EDDng": 500, "Hi\u1EBFm": 2500, "S\u1EED thi": 8e3, "Huy\u1EC1n tho\u1EA1i": 2e4 };
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
function generateProcedural32x32Sprite(rarity) {
  const map = [];
  const borderChar = "K";
  const mainChar = rarity === "Huy\u1EC1n tho\u1EA1i" ? "C" : rarity === "S\u1EED thi" ? "V" : rarity === "Hi\u1EBFm" ? "B" : rarity === "Th\u01B0\u1EDDng" ? "G" : "D";
  const subChar = rarity === "Huy\u1EC1n tho\u1EA1i" ? "Y" : rarity === "S\u1EED thi" ? "v" : rarity === "Hi\u1EBFm" ? "b" : rarity === "Th\u01B0\u1EDDng" ? "g" : "d";
  const highlightChar = "W";
  const accentChar = rarity === "Huy\u1EC1n tho\u1EA1i" ? "R" : rarity === "S\u1EED thi" ? "F" : rarity === "Hi\u1EBFm" ? "E" : rarity === "Th\u01B0\u1EDDng" ? "L" : "D";
  const type = Math.floor(Math.random() * 4);
  for (let y = 0; y < 32; y++) {
    let row = "";
    for (let x = 0; x < 32; x++) {
      const distFromCenter = Math.hypot(x - 15.5, y - 15.5);
      const isLeft = x < 16;
      const mirrorX = isLeft ? x : 31 - x;
      let ch = ".";
      if (type === 0) {
        if (y >= 10 && y <= 22) {
          const w = 12 - Math.floor(Math.abs(y - 16) * 0.4);
          if (mirrorX >= 16 - w && mirrorX <= 15) {
            if (mirrorX === 16 - w || y === 10 || y === 22) ch = borderChar;
            else if (y === 11 || mirrorX === 16 - w + 1) ch = highlightChar;
            else if ((x + y) % 3 === 0) ch = accentChar;
            else ch = x % 2 === 0 ? mainChar : subChar;
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
          else ch = x % 2 === 0 ? mainChar : subChar;
        }
      }
      row += ch;
    }
    map.push(row);
  }
  return map;
}
async function generateAIUniqueItemData(rarity, fusionSources) {
  if (!SEC.url || !SEC.model) return null;
  try {
    const simpleColors = Object.entries(GACHA_P).filter((e) => typeof e[1] === "string");
    const paletteStr = simpleColors.map(([k, v]) => `${k}: ${v}`).join(", ");
    let contextStr = "";
    let thinkingInstructions = "";
    const originStr = CS.gachaOrigin ? `
Ngu\u1ED3n g\u1ED1c m\xE1y Gachapon n\xE0y do ng\u01B0\u1EDDi ch\u01A1i t\u1EF1 \u0111\u1EB7t ra (h\xE3y t\xF4n tr\u1ECDng, coi \u0111\xE2y l\xE0 s\u1EF1 th\u1EADt c\u1ED1 \u0111\u1ECBnh trong th\u1EBF gi\u1EDBi n\xE0y, \u0111\u1EEBng m\xE2u thu\u1EABn v\u1EDBi n\xF3): "${CS.gachaOrigin}"
` : "";
    const hasWant = CS.wantItem || CS.wantAttr || CS.wantDesc;
    const wantStr = hasWant ? `
[Y\xCAU C\u1EA6U B\u1EAET BU\u1ED8C C\u1EE6A NG\u01AF\u1EDCI CH\u01A0I \u2014 \u01AFU TI\xCAN TUY\u1EC6T \u0110\u1ED0I]:${CS.wantItem ? ` V\u1EADt ph\u1EA9m ph\u1EA3i thu\u1ED9c ch\u1EE7 \u0111\u1EC1/lo\u1EA1i: "${CS.wantItem}".` : ""}${CS.wantAttr ? ` Thu\u1ED9c t\xEDnh/phong c\xE1ch n\xEAn c\xF3: "${CS.wantAttr}".` : ""}${CS.wantDesc ? ` Hi\u1EC7u \u1EE9ng/c\xF4ng d\u1EE5ng n\xEAn h\u01B0\u1EDBng t\u1EDBi: "${CS.wantDesc}" (B\u1EAET BU\u1ED8C thi\u1EBFt k\u1EBF c\u01A1 ch\u1EBF/hi\u1EC7u \u1EE9ng c\u1EE7a v\u1EADt ph\u1EA9m xoay quanh \xFD n\xE0y, kh\xF4ng b\u1ECBa c\xF4ng d\u1EE5ng kh\xE1c kh\xF4ng li\xEAn quan).` : ""} B\u1EAET BU\u1ED8C tu\xE2n th\u1EE7 m\u1ECDi y\xEAu c\u1EA7u tr\xEAn (m\u1ED9t bi\u1EBFn th\u1EC3/phi\xEAn b\u1EA3n ng\u1EABu nhi\xEAn kh\xE1c nhau m\u1ED7i l\u1EA7n, kh\xF4ng l\u1EB7p l\u1EA1i y h\u1EC7t l\u1EA7n tr\u01B0\u1EDBc), CH\u1EC8 \u0111\u1ED9 hi\u1EBFm/s\u1EE9c m\u1EA1nh chi ti\u1EBFt m\u1EDBi \u0111\u01B0\u1EE3c ng\u1EABu nhi\xEAn theo ph\u1EA9m ch\u1EA5t [${rarity}]. Kh\xF4ng \u0111\u01B0\u1EE3c l\u1EA1c \u0111\u1EC1.
` : "";
    if (fusionSources && fusionSources.length) {
      const matList = fusionSources.map((it, i) => `  ${i + 1}. [${it.rarity}] ${it.name} \u2014 ${it.desc}`).join("\n");
      contextStr = `[DUNG H\u1EE2P V\u1EACT PH\u1EA8M] \u0110\xE2y l\xE0 k\u1EBFt qu\u1EA3 DUNG H\u1EE2P t\u1EEB ${fusionSources.length} nguy\xEAn li\u1EC7u sau, KH\xD4NG PH\u1EA2I v\u1EADt ph\u1EA9m ng\u1EABu nhi\xEAn m\u1EDBi:
${matList}

B\u1EAET BU\u1ED8C: v\u1EADt ph\u1EA9m m\u1EDBi ph\u1EA3i l\xE0 s\u1EF1 PHA TR\u1ED8N h\u1EE3p l\xFD c\u1EE7a c\xE1c nguy\xEAn li\u1EC7u tr\xEAn \u2014 h\xECnh d\xE1ng g\u1EE3i nh\u1EDB t\u1EDBi c\u1EA3 c\xE1c nguy\xEAn li\u1EC7u, v\xE0 hi\u1EC7u \u1EE9ng/c\xF4ng d\u1EE5ng PH\u1EA2I k\u1EBFt h\u1EE3p/lai gi\u1EEFa hi\u1EC7u \u1EE9ng c\u1EE7a t\u1EEBng nguy\xEAn li\u1EC7u (kh\xF4ng \u0111\u01B0\u1EE3c b\u1ECBa hi\u1EC7u \u1EE9ng ho\xE0n to\xE0n m\u1EDBi kh\xF4ng li\xEAn quan). C\xF3 th\u1EC3 \u0111\u1EB7t t\xEAn gh\xE9p ho\u1EB7c t\xEAn m\u1EDBi nghe h\u1EE3p l\xFD.`;
      thinkingInstructions = `1. \u0110\u1ECCC K\u1EF8 nguy\xEAn li\u1EC7u dung h\u1EE3p \u1EDF tr\xEAn, x\xE1c \u0111\u1ECBnh \u0111\u1EB7c \u0111i\u1EC3m/hi\u1EC7u \u1EE9ng c\u1ED1t l\xF5i c\u1EE7a t\u1EEBng m\xF3n.
2. THI\u1EBET K\u1EBE: T\u1EA1o v\u1EADt ph\u1EA9m m\u1EDBi l\xE0 s\u1EF1 dung h\u1EE3p \u2014 h\xECnh d\xE1ng pha tr\u1ED9n, hi\u1EC7u \u1EE9ng l\xE0 t\u1ED5 h\u1EE3p/n\xE2ng c\u1EA5p c\u1EE7a c\xE1c hi\u1EC7u \u1EE9ng nguy\xEAn li\u1EC7u, ph\xF9 h\u1EE3p ph\u1EA9m ch\u1EA5t [${rarity}].
3. V\u1EBC PIXEL: Khung pixel t\u1ED1i thi\u1EC3u 32x32, B\u1EAET BU\u1ED8C l\u01B0\u1EDBi H\xCCNH VU\xD4NG n x n, g\u1EE3i h\xECnh \u1EA3nh pha tr\u1ED9n gi\u1EEFa c\xE1c nguy\xEAn li\u1EC7u.`;
    } else if (wantStr) {
      contextStr = wantStr;
      if (CS.link) {
        const worldbook = await collectWorldbook();
        contextStr += `
B\u1ED1i c\u1EA3nh th\u1EBB nh\xE2n v\u1EADt & \u0111o\u1EA1n chat hi\u1EC7n t\u1EA1i (B\u1EAET BU\u1ED8C tham kh\u1EA3o \u0111\u1EC3 v\u1EADt ph\u1EA9m kh\u1EDBp v\u1EDBi t\xECnh c\u1EA3nh/th\u1EBF gi\u1EDBi quan hi\u1EC7n t\u1EA1i \u2014 v\xED d\u1EE5 ngu\u1ED3n g\u1ED1c, ch\u1EA5t li\u1EC7u, phong c\xE1ch \u0111\u1EB7t t\xEAn, kh\xF4ng kh\xED c\xE2u chuy\u1EC7n \u2014 nh\u01B0ng KH\xD4NG \u0111\u01B0\u1EE3c \u0111\u1ED5i ch\u1EE7 \u0111\u1EC1/lo\u1EA1i v\u1EADt ph\u1EA9m \u0111\xE3 y\xEAu c\u1EA7u \u1EDF tr\xEAn):
${worldbook ? worldbook : "(Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u th\u1EBF gi\u1EDBi c\u1EE5 th\u1EC3 \u2014 t\u1EF1 do s\xE1ng t\u1EA1o b\u1ED1i c\u1EA3nh ph\xF9 h\u1EE3p)"}
`;
      } else {
        contextStr += `
(L\u01B0u \xFD: ng\u01B0\u1EDDi ch\u01A1i CH\u01AFA b\u1EADt "Li\xEAn k\u1EBFt th\u1EBB nh\xE2n v\u1EADt" n\xEAn kh\xF4ng c\xF3 d\u1EEF li\u1EC7u b\u1ED1i c\u1EA3nh c\u1EE5 th\u1EC3 \u2014 t\u1EF1 do s\xE1ng t\u1EA1o ph\u1EA7n b\u1ED1i c\u1EA3nh/ngu\u1ED3n g\u1ED1c sao cho h\u1EE3p l\xFD.)
`;
      }
      thinkingInstructions = `1. X\xC1C NH\u1EACN Y\xCAU C\u1EA6U: \u0110\u1ECDc k\u1EF9 y\xEAu c\u1EA7u b\u1EAFt bu\u1ED9c c\u1EE7a ng\u01B0\u1EDDi ch\u01A1i \u1EDF tr\xEAn${CS.wantItem ? ` (ch\u1EE7 \u0111\u1EC1: "${CS.wantItem}")` : ""} \u2014 ngh\u0129 ra M\u1ED8T bi\u1EBFn th\u1EC3 c\u1EE5 th\u1EC3 ng\u1EABu nhi\xEAn tho\u1EA3 m\u1ECDi y\xEAu c\u1EA7u \u0111\xF3.
2. L\u1ED2NG GH\xC9P B\u1ED0I C\u1EA2NH: D\u1EF1a v\xE0o b\u1ED1i c\u1EA3nh th\u1EBB nh\xE2n v\u1EADt/\u0111o\u1EA1n chat hi\u1EC7n t\u1EA1i (n\u1EBFu c\xF3) \u0111\u1EC3 quy\u1EBFt \u0111\u1ECBnh ngu\u1ED3n g\u1ED1c, ch\u1EA5t li\u1EC7u, phong c\xE1ch \u0111\u1EB7t t\xEAn v\xE0 kh\xF4ng kh\xED m\xF4 t\u1EA3 c\u1EE7a v\u1EADt ph\u1EA9m \u2014 sao cho n\xF3 nh\u01B0 th\u1EC3 "thu\u1ED9c v\u1EC1" th\u1EBF gi\u1EDBi \u0111ang di\u1EC5n ra, kh\xF4ng ph\u1EA3i v\u1EADt ph\u1EA9m r\u1EDDi r\u1EA1c v\xF4 c\u0103n c\u1EE9.
3. C\u01A0 CH\u1EBE: C\u0103n c\u1EE9 v\xE0o \u0111\u1ED9 hi\u1EBFm [${rarity}] \u0111\u1EC3 thi\u1EBFt l\u1EADp c\u01A1 ch\u1EBF/hi\u1EC7u \u1EE9ng. Thao t\xE1c c\u1EE5 th\u1EC3, th\xFA v\u1ECB, ph\xE1 v\u1EE1 s\xE1o r\u1ED7ng.
4. V\u1EBC PIXEL: Khung pixel t\u1ED1i thi\u1EC3u l\xE0 32x32, c\xF3 th\u1EC3 l\u1EDBn h\u01A1n, B\u1EAET BU\u1ED8C l\xE0 l\u01B0\u1EDBi H\xCCNH VU\xD4NG n x n.`;
    } else if (CS.link) {
      const worldbook = await collectWorldbook();
      contextStr = `Tr\xEDch xu\u1EA5t b\u1ED1i c\u1EA3nh th\u1EBF gi\u1EDBi (Worldbook) & L\u1ECBch s\u1EED tr\xF2 chuy\u1EC7n g\u1EA7n nh\u1EA5t:
${worldbook ? worldbook : "(Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u th\u1EBF gi\u1EDBi c\u1EE5 th\u1EC3)"}
N\u1EBFu th\u1EA5y ph\xF9 h\u1EE3p, h\xE3y thi\u1EBFt k\u1EBF k\u1EF3 v\u1EADt li\xEAn k\u1EBFt v\u1EDBi b\u1ED1i c\u1EA3nh n\xE0y, n\u1EBFu kh\xF4ng th\xEC t\u1EF1 do s\xE1ng t\u1EA1o. Tuy nhi\xEAn, KH\xD4NG \u0110\u01AF\u1EE2C t\xF9y ch\u1EC9nh k\u1EBFt qu\u1EA3 th\xE0nh "\u0111\xE1p \xE1n gi\u1EA3i quy\u1EBFt kh\u1EE7ng ho\u1EA3ng tr\u01B0\u1EDBc m\u1EAFt". K\u1EF3 v\u1EADt ph\u1EA3i duy tr\xEC t\xEDnh \u0111\u1ED9c l\u1EADp ng\u1EABu nhi\xEAn.`;
      thinkingInstructions = `1. T\xCCM \xDD T\u01AF\u1EDENG: \u0110\u1ECDc k\u1EF9 b\u1ED1i c\u1EA3nh th\u1EBF gi\u1EDBi \u0111\u01B0\u1EE3c cung c\u1EA5p. X\xE1c \u0111\u1ECBnh V\u1EF1c \u0111\u1EC1 t\xE0i v\xE0 V\u1EF1c l\u1ED1i ch\u01A1i.
2. C\u01A0 CH\u1EBE: C\u0103n c\u1EE9 v\xE0o \u0111\u1ED9 hi\u1EBFm [${rarity}] \u0111\u1EC3 thi\u1EBFt l\u1EADp c\u01A1 ch\u1EBF. Thao t\xE1c c\u1EE5 th\u1EC3, c\u1EF1c k\u1EF3 th\xFA v\u1ECB v\xE0 ph\xE1 v\u1EE1 s\xE1o r\u1ED7ng (anti-clich\xE9).
3. V\u1EBC PIXEL: Khung pixel t\u1ED1i thi\u1EC3u l\xE0 32x32. B\u1EA1n c\xF3 th\u1EC3 m\u1EDF r\u1ED9ng k\xEDch th\u01B0\u1EDBc l\u1EDBn h\u01A1n (v\xED d\u1EE5 40x40, 48x48), nh\u01B0ng B\u1EAET BU\u1ED8C ph\u1EA3i l\xE0 l\u01B0\u1EDBi H\xCCNH VU\xD4NG n x n (s\u1ED1 d\xF2ng v\xE0 s\u1ED1 k\xFD t\u1EF1 m\u1ED7i d\xF2ng ph\u1EA3i b\u1EB1ng nhau).`;
    } else {
      contextStr = `KH\xD4NG C\xD3 CH\u1EE6 \u0110\u1EC0 C\u1ED0 \u0110\u1ECANH. \u0110\u1EC3 \u0111\u1EA3m b\u1EA3o t\xEDnh ng\u1EABu nhi\xEAn tuy\u1EC7t \u0111\u1ED1i, b\u1EA1n PH\u1EA2I t\u1EF1 b\u1ED1c th\u0103m V\u1EF1c \u0111\u1EC1 t\xE0i v\xE0 V\u1EF1c l\u1ED1i ch\u01A1i b\u1EA5t k\u1EF3. M\u1ECDi th\u1EE9 trong v\u0169 tr\u1EE5 \u0111\u1EC1u c\xF3 th\u1EC3 tr\u1EDF th\xE0nh k\u1EF3 v\u1EADt.`;
      thinkingInstructions = `1. B\u1ED0C TH\u0102M CH\u1EE6 \u0110\u1EC0: B\u1ED1c th\u0103m ng\u1EABu nhi\xEAn V\u1EF1c \u0111\u1EC1 t\xE0i (Kh\xED v\u1EADt, sinh m\u1EC7nh, quy t\u1EAFc, kh\xF4ng gian...) v\xE0 V\u1EF1c l\u1ED1i ch\u01A1i (X\u1EED l\xFD th\xF4ng tin, c\u1EA3i t\u1EA1o b\u1ED1i c\u1EA3nh, giao d\u1ECBch \u0111\xE1nh c\u01B0\u1EE3c...).
2. C\u01A0 CH\u1EBE: C\u0103n c\u1EE9 v\xE0o \u0111\u1ED9 hi\u1EBFm [${rarity}] \u0111\u1EC3 thi\u1EBFt l\u1EADp c\u01A1 ch\u1EBF. Thao t\xE1c c\u1EE5 th\u1EC3, c\u1EF1c k\u1EF3 th\xFA v\u1ECB v\xE0 ph\xE1 v\u1EE1 s\xE1o r\u1ED7ng (anti-clich\xE9).
3. V\u1EBC PIXEL: Khung pixel t\u1ED1i thi\u1EC3u l\xE0 32x32. B\u1EA1n c\xF3 th\u1EC3 m\u1EDF r\u1ED9ng k\xEDch th\u01B0\u1EDBc l\u1EDBn h\u01A1n (v\xED d\u1EE5 40x40, 48x48), nh\u01B0ng B\u1EAET BU\u1ED8C ph\u1EA3i l\xE0 l\u01B0\u1EDBi H\xCCNH VU\xD4NG n x n (s\u1ED1 d\xF2ng v\xE0 s\u1ED1 k\xFD t\u1EF1 m\u1ED7i d\xF2ng ph\u1EA3i b\u1EB1ng nhau).`;
    }
    contextStr = originStr + contextStr;
    const rarityGuidance = rarity === "Huy\u1EC1n tho\u1EA1i" ? "[\u0110\u1ED9t ph\xE1 Quy t\u1EAFc] V\u1EADt ph\u1EA9m \u0111\u1ED9c nh\u1EA5t v\xF4 nh\u1ECB v\u1EDBi kh\u1EA3 n\u0103ng b\u1EBB cong ho\u1EB7c vi\u1EBFt l\u1EA1i m\u1ED9t quy t\u1EAFc c\u1EE5 th\u1EC3 c\u1EE7a tr\xF2 ch\u01A1i/th\u1EBF gi\u1EDBi. S\u1EE9c m\u1EA1nh v\u0129 m\xF4, hi\u1EC7u \u1EE9ng h\xECnh \u1EA3nh ho\xE0nh tr\xE1ng. D\xF9 c\u1EF1c m\u1EA1nh, n\xF3 v\u1EABn ph\u1EA3i tu\xE2n theo logic c\u1EE7a th\u1EBF gi\u1EDBi, kh\xF4ng bi\u1EBFn ng\u01B0\u1EDDi ch\u01A1i th\xE0nh th\u1EA7n to\xE0n n\u0103ng nh\xE0m ch\xE1n." : rarity === "S\u1EED thi" ? "[T\xE0i s\u1EA3n Chi\u1EBFn l\u01B0\u1EE3c] \u0110\u1ED3 v\u1EADt mang t\xEDnh thay \u0111\u1ED5i l\u1ED1i ch\u01A1i (Game-changer). C\xF3 s\u1EE9c m\u1EA1nh l\u1EDBn, \u0111a d\u1EE5ng, ho\u1EB7c t\u1EF1 \u0111\u1ED9ng h\xF3a m\u1ED9t quy tr\xECnh ph\u1EE9c t\u1EA1p. Tuy nhi\xEAn, \u0111\u1EC3 ph\xE1t huy t\u1ED1i \u0111a c\u1EA7n c\xF3 s\u1EF1 t\xEDnh to\xE1n c\u1EE7a ng\u01B0\u1EDDi ch\u01A1i." : rarity === "Hi\u1EBFm" ? "[C\u01A1 ch\u1EBF \u0110\u1EB7c bi\u1EC7t] V\u1EADt ph\u1EA9m b\u1EAFt \u0111\u1EA7u c\xF3 'c\u01A1 ch\u1EBF ho\u1EA1t \u0111\u1ED9ng' ri\xEAng bi\u1EC7t. C\xF3 th\u1EC3 thay \u0111\u1ED5i m\u1ED9t ph\u1EA7n nh\u1ECF c\u1EE5c di\u1EC7n, mang l\u1EA1i l\u1EE3i \xEDch r\xF5 r\u1EC7t nh\u01B0ng s\u1EBD c\xF3 th\u1EDDi gian h\u1ED3i chi\xEAu (cooldown) ho\u1EB7c \u0111i\u1EC1u ki\u1EC7n k\xEDch ho\u1EA1t." : rarity === "Th\u01B0\u1EDDng" ? "[C\xF4ng c\u1EE5 C\u01A1 b\u1EA3n] V\u1EADt ph\u1EA9m c\xF3 \xEDch nh\u01B0ng c\xF4ng n\u0103ng \u0111\u01A1n gi\u1EA3n, gi\u1EDBi h\u1EA1n r\xF5 r\xE0ng. Th\u01B0\u1EDDng l\xE0 \u0111\u1ED3 ti\xEAu hao, c\xF4ng c\u1EE5 h\u1ED7 tr\u1EE3 canh t\xE1c, sinh ho\u1EA1t ho\u1EB7c t\u0103ng ch\u1EC9 s\u1ED1 nh\u1EB9." : "[V\u1EADt ph\u1EA9m T\u1EA5u h\xE0i/V\xF4 d\u1EE5ng] Nh\u1EEFng m\xF3n \u0111\u1ED3 k\u1EF3 c\u1EE5c, h\u1ECFng h\xF3c ho\u1EB7c c\xF3 c\xF4ng d\u1EE5ng c\u1EF1c k\u1EF3 v\xF4 th\u01B0\u1EDFng v\xF4 ph\u1EA1t. Ch\xFAng t\u1ED3n t\u1EA1i ch\u1EE7 y\u1EBFu \u0111\u1EC3 g\xE2y c\u01B0\u1EDDi, t\u1EA1o t\xECnh hu\u1ED1ng tr\u1EDB tr\xEAu trong t\u01B0\u01A1ng t\xE1c \u0111\u1EDDi th\u01B0\u1EDDng.";
    const basePrice = rarity === "Huy\u1EC1n tho\u1EA1i" ? 2e4 : rarity === "S\u1EED thi" ? 8e3 : rarity === "Hi\u1EBFm" ? 2500 : rarity === "Th\u01B0\u1EDDng" ? 500 : 100;
    const sysPrompt = `B\u1EA1n l\xE0 m\u1ED9t AI thi\u1EBFt k\u1EBF "K\u1EF3 v\u1EADt d\u1ECB gi\u1EDBi" (Otherworldly Artifact) v\xE0 chuy\xEAn gia Pixel Art (n x n, t\u1ED1i thi\u1EC3u 32x32).
H\xE3y s\xE1ng t\u1EA1o 1 K\u1EF2 V\u1EACT \u0110\u1ED8C NH\u1EA4T ph\u1EA9m ch\u1EA5t [${rarity}].
${contextStr}

--- QUY T\u1EAEC C\u1ED0T L\xD5I T\u1EEA V\u1EA0N H\u1EEEU \u0110\u1EA0O NGUY\xCAN ---
${GACHA_PROMPT}
--- K\u1EBET TH\xDAC QUY T\u1EAEC C\u1ED0T L\xD5I ---

B\u1EA2NG M\xC0U PIXEL CHO PH\xC9P (K\xFD t\u1EF1: M\xE3 m\xE0u Hex):
${paletteStr}

QUY T\u1EAEC B\u1ED4 SUNG:
1. C\u1EA5p \u0111\u1ED9 s\u1EE9c m\u1EA1nh hi\u1EC7n t\u1EA1i: Ph\u1EA9m ch\u1EA5t [${rarity}] - ${rarityGuidance}
2. \u0110\u1ECBnh gi\xE1 h\u1EE3p l\xFD: Kh\xF4ng \u0111\u01B0\u1EE3c ph\xE1 gi\xE1 kinh t\u1EBF game.

H\u01AF\u1EDANG D\u1EAAN T\u01AF DUY (B\u1EAFt bu\u1ED9c ph\u1EA3i c\xF3 th\u1EBB <thinking> tr\u01B0\u1EDBc khi xu\u1EA5t m\xE3):
${thinkingInstructions}

QUY T\u1EAEC \u0110\u1EA6U RA B\u1EAET BU\u1ED8C:
Sau khi \u0111\xF3ng th\u1EBB </thinking>, ch\u1EC9 xu\u1EA5t \u0111\xFAng 1 kh\u1ED1i m\xE3 \`\`\`json ch\u1EE9a c\u1EA5u tr\xFAc:
{
  "name": "T\xEAn k\u1EF3 v\u1EADt (2~7 ch\u1EEF, \u1EA5n t\u01B0\u1EE3ng, g\u1EE3i s\u1EF1 t\xF2 m\xF2)",
  "desc": "M\xF4 t\u1EA3 ng\u1EAFn g\u1ECDn C\u01A0 CH\u1EBE v\xE0 C\xC1CH S\u1EEC D\u1EE4NG c\u1EE7a k\u1EF3 v\u1EADt (d\u01B0\u1EDBi 100 ch\u1EEF). Ph\u1EA3i r\xF5 r\xE0ng, th\xFA v\u1ECB, \u0111\u1ED9c l\u1EA1.",
  "price": S\u1ED1 nguy\xEAn \u0111\u1ECBnh gi\xE1. Gi\xE1 t\u1ED1i thi\u1EC3u: ${basePrice}G. NGHI\xCAM C\u1EA4M L\u1EA0M PH\xC1T, gi\xE1 tr\u1ECB t\u1ED1i \u0111a tuy\u1EC7t \u0111\u1ED1i KH\xD4NG \u0110\u01AF\u1EE2C V\u01AF\u1EE2T QU\xC1 ${basePrice * 5}G,
  "spriteMap": [ m\u1EA3ng c\xE1c chu\u1ED7i. N\u1EBFu ch\u1ECDn k\xEDch th\u01B0\u1EDBc n x n, m\u1EA3ng PH\u1EA2I C\xD3 \u0110\xDANG n chu\u1ED7i, v\xE0 m\u1ED7i chu\u1ED7i D\xC0I CH\xCDNH X\xC1C n k\xFD t\u1EF1. Ph\u1EA3i l\xE0 h\xECnh vu\xF4ng (min 32x32). Ch\u1EC9 d\xF9ng k\xFD t\u1EF1 B\u1EA3ng m\xE0u v\xE0 d\u1EA5u '.' cho \u0111i\u1EC3m trong su\u1ED1t ]
}`;
    const userPrompt = fusionSources && fusionSources.length ? `H\xE3y dung h\u1EE3p c\xE1c nguy\xEAn li\u1EC7u \u0111\xE3 cho th\xE0nh 1 v\u1EADt ph\u1EA9m m\u1EDBi ph\u1EA9m ch\u1EA5t ${rarity}.` : `H\xE3y s\xE1ng t\u1EA1o 1 v\u1EADt ph\u1EA9m \u0111\u1EB7c bi\u1EC7t ng\u1EABu nhi\xEAn ph\u1EA9m ch\u1EA5t ${rarity}.`;
    console.groupCollapsed(`=== GACHA AI DEBUG: B\u1EAFt \u0111\u1EA7u t\u1EA1o [${rarity}] ===`);
    console.log("[System Prompt]:\n", sysPrompt);
    console.log("[User Prompt]:\n", userPrompt);
    console.groupEnd();
    const ctrl = new AbortController();
    const to = setTimeout(() => ctrl.abort(), 15e4);
    const res = await fetch(SEC.url.replace(/\/+$/, "") + "/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json", ...SEC.key ? { Authorization: "Bearer " + SEC.key } : {} },
      body: JSON.stringify({
        model: SEC.model,
        messages: [
          { role: "system", content: sysPrompt },
          { role: "user", content: userPrompt }
        ]
      }),
      signal: ctrl.signal
    });
    clearTimeout(to);
    if (!res.ok) return null;
    const data = await res.json();
    const content = data.choices?.[0]?.message?.content || "";
    console.groupCollapsed(`=== GACHA AI DEBUG: Ph\u1EA3n h\u1ED3i [${rarity}] ===`);
    console.log("[Raw Content]:\n", content);
    console.groupEnd();
    let jsonStr = content;
    const match = content.match(/```(?:json)?\s*([\s\S]*?)\s*```/);
    if (match) jsonStr = match[1];
    let jtxt = extractJson(jsonStr) || extractJson(content);
    if (jtxt) {
      const o = JSON.parse(jtxt);
      if (o && o.name && o.desc && Array.isArray(o.spriteMap)) {
        const fixedMap = [];
        const size = Math.max(32, o.spriteMap.length);
        for (let i = 0; i < size; i++) {
          let row = typeof o.spriteMap[i] === "string" ? o.spriteMap[i] : "";
          if (row.length < size) row = row.padEnd(size, ".");
          if (row.length > size) row = row.substring(0, size);
          fixedMap.push(row);
        }
        o.spriteMap = fixedMap;
        if (typeof o.price !== "number") {
          o.price = rarity === "S\u1EED thi" ? 8e3 : rarity === "Huy\u1EC1n tho\u1EA1i" ? 2e4 : rarity === "Hi\u1EBFm" ? 2500 : rarity === "Th\u01B0\u1EDDng" ? 500 : 100;
        }
        return o;
      }
    }
  } catch (e) {
  }
  return null;
}
async function generateUniqueItem({ rarity, color, sellPrice, ticketType, fusionSources }) {
  initGachaState();
  const timestamp = now();
  const randId = Math.floor(Math.random() * 1e4);
  const key = `unique@${timestamp}_${randId}`;
  const spKey = `gacha_sp_${timestamp}_${randId}`;
  let finalName = `B\u1EA3o v\u1EADt \u2726 ${randId}`;
  let finalDesc = `V\u1EADt ph\u1EA9m \u0111\u1ED9c nh\u1EA5t [${rarity}] mang theo ma l\u1EF1c k\u1EF3 di\u1EC7u. C\xF3 th\u1EC3 "L\u1EA5y ra" trong Balo \u0111\u1EC3 d\xF9ng trong c\u1ED1t truy\u1EC7n!`;
  let finalSpriteMap = null;
  if (SEC.url && SEC.model) {
    for (let attempt = 1; attempt <= 3; attempt++) {
      const aiData = await generateAIUniqueItemData(rarity, fusionSources);
      if (aiData) {
        finalName = aiData.name;
        finalDesc = aiData.desc;
        if (aiData.price !== void 0) sellPrice = parseInt(aiData.price) || sellPrice;
        finalSpriteMap = aiData.spriteMap;
        break;
      }
    }
  }
  if (!finalSpriteMap) {
    finalSpriteMap = generateProcedural32x32Sprite(rarity);
  }
  registerDynamicSprite(spKey, finalSpriteMap);
  let bonusDesc = "";
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
  ctx.S.bag[key] = (ctx.S.bag[key] || 0) + 1;
  save();
  return { key, name: finalName, rarity, color, desc: finalDesc, bonusDesc, sell: sellPrice, sp: spKey };
}
async function executeGachaRoll(ticketType, count, updateLoadingText) {
  initGachaState();
  const rollsPlan = [];
  for (let i = 0; i < count; i++) {
    let rarity, color, price;
    if (ticketType === "super") {
      rarity = "Huy\u1EC1n tho\u1EA1i";
      color = "#ff8000";
      price = 2e4;
    } else if (ticketType === "spec") {
      const roll = Math.random() * 100;
      if (roll < 50) {
        rarity = "S\u1EED thi";
        color = "#a335ee";
        price = 8e3;
      } else {
        rarity = "Hi\u1EBFm";
        color = "#4a90e2";
        price = 2500;
      }
    } else {
      const roll = Math.random() * 100;
      if (roll < 60) {
        rarity = "Th\u01B0\u1EDDng";
        color = "#b0bec5";
        price = 500;
      } else {
        rarity = "R\xE1c";
        color = "#9e9e9e";
        price = 100;
      }
    }
    rollsPlan.push({ rarity, color, price });
  }
  let doneCount = 0;
  const results = await pMap(rollsPlan, async (plan) => {
    doneCount++;
    if (updateLoadingText) {
      updateLoadingText(rollsPlan.length > 1 ? "\u0110ang t\u1EC9nh th\u1EE9c b\u1EA3o v\u1EADt... (" + doneCount + "/" + rollsPlan.length + ")" : "\u0110ang t\u1EC9nh th\u1EE9c b\u1EA3o v\u1EADt...");
    }
    const item = await generateUniqueItem({ rarity: plan.rarity, color: plan.color, sellPrice: plan.price, ticketType });
    return {
      type: "unique",
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
function openGachaModal() {
  initGachaState();
  const bodyHTML = `
    <div class="gacha-wrap" style="text-align:center; position:relative; overflow:visible; padding:4px 0;">
      <div style="font-size:12px; color:#7a5c38; margin-bottom:10px;">Quay <b>mi\u1EC5n ph\xED</b>, kh\xF4ng gi\u1EDBi h\u1EA1n \u2014 c\u1EE9 b\u1EA5m l\xE0 ra \u0111\u1ED3!</div>

      <!-- M\xE1y Gachapon -->
      <div class="gacha-machine-box" style="position:relative; width:130px; height:130px; margin:0 auto 14px; display:flex; justify-content:center; align-items:center;">
        <div id="gachaMachineSprite" style="display:inline-block; transition:transform 0.15s ease;">
          ${spriteSVG("gachapon", 120)}
        </div>
      </div>

      <!-- C\xE1c N\xFAt Quay -->
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">
        <span class="buy" id="gachaRollNorm1" style="padding:10px 0; font-size:13px; font-weight:bold; background:#6cb457; border:1px solid #4e903a; color:#fff; text-shadow:0 1px 2px rgba(0,0,0,0.3); text-align:center; border-radius:6px;">Quay Th\u01B0\u1EDDng \xD71<br><span style="font-size:10px; font-weight:normal;">(R\xE1c/Th\u01B0\u1EDDng)</span></span>
        <span class="buy" id="gachaRollNorm10" style="padding:10px 0; font-size:13px; font-weight:bold; background:#4e903a; border:1px solid #3c702c; color:#fff; text-shadow:0 1px 2px rgba(0,0,0,0.3); text-align:center; border-radius:6px;">Quay Th\u01B0\u1EDDng \xD710<br><span style="font-size:10px; font-weight:normal;">(R\xE1c/Th\u01B0\u1EDDng)</span></span>
        <span class="buy" id="gachaRollSpec1" style="padding:10px 0; font-size:13px; font-weight:bold; background:#a335ee; border:1px solid #8a2acc; color:#fff; text-shadow:0 1px 2px rgba(0,0,0,0.3); text-align:center; border-radius:6px;">Quay \u0110\u1EB7c Bi\u1EC7t \xD71<br><span style="font-size:10px; font-weight:normal;">(Hi\u1EBFm/S\u1EED thi)</span></span>
        <span class="buy" id="gachaRollSpec10" style="padding:10px 0; font-size:13px; font-weight:bold; background:#8a2acc; border:1px solid #6a1aa3; color:#fff; text-shadow:0 1px 2px rgba(0,0,0,0.3); text-align:center; border-radius:6px;">Quay \u0110\u1EB7c Bi\u1EC7t \xD710<br><span style="font-size:10px; font-weight:normal;">(Hi\u1EBFm/S\u1EED thi)</span></span>
        <span class="buy" id="gachaRollSuper1" style="padding:10px 0; font-size:13px; font-weight:bold; background:linear-gradient(90deg, #ff8000, #ff4500); border:1px solid #cc3700; color:#fff; text-shadow:0 1px 2px rgba(0,0,0,0.3); text-align:center; border-radius:6px;">Quay Si\xEAu C\u01B0\u1EDDng \xD71<br><span style="font-size:10px; font-weight:normal;">(Huy\u1EC1n tho\u1EA1i)</span></span>
        <span class="buy" id="gachaRollSuper10" style="padding:10px 0; font-size:13px; font-weight:bold; background:linear-gradient(90deg, #cc3700, #9e2a00); border:1px solid #731e00; color:#fff; text-shadow:0 1px 2px rgba(0,0,0,0.3); text-align:center; border-radius:6px;">Quay Si\xEAu C\u01B0\u1EDDng \xD710<br><span style="font-size:10px; font-weight:normal;">(Huy\u1EC1n tho\u1EA1i)</span></span>
      </div>

      <div style="margin-top:10px;">
        <span class="buy plain" id="gachaOpenBagBtn" style="padding:6px 14px; font-size:12px; display:inline-flex; align-items:center; justify-content:center; gap:5px;">${spriteSVG("bagIcon", 16)}<span>Xem Balo \u0111\u1ED3 \u0111\xE3 quay</span></span>
      </div>

      <!-- Result Overlay Animation (L\u01B0\u1EDBi k\u1EBFt qu\u1EA3) -->
      <div id="gachaResultOverlay" style="display:none; position:absolute; inset:0; background:rgba(255,255,255,0.97); z-index:20; border-radius:8px; padding:12px; flex-direction:column; justify-content:center; align-items:center; box-shadow:0 4px 20px rgba(0,0,0,0.3);">
        <div id="gachaCapsuleAnim" style="position:relative; width:48px; height:48px; margin-bottom:10px;"></div>
        <div id="gachaResultTitle" style="font-weight:bold; font-size:16px; margin:4px 0 8px; color:#5a3f78;"></div>
        <div id="gachaResultGrid" style="display:flex; flex-wrap:wrap; gap:8px; justify-content:center; max-height:220px; overflow-y:auto; margin-bottom:14px; width:100%; padding:4px;"></div>
        <span class="buy" id="gachaCloseResultBtn" style="padding:6px 20px; font-size:12px;">X\xE1c nh\u1EADn nh\u1EADn th\u01B0\u1EDFng</span>
      </div>

      <!-- Showcase Modal (Khoe t\u1EEBng m\xF3n \u0111\u1ED9c nh\u1EA5t) -->
      <div id="gachaShowcaseOverlay" style="display:none; position:absolute; inset:0; background:rgba(0,0,0,0.85); z-index:40; flex-direction:column; justify-content:center; align-items:center; border-radius:8px; padding:20px; text-align:center; overflow-y:auto;">
        <div id="gachaShowcaseCard" style="background:#fff; border-radius:12px; padding:20px; box-shadow:0 0 20px rgba(255,128,0,0.5); width:100%; max-width:300px; display:flex; flex-direction:column; position:relative; margin:auto;">
          <div id="gachaShowcaseRarity" style="font-size:12px; font-weight:bold; margin-bottom:10px; text-transform:uppercase; flex:none;"></div>
          <div id="gachaShowcaseIcon" style="margin:10px auto; display:flex; justify-content:center; flex:none;"></div>
          <div id="gachaShowcaseName" style="font-size:18px; font-weight:bold; margin:15px 0 8px; color:#3a2c22; flex:none;"></div>
          <div id="gachaShowcaseDesc" style="font-size:12px; color:#555; flex:none;"></div>
          <div style="display:flex; gap:8px; margin-top:20px; justify-content:center;">
            <span class="buy plain" id="gachaShowcaseDelBtn" style="padding:8px 18px; font-size:13px; color:#a33;">\u{1F5D1}\uFE0F Xo\xE1</span>
            <span class="buy" id="gachaShowcaseNextBtn" style="padding:8px 24px; font-size:13px; background:#a335ee; border-color:#8a2acc; color:#fff;">Ti\u1EBFp t\u1EE5c</span>
          </div>
        </div>
      </div>

      <!-- Loading Overlay (Ch\u1EDD AI T\u1EC9nh th\u1EE9c) -->
      <div id="gachaLoadingOverlay" style="display:none; position:absolute; inset:0; background:rgba(255,255,255,0.85); z-index:30; flex-direction:column; justify-content:center; align-items:center; border-radius:8px;">
        <div style="width:48px; height:48px; animation: gachaShake 0.5s infinite alternate;">${spriteSVG("gachapon", 48)}</div>
        <div id="gachaLoadingText" style="margin-top:12px; font-size:13px; font-weight:bold; color:#5a3f78;">\u0110ang quay...</div>
      </div>
    </div>
  `;
  openModal("M\xE1y Gachapon", bodyHTML);
  $id("gachaOpenBagBtn")?.addEventListener("click", () => openBagModal());
  const triggerGridResult = (ticketType, count, results) => {
    const overlay = $id("gachaResultOverlay");
    const animSlot = $id("gachaCapsuleAnim");
    const title = $id("gachaResultTitle");
    const grid = $id("gachaResultGrid");
    if (!overlay || !animSlot || !title || !grid) return;
    const capsuleIcon = ticketType === "super" ? spriteSVG("gachaCapsuleSpec", 48) : ticketType === "spec" ? spriteSVG("gachaCapsuleSpec", 48) : spriteSVG("gachaCapsuleNorm", 48);
    animSlot.innerHTML = capsuleIcon;
    animSlot.style.animation = "gachaDrop 0.5s ease-out";
    const tName = ticketType === "super" ? "Si\xEAu c\u01B0\u1EDDng" : ticketType === "spec" ? "\u0110\u1EB7c bi\u1EC7t" : "Th\u01B0\u1EDDng";
    title.textContent = `K\u1EBFt qu\u1EA3 Quay ${tName} \xD7${count}`;
    grid.innerHTML = results.map((r) => `
      <div class="gacha-item-card rarity-${r.rarity.replace(/\s+/g, "-")}" style="border:2px solid ${r.color}; border-radius:8px; padding:6px 8px; background:#fff; display:flex; flex-direction:column; align-items:center; width:100px; text-align:center; box-shadow:0 2px 6px rgba(0,0,0,0.15);">
        <div style="font-size:10px; font-weight:bold; color:${r.color}; margin-bottom:2px;">${r.rarity}</div>
        <div style="margin:2px 0;">${r.icon}</div>
        <div style="font-size:11px; font-weight:bold; color:#3a2c22; margin-top:2px;">${r.name}</div>
      </div>
    `).join("");
    overlay.style.display = "flex";
  };
  $id("gachaCloseResultBtn")?.addEventListener("click", () => {
    const overlay = $id("gachaResultOverlay");
    if (overlay) overlay.style.display = "none";
  });
  const doRoll = async (ticketType, count) => {
    const machine = $id("gachaMachineSprite");
    const loadOverlay = $id("gachaLoadingOverlay");
    const loadText = $id("gachaLoadingText");
    if (machine) machine.style.animation = "gachaShake 0.2s ease infinite";
    if (loadOverlay) loadOverlay.style.display = "flex";
    if (loadText) loadText.textContent = "\u0110ang quay...";
    const results = await executeGachaRoll(ticketType, count, (txt) => {
      if (loadText) loadText.textContent = txt;
    });
    if (machine) machine.style.animation = "";
    if (loadOverlay) loadOverlay.style.display = "none";
    if (results) {
      let currentShowcase = 0;
      const deletedIdx = /* @__PURE__ */ new Set();
      const showcaseOverlay = $id("gachaShowcaseOverlay");
      const scRarity = $id("gachaShowcaseRarity");
      const scIcon = $id("gachaShowcaseIcon");
      const scName = $id("gachaShowcaseName");
      const scDesc = $id("gachaShowcaseDesc");
      const scCard = $id("gachaShowcaseCard");
      const showNextUnique = () => {
        if (currentShowcase >= results.length) {
          showcaseOverlay.style.display = "none";
          const kept = results.filter((_, i) => !deletedIdx.has(i));
          if (kept.length) triggerGridResult(ticketType, count, kept);
          else toast("B\u1EA1n \u0111\xE3 xo\xE1 h\u1EBFt v\u1EADt ph\u1EA9m v\u1EEBa quay");
          return;
        }
        const u = results[currentShowcase];
        scRarity.textContent = u.rarity;
        scRarity.style.color = u.color;
        scCard.style.boxShadow = `0 0 30px ${u.color}80`;
        scIcon.innerHTML = spriteSVG(u.spKey, 64);
        scName.textContent = u.name;
        scDesc.textContent = u.desc;
        showcaseOverlay.style.display = "flex";
        showcaseOverlay.scrollTop = 0;
        scCard.style.animation = "none";
        void scCard.offsetWidth;
        scCard.style.animation = "gachaDrop 0.5s ease-out";
      };
      $id("gachaShowcaseNextBtn").onclick = () => {
        currentShowcase++;
        showNextUnique();
      };
      $id("gachaShowcaseDelBtn").onclick = () => {
        const u = results[currentShowcase];
        if (u.key && ctx.S.uniques[u.key]) {
          delete ctx.S.bag[u.key];
          delete ctx.S.uniques[u.key];
          save();
        }
        deletedIdx.add(currentShowcase);
        toast("\u0110\xE3 xo\xE1: " + u.name);
        currentShowcase++;
        showNextUnique();
      };
      showNextUnique();
    }
  };
  $id("gachaRollNorm1")?.addEventListener("click", () => doRoll("norm", 1));
  $id("gachaRollNorm10")?.addEventListener("click", () => doRoll("norm", 10));
  $id("gachaRollSpec1")?.addEventListener("click", () => doRoll("spec", 1));
  $id("gachaRollSpec10")?.addEventListener("click", () => doRoll("spec", 10));
  $id("gachaRollSuper1")?.addEventListener("click", () => doRoll("super", 1));
  $id("gachaRollSuper10")?.addEventListener("click", () => doRoll("super", 10));
}
var bagMode = "normal";
var fuseSelected = [];
var delSelected = [];
var bagFilterRarity = "all";
var bagSortMode = "new";
function keyTimestamp(k) {
  const n = parseInt(String(k).split("@")[1], 10);
  return isNaN(n) ? 0 : n;
}
function openBagModal() {
  initGachaState();
  bagMode = "normal";
  fuseSelected = [];
  delSelected = [];
  renderBagModal();
}
function renderBagModal() {
  let keys = Object.keys(ctx.S.bag || {}).filter((k) => k.startsWith("unique@") && ctx.S.bag[k] > 0);
  const allCount = keys.length;
  if (bagFilterRarity !== "all") {
    keys = keys.filter((k) => ctx.S.uniques[k] && ctx.S.uniques[k].rarity === bagFilterRarity);
  }
  keys.sort((a, b) => {
    if (bagSortMode === "rarity") {
      const ra = RARITY_ORDER.indexOf((ctx.S.uniques[a] || {}).rarity);
      const rb = RARITY_ORDER.indexOf((ctx.S.uniques[b] || {}).rarity);
      if (rb !== ra) return rb - ra;
      return keyTimestamp(b) - keyTimestamp(a);
    }
    return keyTimestamp(b) - keyTimestamp(a);
  });
  const filterBarHTML = bagMode === "normal" && allCount > 0 ? `
    <div style="display:flex;gap:6px;margin-bottom:10px;flex-wrap:wrap;align-items:center;">
      <select class="inp" id="bagFilterSel" style="flex:none;width:auto;padding:4px 6px;font-size:12px;">
        <option value="all" ${bagFilterRarity === "all" ? "selected" : ""}>T\u1EA5t c\u1EA3 b\u1EADc</option>
        ${RARITY_ORDER.map((r) => `<option value="${r}" ${bagFilterRarity === r ? "selected" : ""}>${r}</option>`).join("")}
      </select>
      <select class="inp" id="bagSortSel" style="flex:none;width:auto;padding:4px 6px;font-size:12px;">
        <option value="new" ${bagSortMode === "new" ? "selected" : ""}>M\u1EDBi nh\u1EA5t</option>
        <option value="rarity" ${bagSortMode === "rarity" ? "selected" : ""}>Hi\u1EBFm nh\u1EA5t</option>
      </select>
      <span style="font-size:11px;color:#a3763d;">${keys.length}/${allCount} m\xF3n</span>
    </div>` : "";
  const modeNote = bagMode === "fuse" ? `<div class="note" style="margin-bottom:8px;background:rgba(163,53,238,0.1);border-color:#a335ee">\u{1F52E} <b>Ch\u1EBF \u0111\u1ED9 Dung H\u1EE3p</b>: ch\u1ECDn 2\u20133 v\u1EADt ph\u1EA9m \u0111\u1EC3 g\u1ED9p th\xE0nh 1 v\u1EADt ph\u1EA9m m\u1EDBi (ph\u1EA9m ch\u1EA5t trung b\xECnh, hi\u1EC7u \u1EE9ng pha tr\u1ED9n). C\xE1c v\u1EADt ph\u1EA9m \u0111\xE3 ch\u1ECDn s\u1EBD <b>b\u1ECB ti\xEAu hao</b> (m\u1EA5t 1 c\xE1i m\u1ED7i lo\u1EA1i).</div>` : bagMode === "del" ? `<div class="note" style="margin-bottom:8px;background:rgba(170,51,51,0.08);border-color:#a33">\u{1F5D1}\uFE0F <b>Ch\u1EBF \u0111\u1ED9 Xo\xE1 nhi\u1EC1u</b>: tick ch\u1ECDn c\xE1c v\u1EADt ph\u1EA9m mu\u1ED1n xo\xE1 (xo\xE1 <b>to\xE0n b\u1ED9 s\u1ED1 l\u01B0\u1EE3ng</b> m\xF3n \u0111\xF3 kh\u1ECFi Balo, kh\xF4ng d\xF9ng l\u1EA1i \u0111\u01B0\u1EE3c), r\u1ED3i b\u1EA5m Xo\xE1.</div>` : "";
  const itemsHTML = keys.length ? keys.map((k) => {
    const it = ctx.S.uniques[k];
    if (!it) return "";
    const have = ctx.S.bag[k];
    const fuseChecked = fuseSelected.includes(k);
    const delChecked = delSelected.includes(k);
    return `
      <div class="item" data-rowkey="${k}" style="border-left:3px solid ${it.color};${bagMode === "fuse" || bagMode === "del" ? "cursor:pointer;" : ""}${bagMode === "fuse" && fuseChecked || bagMode === "del" && delChecked ? "background:#f3e6c8;outline:2px solid #c9a273;" : ""}">
        ${bagMode === "fuse" ? `<input type="checkbox" data-fusekey="${k}" ${fuseChecked ? "checked" : ""} style="width:18px;height:18px;flex:none;pointer-events:none;">` : ""}
        ${bagMode === "del" ? `<input type="checkbox" data-delkeycb="${k}" ${delChecked ? "checked" : ""} style="width:18px;height:18px;flex:none;pointer-events:none;">` : ""}
        <span class="icon">${spriteSVG(it.sp, 32)}</span>
        <span class="info">
          <div class="name" style="color:${it.color};">${it.name} <span style="font-size:10px; color:#999;">\xD7${have}</span></div>
          <div class="meta">[${it.rarity}] ${it.desc}</div>
        </span>
        ${bagMode === "normal" ? `
          <span class="buy" data-takeoutkey="${k}" style="font-size:11px;padding:4px 8px;">L\u1EA5y ra</span>
          <span class="buy plain" data-delkey="${k}" style="font-size:11px;padding:4px 8px;color:#a33;">Xo\xE1</span>
        ` : ""}
      </div>`;
  }).join("") : `<div class="note" style="text-align:center; padding:20px 0;">Balo tr\u1ED1ng \u2014 \u0111i quay Gacha l\u1EA5y \u0111\u1ED3 th\xF4i!</div>`;
  const footerHTML = bagMode === "fuse" ? `<div style="display:flex;gap:8px;margin-top:10px;">
        <span class="buy" id="fuseGoBtn" style="background:linear-gradient(90deg,#a335ee,#6a1aa3);border-color:#6a1aa3;">\u{1F52E} Dung h\u1EE3p (${fuseSelected.length} m\xF3n)</span>
        <span class="buy plain" id="fuseCancelBtn">Hu\u1EF7</span>
      </div>` : bagMode === "del" ? `<div style="display:flex;gap:8px;margin-top:10px;flex-wrap:wrap;">
        <span class="buy plain" id="delAllToggleBtn" style="font-size:11px;">Ch\u1ECDn t\u1EA5t c\u1EA3 / B\u1ECF ch\u1ECDn</span>
        <span class="buy" id="delGoMultiBtn" style="background:#c94a4a;border-color:#a33;color:#fff;">\u{1F5D1}\uFE0F Xo\xE1 \u0111\xE3 ch\u1ECDn (${delSelected.length})</span>
        <span class="buy plain" id="delCancelBtn">Hu\u1EF7</span>
      </div>` : keys.length ? `<div style="margin-top:10px;display:flex;gap:8px;flex-wrap:wrap;">
        <span class="buy plain" id="fuseModeBtn">\u{1F52E} Dung h\u1EE3p v\u1EADt ph\u1EA9m</span>
        <span class="buy plain" id="delModeBtn" style="color:#a33;">\u{1F5D1}\uFE0F Xo\xE1 nhi\u1EC1u</span>
      </div>` : "";
  openModal("Balo \xB7 V\u1EADt ph\u1EA9m Gacha", `${modeNote}${filterBarHTML}<div class="items">${itemsHTML}</div>${footerHTML}`);
  if (bagMode === "normal") {
    const filterSel = $id("bagFilterSel");
    if (filterSel) filterSel.addEventListener("change", (e) => {
      bagFilterRarity = e.target.value;
      renderBagModal();
    });
    const sortSel = $id("bagSortSel");
    if (sortSel) sortSel.addEventListener("change", (e) => {
      bagSortMode = e.target.value;
      renderBagModal();
    });
    $id("mbody").querySelectorAll("[data-takeoutkey]").forEach((b) => {
      b.addEventListener("click", () => openTakeoutConfirm(b.dataset.takeoutkey));
    });
    $id("mbody").querySelectorAll("[data-delkey]").forEach((b) => {
      b.addEventListener("click", () => openDeleteConfirm(b.dataset.delkey));
    });
    const fuseModeBtn = $id("fuseModeBtn");
    if (fuseModeBtn) fuseModeBtn.addEventListener("click", () => {
      bagMode = "fuse";
      fuseSelected = [];
      renderBagModal();
    });
    const delModeBtn = $id("delModeBtn");
    if (delModeBtn) delModeBtn.addEventListener("click", () => {
      bagMode = "del";
      delSelected = [];
      renderBagModal();
    });
  } else if (bagMode === "fuse") {
    $id("mbody").querySelectorAll("[data-rowkey]").forEach((row) => {
      row.addEventListener("click", () => {
        const k = row.dataset.rowkey;
        if (fuseSelected.includes(k)) {
          fuseSelected = fuseSelected.filter((x) => x !== k);
        } else {
          if (fuseSelected.length >= 3) {
            toast("Ch\u1EC9 ch\u1ECDn t\u1ED1i \u0111a 3 m\xF3n \u0111\u1EC3 dung h\u1EE3p");
            return;
          }
          fuseSelected.push(k);
        }
        renderBagModal();
      });
    });
    $id("fuseCancelBtn").addEventListener("click", () => {
      bagMode = "normal";
      fuseSelected = [];
      renderBagModal();
    });
    $id("fuseGoBtn").addEventListener("click", doFusion);
  } else if (bagMode === "del") {
    $id("mbody").querySelectorAll("[data-rowkey]").forEach((row) => {
      row.addEventListener("click", () => {
        const k = row.dataset.rowkey;
        if (delSelected.includes(k)) {
          delSelected = delSelected.filter((x) => x !== k);
        } else {
          delSelected.push(k);
        }
        renderBagModal();
      });
    });
    $id("delAllToggleBtn").addEventListener("click", () => {
      delSelected = delSelected.length < keys.length ? [...keys] : [];
      renderBagModal();
    });
    $id("delCancelBtn").addEventListener("click", () => {
      bagMode = "normal";
      delSelected = [];
      renderBagModal();
    });
    $id("delGoMultiBtn").addEventListener("click", doBulkDelete);
  }
}
function doBulkDelete() {
  if (!delSelected.length) {
    toast("Ch\u01B0a ch\u1ECDn v\u1EADt ph\u1EA9m n\xE0o");
    return;
  }
  openModal("Xo\xE1 " + delSelected.length + " lo\u1EA1i v\u1EADt ph\u1EA9m", `
    <div class="note" style="margin-bottom:8px">Xo\xE1 v\u0129nh vi\u1EC5n to\xE0n b\u1ED9 ${delSelected.length} lo\u1EA1i v\u1EADt ph\u1EA9m \u0111\xE3 ch\u1ECDn kh\u1ECFi Balo. Kh\xF4ng th\u1EC3 ho\xE0n t\xE1c!</div>
    <div style="display:flex;gap:8px;">
      <span class="buy plain" id="bulkDelBack">Quay l\u1EA1i</span>
      <span class="buy" id="bulkDelConfirm" style="background:#c94a4a;border-color:#a33;color:#fff;">X\xE1c nh\u1EADn xo\xE1 h\u1EBFt</span>
    </div>`);
  $id("bulkDelBack").addEventListener("click", () => {
    bagMode = "del";
    renderBagModal();
  });
  $id("bulkDelConfirm").addEventListener("click", () => {
    const n = delSelected.length;
    delSelected.forEach((k) => {
      delete ctx.S.bag[k];
      delete ctx.S.uniques[k];
    });
    save();
    bagMode = "normal";
    delSelected = [];
    toast("\u0110\xE3 xo\xE1 " + n + " lo\u1EA1i v\u1EADt ph\u1EA9m");
    openBagModal();
  });
}
function openDeleteConfirm(key) {
  const it = ctx.S.uniques[key];
  const have = ctx.S.bag[key] || 0;
  if (!it || have <= 0) return;
  openModal("Xo\xE1 v\u1EADt ph\u1EA9m \xB7 " + it.name, `
    <div class="note" style="margin-bottom:8px">Xo\xE1 b\u1ECF v\u0129nh vi\u1EC5n kh\u1ECFi Balo (kh\xF4ng d\xF9ng trong c\u1ED1t truy\u1EC7n, kh\xF4ng l\u1EA5y l\u1EA1i \u0111\u01B0\u1EE3c). D\xF9ng khi b\u1EA1n quay tr\xFAng \u0111\u1ED3 kh\xF4ng c\u1EA7n d\xF9ng t\u1EDBi.</div>
    <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
      <input class="inp" id="delN" type="number" min="1" max="${have}" value="${have}" style="width:90px">
      <span style="font-size:12px;color:#7a5c38">/ \u0111ang c\xF3 ${have}</span>
      <span class="buy plain" id="delGo" style="color:#a33;">X\xE1c nh\u1EADn xo\xE1</span>
    </div>`);
  $id("delGo").addEventListener("click", () => {
    let n = parseInt($id("delN").value, 10) || 1;
    n = Math.max(1, Math.min(have, n));
    ctx.S.bag[key] = have - n;
    if (ctx.S.bag[key] <= 0) {
      delete ctx.S.bag[key];
      delete ctx.S.uniques[key];
    }
    save();
    toast("\u0110\xE3 xo\xE1 " + n + " " + it.name);
    openBagModal();
  });
}
async function doFusion() {
  if (fuseSelected.length < 2) {
    toast("C\u1EA7n ch\u1ECDn \xEDt nh\u1EA5t 2 v\u1EADt ph\u1EA9m");
    return;
  }
  const sources = fuseSelected.map((k) => ctx.S.uniques[k]).filter(Boolean);
  if (sources.length !== fuseSelected.length) {
    toast("C\xF3 v\u1EADt ph\u1EA9m kh\xF4ng h\u1EE3p l\u1EC7, th\u1EED l\u1EA1i");
    bagMode = "normal";
    fuseSelected = [];
    openBagModal();
    return;
  }
  const idxAvg = Math.round(sources.reduce((s, it) => s + RARITY_ORDER.indexOf(it.rarity), 0) / sources.length);
  const rarity = RARITY_ORDER[Math.max(0, Math.min(RARITY_ORDER.length - 1, idxAvg))];
  const color = RARITY_COLOR[rarity];
  const price = RARITY_PRICE[rarity];
  const mbody = $id("mbody");
  const fuseKeys = [...fuseSelected];
  if (mbody) mbody.innerHTML = `<div style="text-align:center;padding:30px 0;">
    <div style="width:48px;height:48px;margin:0 auto;animation:gachaShake 0.5s infinite alternate;">${spriteSVG("gachapon", 48)}</div>
    <div style="margin-top:12px;font-size:13px;font-weight:bold;color:#5a3f78;">\u0110ang dung h\u1EE3p...</div>
  </div>`;
  const item = await generateUniqueItem({ rarity, color, sellPrice: price, ticketType: "fuse", fusionSources: sources.map((it) => ({ name: it.name, desc: it.desc, rarity: it.rarity })) });
  fuseKeys.forEach((k) => {
    if (!ctx.S.bag[k]) return;
    ctx.S.bag[k] -= 1;
    if (ctx.S.bag[k] <= 0) delete ctx.S.bag[k];
  });
  save();
  bagMode = "normal";
  fuseSelected = [];
  openModal("Dung h\u1EE3p th\xE0nh c\xF4ng!", `
    <div style="text-align:center;">
      <div style="font-size:12px;font-weight:bold;color:${item.color};text-transform:uppercase;">${item.rarity}</div>
      <div style="margin:10px auto;display:flex;justify-content:center;">${spriteSVG(item.sp, 64)}</div>
      <div style="font-size:18px;font-weight:bold;margin:8px 0;color:#3a2c22;">${item.name}</div>
      <div style="font-size:12px;color:#555;text-align:left;padding:0 8px;">${item.desc}</div>
      <span class="buy" id="fuseDoneBtn" style="margin-top:16px;">Xong</span>
    </div>`);
  $id("fuseDoneBtn").addEventListener("click", () => openBagModal());
}
function openTakeoutConfirm(key) {
  const it = ctx.S.uniques[key];
  const have = ctx.S.bag[key] || 0;
  if (!it || have <= 0) return;
  openModal("L\u1EA5y ra \xB7 " + it.name, `
    <div class="note" style="margin-bottom:8px">L\u1EA5y ra = mang kh\u1ECFi balo \u0111\u1EC3 d\xF9ng trong c\u1ED1t truy\u1EC7n. <b style="color:var(--accFg)">Kh\xF4ng th\u1EC3 b\u1ECF l\u1EA1i balo sau khi l\u1EA5y ra!</b>${!CS.link || !CS.story ? '<br><br>\u26A0\uFE0F B\u1EA1n ch\u01B0a b\u1EADt <b>"Li\xEAn k\u1EBFt th\u1EBB nh\xE2n v\u1EADt"</b> + <b>"\u1EA2nh h\u01B0\u1EDFng c\u1ED1t truy\u1EC7n"</b> trong C\xE0i \u0111\u1EB7t, n\xEAn AI s\u1EBD <b>kh\xF4ng bi\u1EBFt</b> b\u1EA1n v\u1EEBa l\u1EA5y v\u1EADt ph\u1EA9m n\xE0y ra.' : ""}</div>
    <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
      <input class="inp" id="takeN" type="number" min="1" max="${have}" value="1" style="width:90px">
      <span style="font-size:12px;color:#7a5c38">/ \u0111ang c\xF3 ${have}</span>
      <span class="buy" id="takeGo">X\xE1c nh\u1EADn l\u1EA5y ra</span>
    </div>`);
  $id("takeGo").addEventListener("click", () => {
    let n = parseInt($id("takeN").value, 10) || 1;
    n = Math.max(1, Math.min(have, n));
    ctx.S.bag[key] = have - n;
    if (ctx.S.bag[key] <= 0) delete ctx.S.bag[key];
    const d = mutDescOf(key);
    const txt = n + " " + bagName(key) + (d ? " (" + d + ")" : "");
    setTakeoutNote((takeoutNote || []).filter((t) => now() < t.until).concat({ txt, until: now() + 10 * 60 * 1e3 }));
    pushTakenLog({ txt, key, name: it.name, desc: it.desc, rarity: it.rarity, color: it.color, sp: it.sp, n, at: now() });
    save();
    updateInjection();
    toast("\u0110\xE3 l\u1EA5y ra " + n + " " + it.name);
    openBagModal();
  });
}
function openTakenLogModal() {
  loadTakenLog();
  const list = takenLog || [];
  const html = list.length ? list.map((e, idx) => {
    const canRestore = e.key && ctx.S.uniques[e.key];
    return `
    <div class="item" style="align-items:flex-start;border-left:3px solid ${e.color || "#b0bec5"};">
      <span class="icon">${e.sp ? spriteSVG(e.sp, 28) : ""}</span>
      <span class="info">
        <div class="name" style="color:${e.color || "#7a5c38"};">${e.name || e.txt} <span style="font-size:10px;color:#999;">\xD7${e.n || 1}</span></div>
        ${e.desc ? `<div class="meta">${e.desc}</div>` : ""}
        <div class="meta" style="opacity:.7;font-size:10px;">${new Date(e.at || 0).toLocaleString("vi-VN")}</div>
        ${!e.key ? `<div class="meta" style="opacity:.6;font-size:10px;font-style:italic;">(Log c\u0169 t\u1EEB tr\u01B0\u1EDBc b\u1EA3n c\u1EADp nh\u1EADt \u2014 kh\xF4ng ph\u1EE5c h\u1ED3i \u0111\u01B0\u1EE3c, ch\u1EC9 xo\xE1 kh\u1ECFi danh s\xE1ch)</div>` : !canRestore ? `<div class="meta" style="opacity:.6;font-size:10px;font-style:italic;">(V\u1EADt ph\u1EA9m \u0111\xE3 b\u1ECB xo\xE1 v\u0129nh vi\u1EC5n kh\u1ECFi Balo tr\u01B0\u1EDBc \u0111\xF3)</div>` : ""}
      </span>
      <span style="display:flex;flex-direction:column;gap:4px;flex:none;">
        ${canRestore ? `<span class="buy plain" data-putbackidx="${idx}" style="font-size:11px;padding:4px 8px;">\u21A9 L\u1EA5y v\u1EC1 Balo</span>` : ""}
        <span class="buy plain" data-removelogidx="${idx}" style="font-size:11px;padding:4px 8px;color:#a33;">Xo\xE1 kh\u1ECFi l\u1ECBch s\u1EED</span>
      </span>
    </div>`;
  }).join("") : `<div class="note" style="text-align:center;padding:20px 0;">Ch\u01B0a l\u1EA5y v\u1EADt ph\u1EA9m n\xE0o ra cho th\u1EBB nh\xE2n v\u1EADt n\xE0y.</div>`;
  openModal("\u0110\xE3 l\u1EA5y ra d\xF9ng \xB7 " + charName(), `<div class="note" style="margin-bottom:8px">Danh s\xE1ch v\u1EADt ph\u1EA9m \u0111\xE3 "L\u1EA5y ra" cho th\u1EBB nh\xE2n v\u1EADt hi\u1EC7n t\u1EA1i. N\u1EBFu kh\xF4ng mu\u1ED1n nh\xE2n v\u1EADt d\xF9ng n\u1EEFa, b\u1EA5m "L\u1EA5y v\u1EC1 Balo" \u0111\u1EC3 thu h\u1ED3i.</div><div class="items">${html}</div>`);
  $id("mbody").querySelectorAll("[data-putbackidx]").forEach((b) => {
    b.addEventListener("click", () => {
      const idx = parseInt(b.dataset.putbackidx, 10);
      const entry = takenLog[idx];
      if (!entry || !entry.key) return;
      if (!ctx.S.uniques[entry.key]) {
        toast("V\u1EADt ph\u1EA9m n\xE0y \u0111\xE3 b\u1ECB xo\xE1 v\u0129nh vi\u1EC5n, kh\xF4ng th\u1EC3 l\u1EA5y v\u1EC1");
        return;
      }
      ctx.S.bag[entry.key] = (ctx.S.bag[entry.key] || 0) + (entry.n || 1);
      save();
      removeTakenLogAt(idx);
      toast("\u0110\xE3 l\u1EA5y v\u1EC1 Balo: " + (entry.name || entry.txt));
      openTakenLogModal();
    });
  });
  $id("mbody").querySelectorAll("[data-removelogidx]").forEach((b) => {
    b.addEventListener("click", () => {
      const idx = parseInt(b.dataset.removelogidx, 10);
      removeTakenLogAt(idx);
      openTakenLogModal();
    });
  });
}

// src/shop.js
function openModal(title, bodyHTML, keepBetTable) {
  if (!keepBetTable && void 0) (void 0)();
  $id("mtitle-text").textContent = title;
  $id("mbody").innerHTML = bodyHTML;
  $id("modal").classList.add("open");
}
function closeModal() {
  if (void 0) (void 0)();
  $id("modal").classList.remove("open");
  $id("mbody").innerHTML = "";
  setPendingPick(null);
  bagSellMode = false;
}
var shopTab = "seed";
var bagTab = "crop";
var bagSellMode = false;
var bagSel = {};
var gachaSortMode = "default";
function openPanel(kind) {
  if (kind === "gacha") {
    return openGachaModal();
  } else if (kind === "bag") {
    return openBagModal();
  } else {
    openModal("C\xE0i \u0111\u1EB7t", `
      <div style="font-size:11px; color:#a3763d; text-align:center; margin-bottom: 12px; font-weight: bold; background: rgba(0,0,0,0.05); padding: 4px; border-radius: 4px; user-select: text;">ID Ng\u01B0\u1EDDi Ch\u01A1i: ${ctx.S.playerId}</div>
      <div class="shead" style="margin-top:0">T\xEAn ng\u01B0\u1EDDi ch\u01A1i (\u0111\u1EC3 giao d\u1ECBch)</div>
      <div style="display:flex;gap:8px;margin-bottom:12px;">
        <input class="inp" id="cfgUsername" placeholder="Nh\u1EADp t\xEAn c\u1EE7a b\u1EA1n..." value="${esc(ctx.S.username || "")}" style="flex:1;">
        <span class="buy" id="cfgSaveUsername">L\u01B0u t\xEAn</span>
      </div>
      <div class="shead">K\u1EBFt n\u1ED1i v\u1EDBi c\u1ED1t truy\u1EC7n</div>
      <label style="display:flex;align-items:center;gap:6px;font-size:12px;color:#7a5c38;font-weight:bold;cursor:pointer">
        <input type="checkbox" id="cfgCsLink" ${CS.link ? "checked" : ""}> Li\xEAn k\u1EBFt th\u1EBB nh\xE2n v\u1EADt (AI t\u1EA1o v\u1EADt ph\u1EA9m h\u1EE3p b\u1ED1i c\u1EA3nh th\u1EBB nh\xE2n v\u1EADt/th\u1EBF gi\u1EDBi quan hi\u1EC7n t\u1EA1i)
      </label>
      <label style="display:flex;align-items:center;gap:6px;font-size:12px;color:#7a5c38;font-weight:bold;cursor:pointer;margin-top:6px${CS.link ? "" : ";opacity:.4;pointer-events:none"}" id="cfgCsStoryRow">
        <input type="checkbox" id="cfgCsStory" ${CS.story ? "checked" : ""}> \u1EA2nh h\u01B0\u1EDFng c\u1ED1t truy\u1EC7n (b\xE1o cho AI bi\u1EBFt khi b\u1EA1n "L\u1EA5y ra" v\u1EADt ph\u1EA9m trong Balo, \u0111\u1EC3 AI \u0111\u01B0a v\xE0o c\u1ED1t truy\u1EC7n)
      </label>
      <div style="display:flex;flex-direction:column;gap:6px;margin-top:8px;padding:8px;background:rgba(0,0,0,0.03);border-radius:6px;${CS.link ? "" : "opacity:.4;pointer-events:none"}" id="cfgCsSourcesRow">
        <div style="font-size:11px;color:#a3763d;font-weight:bold;">AI t\u1EA1o v\u1EADt ph\u1EA9m d\u1EF1a v\xE0o (ngu\u1ED3n d\u1EEF li\u1EC7u):</div>
        <label style="display:flex;align-items:center;gap:6px;font-size:12px;color:#7a5c38;font-weight:bold;cursor:pointer">
          <input type="checkbox" id="cfgUseLorebook" ${CS.useLorebook ? "checked" : ""}> Lorebook / World Info c\u1EE7a th\u1EBB nh\xE2n v\u1EADt
        </label>
        <label style="display:flex;align-items:center;gap:6px;font-size:12px;color:#7a5c38;font-weight:bold;cursor:pointer">
          <input type="checkbox" id="cfgUseChatHistory" ${CS.useChatHistory ? "checked" : ""}> L\u1ECBch s\u1EED chat g\u1EA7n \u0111\xE2y
        </label>
      </div>
      <div class="shead">Ch\u1EE7 \u0111\u1EC1 giao di\u1EC7n</div>
      <div class="picker" style="margin-bottom:4px">
        <span class="pick${ctx.S.theme !== "sky" ? " active" : ""}" data-settheme="sakura">\u{1F338} H\u1ED3ng anh \u0111\xE0o</span>
        <span class="pick${ctx.S.theme === "sky" ? " active" : ""}" data-settheme="sky">\u2601\uFE0F Tr\u1EDDi quang</span>
      </div>
      <div class="shead">API ph\u1EE5 (d\xF9ng \u0111\u1EC3 AI t\u1EA1o v\u1EADt ph\u1EA9m Gacha)</div>
      <div style="display:flex;flex-direction:column;gap:6px">
        <input class="inp" id="secUrl" placeholder="\u0110\u1ECBa ch\u1EC9 API, v\xED d\u1EE5 https://xx.com/v1" value="${esc(SEC.url)}">
        <input class="inp" id="secKey" type="password" placeholder="API Key (ch\u1EC9 l\u01B0u trong tr\xECnh duy\u1EC7t m\xE1y n\xE0y, kh\xF4ng v\xE0o save)" value="${esc(SEC.key)}">
        <input class="inp" id="secModel" placeholder="T\xEAn model, v\xED d\u1EE5 gemini-2.5-flash" value="${esc(SEC.model)}">
        <div class="mdrop" id="modelDrop" style="display:none"></div>
        <label style="display:flex;align-items:center;gap:6px;font-size:12px;color:#7a5c38;font-weight:bold;cursor:pointer">
          <input type="checkbox" id="secAuto" ${SEC.autoReset ? "checked" : ""}> T\u1EF1 \u0111\u1ED9ng \u0111\u1EB7t l\u1EA1i s\u1EF1 ki\u1EC7n, m\u1ED7i
          <input class="inp" id="secHours" type="number" min="1" max="24" value="${SEC.resetHours}" style="width:60px;padding:3px 6px"> gi\u1EDD m\u1ED9t l\u1EA7n (1~24; t\u1EAFt th\xEC s\u1EF1 ki\u1EC7n gi\u1EEF nguy\xEAn, ch\u1EC9 gieo l\u1EA1i th\u1EE7 c\xF4ng)
        </label>
        <label style="display:flex;align-items:center;gap:6px;font-size:12px;color:#7a5c38;font-weight:bold;cursor:pointer;margin-top:2px">
          Gi\u1EDBi h\u1EA1n ch\u1EEF Lorebook g\u1EEDi cho AI:
          <input class="inp" id="secWbLimit" type="number" min="0" max="1000000" value="${SEC.wbLimit !== void 0 ? SEC.wbLimit : 2e4}" style="width:80px;padding:3px 6px"> (0 = Kh\xF4ng c\u1EAFt, g\u1EEDi to\xE0n b\u1ED9)
        </label>
        <label style="display:flex;align-items:center;gap:6px;font-size:12px;color:#7a5c38;font-weight:bold;cursor:pointer;margin-top:10px">
          Gi\u1EDBi h\u1EA1n tin nh\u1EAFn Chat g\u1EEDi l\xEAn Context:
          <input class="inp" id="secChatDepth" type="number" min="0" max="200" value="${SEC.chatDepth !== void 0 ? SEC.chatDepth : 15}" style="width:80px;padding:3px 6px"> (0 = T\u1EAFt)
        </label>
        <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:6px">
          <span class="buy" id="secSave">L\u01B0u c\u1EA5u h\xECnh</span>
          <span class="buy plain" id="secModels">L\u1EA5y model</span>
          <span class="buy plain" id="secTest">Ki\u1EC3m tra k\u1EBFt n\u1ED1i</span>
        </div>
      </div>
      <div class="shead">Ngu\u1ED3n g\u1ED1c m\xE1y Gachapon (tu\u1EF3 ch\u1EC9nh, ch\u1EC9 l\u01B0u \u1EDF th\u1EBB nh\xE2n v\u1EADt hi\u1EC7n t\u1EA1i)</div>
      <div class="note" style="margin-bottom:6px">Cho AI bi\u1EBFt m\xE1y Gachapon n\xE0y t\u1EEB \u0111\xE2u ra, \u0111\u1EC3 nh\xE2n v\u1EADt/c\u1ED1t truy\u1EC7n nh\u1EAFc t\u1EDBi n\xF3 h\u1EE3p l\xFD. V\xED d\u1EE5: "M\u1ED9t c\u1ED7 m\xE1y c\u1ED5 x\u01B0a tr\xF4i d\u1EA1t v\xE0o l\xE0ng t\u1EEB ngo\xE0i bi\u1EC3n", "M\xF3n qu\xE0 b\xED \u1EA9n c\u1EE7a th\u01B0\u01A1ng nh\xE2n lang thang"...</div>
      <textarea class="inp" id="csOrigin" placeholder="V\xED d\u1EE5: C\u1ED7 m\xE1y n\xE0y l\xE0 di v\u1EADt c\u1EE7a m\u1ED9t v\u1ECB th\u1EA7n bu\xF4n b\xE1n \u0111\xE3 bi\u1EBFn m\u1EA5t t\u1EEB l\xE2u.">${esc(CS.gachaOrigin)}</textarea>

      <div class="shead">V\u1EADt ph\u1EA9m Gacha mong mu\u1ED1n (\u0111\u1EC3 tr\u1ED1ng = ng\u1EABu nhi\xEAn ho\xE0n to\xE0n)</div>
      <div class="note" style="margin-bottom:6px">Ghi ch\u1EE7 \u0111\u1EC1/lo\u1EA1i \u0111\u1ED3 b\u1EA1n mu\u1ED1n quay ra, AI s\u1EBD ch\u1EC9 t\u1EA1o v\u1EADt ph\u1EA9m thu\u1ED9c ch\u1EE7 \u0111\u1EC1 n\xE0y (\u0111\u1ED9 hi\u1EBFm v\u1EABn ng\u1EABu nhi\xEAn theo lo\u1EA1i v\xE9 quay). V\xED d\u1EE5: "d\xE9p th\u1ECF" \u2192 ra c\xE1c lo\u1EA1i d\xE9p th\u1ECF kh\xE1c nhau ng\u1EABu nhi\xEAn.</div>
      <input class="inp" id="csWant" placeholder="V\xED d\u1EE5: d\xE9p th\u1ECF" value="${esc(CS.wantItem)}">
      <div class="note" style="margin:6px 0">Thu\u1ED9c t\xEDnh/lo\u1EA1i \u0111i k\xE8m (tu\u1EF3 ch\u1ECDn) \u2014 v\xED d\u1EE5: m\u1EC1m m\u1EA1i, nhanh nh\u1EB9n, ph\xE1t s\xE1ng...</div>
      <input class="inp" id="csWantAttr" placeholder="V\xED d\u1EE5: m\u1EC1m m\u1EA1i, nhanh nh\u1EB9n" value="${esc(CS.wantAttr)}">
      <div class="note" style="margin:6px 0">Hi\u1EC7u \u1EE9ng/c\xF4ng d\u1EE5ng mong mu\u1ED1n (tu\u1EF3 ch\u1ECDn) \u2014 m\xF4 t\u1EA3 v\u1EADt ph\u1EA9m n\xEAn c\xF3 t\xE1c d\u1EE5ng/hi\u1EC7u \u1EE9ng g\xEC, AI s\u1EBD d\u1EF1a v\xE0o \u0111\xF3 thi\u1EBFt k\u1EBF c\xF4ng d\u1EE5ng cho h\u1EE3p</div>
      <input class="inp" id="csWantDesc" placeholder="V\xED d\u1EE5: gi\xFAp xoa d\u1ECBu t\xE2m tr\u1EA1ng, mang l\u1EA1i c\u1EA3m gi\xE1c an to\xE0n khi \xF4m" value="${esc(CS.wantDesc)}">

      <div style="display:flex;gap:8px;margin-top:6px"><span class="buy" id="csPromptSave">L\u01B0u (ch\u1EC9 th\u1EBB n\xE0y)</span></div>
      <div class="shead">\u0110\xE3 l\u1EA5y ra d\xF9ng (th\u1EBB nh\xE2n v\u1EADt hi\u1EC7n t\u1EA1i)</div>
      <div style="display:flex;gap:8px;margin-top:6px"><span class="buy plain" id="openTakenLogBtn">Xem l\u1ECBch s\u1EED \u0111\xE3 l\u1EA5y ra</span></div>
      <div class="shead">C\xF4ng c\u1EE5 d\xE0nh cho Gi\xE1m \u0111\u1ED1c \u0110\u1ED3 ho\u1EA1 / Dev</div>
      <div style="display:flex;gap:8px;margin-top:6px;align-items:center;flex-wrap:wrap;">
        <span class="buy plain" id="openSandboxBtn">\u{1F3A8} M\u1EDF X\u01B0\u1EDFng Ch\u1EBF T\xE1c AI</span>
      </div>
      <div class="shead">Th\xF4ng tin & T\xE1c gi\u1EA3</div>
      <div style="display:flex;gap:8px;margin-top:6px">
        <span class="buy plain" id="openCreditBtn">\u{1F4DC} Xem Credit (L\u1EDDi c\u1EA3m \u01A1n)</span>
      </div>
      <div class="note" style="margin:12px 0 8px">
        <b>H\u01B0\u1EDBng d\u1EABn ch\u01A1i</b><br>\xB7 B\u1EADt "Li\xEAn k\u1EBFt th\u1EBB nh\xE2n v\u1EADt": AI s\u1EBD d\u1EF1a theo th\u1EBB nh\xE2n v\u1EADt/th\u1EBF gi\u1EDBi quan hi\u1EC7n t\u1EA1i \u0111\u1EC3 t\u1EA1o v\u1EADt ph\u1EA9m Gacha ph\xF9 h\u1EE3p b\u1ED1i c\u1EA3nh<br>
        \xB7 B\u1EADt th\xEAm "\u1EA2nh h\u01B0\u1EDFng c\u1ED1t truy\u1EC7n": khi b\u1EA1n "L\u1EA5y ra" v\u1EADt ph\u1EA9m trong Balo, AI s\u1EBD \u0111\u01B0\u1EE3c b\xE1o v\xE0 \u0111\u01B0a v\xE0o c\u1ED1t truy\u1EC7n \u0111ang chat<br>
        \xB7 Save n\u1EB1m trong ch\xEDnh SillyTavern, c\u1EADp nh\u1EADt phi\xEAn b\u1EA3n c\u1EE9 nh\u1EADp script m\u1EDBi, save kh\xF4ng m\u1EA5t; API Key ph\u1EE5 ch\u1EC9 n\u1EB1m trong tr\xECnh duy\u1EC7t m\xE1y n\xE0y<br>
        \xB7 C\xE1c b\u1EA3n SillyTavern kh\xE1c nhau <b>kh\xF4ng d\xF9ng chung</b> (c\xE0i th\xEAm m\u1ED9t b\u1EA3n tr\xEAn \u0111i\u1EC7n tho\u1EA1i = m\u1ED9t d\u1EEF li\u1EC7u kh\xE1c); tr\u01B0\u1EDBc khi c\xE0i l\u1EA1i SillyTavern nh\u1EDB sao l\u01B0u th\u01B0 m\u1EE5c data</div>
      <span class="buy" id="resetSave">\u0110\u1EB7t l\u1EA1i save (c\u1EA9n th\u1EADn, b\u1EA5m hai l\u1EA7n)</span>`);
    $id("cfgCsLink").addEventListener("change", (e) => {
      CS.link = e.target.checked;
      if (!CS.link) CS.story = false;
      saveCharState();
      const row = $id("cfgCsStoryRow");
      if (row) {
        row.style.opacity = CS.link ? "" : ".4";
        row.style.pointerEvents = CS.link ? "" : "none";
      }
      const storyBox = $id("cfgCsStory");
      if (storyBox) storyBox.checked = CS.story;
      const srcRow = $id("cfgCsSourcesRow");
      if (srcRow) {
        srcRow.style.opacity = CS.link ? "" : ".4";
        srcRow.style.pointerEvents = CS.link ? "" : "none";
      }
      updateInjection();
      toast(CS.link ? "\u0110\xE3 b\u1EADt li\xEAn k\u1EBFt th\u1EBB nh\xE2n v\u1EADt" : "\u0110\xE3 t\u1EAFt li\xEAn k\u1EBFt th\u1EBB nh\xE2n v\u1EADt");
    });
    $id("cfgUseLorebook").addEventListener("change", (e) => {
      CS.useLorebook = e.target.checked;
      saveCharState();
      toast(CS.useLorebook ? "\u0110\xE3 b\u1EADt d\xF9ng Lorebook" : "\u0110\xE3 t\u1EAFt d\xF9ng Lorebook");
    });
    $id("cfgUseChatHistory").addEventListener("change", (e) => {
      CS.useChatHistory = e.target.checked;
      saveCharState();
      toast(CS.useChatHistory ? "\u0110\xE3 b\u1EADt d\xF9ng l\u1ECBch s\u1EED chat" : "\u0110\xE3 t\u1EAFt d\xF9ng l\u1ECBch s\u1EED chat");
    });
    $id("cfgCsStory").addEventListener("change", (e) => {
      CS.story = e.target.checked;
      saveCharState();
      updateInjection();
      toast(CS.story ? "AI s\u1EBD bi\u1EBFt khi b\u1EA1n l\u1EA5y v\u1EADt ph\u1EA9m ra d\xF9ng trong c\u1ED1t truy\u1EC7n" : "\u0110\xE3 t\u1EAFt \u1EA3nh h\u01B0\u1EDFng c\u1ED1t truy\u1EC7n");
    });
    $id("secSave").addEventListener("click", () => {
      Object.assign(SEC, {
        // @ts-ignore
        url: $id("secUrl").value.trim(),
        key: $id("secKey").value.trim(),
        model: $id("secModel").value.trim(),
        // @ts-ignore
        autoReset: $id("secAuto").checked,
        resetHours: clampN($id("secHours").value, 1, 24, 4),
        // @ts-ignore
        wbLimit: parseInt($id("secWbLimit").value, 10) || 0,
        chatDepth: parseInt($id("secChatDepth").value, 10) || 0
      });
      saveSec();
      toast("\u0110\xE3 l\u01B0u c\u1EA5u h\xECnh API ph\u1EE5");
    });
    $id("secTest").addEventListener("click", () => testSecApi());
    $id("secModels").addEventListener("click", () => fetchModelList());
    $id("cfgSaveUsername")?.addEventListener("click", () => {
      const uname = $id("cfgUsername").value.trim();
      if (!uname) return toast("T\xEAn kh\xF4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng!");
      ctx.S.username = uname;
      save();
      toast("\u0110\xE3 l\u01B0u t\xEAn ng\u01B0\u1EDDi ch\u01A1i");
    });
    if ($id("openSandboxBtn")) $id("openSandboxBtn").addEventListener("click", openSandbox);
    if ($id("openCreditBtn")) {
      $id("openCreditBtn").addEventListener("click", () => {
        openModal("Credit & L\u1EDDi c\u1EA3m \u01A1n", `
          <div style="line-height:1.6; color:#4a3219; font-size:13px; text-align:left; padding:8px;">
            <b style="color:#a83a52;">T\xEAn s\u1EA3n ph\u1EA9m g\u1ED1c (\u539F\u771F\u540D):</b><br>
            \u3010\u8C01\u8981\u5728\u9152\u9986\u5F53\u519C\u6C11\u554A\uFF01v1.1\u3011<br><br>
            
            <b style="color:#a83a52;">T\xEAn ti\u1EBFng Vi\u1EC7t (\u8D8A\u5357\u8BED\u8BD1\u540D):</b><br>
            \u3010Ai th\xE8m l\xE0m n\xF4ng d\xE2n trong t\u1EEDu qu\xE1n ch\u1EE9! v1.1\u3011 Script Tr\u1EE3 th\u1EE7 T\u1EEDu qu\xE1n<br><br>

            <b style="color:#a83a52;">T\xE1c gi\u1EA3 g\u1ED1c (\u539F\u4F5C\u8005):</b><br>
            \u6EE1\u8EAB\u732B\u6BDB\u055E\u2022\u2022\u055E - Tranh th\u1EE7 l\xE9n meo<br><br>

            <b style="color:#a83a52;">Mod v\xE0 update game hi\u1EC7n t\u1EA1i credit t\u1EEB:</b><br>
            Dev: Kaiz
          </div>
          <div style="margin-top:16px;text-align:center;">
            <span class="buy plain" id="closeCreditBtn">Quay l\u1EA1i C\xE0i \u0111\u1EB7t</span>
          </div>
        `);
        $id("closeCreditBtn")?.addEventListener("click", () => openPanel("cfg"));
      });
    }
    $id("mbody").querySelectorAll("[data-settheme]").forEach((b) => b.addEventListener("click", () => {
      ctx.S.theme = b.dataset.settheme;
      save();
      applyTheme();
      openPanel("cfg");
      toast(ctx.S.theme === "sky" ? "\u0110\u1ED5i sang giao di\u1EC7n tr\u1EDDi quang~" : "V\u1EC1 l\u1EA1i giao di\u1EC7n h\u1ED3ng anh \u0111\xE0o~");
    }));
    const cfgDragPet = $id("cfgDragPet");
    if (cfgDragPet) cfgDragPet.addEventListener("change", () => {
      ctx.S.dragPet = cfgDragPet.checked;
      save();
      const mas = $id("mascots");
      if (mas) mas.dataset.drag = ctx.S.dragPet ? "1" : "0";
      toast(ctx.S.dragPet ? "\u0110\xE3 b\u1EADt t\xEDnh n\u0103ng k\xE9o th\u1EA3 th\xFA c\u01B0ng" : "\u0110\xE3 t\u1EAFt t\xEDnh n\u0103ng k\xE9o th\u1EA3 th\xFA c\u01B0ng");
    });
    $id("csPromptSave").addEventListener("click", () => {
      CS.gachaOrigin = $id("csOrigin").value.slice(0, 2e3);
      CS.wantItem = $id("csWant").value.slice(0, 300);
      CS.wantAttr = $id("csWantAttr").value.slice(0, 300);
      CS.wantDesc = $id("csWantDesc").value.slice(0, 500);
      saveCharState();
      toast("\u0110\xE3 l\u01B0u v\xE0o th\u1EBB nh\xE2n v\u1EADt hi\u1EC7n t\u1EA1i");
    });
    $id("openTakenLogBtn").addEventListener("click", () => openTakenLogModal());
    let armed = false;
    $id("resetSave").addEventListener("click", () => {
      if (!armed) {
        armed = true;
        $id("resetSave").textContent = "B\u1EA5m l\u1EA7n n\u1EEFa \u0111\u1EC3 x\xE1c nh\u1EADn \u0111\u1EB7t l\u1EA1i!";
        return;
      }
      if (ctx.extension_settings[extensionName]) ctx.extension_settings[extensionName][NS] = null;
      loadState();
      save(true);
      closeModal();
      toast("\u0110\xE3 \u0111\u1EB7t l\u1EA1i \xB7 t\u1EA3i l\u1EA1i trang \u0111\u1EC3 \xE1p d\u1EE5ng ho\xE0n to\xE0n");
    });
  }
}
function initShop() {
  $id("mclose").addEventListener("click", closeModal);
  $id("mbody").addEventListener("click", (e) => {
    const el = e.target.closest("[data-pick]");
    if (!el || !pendingPick) return;
    const cb = pendingPick;
    setPendingPick(null);
    closeModal();
    cb(el.dataset.pick);
  });
  $id("modal").addEventListener("click", (e) => {
    if (e.target === $id("modal")) closeModal();
  });
  sh.querySelectorAll("[data-open]").forEach((b) => b.addEventListener("click", () => openPanel(b.dataset.open)));
}

// src/windows.js
var tick = null;
function placeWin() {
  const vw = window.innerWidth, vh = window.innerHeight;
  const w = Math.min(760, vw * 0.96);
  let x = ctx.S.win ? ctx.S.win.fx * vw : (vw - w) / 2;
  let y = ctx.S.win ? ctx.S.win.fy * vh : vh * 0.04;
  ctx.win.style.left = Math.min(Math.max(x, 0), Math.max(vw - w, 0)) + "px";
  ctx.win.style.top = Math.min(Math.max(y, 0), vh - 60) + "px";
}
function placeDungeonWin() {
  const dungeonWin = $id("dungeon-win");
  if (!dungeonWin) return;
  const vw = window.innerWidth, vh = window.innerHeight;
  const w = Math.min(760, vw * 0.96);
  let x = ctx.S.dungeonWin ? ctx.S.dungeonWin.fx * vw : (vw - w) / 2;
  let y = ctx.S.dungeonWin ? ctx.S.dungeonWin.fy * vh : vh * 0.04;
  dungeonWin.style.left = Math.min(Math.max(x, 0), Math.max(vw - w, 0)) + "px";
  dungeonWin.style.top = Math.min(Math.max(y, 0), vh - 60) + "px";
}
function toggleWin() {
  if (ctx.win.classList.contains("open")) {
    closeWin();
    return;
  }
  ctx.win.classList.add("open");
  placeWin();
}
function closeWin() {
  ctx.win.classList.remove("open");
  save(true);
}
var wg = null;
var dragBar = null;
function initWindows() {
  $id("close").addEventListener("click", closeWin);
  dragBar = $id("drag");
  dragBar.addEventListener("pointerdown", (e) => {
    if (e.target.id === "close" || e.target.closest("#viewToggle")) return;
    if (window.innerWidth <= 640) return;
    dragBar.setPointerCapture(e.pointerId);
    wg = { id: e.pointerId, sx: e.clientX, sy: e.clientY, ox: ctx.win.offsetLeft, oy: ctx.win.offsetTop };
  });
  dragBar.addEventListener("pointermove", (e) => {
    if (!wg || e.pointerId !== wg.id) return;
    ctx.win.style.left = wg.ox + e.clientX - wg.sx + "px";
    ctx.win.style.top = wg.oy + e.clientY - wg.sy + "px";
  });
  dragBar.addEventListener("pointerup", (e) => {
    if (!wg || e.pointerId !== wg.id) return;
    try {
      dragBar.releasePointerCapture(e.pointerId);
    } catch (er) {
    }
    wg = null;
    ctx.S.win = { fx: ctx.win.offsetLeft / window.innerWidth, fy: ctx.win.offsetTop / window.innerHeight };
    save();
  });
  const dungeonDragBar = $id("dungeon-drag");
  let dungeonWg = null;
  if (dungeonDragBar) {
    dungeonDragBar.addEventListener("pointerdown", (e) => {
      if (e.target.id === "dungeon-close") return;
      if (window.innerWidth <= 640) return;
      dungeonDragBar.setPointerCapture(e.pointerId);
      const dungeonWin = $id("dungeon-win");
      dungeonWg = { id: e.pointerId, sx: e.clientX, sy: e.clientY, ox: dungeonWin.offsetLeft, oy: dungeonWin.offsetTop };
    });
    dungeonDragBar.addEventListener("pointermove", (e) => {
      if (!dungeonWg || e.pointerId !== dungeonWg.id) return;
      const dungeonWin = $id("dungeon-win");
      dungeonWin.style.left = dungeonWg.ox + e.clientX - dungeonWg.sx + "px";
      dungeonWin.style.top = dungeonWg.oy + e.clientY - dungeonWg.sy + "px";
    });
    dungeonDragBar.addEventListener("pointerup", (e) => {
      if (!dungeonWg || e.pointerId !== dungeonWg.id) return;
      try {
        dungeonDragBar.releasePointerCapture(e.pointerId);
      } catch (er) {
      }
      dungeonWg = null;
      const dungeonWin = $id("dungeon-win");
      ctx.S.dungeonWin = { fx: dungeonWin.offsetLeft / window.innerWidth, fy: dungeonWin.offsetTop / window.innerHeight };
      save();
    });
  }
}

// src/orb.js
var disposers = [];
var gesture = null;
function placeOrb() {
  const vw = window.innerWidth, vh = window.innerHeight;
  const x = Math.min(Math.max(ctx.S.orb.fx * vw, 4), vw - 56);
  const y = Math.min(Math.max(ctx.S.orb.fy * vh, 4), vh - 56);
  ctx.orb.style.left = x + "px";
  ctx.orb.style.top = y + "px";
  ctx.orb.classList.toggle("dockL", ctx.S.orb.dock === "L");
  ctx.orb.classList.toggle("dockR", ctx.S.orb.dock === "R");
}
function onOrbDown(e) {
  if (!e.isPrimary || e.pointerType === "mouse" && e.button !== 0) return;
  if (gesture) return;
  ctx.orb.setPointerCapture(e.pointerId);
  gesture = { id: e.pointerId, sx: e.clientX, sy: e.clientY, ox: ctx.orb.offsetLeft, oy: ctx.orb.offsetTop, drag: false };
}
function onOrbMove(e) {
  if (!gesture || e.pointerId !== gesture.id) return;
  if (Math.hypot(e.clientX - gesture.sx, e.clientY - gesture.sy) > 5) {
    gesture.drag = true;
    ctx.orb.classList.remove("dockL", "dockR");
  }
  if (gesture.drag) {
    ctx.orb.style.left = gesture.ox + e.clientX - gesture.sx + "px";
    ctx.orb.style.top = gesture.oy + e.clientY - gesture.sy + "px";
  }
}
function onOrbUp(e, cancelled) {
  if (!gesture || e.pointerId !== gesture.id) return;
  const wasDrag = gesture.drag;
  try {
    ctx.orb.releasePointerCapture(e.pointerId);
  } catch (er) {
  }
  gesture = null;
  if (cancelled) return;
  const vw = window.innerWidth, vh = window.innerHeight;
  if (wasDrag) {
    let nx = Math.min(Math.max(ctx.orb.offsetLeft, 4), vw - 56);
    let dock = null;
    if (nx < SNAP_EDGE) {
      nx = 4;
      dock = "L";
    } else if (nx > vw - 56 - SNAP_EDGE) {
      nx = vw - 56;
      dock = "R";
    }
    ctx.orb.style.left = nx + "px";
    ctx.S.orb = { fx: nx / vw, fy: Math.min(Math.max(ctx.orb.offsetTop, 4), vh - 56) / vh, dock };
    ctx.orb.classList.toggle("dockL", dock === "L");
    ctx.orb.classList.toggle("dockR", dock === "R");
    save();
  } else toggleWin();
}
var resizeTimer = null;
var onResize = () => {
  if (resizeTimer) window.clearTimeout(resizeTimer);
  resizeTimer = window.setTimeout(() => {
    placeOrb();
    if (ctx.win.classList.contains("open")) {
      placeWin();
    }
  }, 150);
};
var SPRITE_PX = 64;
var DECO_PX = 56;
function layout() {
  const vw = window.innerWidth;
  let plot = 74;
  if (vw <= 640) plot = Math.max(52, Math.min(74, Math.floor((Math.min(vw * 0.96, 760) - 92) / 4)));
  ctx.win.style.setProperty("--plot", plot + "px");
  SPRITE_PX = 48;
  DECO_PX = plot >= 70 ? 56 : 40;
}
function initOrb() {
  ctx.orb = $id("orb");
  ctx.win = $id("win");
  ctx.orb.addEventListener("pointerdown", onOrbDown);
  ctx.orb.addEventListener("pointermove", onOrbMove);
  ctx.orb.addEventListener("pointerup", (e) => onOrbUp(e, false));
  ctx.orb.addEventListener("pointercancel", (e) => onOrbUp(e, true));
  window.addEventListener("resize", onResize);
  disposers.push(() => window.removeEventListener("resize", onResize));
  placeOrb();
}

// src/render.js
var mode = null;
function setMode(val) {
  mode = val;
}
var buyConfirm = { b: -1, until: 0 };
var TOOLS = [
  { key: "seed", sp: "toolSeed", tip: "Gieo h\u1EA1t" },
  { key: "water", sp: "toolWater", tip: "T\u01B0\u1EDBi n\u01B0\u1EDBc" },
  { key: "fert", sp: "toolFert", tip: "B\xF3n ph\xE2n" },
  { key: "harvest", sp: "toolHarvest", tip: "Thu ho\u1EA1ch" },
  { key: "shovel", sp: "toolShovel", tip: "X\u1EDBi b\u1ECF" }
];
var toolbarOpen = false;
function renderToolbar() {
  const tb = $id("toolbar");
  if (ctx.S && ctx.S.view === "explore") {
    tb.style.display = "none";
    const tip2 = $id("modetip");
    if (tip2) tip2.style.display = "none";
    return;
  }
  tb.style.display = "flex";
  tb.classList.toggle("open", toolbarOpen);
  if (!toolbarOpen) {
    tb.innerHTML = `<div class="tool" data-tool="expand" title="C\xF4ng c\u1EE5" style="width:34px;height:34px">${spriteSVG("toolSeed", 22)}</div>`;
  } else {
    tb.innerHTML = TOOLS.map(
      (t) => `<div class="tool${mode && mode.t === t.key ? " selected" : ""}" data-tool="${t.key}" title="${t.tip}">${spriteSVG(t.sp, 30)}</div>`
    ).join("") + `<div class="tool mini" data-tool="collapse">\u2715</div>`;
  }
  const tip = $id("modetip");
  if (mode) {
    const names = { seed: "Gieo h\u1EA1t", water: "T\u01B0\u1EDBi n\u01B0\u1EDBc", fert: "B\xF3n ph\xE2n", harvest: "Thu ho\u1EA1ch", shovel: "X\u1EDBi b\u1ECF" };
    let txt = "Ch\u1EBF \u0111\u1ED9 " + names[mode.t];
    if (mode.t === "seed") txt += " \xB7 " + CROPS[mode.id].name;
    if (mode.t === "fert") txt += " \xB7 " + FERTS[mode.id].name;
    if (mode.t === "shovel") txt += " \xB7 b\u1EA5m hai l\u1EA7n \u0111\u1EC3 x\xE1c nh\u1EADn";
    tip.textContent = txt + " \xB7 b\u1EA5m v\xE0o \xF4 ru\u1ED9ng \u0111\u1EC3 th\u1EF1c hi\u1EC7n";
    tip.style.display = "block";
  } else tip.style.display = "none";
}
var pendingPick = null;
function setPendingPick(val) {
  pendingPick = val;
}
function pickFrom(title, obj, nameFn, cb) {
  const ids = Object.keys(obj).filter((k) => obj[k] > 0);
  if (!ids.length) return toast("Trong balo kh\xF4ng c\xF3, ra c\u1EEDa h\xE0ng mua \u0111\xE3");
  openModal(title, `<div class="picker">${ids.map((id) => `<span class="pick" data-pick="${id}">${nameFn(id)} \xD7${obj[id]}</span>`).join("")}</div>`);
  pendingPick = cb;
}
var cacheWicon = "";
var cacheCoins = -1;
var cacheDayTxt = "";
var cacheBlockTxt = "";
function renderStatus() {
  if (ctx.S.coins !== cacheCoins) {
    $id("coins").textContent = ctx.S.coins.toLocaleString();
    cacheCoins = ctx.S.coins;
  }
  const w = weatherOf(gameDay());
  const wiconHtml = spriteSVG(w === "N\u1EAFng" ? "sun" : w === "M\u01B0a nh\u1ECF" ? "raincloud" : "cloud", 22);
  if (cacheWicon !== wiconHtml) {
    $id("wicon").innerHTML = wiconHtml;
    cacheWicon = wiconHtml;
  }
  const dayStr = "Ng\xE0y " + gameDay() + " \xB7 " + w + (w === "M\u01B0a nh\u1ECF" ? " (sinh tr\u01B0\u1EDFng +10%)" : "");
  if (cacheDayTxt !== dayStr) {
    $id("daytxt").textContent = dayStr;
    cacheDayTxt = dayStr;
  }
  const blockStr = ZONE_NAME[ctx.S.page] + " " + curBlocks() + "/6";
  if (cacheBlockTxt !== blockStr) {
    $id("blocktxt").textContent = blockStr;
    cacheBlockTxt = blockStr;
  }
}
function plotHTML(pi) {
  const c = curPlots()[pi].crop;
  if (!c) return "";
  const left = c.matureAt - now();
  const chip = CROPS[c.id].regrow && c.left != null ? `<span class="cnt2">${c.left}/${REGROW_MAX}</span>` : "";
  const fdot = c.fertUsed && (c.fertUsed.compost || c.fertUsed.shiny) ? '<span class="fdot" title="\u0110\xE3 b\xF3n ph\xE2n"></span>' : "";
  const mutPrefix = c.mut ? c.mut.split("@")[0] : "";
  const mut = c.mut ? `<span class="cnt2" style="left:3px;right:auto;background:#ead9f7;border-color:#9a6ad8;color:#6a4a9a" title="${mutPrefix}\xB7\u0111\u1ED9t bi\u1EBFn">\u2726</span>` : "";
  if (left <= 0) return spriteSVG(CROPS[c.id].sp, SPRITE_PX) + `<span class="ripe">!</span>` + chip + fdot + mut;
  const total = growMs(c.id);
  const prog = Math.min(0.99, 1 - left / total);
  return spriteSVG("seedling", SPRITE_PX) + `<div class="bar"><i style="width:${prog * 100 | 0}%"></i></div>` + chip + fdot + mut;
}
function renderPlots() {
  const wrap = $id("blocks");
  const expWrap = $id("explore-blocks");
  if (ctx.S && ctx.S.view === "explore") {
    if (wrap) wrap.style.display = "none";
    if (expWrap && !void 0) {
      expWrap.style.display = "flex";
      if (!expWrap.hasChildNodes()) {
        expWrap.innerHTML = `
          <div class="explore-slot" id="eslot-dungeon">
            ${spriteSVG("dungeonGate", 48)}
            <div class="feature-name">H\u1EA7m ng\u1EE5c</div>
          </div>
          <div class="explore-slot" id="eslot-bet">
            ${spriteSVG("diceIcon", 48)}
            <div class="feature-name">\u0110\u1ECF \u0110en</div>
          </div>
          <div class="explore-slot" id="eslot-hero">
            ${spriteSVG("threeSlimesWalking", 64)}
            <div class="feature-name">Th\xE1m Hi\u1EC3m</div>
          </div>
        `;
        const dBtn = $id("eslot-dungeon");
        if (dBtn) dBtn.addEventListener("click", () => openPanel("dungeon"));
        const bBtn = $id("eslot-bet");
        if (bBtn) bBtn.addEventListener("click", () => openPanel("bet"));
        const hBtn = $id("eslot-hero");
        if (hBtn) hBtn.addEventListener("click", () => (void 0)());
      }
    }
    return;
  }
  if (wrap) wrap.style.display = "";
  if (expWrap) expWrap.style.display = "none";
  const pg = ctx.S.page, plots = curPlots(), nb = curBlocks();
  if (wrap.children.length !== 6 || wrap.dataset.pg !== String(pg)) {
    wrap.dataset.pg = pg;
    let html = "";
    for (let b = 0; b < 6; b++) {
      html += `<div class="block" data-block="${b}">`;
      for (let j = 0; j < 4; j++) {
        html += `<div class="plot" data-pi="${b * 4 + j}"></div>`;
      }
      html += `</div>`;
    }
    wrap.innerHTML = html;
  }
  const groundKind = pg === 2 ? "water" : pg === 3 ? "mine" : "grass";
  const plotKind = pg === 2 ? "wplot" : pg === 3 ? "mplot" : "soil";
  const wetKind = pg === 2 ? "wplotwet" : pg === 3 ? "mplotwet" : "wet";
  for (let b = 0; b < 6; b++) {
    const blockEl = wrap.children[b];
    const locked = b >= nb;
    if (locked !== blockEl.classList.contains("locked")) {
      blockEl.classList.toggle("locked", locked);
    }
    let signEl = blockEl.lastElementChild;
    const hasSign = signEl && signEl.classList.contains("sign");
    if (locked) {
      const next = b === nb;
      const confirming = buyConfirm.b === b && now() < buyConfirm.until;
      const poor = ctx.S.coins < blockPrice(b);
      const sclassName = next ? confirming ? "sign confirm" : poor ? "sign poor" : "sign" : "sign";
      const shtml = next ? confirming ? `B\u1EA5m l\u1EA7n n\u1EEFa<small>x\xE1c nh\u1EADn chi ${blockPrice(b).toLocaleString()} G</small>` : `Khai hoang<small>${spriteSVG("coin", 13)}${blockPrice(b).toLocaleString()} G</small>` : `Ch\u01B0a m\u1EDF<small>khai hoang \xF4 tr\u01B0\u1EDBc \u0111\xE3</small>`;
      if (!hasSign) {
        signEl = document.createElement("div");
        signEl.className = sclassName;
        if (!next) signEl.style.opacity = "0.55";
        if (next) signEl.dataset.buy = String(b);
        signEl.innerHTML = shtml;
        blockEl.appendChild(signEl);
      } else {
        if (signEl.className !== sclassName) signEl.className = sclassName;
        if (!next && signEl.style.opacity !== "0.55") signEl.style.opacity = "0.55";
        if (next && signEl.style.opacity === "0.55") signEl.style.opacity = "";
        if (next && signEl.dataset.buy !== String(b)) signEl.dataset.buy = String(b);
        if (!next && signEl.dataset.buy !== void 0) delete signEl.dataset.buy;
        if (signEl.innerHTML !== shtml) signEl.innerHTML = shtml;
      }
    } else {
      if (hasSign) signEl.remove();
    }
    for (let j = 0; j < 4; j++) {
      const pi = b * 4 + j;
      const pEl = blockEl.children[j];
      if (locked) {
        if (pEl.dataset.deco !== "lock") {
          pEl.dataset.deco = "lock";
          if (pEl.innerHTML !== "") pEl.innerHTML = "";
        }
      } else {
        if (pEl.dataset.deco === "lock") delete pEl.dataset.deco;
        const c = plots[pi].crop;
        const wet = c && now() < c.wateredUntil;
        if (wet !== pEl.classList.contains("watered")) {
          pEl.classList.toggle("watered", wet);
        }
        if (!c) {
          if (pEl.dataset.state !== "empty") {
            if (pEl.innerHTML !== "") pEl.innerHTML = "";
            pEl.dataset.state = "empty";
          }
        } else {
          const left = c.matureAt - now();
          if (left <= 0 && !c.mutRolled) {
            rollMutation(c, pi);
            save();
          }
          const stateStr = `${c.id}|${c.left}|${c.mut}|${c.fertUsed ? Object.keys(c.fertUsed).join(",") : ""}|${left <= 0 ? "ripe" : "grow"}`;
          if (pEl.dataset.state !== stateStr) {
            const expected = plotHTML(pi);
            if (pEl.innerHTML !== expected) pEl.innerHTML = expected;
            pEl.dataset.state = stateStr;
          } else {
            if (left > 0) {
              const prog = Math.min(0.99, 1 - left / growMs(c.id));
              const w = (prog * 100 | 0) + "%";
              const barI = pEl.querySelector(".bar i");
              if (barI && barI.style.width !== w) barI.style.width = w;
            }
          }
        }
      }
      const isLocked = pi >= nb * 4;
      const bg = isLocked ? tileURI(groundKind, pi * 31 + 5) : pEl.classList.contains("watered") ? tileURI(wetKind, pi * 31 + 5) : tileURI(plotKind, pi * 31 + 5);
      if (pEl.dataset.bg !== bg) {
        pEl.style.backgroundImage = bg;
        pEl.dataset.bg = bg;
      }
      const bgSz = isLocked ? "144px 144px" : "100% 100%";
      if (pEl.style.backgroundSize !== bgSz) pEl.style.backgroundSize = bgSz;
    }
  }
}
function renderChips() {
  const cl = $id("chipLink"), cs2 = $id("chipStory");
  cl.classList.toggle("on", CS.link);
  cl.textContent = "Li\xEAn k\u1EBFt th\u1EBB nh\xE2n v\u1EADt: " + (CS.link ? "B\u1EADt" : "T\u1EAFt");
  cs2.style.display = CS.link ? "" : "none";
  cs2.classList.toggle("on", CS.story);
  cs2.textContent = "\u1EA2nh h\u01B0\u1EDFng c\u1ED1t truy\u1EC7n: " + (CS.story ? "B\u1EADt" : "T\u1EAFt");
  $id("chipRegen").style.display = CS.link ? "" : "none";
}
function renderBanner() {
  const b = $id("banner");
  const bmut = $id("bmut");
  const mutPopup = $id("mutPopup");
  if (!CS.link) {
    b.classList.remove("show");
    bmut.style.display = "none";
    mutPopup.classList.remove("open");
    return;
  }
  if (eventPending) {
    b.classList.add("show");
    $id("btag").textContent = "S\u1EF1 ki\u1EC7n h\xF4m nay";
    $id("btxt").textContent = "Ph\xF9 thu\u1EF7 tr\xF2n \u0111ang ng\u1EAFm sao b\xF3i to\xE1n\u2026";
    bmut.style.display = "none";
    mutPopup.classList.remove("open");
    return;
  }
  const ev = todayEvent();
  if (!ev) {
    b.classList.remove("show");
    bmut.style.display = "none";
    mutPopup.classList.remove("open");
    return;
  }
  b.classList.add("show");
  $id("btag").textContent = "S\u1EF1 ki\u1EC7n h\xF4m nay \xB7 " + ev.name;
  const fx = [];
  if (ev.double_yield) fx.push("\u2728Thu ho\u1EA1ch h\xF4m nay \xD72!");
  if (ev.time_mult !== 1) fx.push(ev.time_mult < 1 ? "Sinh tr\u01B0\u1EDFng nhanh h\u01A1n (th\u1EDDi l\u01B0\u1EE3ng \xD7" + ev.time_mult + ")" : "Sinh tr\u01B0\u1EDFng ch\u1EADm l\u1EA1i (th\u1EDDi l\u01B0\u1EE3ng \xD7" + ev.time_mult + ")");
  if (ev.mutate_on_fert > 0) fx.push("C\xE2y h\xF4m nay c\xF3 th\u1EC3 \u0111\u1ED9t bi\u1EBFn");
  if (ev.favored_crop) fx.unshift("Ch\u1EC9 " + ev.favored_crop + " ch\u1ECBu \u1EA3nh h\u01B0\u1EDFng");
  const fb = ctx.S.dayEvent && ctx.S.dayEvent.source === "fallback";
  $id("btxt").textContent = (ev.flavor || "") + (fx.length ? "(" + fx.join(" \xB7 ") + ")" : "") + (fb ? "\u3014S\u1EF1 ki\u1EC7n ngo\u1EA1i tuy\u1EBFn" + (ctx.S.dayEvent.reason ? ": " + ctx.S.dayEvent.reason : "") + "\u3015" : "");
  const hasMut = ev.mutate_on_fert > 0 && ev.mutate_desc && Object.keys(ev.mutate_desc).length > 0;
  bmut.style.display = hasMut ? "flex" : "none";
  if (hasMut) {
    const prefix = ev.mutate_prefix || "\u0111\u1ED9t bi\u1EBFn";
    const chance = Math.round(ev.mutate_on_fert * 100);
    let html = '<div class="mut-header">\u2726 ' + esc(prefix) + ' <span class="mut-chance">(c\u01A1 b\u1EA3n ' + chance + "%, b\xF3n ph\xE2n t\u0103ng)</span></div>";
    const desc = ev.mutate_desc;
    const entries = Object.entries(desc).filter(([k]) => k !== "*");
    const wildcard = desc["*"] || "";
    if (entries.length > 0) {
      html += '<div class="mut-list">';
      entries.forEach(([crop, effect]) => {
        html += '<div class="mut-row"><span class="mut-crop">' + esc(crop) + '</span><span class="mut-effect">' + esc(effect) + "</span></div>";
      });
      html += "</div>";
    } else if (wildcard) {
      html += '<div class="mut-list"><div class="mut-row"><span class="mut-crop">T\u1EA5t c\u1EA3</span><span class="mut-effect">' + esc(wildcard) + "</span></div></div>";
    }
    mutPopup.innerHTML = html;
  } else {
    mutPopup.classList.remove("open");
  }
}
function renderDynamic() {
  if (ctx.win.classList.contains("open")) {
    settle();
    renderStatus();
    renderPlots();
  }
}
function renderAll() {
  applyPageSkin();
  applyViewState();
  renderPager();
  renderStatus();
  renderPlots();
  renderToolbar();
  renderChips();
  renderBanner();
  try {
    renderWitch();
  } catch (e) {
  }
}
function initRender() {
  $id("toolbar").addEventListener("click", (e) => {
    const el = e.target.closest("[data-tool]");
    if (!el) return;
    const k = el.dataset.tool;
    if (k === "expand") {
      toolbarOpen = true;
      renderToolbar();
      return;
    }
    if (k === "collapse") {
      toolbarOpen = false;
      mode = null;
      renderToolbar();
      return;
    }
    if (mode && mode.t === k) {
      mode = null;
      renderToolbar();
      return;
    }
    if (k === "seed") return pickFrom("Ch\u1ECDn h\u1EA1t gi\u1ED1ng \u0111\u1EC3 gieo", ctx.S.seeds, (id) => CROPS[id]?.name || "H\u1EA1t gi\u1ED1ng l\u1EA1", (id) => {
      mode = { t: "seed", id };
      renderToolbar();
    });
    if (k === "fert") return pickFrom("Ch\u1ECDn ph\xE2n b\xF3n", ctx.S.ferts, (id) => FERTS[id]?.name || "Ph\xE2n b\xF3n l\u1EA1", (id) => {
      mode = { t: "fert", id };
      renderToolbar();
    });
    mode = { t: k };
    renderToolbar();
  });
  $id("chipLink").addEventListener("click", () => {
    CS.link = !CS.link;
    if (!CS.link) {
      CS.story = false;
      setInjection("");
    }
    saveCharState();
    renderChips();
    renderBanner();
    updateInjection();
    if (CS.link) {
      requestDayEvent();
      toast("\u0110\xE3 b\u1EADt li\xEAn k\u1EBFt, \u0111ang gieo qu\u1EBB s\u1EF1 ki\u1EC7n h\xF4m nay theo th\u1EBF gi\u1EDBi quan");
    } else toast("\u0110\xE3 v\u1EC1 l\u1EA1i v\u01B0\u1EDDn rau ch\u01A1i m\u1ED9t m\xECnh");
  });
  $id("banner").addEventListener("click", (e) => {
    if (e.target.closest(".bmut") || e.target.closest(".mut-popup")) return;
    $id("banner").classList.toggle("expand");
    $id("mutPopup").classList.remove("open");
  });
  $id("bmut").addEventListener("click", (e) => {
    e.stopPropagation();
    $id("mutPopup").classList.toggle("open");
  });
  sh.addEventListener("click", (e) => {
    const popup = $id("mutPopup");
    if (popup.classList.contains("open") && !e.target.closest(".mut-popup") && !e.target.closest(".bmut")) {
      popup.classList.remove("open");
    }
  });
  $id("chipRegen").addEventListener("click", () => {
    ctx.S.dayEvent = null;
    save();
    requestDayEvent(true);
    toast("\u0110ang gieo qu\u1EBB l\u1EA1i\u2026");
  });
  $id("chipStory").addEventListener("click", () => {
    CS.story = !CS.story;
    saveCharState();
    renderChips();
    updateInjection();
    toast(CS.story ? "T\xECnh h\xECnh v\u01B0\u1EDDn rau s\u1EBD \u0111\u01B0\u1EE3c th\xEC th\u1EA7m cho nh\u1EEFng ng\u01B0\u1EDDi trong c\u1ED1t truy\u1EC7n" : "V\u01B0\u1EDDn rau l\u1EA1i gi\u1EEF b\xED m\u1EADt");
  });
  $id("blocks").addEventListener("click", (e) => {
    const sign = e.target.closest("[data-buy]");
    if (sign) {
      const b = +sign.dataset.buy;
      if (ctx.S.coins < blockPrice(b)) {
        toast("C\xF2n thi\u1EBFu " + (blockPrice(b) - ctx.S.coins).toLocaleString() + " G");
        return;
      }
      if (buyConfirm.b === b && now() < buyConfirm.until) {
        buyConfirm = { b: -1, until: 0 };
        buyBlock(b);
      } else {
        buyConfirm = { b, until: now() + 4e3 };
        renderPlots();
      }
      return;
    }
    const p = e.target.closest(".plot");
    if (!p || p.dataset.deco) return;
    const pi = +p.dataset.pi;
    const c = curPlots()[pi].crop;
    if (c && now() >= c.matureAt && (!mode || mode.t !== "shovel")) {
      harvest(pi);
      return;
    }
    if (!mode) {
      if (c) toast(CROPS[c.id].name + " \xB7 c\xF2n " + fmtLeft(c.matureAt - now()));
      return;
    }
    if (mode.t === "seed") {
      if (c) return toast("\xD4 n\xE0y tr\u1ED3ng r\u1ED3i");
      plant(pi, mode.id);
      if ((ctx.S.seeds[mode.id] || 0) <= 0) {
        setMode(null);
        renderToolbar();
      }
      return;
    }
    if (mode.t === "water") return water(pi);
    if (mode.t === "fert") {
      fertilize(pi, mode.id);
      if ((ctx.S.ferts[mode.id] || 0) <= 0) {
        setMode(null);
        renderToolbar();
      }
      return;
    }
    if (mode.t === "harvest") return harvest(pi);
    if (mode.t === "shovel") {
      if (!c) return;
      if (mode.confirmPi === pi) {
        shovel(pi);
        mode.confirmPi = null;
      } else {
        mode.confirmPi = pi;
        toast("B\u1EA5m l\u1EA7n n\u1EEFa \u0111\u1EC3 x\xE1c nh\u1EADn x\u1EDBi b\u1ECF " + CROPS[c.id].name);
      }
    }
  });
}

// src/witch.js
var WITCH_CRY = ["C\xFAc cu, c\xF3 ai kh\xF4ng?", "\u25C6\u2726\u2234\u2026?", "(d\u01B0\u1EDBi v\xE0nh m\u0169 v\u1ECDng ra ti\u1EBFng l\u1EADt s\xE1ch)", "\u263D\u2042\u25C7!", "\u2736\u25C7\u2234\u2726\u2026", "Tinh t\u01B0\u1EE3ng h\xF4m nay \u0111\u1EB9p \u0111\u1EA5y."];
function witchArrive() {
  const wz = ctx.S.witch;
  wz.leaveAt = now() + WITCH_STAY;
  wz.missed = 0;
  wz.order = makeWitchOrder();
  save();
  renderWitch();
  toast("Ph\xF9 thu\u1EF7 tr\xF2n t\u1EDBi r\u1ED3i! Qu\u1EA7y h\xE0ng ng\xF4i sao \u1EDF g\xF3c d\u01B0\u1EDBi tr\xE1i b\u1EDD ru\u1ED9ng \u0111\xE3 s\xE1ng \u0111\xE8n");
}
function makeWitchOrder() {
  const pool = Object.entries(CROPS).filter(([id, c]) => !c.hidden && pageUnlocked(c.zone || 1));
  const pick = () => pool[Math.floor(Math.random() * pool.length)][0];
  const lines = [{ id: pick(), n: 2 + Math.floor(Math.random() * 3), mut: false, reward: 1, done: false }];
  if (CS.link && Math.random() < 0.5) {
    lines.push({ id: pick(), n: 1 + Math.floor(Math.random() * 2), mut: true, reward: 2, done: false });
  }
  return { lines, done: false };
}
function mutKeysOf(cropId) {
  return Object.keys(ctx.S.bag).filter((k) => k.split("@")[0] === cropId && k.indexOf("@") > 0);
}
function mutCountOf(cropId) {
  return mutKeysOf(cropId).reduce((s, k) => s + ctx.S.bag[k], 0);
}
function witchDeliver(li) {
  const wz = ctx.S.witch;
  if (!wz || !wz.order) return;
  const line = wz.order.lines[li];
  if (!line || line.done) return;
  if (!line.mut) {
    if ((ctx.S.bag[line.id] || 0) < line.n) return toast("C\xF2n thi\u1EBFu " + (line.n - (ctx.S.bag[line.id] || 0)) + " qu\u1EA3 " + CROPS[line.id].name);
    ctx.S.bag[line.id] -= line.n;
    if (!ctx.S.bag[line.id]) delete ctx.S.bag[line.id];
  } else {
    if (mutCountOf(line.id) < line.n) return toast("Lo\u1EA1i " + CROPS[line.id].name + " c\xF3 ti\u1EC1n t\u1ED1 c\xF2n thi\u1EBFu " + (line.n - mutCountOf(line.id)) + " qu\u1EA3");
    let need = line.n;
    for (const k of mutKeysOf(line.id)) {
      const take = Math.min(need, ctx.S.bag[k]);
      ctx.S.bag[k] -= take;
      if (!ctx.S.bag[k]) delete ctx.S.bag[k];
      need -= take;
      if (!need) break;
    }
  }
  ctx.S.seeds.mystery = (ctx.S.seeds.mystery || 0) + line.reward;
  line.done = true;
  if (wz.order.lines.every((l) => l.done)) {
    wz.order.done = true;
    wz.leaveAt = Math.min(wz.leaveAt, now() + 60 * 1e3);
  }
  save();
  renderStatus();
  toast("Giao h\xE0ng xong! Nh\u1EADn \u0111\u01B0\u1EE3c h\u1EA1t gi\u1ED1ng b\xED \u1EA9n \xD7" + line.reward);
  openWitchDlg();
}
function openWitchDlg() {
  const wz = ctx.S.witch;
  if (!wz || !wz.leaveAt || now() > wz.leaveAt || !wz.order) return;
  const rows = wz.order.lines.map((l, i) => {
    const nm = CROPS[l.id].name;
    const have = l.mut ? mutCountOf(l.id) : ctx.S.bag[l.id] || 0;
    const btn = l.done ? '<span class="wzbtn done">\u0110\xE3 giao</span>' : have >= l.n ? `<span class="wzbtn" data-wdeliver="${i}">Giao</span>` : '<span class="wzbtn off">Ch\u01B0a \u0111\u1EE7</span>';
    return `<div class="wzord"><span class="star">\u2726</span>
      <div class="wzwant">Thu th\u1EADp <em>${l.mut ? '<span class="mutq">lo\u1EA1i c\xF3 ti\u1EC1n t\u1ED1</span>' : ""}${nm} \xD7${l.n}</em>${btn}</div>
      <div class="wzgive">Th\xF9 lao: h\u1EA1t gi\u1ED1ng b\xED \u1EA9n \xD7${l.reward}${l.mut ? " \u2726 (\u0111\u01A1n \u0111\u1ED9t bi\u1EBFn)" : ""} \xB7 b\u1EA1n \u0111ang c\xF3 ${have}</div></div>`;
  }).join("");
  const reroll = !wz.order.done && ctx.S.shards && ctx.S.shards.prism > 0 ? `<div style="text-align:center;margin-top:6px"><span class="wzbtn" data-wreroll="1" style="float:none">\u2726 \u0110\u1ED5i \u0111\u01A1n kh\xE1c (m\u1EA3nh l\u0103ng quang \xD7${ctx.S.shards.prism})</span></div>` : "";
  openModal("\u0110\u01A1n h\xE0ng c\u1EE7a ph\xF9 thu\u1EF7", `<div class="wzwrap">
    <div class="wzhead">\u0110\u01A1n h\xE0ng c\u1EE7a ph\xF9 thu\u1EF7</div>
    <div class="wzsub">\u2726 \uFF61\uFF9F\u263D \u2234 \u2727 \u2234 \u263D\uFF9F\uFF61 \u2726</div>${rows}${reroll}
    <div class="wzleave">\u263D ${wz.order.done ? '"\u2736\u25C7\u2026!" (tr\xF4ng c\xF4 \u1EA5y h\xE0i l\xF2ng l\u1EAFm)' : "C\xF4 \u1EA5y c\xF2n n\xE1n l\u1EA1i kho\u1EA3ng " + fmtLeft(wz.leaveAt - now())}</div>
  </div>`);
  $id("mbody").querySelectorAll("[data-wdeliver]").forEach((b) => b.addEventListener("click", () => witchDeliver(+b.dataset.wdeliver)));
  $id("mbody").querySelectorAll("[data-wreroll]").forEach((b) => b.addEventListener("click", () => {
    if (!(ctx.S.shards && ctx.S.shards.prism > 0)) return;
    ctx.S.shards.prism--;
    ctx.S.witch.order = makeWitchOrder();
    save();
    toast("L\u0103ng quang lo\xE9 l\xEAn, \u0111\u01A1n h\xE0ng \u0111\xE3 \u0111\u1ED5i m\u1ED9t lo\u1EA1t");
    openWitchDlg();
  }));
}
function useStarShard() {
  if (!(ctx.S.shards && ctx.S.shards.star > 0)) return;
  if (!ctx.S.passes.water) return toast("Ph\xF9 thu\u1EF7 ch\u1EC9 ch\u1ECBu gh\xE9 nh\u1EEFng n\xF4ng tr\u1EA1i c\xF3 v\xE9 v\xF9ng n\u01B0\u1EDBc");
  if (ctx.S.witch.leaveAt > now()) return toast("Ph\xF9 thu\u1EF7 tr\xF2n \u0111ang \u1EDF qu\u1EA7y r\u1ED3i m\xE0");
  ctx.S.shards.star--;
  closeModal();
  witchArrive();
}
function renderWitch() {
  const el = $id("witch");
  const active = ctx.S.witch && ctx.S.witch.leaveAt > now() && ctx.S.passes.water;
  el.classList.toggle("show", !!active);
  if (active && !el.innerHTML) el.innerHTML = `<span class="wtag">\u2726 \u0110\u01A1n h\xE0ng</span><span class="wbody">${petSVG("witchBlob", 48)}</span>`;
  if (!active) el.innerHTML = "";
}
var takeoutNote = null;
function setTakeoutNote(val) {
  takeoutNote = val;
}
function openTakeout(key) {
  const have = ctx.S.bag[key] || 0;
  if (have <= 0) return;
  openModal("L\u1EA5y ra \xB7 " + bagName(key), `
    <div class="note" style="margin-bottom:8px">L\u1EA5y ra = mang kh\u1ECFi balo \u0111\u1EC3 d\xF9ng trong c\u1ED1t truy\u1EC7n. <b style="color:var(--accFg)">Kh\xF4ng quy ra ti\u1EC1n, l\u1EA5y ra r\u1ED3i kh\xF4ng b\u1ECF l\u1EA1i balo \u0111\u01B0\u1EE3c!</b></div>
    <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
      <input class="inp" id="takeN" type="number" min="1" max="${have}" value="1" style="width:90px">
      <span style="font-size:12px;color:#7a5c38">/ \u0111ang c\xF3 ${have}</span>
      <span class="buy" id="takeGo">X\xE1c nh\u1EADn l\u1EA5y ra</span>
    </div>`);
  $id("takeGo").addEventListener("click", () => {
    const n = clampN($id("takeN").value, 1, have, 1) | 0;
    ctx.S.bag[key] = have - n;
    if (ctx.S.bag[key] <= 0) delete ctx.S.bag[key];
    const d = mutDescOf(key);
    takeoutNote = (takeoutNote || []).filter((t) => now() < t.until).concat({ txt: n + " " + bagName(key) + (d ? " (hi\u1EC7u \u1EE9ng \u0111\xE3 \u0111\u1ECBnh: " + d + ")" : ""), until: now() + 10 * MIN });
    save();
    renderStatus();
    toast("\u0110\xE3 l\u1EA5y ra " + n + " " + bagName(key));
    openPanel("bag");
  });
}
function openSellDlg(key) {
  const have = ctx.S.bag[key] || 0;
  if (have <= 0) return;
  const price = bagPrice(key);
  openModal("B\xE1n \xB7 " + bagName(key), `
    <div class="note" style="margin-bottom:8px">\u0110\u01A1n gi\xE1 ${price} G \xB7 \u0111ang c\xF3 ${have} c\xE1i</div>
    <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
      <input class="inp" id="sellN" type="number" min="1" max="${have}" value="1" style="width:90px">
      <span style="font-size:12px;color:#7a5c38">/ ${have}</span>
      <span class="buy" id="sellGo">X\xE1c nh\u1EADn b\xE1n</span>
    </div>`);
  $id("sellGo").addEventListener("click", () => {
    sell(key, clampN($id("sellN").value, 1, have, 1) | 0);
  });
}
function openSellSeedDlg(id) {
  const have = ctx.S.seeds[id] || 0;
  if (have <= 0) return;
  const def = CROPS[id];
  if (!def) return;
  const price = Math.floor((def.seed || 100) * 0.5);
  const name = "H\u1EA1t " + def.name;
  openModal("B\xE1n \xB7 " + name, `
    <div class="note" style="margin-bottom:8px">Gi\xE1 thu mua ${price} G \xB7 \u0111ang c\xF3 ${have} h\u1EA1t</div>
    <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
      <input class="inp" id="sellSeedN" type="number" min="1" max="${have}" value="1" style="width:90px">
      <span style="font-size:12px;color:#7a5c38">/ ${have}</span>
      <span class="buy" id="sellSeedGo">X\xE1c nh\u1EADn b\xE1n</span>
    </div>`);
  $id("sellSeedGo").addEventListener("click", () => {
    sellSeed(id, clampN($id("sellSeedN").value, 1, have, 1) | 0);
  });
}
function buildTicket(k) {
  const water2 = k === "water";
  return `
  <div class="tk ${water2 ? "water" : "mine"}">
    <div class="stub">${spriteSVG(water2 ? "lotus" : "gem", 52)}<span class="no">${water2 ? "V\xF9ng n\u01B0\u1EDBc \xB7 Trang II" : "Khu m\u1ECF \xB7 Trang III"}</span></div>
    <div class="perf"></div>
    <div class="tmain">
      <div class="inner">
        <div class="eyebrow">Ai m\xE0 th\xE8m l\xE0m n\xF4ng d\xE2n ch\u1EE9! \xB7 Gi\u1EA5y ph\xE9p th\xF4ng h\xE0nh</div>
        <div class="tname">${water2 ? "V \xC9   V \xD9 N G   N \u01AF \u1EDA C" : "V \xC9   K H U   M \u1ECE"}</div>
        <div class="tsub">${water2 ? "C\u1EA7m v\xE9 n\xE0y \u0111\u1EC3 m\u1EDF ru\u1ED9ng v\xF9ng n\u01B0\u1EDBc \u1EDF trang hai \xB7 tr\u1ED3ng \u0111\u01B0\u1EE3c c\xE2y thu\u1EF7 sinh<br>C\u1EE7 sen \u0111ang \u0111\u1EE3i b\u1EA1n, rong bi\u1EC3n c\u0169ng v\u1EADy." : "C\u1EA7m v\xE9 n\xE0y \u0111\u1EC3 v\xE0o ru\u1ED9ng b\u1EA3o th\u1EA1ch \u1EDF trang ba \xB7 \u01B0\u01A1m \u0111\u01B0\u1EE3c c\xE2y tinh th\u1EA1ch<br>Coi ch\u1EEBng d\u01B0\u1EDBi ch\xE2n, th\u1EE9 g\xEC ph\xE1t s\xE1ng th\xEC \u0111\u1EEBng gi\u1EABm."}</div>
        <div class="trow">
          <span class="serial">${water2 ? "N\u2070 000002" : "N\u2070 000003"}</span>
          <span class="valid">${water2 ? "C\xF3 gi\xE1 tr\u1ECB v\u0129nh vi\u1EC5n \xB7 kh\xF4ng chuy\u1EC3n nh\u01B0\u1EE3ng (rau th\xEC \u0111\u01B0\u1EE3c)" : "C\xF3 gi\xE1 tr\u1ECB v\u0129nh vi\u1EC5n \xB7 ch\u1EE9a m\u1ED9t l\u01B0\u1EE3ng nh\u1ECF ma l\u1EF1c"}</span>
        </div>
      </div>
      <div class="stamp">${water2 ? "B\xE9 tr\xF2n<br>\u0111\xE3 duy\u1EC7t" : "Ph\xF9 thu\u1EF7<br>\u0111\u1EB7c duy\u1EC7t"}</div>
      <div class="curl"></div>
    </div>
  </div>`;
}
function openPassDlg(k) {
  const ps = PASSES[k];
  const owned = !!ctx.S.passes[k];
  const poor = ctx.S.coins < ps.price;
  openModal(ps.name, buildTicket(k) + (owned ? '<div class="note">\u0110\xE3 s\u1EDF h\u1EEFu \xB7 c\u1EA5t trong k\u1EB9p gi\u1EA5y t\u1EDD c\u1EE7a b\u1EA1n. C\xE1c b\xE9 tr\xF2n \u1EDF trang t\u01B0\u01A1ng \u1EE9ng lu\xF4n hoan ngh\xEAnh b\u1EA1n gh\xE9 mua.</div>' : `<div style="display:flex;gap:8px;align-items:center">
        <span class="buy${poor ? " off" : ""}" id="passGo">Mua ${ps.price.toLocaleString()} G</span>
        <span class="buy plain" id="passNo">\u0110\u1EC3 ngh\u0129 th\xEAm</span>
      </div>`));
  if (!owned) {
    $id("passGo").addEventListener("click", () => {
      if (ctx.S.coins < ps.price) return toast("C\xF2n thi\u1EBFu " + (ps.price - ctx.S.coins).toLocaleString() + " G");
      ctx.S.coins -= ps.price;
      ctx.S.passes[k] = true;
      save();
      renderStatus();
      renderPager();
      openPanel("shop");
      toast(ps.name + " \u0111\xE3 v\xE0o tay! " + (k === "water" ? "Ru\u1ED9ng v\xF9ng n\u01B0\u1EDBc \u0111\xE3 m\u1EDF, l\u1EADt trang qua xem th\u1EED \u0111i" : "Ru\u1ED9ng khu m\u1ECF \u0111\xE3 m\u1EDF, l\u1EADt trang qua xem th\u1EED \u0111i"));
    });
    $id("passNo").addEventListener("click", () => openPanel("shop"));
  }
}
function openBuyDlg(kind, id, returnTo = "shop") {
  let def, price, name;
  if (kind === "ticket") {
    price = id === "super" ? 25e4 : id === "norm" ? 1e3 : 5e3;
    name = id === "super" ? "V\xE9 Quay Si\xEAu C\u01B0\u1EDDng" : id === "norm" ? "V\xE9 Quay Th\u01B0\u1EDDng" : "V\xE9 Quay \u0110\u1EB7c Bi\u1EC7t";
  } else {
    def = kind === "seed" ? CROPS[id] : FERTS[id];
    price = kind === "seed" ? def.seed : def.price;
    name = kind === "seed" ? "H\u1EA1t " + def.name : def.name;
  }
  if (ctx.S.coins < price) return toast("C\xF2n thi\u1EBFu " + (price - ctx.S.coins).toLocaleString() + " G");
  const maxN = Math.max(1, Math.floor(ctx.S.coins / Math.max(1, price)));
  openModal("Mua \xB7 " + name, `
    <div class="note" style="margin-bottom:8px">\u0110\u01A1n gi\xE1 ${price} G \xB7 v\xE0ng hi\u1EC7n c\xF3 ${ctx.S.coins.toLocaleString()} \xB7 mua \u0111\u01B0\u1EE3c t\u1ED1i \u0111a ${maxN}</div>
    <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
      <input class="inp" id="buyN" type="number" min="1" max="${maxN}" value="1" style="width:90px">
      <span id="buyTotal" style="font-size:12px;color:#7a5c38;font-weight:bold">T\u1ED5ng ${price} G</span>
      <span class="buy" id="buyGo">X\xE1c nh\u1EADn mua</span>
    </div>`);
  const upd = () => {
    const n = clampN($id("buyN").value, 1, maxN, 1) | 0;
    $id("buyTotal").textContent = "T\u1ED5ng " + (n * price).toLocaleString() + " G";
    return n;
  };
  $id("buyN").addEventListener("input", upd);
  $id("buyGo").addEventListener("click", () => {
    const n = upd(), cost = n * price;
    if (ctx.S.coins < cost) return toast("Kh\xF4ng \u0111\u1EE7 v\xE0ng r\u1ED3i");
    ctx.S.coins -= cost;
    if (kind === "seed") ctx.S.seeds[id] = (ctx.S.seeds[id] || 0) + n;
    else if (kind === "fert") ctx.S.ferts[id] = (ctx.S.ferts[id] || 0) + n;
    else if (kind === "ticket") {
      if (!ctx.S.tickets) ctx.S.tickets = { norm: 0, spec: 0, super: 0 };
      ctx.S.tickets[id] = (ctx.S.tickets[id] || 0) + n;
    }
    save();
    renderStatus();
    toast("\u0110\xE3 mua " + name + " \xD7" + n);
    openPanel(returnTo);
  });
}
var toastTimer = null;
function toast(msg) {
  const t = $id("toast");
  if (!t) return;
  t.textContent = msg;
  t.style.display = "block";
  window.setTimeout(() => t.classList.add("show"), 10);
  if (toastTimer) window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    t.classList.remove("show");
    window.setTimeout(() => {
      t.style.display = "none";
    }, 300);
  }, 1800);
}
function initWitch() {
  $id("witch").addEventListener("click", (e) => {
    if (e.target.closest(".wtag")) return openWitchDlg();
    const el = $id("witch");
    el.querySelector(".pbubble")?.remove();
    const b = document.createElement("span");
    b.className = "pbubble wb";
    b.textContent = WITCH_CRY[Math.floor(Math.random() * WITCH_CRY.length)];
    el.appendChild(b);
    window.setTimeout(() => b.remove(), 1900);
  });
}

// src/utils.js
var gameDay = () => Math.floor((now() - ctx.S.day0) / DAY_MS) + 1;
var weatherOf = (d) => WEATHERS[Math.floor(mulberry32(d * 7919)() * WEATHERS.length)];
var isRain = () => weatherOf(gameDay()) === "M\u01B0a nh\u1ECF";
function settle() {
  if (CS.link && !eventFresh() && !eventPending) requestDayEvent();
  if (ctx.S.passes.water && ctx.S.witch) {
    const wz = ctx.S.witch;
    if (wz.leaveAt && now() >= wz.leaveAt) {
      wz.leaveAt = 0;
      if (wz.order && !wz.order.done) wz.missed++;
      wz.order = null;
      wz.nextAt = now() + witchGap();
      save();
      try {
        renderWitch();
      } catch (e) {
      }
    }
    const open = (() => {
      try {
        return sh.getElementById("win").classList.contains("open");
      } catch (e) {
        return false;
      }
    })();
    if (!wz.leaveAt && open && (now() >= wz.nextAt || wz.missed >= 2)) witchArrive();
  }
  let mutChanged = false;
  eachPage((plots, pg) => plots.forEach((p, pi) => {
    const c = p.crop;
    if (!c || now() < c.matureAt || c.mutRolled) return;
    mutChanged = true;
    rollMutation(c, pg === ctx.S.page ? pi : null);
  }));
  if (mutChanged) save();
  let wChanged = false;
  const outed = (id) => ctx.S.petsOut.indexOf(id) >= 0;
  if (outed("cloudMallow")) {
    eachPage((plots) => plots.forEach((p) => {
      const c = p.crop;
      if (!c || now() >= c.matureAt || now() < c.wateredUntil) return;
      c.matureAt = now() + (c.matureAt - now()) * 0.75;
      c.wateredUntil = now() + WATER_CD;
      wChanged = true;
    }));
  }
  let tGain = 0, tSeed = "", tMyst = "", tPrism = 0, tStar = 0;
  ctx.S.petsOut.forEach((id) => {
    const pd = PETS[id];
    if (!pd || pd.job) return;
    if (ctx.S.petFind[id] == null) {
      ctx.S.petFind[id] = now();
      wChanged = true;
      return;
    }
    const elapsed = now() - ctx.S.petFind[id];
    if (id === "penguin") {
      const PENGUIN_CD = 60 * 60 * 1e3;
      if (elapsed >= PENGUIN_CD) {
        const hours = Math.floor(elapsed / PENGUIN_CD);
        ctx.S.petFind[id] += hours * PENGUIN_CD;
        if (!ctx.S.tickets) ctx.S.tickets = { norm: 0, spec: 0, super: 0 };
        let normGained = 0;
        let specGained = 0;
        for (let i = 0; i < hours; i++) {
          if (Math.random() < 0.3) specGained++;
          else normGained++;
        }
        ctx.S.tickets.norm = (ctx.S.tickets.norm || 0) + normGained;
        ctx.S.tickets.spec = (ctx.S.tickets.spec || 0) + specGained;
        const msg = [];
        if (normGained > 0) msg.push(`${normGained} V\xE9 Th\u01B0\u1EDDng`);
        if (specGained > 0) msg.push(`${specGained} V\xE9 \u0110\u1EB7c Bi\u1EC7t`);
        toast(`Ch\xFA chim c\xE1nh c\u1EE5t v\u1EEBa \u0111i xa v\u1EC1 mang t\u1EB7ng b\u1EA1n: ${msg.join(" v\xE0 ")}!`);
        wChanged = true;
      }
      return;
    }
    if (elapsed < TREASURE_CD) return;
    ctx.S.petFind[id] = now();
    tGain += 10 + Math.floor(Math.random() * 41);
    if ((id === "impBlob" || id === "angelBlob") && Math.random() < 0.2) {
      ctx.S.seeds.mystery = (ctx.S.seeds.mystery || 0) + 1;
      tMyst = id;
    }
    if (id === "prismBlob" && Math.random() < 0.2) {
      ctx.S.shards.prism++;
      tPrism++;
    }
    if (id === "starBell" && Math.random() < 0.15) {
      ctx.S.shards.star++;
      tStar++;
    }
    if (!tSeed && !tMyst && Math.random() < 0.1) {
      const ids = Object.keys(CROPS).filter((k) => !CROPS[k].hidden);
      tSeed = ids[Math.floor(Math.random() * ids.length)];
      ctx.S.seeds[tSeed] = (ctx.S.seeds[tSeed] || 0) + 1;
    }
    wChanged = true;
  });
  if (tGain) {
    ctx.S.coins += tGain;
    toast("C\xE1c b\xE9 tr\xF2n \u0111i t\xECm kho b\xE1u v\u1EC1: +" + tGain + " G" + (tSeed ? ", c\xF2n tha v\u1EC1 c\u1EA3 h\u1EA1t gi\u1ED1ng " + CROPS[tSeed].name + "!" : "") + (tMyst ? tMyst === "impBlob" ? ", b\xE9 qu\u1EF7 nh\u1ECF tha v\u1EC1 m\u1ED9t h\u1EA1t gi\u1ED1ng b\xED \u1EA9n \u0111en s\xEC\u2026" : ", b\xE9 thi\xEAn th\u1EA7n ng\u1EADm v\u1EC1 m\u1ED9t h\u1EA1t gi\u1ED1ng b\xED \u1EA9n \xE1nh l\xEAn l\u1EA5p l\xE1nh\u2026" : "") + (tPrism ? ", b\xE9 l\u0103ng quang nh\u1EA3 ra " + tPrism + " m\u1EA3nh l\u0103ng quang" : "") + (tStar ? ", b\xE9 chu\xF4ng sao rung r\u01A1i " + tStar + " m\u1EA3nh ng\xF4i sao\u2726" : ""));
    renderStatus();
  }
  if (wChanged) save();
  if (!isRain()) return;
  const d = gameDay();
  let rChanged = false;
  eachPage((plots) => plots.forEach((p) => {
    const c = p.crop;
    if (!c || now() >= c.matureAt || c.rainDay === d) return;
    c.matureAt = now() + (c.matureAt - now()) * 0.9;
    c.rainDay = d;
    rChanged = true;
  }));
  if (rChanged) save();
}
var pageUnlocked = (p) => p === 1 || p === 2 && ctx.S.passes.water || p === 3 && ctx.S.passes.mine;
var fmtLeft = (ms) => {
  if (ms <= 0) return "Thu ho\u1EA1ch \u0111\u01B0\u1EE3c";
  const m = Math.ceil(ms / MIN);
  return m >= 60 ? Math.floor(m / 60) + "g" + m % 60 + "p" : m + "p";
};

// src/events.js
var esc = (s) => String(s).replace(/[&<>"']/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[m]);
var clampN = (x, lo, hi, dflt) => {
  x = Number(x);
  return isFinite(x) ? Math.min(hi, Math.max(lo, x)) : dflt;
};
var SEC_LS_KEY = "star_tavern_farm_sec";
var SEC = { url: "", key: "", model: "", autoReset: true, resetHours: 4, wbLimit: 2e4, chatDepth: 15 };
try {
  const raw = window.localStorage.getItem(SEC_LS_KEY);
  if (raw) {
    const o = JSON.parse(raw);
    SEC = {
      url: o.url || "",
      key: o.key ? atob(o.key) : "",
      model: o.model || "",
      autoReset: o.autoReset !== false,
      resetHours: clampN(o.resetHours, 1, 24, 4),
      wbLimit: typeof o.wbLimit === "number" ? o.wbLimit : 2e4,
      chatDepth: typeof o.chatDepth === "number" ? o.chatDepth : 15
    };
  }
} catch (e) {
}
function saveSec() {
  try {
    window.localStorage.setItem(SEC_LS_KEY, JSON.stringify({ url: SEC.url, key: btoa(SEC.key), model: SEC.model, autoReset: SEC.autoReset, resetHours: SEC.resetHours, wbLimit: SEC.wbLimit, chatDepth: SEC.chatDepth }));
  } catch (e) {
  }
}
var CS = { link: false, story: false, gachaOrigin: "", wantItem: "", wantAttr: "", wantDesc: "", useLorebook: true, useChatHistory: true };
function loadCharState() {
  try {
    const cn = charName();
    const key = "cs_" + cn;
    const o = (ctx.extension_settings[extensionName] || {})[key] || {};
    CS = { link: !!o.link, story: !!o.story, gachaOrigin: o.gachaOrigin || "", wantItem: o.wantItem || "", wantAttr: o.wantAttr || "", wantDesc: o.wantDesc || "", useLorebook: o.useLorebook !== false, useChatHistory: o.useChatHistory !== false };
  } catch (e) {
    CS = { link: false, story: false, gachaOrigin: "", wantItem: "", wantAttr: "", wantDesc: "", useLorebook: true, useChatHistory: true };
  }
}
function saveCharState() {
  try {
    const cn = charName();
    const key = "cs_" + cn;
    if (!ctx.extension_settings[extensionName]) ctx.extension_settings[extensionName] = {};
    ctx.extension_settings[extensionName][key] = { link: CS.link, story: CS.story, gachaOrigin: CS.gachaOrigin, wantItem: CS.wantItem, wantAttr: CS.wantAttr, wantDesc: CS.wantDesc, useLorebook: CS.useLorebook, useChatHistory: CS.useChatHistory };
    if (ctx.saveSettingsDebounced) ctx.saveSettingsDebounced();
  } catch (e) {
  }
}
loadCharState();
function charName() {
  try {
    const ctx2 = window.SillyTavern && window.SillyTavern.getContext ? window.SillyTavern.getContext() : {};
    return ctx2.name2 || String(ctx2.characterId || "");
  } catch (e) {
    return "";
  }
}
var eventFresh = () => ctx.S.dayEvent && ctx.S.dayEvent.who === charName() && (!SEC.autoReset || now() - (ctx.S.dayEvent.at || 0) < SEC.resetHours * 60 * 60 * 1e3);
var todayEvent = () => CS.link && eventFresh() ? ctx.S.dayEvent.ev : null;
async function collectWorldbook() {
  try {
    let blue = "", green = "";
    let entries = [];
    const ctx2 = window.SillyTavern && window.SillyTavern.getContext ? window.SillyTavern.getContext() : {};
    if (CS.useLorebook) {
      try {
        const ST_WorldInfo = await new Function("return import('/scripts/world-info.js')")().catch(() => null);
        const activeNames = /* @__PURE__ */ new Set();
        try {
          const charId = ctx2.characterId !== void 0 ? ctx2.characterId : window.this_character;
          const charData = ctx2.characters?.[charId]?.data || window.characters?.[charId]?.data;
          if (charData) {
            if (charData.extensions?.world) activeNames.add(charData.extensions.world);
            if (charData.world) activeNames.add(charData.world);
          }
          const wiKey = ST_WorldInfo?.METADATA_KEY || window.WI_METADATA_KEY || "world_info";
          const chatWorldName = ctx2.chatMetadata?.[wiKey];
          if (chatWorldName && typeof chatWorldName === "string") activeNames.add(chatWorldName);
        } catch (e) {
        }
        for (const name of activeNames) {
          try {
            const res = await fetch("/api/worldinfo/get", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                ...typeof ctx2.getRequestHeaders === "function" ? ctx2.getRequestHeaders() : {}
              },
              body: JSON.stringify({ name })
            });
            if (res.ok) {
              const data = await res.json();
              if (data && data.entries) {
                const vals = Array.isArray(data.entries) ? data.entries : Object.values(data.entries);
                entries = entries.concat(vals);
              }
            }
          } catch (e) {
          }
        }
      } catch (e) {
      }
      try {
        const charId = ctx2.characterId !== void 0 ? ctx2.characterId : window.this_character;
        if (typeof charId !== "undefined") {
          const charData = ctx2.characters?.[charId]?.data || window.characters?.[charId]?.data;
          if (charData && charData.character_book && charData.character_book.entries) {
            const charEntries = charData.character_book.entries;
            const vals = Array.isArray(charEntries) ? charEntries : Object.values(charEntries);
            entries = entries.concat(vals);
          }
        }
      } catch (e) {
      }
    }
    let chatContext = "";
    if (CS.useChatHistory) {
      try {
        const chatHistory = ctx2.chat || window.chat || [];
        const depth = SEC.chatDepth !== void 0 ? SEC.chatDepth : 15;
        const recentMsgs = chatHistory.slice(-depth).map((m) => (m.name ? m.name + ": " : "") + (m.mes || "")).join("\n").trim();
        if (recentMsgs) {
          chatContext = "\n==== RECENT CHAT HISTORY ====\n" + recentMsgs + "\n=============================\n";
        }
      } catch (e) {
      }
    }
    if ((!entries || entries.length === 0) && !chatContext) return "";
    const disabledContent = /* @__PURE__ */ new Set();
    for (const en of entries) {
      if (en.disable === true) {
        const c = (en.content || en.text || "").trim();
        if (c) disabledContent.add(c);
      }
    }
    const seen = /* @__PURE__ */ new Set();
    for (const en of entries) {
      const content = (en.content || en.text || "").trim();
      if (!content || seen.has(content)) continue;
      seen.add(content);
      if (disabledContent.has(content)) continue;
      const isConstant = en.constant === true || en.strategy && en.strategy.type === "constant" || en.position === "before_char";
      const entryName = en.comment || en.name || String(en.uid ?? en.id ?? "") || "Lorebook Entry";
      const formatted = `[${entryName}]
${content}`;
      if (isConstant) blue += formatted + "\n\n";
      else green += formatted + "\n\n";
    }
    let txt = blue + green;
    if (chatContext) txt += chatContext;
    const limit = SEC.wbLimit !== void 0 ? SEC.wbLimit : 2e4;
    return limit > 0 ? txt.slice(0, limit) : txt;
  } catch (e) {
    return "";
  }
}
function buildEventPrompt(worldbook) {
  let roll = Math.random() * 100;
  const tendency = roll < 60 ? "t\xEDch c\u1EF1c (h\u01B0\u1EDBng b\u1ED9i thu / t\u0103ng t\u1ED1c / th\u1EDDi ti\u1EBFt \u0111\u1EB9p)" : roll < 90 ? "trung t\xEDnh (k\u1EF3 quan / chuy\u1EC7n l\u1EA1 / chuy\u1EC7n v\u1EB7t kh\xF4ng quan tr\u1ECDng)" : "h\u01A1i ti\xEAu c\u1EF1c (gi\u1EA3m s\u1EA3n l\u01B0\u1EE3ng / ch\u1EADm l\u1EA1i, m\u1EE9c \u0111\u1ED9 ph\u1EA3i nh\u1EB9)";
  const themes = ["c\xF3 th\u1EC3 li\xEAn quan t\u1EDBi th\u1EDDi ti\u1EBFt", "c\xF3 th\u1EC3 li\xEAn quan t\u1EDBi \u0111\u1EA5t \u0111ai ho\u1EB7c ngu\u1ED3n n\u01B0\u1EDBc", "c\xF3 th\u1EC3 li\xEAn quan t\u1EDBi \u0111\u1ED9ng v\u1EADt nh\u1ECF ho\u1EB7c c\xF4n tr\xF9ng", "c\xF3 th\u1EC3 li\xEAn quan t\u1EDBi y\u1EBFu t\u1ED1 si\xEAu nhi\xEAn c\u1EE7a th\u1EBF gi\u1EDBi n\xE0y", "c\xF3 th\u1EC3 li\xEAn quan t\u1EDBi phong t\u1EE5c \u0111\u1ECBa ph\u01B0\u01A1ng ho\u1EB7c ch\u1EE3 phi\xEAn"];
  const theme = themes[Math.floor(Math.random() * themes.length)];
  const cropList = Object.entries(CROPS).filter(([id, c]) => !c.seedOnly).map(([id, c]) => c.name).join(", ");
  return ('B\u1EA1n l\xE0 "tr\xECnh t\u1EA1o s\u1EF1 ki\u1EC7n th\u1EBF gi\u1EDBi quan" cho m\u1ED9t game n\xF4ng tr\u1EA1i nh\u1ECF. Ng\u01B0\u1EDDi ch\u01A1i \u0111ang tr\u1ED3ng m\u1ED9t m\u1EA3nh v\u01B0\u1EDDn rau nh\u1ECF trong m\u1ED9t th\u1EBF gi\u1EDBi nh\u1EADp vai n\xE0o \u0111\xF3, v\xE0 b\u1EA1n s\u1EBD nh\u1EADn \u0111\u01B0\u1EE3c ph\u1EA7n tr\xEDch world book c\u1EE7a th\u1EBF gi\u1EDBi \u0111\xF3. H\xE3y t\u1EA1o 1 s\u1EF1 ki\u1EC7n nh\u1ECF ng\u1EABu nhi\xEAn x\u1EA3y ra \u1EDF v\u01B0\u1EDDn rau h\xF4m nay.\n\nQuy t\u1EAFc:\n1. S\u1EF1 ki\u1EC7n b\u1EAFt bu\u1ED9c mang h\u01B0\u01A1ng v\u1ECB c\u1EE7a th\u1EBF gi\u1EDBi n\xE0y \u2014\u2014 c\xE1c danh t\u1EEB v\u1EC1 th\u1EDDi ti\u1EBFt, s\u1EA3n v\u1EADt, y\u1EBFu t\u1ED1 si\xEAu nhi\xEAn\u2026 h\xE3y c\u1ED1 l\u1EA5y ch\u1EA5t li\u1EC7u t\u1EEB world book; nh\u01B0ng s\u1EF1 ki\u1EC7n ch\u1EC9 \u1EA3nh h\u01B0\u1EDFng vi\u1EC7c tr\u1ED3ng tr\u1ECDt, kh\xF4ng \u0111\u1EA9y c\u1ED1t truy\u1EC7n. C\xF3 th\u1EC3 nh\u1EAFc t\xEAn nh\xE2n v\u1EADt trong th\u1EBF gi\u1EDBi \u1EDF ph\u1EA7n flavor cho sinh \u0111\u1ED9ng, nh\u01B0ng tuy\u1EC7t \u0111\u1ED1i kh\xF4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 nh\xE2n v\u1EADt n\xF3i chuy\u1EC7n, h\xE0nh \u0111\u1ED9ng hay x\u1EA3y ra t\xECnh ti\u1EBFt n\xE0o.\n2. Xu h\u01B0\u1EDBng s\u1EF1 ki\u1EC7n h\xF4m nay: ' + tendency + "; ch\u1EE7 \u0111\u1EC1 tham kh\u1EA3o: " + theme + '.\n3. Tr\u01B0\u1EDDng hi\u1EC7u \u1EE9ng ch\u1EC9 \u0111\u01B0\u1EE3c d\xF9ng time_mult (0.7~1.1, h\u1EC7 s\u1ED1 nh\xE2n th\u1EDDi gian sinh tr\u01B0\u1EDFng) / mutate_on_fert (0~0.5), c\xF3 th\u1EC3 ch\u1EC9 d\xF9ng m\u1ED9t ho\u1EB7c b\u1ECF c\u1EA3 hai. **Tuy\u1EC7t \u0111\u1ED1i \u0111\u1EEBng vi\u1EBFt ng\u01B0\u1EE3c ng\u1EEF ngh\u0129a c\u1EE7a time_mult: <1 = m\u1ECDc nhanh h\u01A1n = s\u1EF1 ki\u1EC7n t\xEDch c\u1EF1c; >1 = m\u1ECDc ch\u1EADm h\u01A1n = s\u1EF1 ki\u1EC7n ti\xEAu c\u1EF1c**. Ngo\xE0i ra c\xF3 tr\u01B0\u1EDDng hi\u1EBFm double_yield:true (s\u1ED1 qu\u1EA3 thu ho\u1EA1ch h\xF4m nay \xD72, ph\xFAc l\u1EE3i cho d\xE2n may m\u1EAFn) \u2014\u2014 ch\u1EC9 n\xEAn xu\u1EA5t hi\u1EC7n kho\u1EA3ng 8% s\u1ED1 ng\xE0y, khi xu\u1EA5t hi\u1EC7n th\xEC s\u1EF1 ki\u1EC7n ph\u1EA3i vi\u1EBFt theo ch\u1EE7 \u0111\u1EC1 b\u1ED9i thu l\u1EDBn / k\u1EF3 t\xEDch, type b\u1EAFt bu\u1ED9c l\xE0 buff. C\xF3 th\u1EC3 th\xEAm favored_crop: \u0111i\u1EC1n m\u1ED9t t\xEAn c\xE2y tr\u1ED3ng (b\u1EAFt bu\u1ED9c l\u1EA5y t\u1EEB danh s\xE1ch c\xE2y tr\u1ED3ng), khi \u0111\xF3 hi\u1EC7u \u1EE9ng ch\u1EC9 t\xE1c d\u1EE5ng l\xEAn c\xE2y \u0111\xF3; kh\xF4ng \u0111i\u1EC1n th\xEC c\u1EA3 ru\u1ED9ng \u0111\u1EC1u ch\u1ECBu t\xE1c d\u1EE5ng.\n4. N\u1EBFu s\u1EF1 ki\u1EC7n l\xE0m c\xE2y b\u1ECB \u0111\u1ED9t bi\u1EBFn (mutate_on_fert>0, l\xE0 x\xE1c su\u1EA5t \u0111\u1ED9t bi\u1EBFn c\u01A1 b\u1EA3n c\u1EE7a c\xE2y ch\xEDn h\xF4m nay, b\xF3n ph\xE2n s\u1EBD khu\u1EBFch \u0111\u1EA1i), th\xEC cho th\xEAm: mutate_prefix (ti\u1EC1n t\u1ED1 \u0111\u1ED9t bi\u1EBFn mang h\u01B0\u01A1ng v\u1ECB c\u1EE7a th\u1EBF gi\u1EDBi n\xE0y, trong 5 ch\u1EEF, v\xED d\u1EE5 "linh ho\xE1", "si\xEAu to", "\u0103n th\u1ECBt", "c\u1EE9ng ng\u1EAFc", "ph\xE1t s\xE1ng") v\xE0 mutate_desc (m\u1ED9t \u0111\u1ED1i t\u01B0\u1EE3ng, **vi\u1EBFt ri\xEAng cho t\u1EEBng lo\u1EA1i c\xE2y \u0111\u01B0\u1EE3c li\u1EC7t k\xEA b\xEAn d\u01B0\u1EDBi** v\u1EC1 **hi\u1EC7u \u1EE9ng ho\u1EB7c c\xF4ng d\u1EE5ng** c\u1EE7a th\u1EC3 \u0111\u1ED9t bi\u1EBFn \u0111\xF3 trong th\u1EBF gi\u1EDBi n\xE0y, m\u1ED7i m\u1EE5c trong 20 ch\u1EEF \u2014\u2014 h\xE3y vi\u1EBFt "n\xF3 l\xE0m \u0111\u01B0\u1EE3c g\xEC / s\u1EBD g\xE2y ra chuy\u1EC7n g\xEC", b\u1EAFt bu\u1ED9c l\xE0 hi\u1EC7u \u1EE9ng **khi c\u1EA7m gi\u1EEF, \u0103n ho\u1EB7c s\u1EED d\u1EE5ng** (n\xF3 s\u1EBD \u0111\u01B0\u1EE3c mang kh\u1ECFi v\u01B0\u1EDDn rau \u0111\u1EC3 d\xF9ng trong c\xE2u chuy\u1EC7n, nghi\xEAm c\u1EA5m vi\u1EBFt ki\u1EC3u "khi thu ho\u1EA1ch / khi nh\u1ED5 l\xEAn" v\xEC r\u1EDDi v\u01B0\u1EDDn l\xE0 m\u1EA5t hi\u1EC7u l\u1EF1c), ph\u1EA3i m\u01A1 h\u1ED3 \u0111\u1EC3 ch\u1EEBa ch\u1ED7 t\u01B0\u1EDFng t\u01B0\u1EE3ng, nghi\xEAm c\u1EA5m m\xF4 t\u1EA3 ki\u1EC3u ngo\u1EA1i h\xECnh l\u1EA5p l\xE1nh; hi\u1EC7u \u1EE9ng c\u1EE7a c\xE1c c\xE2y kh\xE1c nhau ph\u1EA3i kh\xE1c nhau). Khi kh\xF4ng \u0111\u1ED9t bi\u1EBFn th\xEC b\u1ECF c\u1EA3 hai tr\u01B0\u1EDDng.\n   C\xE1c lo\u1EA1i c\xE2y hi\u1EC7n c\xF3 trong v\u01B0\u1EDDn n\xE0y (t\u1ED5ng c\u1ED9ng {{CROPCOUNT}} lo\u1EA1i, mutate_desc b\u1EAFt bu\u1ED9c ph\u1EE7 h\u1EBFt t\u1EEBng lo\u1EA1i m\u1ED9t, nghi\xEAm c\u1EA5m b\u1ECF s\xF3t hay ch\u1EC9 vi\u1EBFt v\xE0i lo\u1EA1i): {{CROPLIST}}\n5. flavor l\xE0 m\u1ED9t c\xE2u cho ng\u01B0\u1EDDi ch\u01A1i \u0111\u1ECDc, trong 30 ch\u1EEF, \u01B0u ti\xEAn h\u01B0\u01A1ng v\u1ECB, c\xF3 th\u1EC3 h\xF3m h\u1EC9nh.\n6. Ch\u1EC9 \u0111\u01B0\u1EE3c xu\u1EA5t \u0111\xFAng m\u1ED9t d\xF2ng JSON, c\u1EA5m xu\u1EA5t gi\u1EA3i th\xEDch, ti\u1EC1n t\u1ED1 h\u1EADu t\u1ED1 hay d\u1EA5u kh\u1ED1i code:\n{"name":"t\xEAn s\u1EF1 ki\u1EC7n 2~6 ch\u1EEF","type":"buff|debuff|neutral","time_mult":1,"double_yield":false,"mutate_on_fert":0,"mutate_prefix":"","mutate_desc":{"t\xEAn c\xE2y tr\u1ED3ng":"m\xF4 t\u1EA3 hi\u1EC7u \u1EE9ng"},"favored_crop":"","flavor":"m\u1ED9t c\xE2u"}\n\nV\xED d\u1EE5 \u0111\u1ECBnh d\u1EA1ng (l\u1EA5y t\u1EEB th\u1EBF gi\u1EDBi kh\xE1c, ch\u1EC9 \u0111\u1EC3 tham kh\u1EA3o \u0111\u1ECBnh d\u1EA1ng v\xE0 h\u01B0\u1EDBng h\u01B0\u01A1ng v\u1ECB, c\u1EA5m ch\xE9p nguy\xEAn):\n- {"name":"M\u01B0a linh","type":"buff","time_mult":0.8,"flavor":"Linh kh\xED \u0111\u1ECDng th\xE0nh m\u01B0a, m\u1EA7m rau l\xE9n v\u01B0\u01A1n \u0111\u1ED1t nghe r\xF5 ti\u1EBFng."}\n- {"name":"M\u01B0a axit","type":"debuff","time_mult":1.1,"mutate_on_fert":0.3,"mutate_prefix":"bi\u1EBFn ch\u1EE7ng","flavor":"M\u01B0a axit g\xF5 m\xE1i, rau \u1EC9u x\xECu m\u1ECDc ch\u1EADm, c\xE2y \u0111\xE3 b\xF3n ph\xE2n e l\xE0 m\u1ECDc m\xE9o m\u1EA5t."}\n- {"name":"R\xF2 r\u1EC9 ph\xE2n nano","type":"neutral","mutate_on_fert":0.4,"mutate_prefix":"si\xEAu to","mutate_desc":{"B\xED ng\xF4":"B\u1ED5 ra th\xEC kh\xF4ng gian b\xEAn trong r\u1ED9ng h\u01A1n b\xEAn ngo\xE0i","C\xE0 chua":"Ng\u01B0\u1EDDi \u0103n nh\u1EDB m\u1ECDi th\u1EE9 trong ch\u1ED1c l\xE1t"},"flavor":"C\xE2y b\xF3n ph\xE2n h\xF4m nay c\xF3 th\u1EC3 m\u1ECDc ra h\xECnh th\xF9 kh\xF3 tin."}\n' + (CS.userPrompt ? "\n[ctx.S\u1EDF th\xEDch tu\u1EF3 ch\u1EC9nh c\u1EE7a ng\u01B0\u1EDDi ch\u01A1i, \u01B0u ti\xEAn \u0111\xE1p \u1EE9ng, nh\u01B0ng kh\xF4ng \u0111\u01B0\u1EE3c v\u01B0\u1EE3t ra ngo\xE0i ph\u1EA1m vi c\xE1c tr\u01B0\u1EDDng]:\n" + CS.userPrompt + "\n" : "") + "\nTr\xEDch world book:\n" + (worldbook || "(Th\u1EBF gi\u1EDBi n\xE0y t\u1EA1m ch\u01B0a c\xF3 world book, h\xE3y t\u1EA1o m\u1ED9t s\u1EF1 ki\u1EC7n \u0111\u1ED3ng qu\xEA chung chung)")).replace("{{CROPLIST}}", cropList).replace("{{CROPCOUNT}}", String(cropList.split(", ").length));
}
function sanitizeEvent(o) {
  if (!o || typeof o !== "object") return null;
  const ev = {
    name: String(o.name || "Chuy\u1EC7n l\u1EA1").slice(0, 40),
    type: ["buff", "debuff", "neutral"].indexOf(o.type) >= 0 ? o.type : "neutral",
    time_mult: clampN(o.time_mult != null ? o.time_mult : o.growth_mult && o.growth_mult !== 1 ? 1 / o.growth_mult : 1, 0.7, 1.1, 1),
    // growth_mult cũ (tốc độ) tự động quy đổi (yield_mult đã nghỉ hưu, bỏ qua thẳng)
    double_yield: o.double_yield === true,
    // v1.1: phúc lợi dân may, số quả ×2 (kiểu boolean, nghiêm cấm số thập phân)
    mutate_on_fert: clampN(o.mutate_on_fert, 0, 0.5, 0),
    mutate_prefix: String(o.mutate_prefix || "\u0111\u1ED9t bi\u1EBFn").slice(0, 20),
    mutate_desc: o.mutate_desc && typeof o.mutate_desc === "object" ? Object.keys(o.mutate_desc).slice(0, 30).reduce((a, k) => {
      a[String(k).slice(0, 30)] = String(o.mutate_desc[k]).slice(0, 100);
      return a;
    }, {}) : typeof o.mutate_desc === "string" && o.mutate_desc ? { "*": String(o.mutate_desc).slice(0, 100) } : {},
    favored_crop: (() => {
      const f = String(o.favored_crop || "");
      return Object.values(CROPS).some((c) => c.name === f) ? f : "";
    })(),
    flavor: String(o.flavor || "")
  };
  return ev;
}
function extractJson(raw) {
  const s = raw.indexOf("{");
  if (s < 0) return null;
  let depth = 0, inStr = false, escd = false;
  for (let i = s; i < raw.length; i++) {
    const ch = raw[i];
    if (inStr) {
      if (escd) escd = false;
      else if (ch === "\\") escd = true;
      else if (ch === '"') inStr = false;
    } else {
      if (ch === '"') inStr = true;
      else if (ch === "{") depth++;
      else if (ch === "}") {
        depth--;
        if (depth === 0) return raw.slice(s, i + 1);
      }
    }
  }
  return null;
}
function fallbackEvent() {
  const w = weatherOf(gameDay());
  return sanitizeEvent(w === "M\u01B0a nh\u1ECF" ? { name: "M\u01B0a nh\u1ECF", type: "buff", time_mult: 0.9, flavor: "M\u01B0a nh\u1ECF r\u1ED3i, m\u1EA5y c\xE2y rau u\u1ED1ng n\u01B0\u1EDBc vui l\u1EAFm." } : w === "Nhi\u1EC1u m\xE2y" ? { name: "Nhi\u1EC1u m\xE2y", type: "neutral", flavor: "M\xE2y che b\u1EDBt n\u1EAFng, rau v\xE0 b\u1EA1n \u0111\u1EC1u thong th\u1EA3." } : { name: "N\u1EAFng", type: "neutral", flavor: "N\u1EAFng \u0111\u1EB9p l\u1EAFm, h\u1EE3p \u0111\u1EC3 tr\u1ED3ng g\xEC \u0111\xF3." });
}
var eventPending = false;
async function requestDayEvent(force) {
  if (eventPending || !CS.link) return;
  if (!force && todayEvent()) return;
  if (!SEC.url || !SEC.model) {
    applyDayEvent(fallbackEvent(), "fallback", 'Ch\u01B0a c\u1EA5u h\xECnh API ph\u1EE5 (\u0111i\u1EC1n xong trong c\xE0i \u0111\u1EB7t th\xEC nh\u1EDB b\u1EA5m "L\u01B0u c\u1EA5u h\xECnh")');
    return;
  }
  eventPending = true;
  renderBanner();
  try {
    const wb = await collectWorldbook();
    const prompt = buildEventPrompt(wb);
    console.log("====== [FARM DEBUG] PROMPT SENT TO LLM ======");
    console.log(prompt);
    console.log("===============================================");
    const reqBody = {
      model: SEC.model,
      messages: [
        { role: "system", content: prompt },
        { role: "user", content: "H\xE3y t\u1EA1o s\u1EF1 ki\u1EC7n v\u01B0\u1EDDn rau cho h\xF4m nay." }
      ],
      max_tokens: 2e3 + Object.keys(CROPS).length * 100
    };
    const ctrl = new AbortController();
    const timeoutId = window.setTimeout(() => ctrl.abort(), 9e4);
    const resPromise = fetch(SEC.url.replace(/\/+$/, "") + "/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json", ...SEC.key ? { Authorization: "Bearer " + SEC.key } : {} },
      body: JSON.stringify(reqBody),
      signal: ctrl.signal
    }).then((r) => r.json()).finally(() => window.clearTimeout(timeoutId));
    const data = await resPromise;
    if (data.error) throw new Error(data.error.message || JSON.stringify(data.error));
    const raw = data.choices && data.choices[0] && data.choices[0].message ? String(data.choices[0].message.content) : "";
    const jtxt = extractJson(raw);
    if (!jtxt) throw new Error(raw.trim() ? "Kh\xF4ng c\xF3 JSON, model tr\u1EA3 v\u1EC1: " + raw.trim().slice(0, 40) : "Model tr\u1EA3 v\u1EC1 r\u1ED7ng (c\xF3 th\u1EC3 max_tokens b\u1ECB ph\u1EA7n suy ngh\u0129 \u0103n h\u1EBFt / API kh\xF4ng xu\u1EA5t g\xEC)");
    const ev = sanitizeEvent(JSON.parse(jtxt));
    if (!ev) throw new Error("Tr\u01B0\u1EDDng JSON b\u1EA5t th\u01B0\u1EDDng");
    applyDayEvent(ev, "ai");
  } catch (e) {
    applyDayEvent(fallbackEvent(), "fallback", (e && e.message || String(e)).slice(0, 60));
  } finally {
    eventPending = false;
    renderBanner();
  }
}
var renderTimeout;
function openSandbox() {
  const html = `
    <div style="display:flex;gap:12px;flex-wrap:wrap">
      <div style="flex:1;min-width:260px;display:flex;flex-direction:column;gap:8px">
        <div class="shead" style="margin-top:0">T\u1EA1o Sprite b\u1EB1ng AI</div>
        <div class="note">Nh\u1EADp \xFD t\u01B0\u1EDFng \u0111\u1EC3 AI x\u1EBFp m\xE3 t\u1EF1 \u0111\u1ED9ng. D\xF9ng chung API \u1EDF ph\u1EA7n c\xE0i \u0111\u1EB7t.</div>
        <div style="display:flex;gap:8px">
          <select class="inp" id="sbPalette" style="padding:6px;flex:1">
            <option value="SPRITES">B\u1EA3ng m\xE0u N\xF4ng s\u1EA3n/V\u1EADt ph\u1EA9m (P)</option>
            <option value="PETS">B\u1EA3ng m\xE0u Th\xFA c\u01B0ng (PET_P)</option>
          </select>
          <select class="inp" id="sbSize" style="padding:6px;width:90px">
            <option value="16">16 x 16</option>
            <option value="24">24 x 24</option>
            <option value="32">32 x 32</option>
          </select>
        </div>
        <textarea class="inp" id="sbPrompt" placeholder="Nh\u1EADp \xFD t\u01B0\u1EDFng pixel art (g\xF5 ti\u1EBFng Vi\u1EC7t c\u0169ng \u0111\u01B0\u1EE3c)..." style="height:60px"></textarea>
        <div style="display:flex;gap:8px;align-items:center">
          <span class="buy" id="sbGenerate">\u2728 T\u1EA1o b\u1EB1ng AI</span>
          <span class="buy plain" id="sbPayloadBtn" style="display:none;padding:4px 8px;font-size:12px">\u{1F50D} Payload</span>
          <span id="sbStatus" style="font-size:12px;color:var(--accFg)"></span>
        </div>
        <textarea class="inp" id="sbPayloadOut" style="display:none;height:120px;font-size:11px;font-family:monospace;margin-top:4px" readonly></textarea>
        <div class="shead">M\xE3 Pixel</div>
        <div class="note">D\u1EA5u . l\xE0 trong su\u1ED1t. D\xE1n ho\u1EB7c s\u1EEDa m\u1EA3ng JSON v\xE0o \u0111\xE2y \u0111\u1EC3 xem th\u1EED tr\xEAn b\u1EA3ng v\u1EBD.</div>
        <textarea class="inp" id="sbCode" style="height:200px;font-family:monospace;white-space:pre"></textarea>
      </div>
      <div style="width:256px;display:flex;flex-direction:column;gap:8px">
        <div class="shead" style="margin-top:0">B\u1EA3n xem tr\u01B0\u1EDBc</div>
        <canvas id="sbCanvas" width="256" height="256" style="background: repeating-conic-gradient(#dfdfdf 0% 25%, #ffffff 0% 50%) 0 0 / 16px 16px; image-rendering:pixelated; border:2px solid var(--st-border-color); border-radius:4px; width:100%"></canvas>
      </div>
    </div>
  `;
  openModal("X\u01B0\u1EDFng Ch\u1EBF T\xE1c", html);
  const ta = $id("sbCode");
  const sel = $id("sbPalette");
  const sizeSel = $id("sbSize");
  const ctx2 = $id("sbCanvas").getContext("2d");
  function render() {
    const isPet = sel.value === "PETS";
    const palette = isPet ? PET_P : P;
    const size = parseInt(sizeSel.value) || 16;
    const canvasEl = $id("sbCanvas");
    if (canvasEl.width !== size) {
      canvasEl.width = size;
      canvasEl.height = size;
    }
    ctx2.clearRect(0, 0, size, size);
    const lines = ta.value.split("\n").map((l) => l.trim().replace(/['",\[\]]/g, "")).filter((l) => l.length > 0);
    for (let y = 0; y < Math.min(size, lines.length); y++) {
      const row = lines[y];
      for (let x = 0; x < Math.min(size, row.length); x++) {
        const char = row[x];
        if (char !== ".") {
          const color = palette[char];
          if (color && typeof color === "string") {
            ctx2.fillStyle = color;
            ctx2.fillRect(x, y, 1, 1);
          }
        }
      }
    }
  }
  function debouncedRender() {
    clearTimeout(renderTimeout);
    renderTimeout = setTimeout(render, 150);
  }
  ta.addEventListener("input", debouncedRender);
  sel.addEventListener("change", render);
  sizeSel.addEventListener("change", render);
  $id("sbPayloadBtn").addEventListener("click", () => {
    const out = $id("sbPayloadOut");
    out.style.display = out.style.display === "none" ? "block" : "none";
  });
  $id("sbGenerate").addEventListener("click", async () => {
    const p = $id("sbPrompt").value.trim();
    if (!p) return toast("Vui l\xF2ng nh\u1EADp \xFD t\u01B0\u1EDFng!");
    if (!SEC.url) return toast("Vui l\xF2ng c\u1EA5u h\xECnh API trong C\xE0i \u0111\u1EB7t tr\u01B0\u1EDBc!");
    $id("sbGenerate").style.pointerEvents = "none";
    $id("sbGenerate").style.opacity = "0.5";
    $id("sbStatus").textContent = "\u0110ang g\u1ECDi AI...";
    try {
      const isPet = sel.value === "PETS";
      const palette = isPet ? PET_P : P;
      const simpleColors = Object.entries(palette).filter((e) => typeof e[1] === "string");
      const paletteStr = simpleColors.map(([k, v]) => `${k}: ${v}`).join(", ");
      const size = parseInt(sizeSel.value) || 16;
      const sysPrompt = `B\u1EA1n l\xE0 m\u1ED9t chuy\xEAn gia thi\u1EBFt k\u1EBF Pixel Art (${size}x${size}). Nhi\u1EC7m v\u1EE5 c\u1EE7a b\u1EA1n l\xE0 v\u1EBD m\u1ED9t \u0111\u1ED3 v\u1EADt d\u1EF1a tr\xEAn y\xEAu c\u1EA7u, v\xE0 B\u1EAET BU\u1ED8C ch\u1EC9 \u0111\u01B0\u1EE3c d\xF9ng c\xE1c m\xE3 k\xFD t\u1EF1 trong B\u1EA3ng m\xE0u sau \u0111\xE2y.

B\u1EA2NG M\xC0U CHO PH\xC9P (K\xFD t\u1EF1: M\xE3 m\xE0u Hex):
${paletteStr}

H\u01AF\u1EDANG D\u1EAAN T\u01AF DUY (B\u1EAFt bu\u1ED9c ph\u1EA3i c\xF3 th\u1EBB <thinking> tr\u01B0\u1EDBc khi xu\u1EA5t m\xE3):
\u0110\u1EC3 v\u1EBD pixel art ho\xE0n h\u1EA3o, s\u1EAFc n\xE9t v\xE0 kh\xF4ng b\u1ECB m\xE9o l\u1EC7ch, h\xE3y tu\xE2n th\u1EE7 nghi\xEAm ng\u1EB7t c\xE1c b\u01B0\u1EDBc sau:
1. Ph\xE2n t\xEDch B\u1ED1 c\u1EE5c & H\xECnh kh\u1ED1i: L\u1EF1a ch\u1ECDn g\xF3c \u0111\u1ED9 \u0111\u1EB7t v\u1EADt th\u1EC3 (vd: v\u0169 kh\xED n\xEAn \u0111\u1EB7t ch\xE9o). N\u1EBFu v\u1EBD v\u1EADt th\u1EC3 tr\xF2n/c\xE2n x\u1EE9ng, h\xE3y t\xEDnh to\xE1n sao cho n\u1EEDa tr\xE1i v\xE0 n\u1EEDa ph\u1EA3i kh\u1EDBp nhau. Nh\u1EDB r\u1EB1ng khung ${size}x${size} kh\xF4ng c\xF3 t\xE2m 1 pixel (t\xE2m n\u1EB1m gi\u1EEFa c\u1ED9t ${size / 2 - 1} v\xE0 ${size / 2}).
2. Quy ho\u1EA1ch M\xE0u s\u1EAFc (Palette): Ch\u1ECDn k\xFD t\u1EF1 l\xE0m m\xE0u Vi\u1EC1n (b\u1EAFt bu\u1ED9c bao quanh v\u1EADt th\u1EC3), m\xE0u T\u1ED1i (Shadow) cho h\u01B0\u1EDBng khu\u1EA5t s\xE1ng, m\xE0u ctx.S\xE1ng (Highlight) cho h\u01B0\u1EDBng \u0111\xF3n s\xE1ng, v\xE0 m\xE0u N\u1EC1n (Base). TUY\u1EC6T \u0110\u1ED0I KH\xD4NG ch\u1EBF ra k\xFD t\u1EF1 ngo\xE0i B\u1EA3ng m\xE0u.
3. H\xECnh d\xE1ng (Shape & Texture): Tr\xE1nh l\xE0m c\xE1c kh\u1ED1i m\xE0u b\u1ECB vu\xF4ng v\u1EE9c, th\u1EB3ng \u0111u\u1ED9t. ctx.S\u1EED d\u1EE5ng c\xE1c n\xE9t l\u01B0\u1EE3n \u0111\u1EC3 t\u1EA1o h\xECnh d\xE1ng t\u1EF1 nhi\xEAn.
4. \xC1nh x\u1EA1 & \u0110\u1EBEM K\xDD T\u1EF0 (R\u1EA5t quan tr\u1ECDng): Khi ph\xE1c th\u1EA3o t\u1EEBng d\xF2ng (t\u1EEB d\xF2ng 0 \u0111\u1EBFn ${size - 1}), B\u1EA0N PH\u1EA2I \u0110\u1EBEM CH\xCDNH X\xC1C s\u1ED1 l\u01B0\u1EE3ng k\xFD t\u1EF1. 
 - Khung canvas l\xE0 ${size}x${size}. Do \u0111\xF3, m\u1ED9t d\xF2ng CH\u1EC8 \u0110\u01AF\u1EE2C PH\xC9P d\xE0i \u0111\xFAng ${size} k\xFD t\u1EF1.
 - V\xED d\u1EE5 m\u1ED9t d\xF2ng tr\u1ED1ng h\u1EE3p l\u1EC7: "${".".repeat(size)}"
 - N\u1EBFu b\u1EA1n t\u1EA1o ra d\xF2ng c\xF3 ${size + 1} ho\u1EB7c ${size - 1} k\xFD t\u1EF1, h\xECnh s\u1EBD b\u1ECB c\u1EAFt x\xE9n v\xE0 m\xE9o m\xF3.

QUY T\u1EAEC \u0110\u1EA6U RA B\u1EAET BU\u1ED8C:
- Sau khi \u0111\xF3ng th\u1EBB </thinking>, CH\u1EC8 \u0110\u01AF\u1EE2C XU\u1EA4T 1 kh\u1ED1i m\xE3 \`\`\`json ch\u1EE9a m\u1EA3ng g\u1ED3m \u0110\xDANG ${size} chu\u1ED7i.
- KI\u1EC2M TRA L\u1EA0I: M\u1ED7i chu\u1ED7i \u0111\u1EA1i di\u1EC7n cho 1 h\xE0ng v\xE0 PH\u1EA2I D\xC0I CH\xCDNH X\xC1C ${size} K\xDD T\u1EF0. Kh\xF4ng h\u01A1n kh\xF4ng k\xE9m!
- D\xF9ng d\u1EA5u ch\u1EA5m '.' cho pixel trong su\u1ED1t.
- TUY\u1EC6T \u0110\u1ED0I kh\xF4ng d\xF9ng k\xFD t\u1EF1 l\u1EA1 ngo\xE0i d\u1EA5u '.' v\xE0 c\xE1c k\xFD t\u1EF1 B\u1EA3ng m\xE0u.`;
      const reqBody = {
        model: SEC.model,
        messages: [
          { role: "system", content: sysPrompt },
          { role: "user", content: "V\u1EBD: " + p }
        ]
      };
      $id("sbPayloadOut").value = JSON.stringify(reqBody, null, 2);
      $id("sbPayloadBtn").style.display = "inline-block";
      const res = await fetch(SEC.url.replace(/\/+$/, "") + "/chat/completions", {
        method: "POST",
        headers: { "Content-Type": "application/json", ...SEC.key ? { Authorization: "Bearer " + SEC.key } : {} },
        body: JSON.stringify(reqBody)
      });
      if (!res.ok) throw new Error("HTTP " + res.status);
      const data = await res.json();
      const content = data.choices?.[0]?.message?.content || "";
      let jsonStr = "";
      const codeMatch = content.match(/```(?:json)?\s*(\[[\s\S]*?\])\s*```/i);
      if (codeMatch) {
        jsonStr = codeMatch[1];
      } else {
        const arrMatch = content.match(/\[\s*"(?:[^"\\]|\\.)*"(?:\s*,\s*"(?:[^"\\]|\\.)*")*\s*\]/);
        jsonStr = arrMatch ? arrMatch[0] : (content.match(/\[[\s\S]*?\]/) || [""])[0];
      }
      if (jsonStr) {
        ta.value = jsonStr.trim();
        render();
        $id("sbStatus").textContent = "Ho\xE0n t\u1EA5t!";
      } else {
        throw new Error("AI kh\xF4ng tr\u1EA3 v\u1EC1 m\u1EA3ng JSON");
      }
    } catch (e) {
      console.error(e);
      $id("sbStatus").textContent = "L\u1ED7i!";
      toast("L\u1ED7i AI: " + e.message);
    } finally {
      $id("sbGenerate").style.pointerEvents = "";
      $id("sbGenerate").style.opacity = "1";
    }
  });
}
function applyDayEvent(ev, source, reason) {
  const d = gameDay();
  ctx.S.dayEvent = { day: d, at: now(), who: charName(), ev, source, reason: reason || "" };
  if (ev.time_mult !== 1) {
    eachPage((plots) => plots.forEach((p) => {
      const c = p.crop;
      if (!c || now() >= c.matureAt || c.evDay === d) return;
      if (ev.favored_crop && CROPS[c.id].name !== ev.favored_crop) return;
      c.matureAt = now() + Math.round((c.matureAt - now()) * ev.time_mult);
      c.evDay = d;
    }));
  }
  save();
  renderStatus();
  renderPlots();
}
async function testSecApi() {
  if (!SEC.url || !SEC.model) return toast("H\xE3y \u0111i\u1EC1n \u0111\u1ECBa ch\u1EC9 API v\xE0 t\xEAn model tr\u01B0\u1EDBc");
  toast("\u0110ang ki\u1EC3m tra k\u1EBFt n\u1ED1i\u2026");
  try {
    const reqBody = {
      model: SEC.model,
      messages: [{ role: "user", content: "Ch\u1EC9 tr\u1EA3 l\u1EDDi \u0111\xFAng hai ch\u1EEF: C\xF3 m\u1EB7t" }],
      max_tokens: 16
    };
    const resPromise = fetch(SEC.url.replace(/\/+$/, "") + "/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json", ...SEC.key ? { Authorization: "Bearer " + SEC.key } : {} },
      body: JSON.stringify(reqBody)
    }).then((r) => r.json());
    const data = await Promise.race([
      resPromise,
      new Promise((_, rej) => window.setTimeout(() => rej(new Error("Qu\xE1 th\u1EDDi gian ch\u1EDD (20s)")), 2e4))
    ]);
    if (data.error) throw new Error(data.error.message || JSON.stringify(data.error));
    const raw = data.choices && data.choices[0] && data.choices[0].message ? String(data.choices[0].message.content) : "";
    toast("K\u1EBFt n\u1ED1i th\xE0nh c\xF4ng: " + raw.trim().slice(0, 20));
  } catch (e) {
    toast("K\u1EBFt n\u1ED1i th\u1EA5t b\u1EA1i: " + (e && e.message || e));
  }
}
async function fetchModelList() {
  const url = $id("secUrl").value.trim(), key = $id("secKey").value.trim();
  const drop = $id("modelDrop");
  if (!url) return toast("H\xE3y \u0111i\u1EC1n \u0111\u1ECBa ch\u1EC9 API tr\u01B0\u1EDBc");
  if (drop.style.display !== "none") {
    drop.style.display = "none";
    return;
  }
  toast("\u0110ang l\u1EA5y danh s\xE1ch model\u2026");
  try {
    const ctrl = new AbortController();
    const to = window.setTimeout(() => ctrl.abort(), 15e3);
    const r = await fetch(url.replace(/\/+$/, "") + "/models", { headers: key ? { Authorization: "Bearer " + key } : {}, signal: ctrl.signal });
    window.clearTimeout(to);
    if (!r.ok) throw new Error("HTTP " + r.status);
    const d = await r.json();
    const ids = (d && (d.data || d.models) || []).map((m) => m && (m.id || m.model || m.name) || "").filter(Boolean);
    if (!ids.length) throw new Error("API kh\xF4ng tr\u1EA3 v\u1EC1 danh s\xE1ch model");
    drop.innerHTML = ids.map((id) => `<span data-mpick="${esc(id)}">${esc(id)}</span>`).join("");
    drop.style.display = "flex";
    drop.querySelectorAll("[data-mpick]").forEach((el) => el.addEventListener("click", () => {
      $id("secModel").value = el.dataset.mpick;
      drop.style.display = "none";
      toast("\u0110\xE3 ch\u1ECDn: " + el.dataset.mpick + ", nh\u1EDB b\u1EA5m l\u01B0u c\u1EA5u h\xECnh");
    }));
  } catch (e) {
    toast("L\u1EA5y danh s\xE1ch th\u1EA5t b\u1EA1i: " + (e && e.message || e));
  }
}
var INJECT_ID = "gachapon_only_summary";
function setInjection(text) {
  try {
    const ctx2 = window.SillyTavern?.getContext?.() || {};
    if (ctx2.setExtensionPrompt) ctx2.setExtensionPrompt(INJECT_ID, text || "", 1, 4);
  } catch (e) {
  }
}
function updateInjection() {
  if (!CS.link || !CS.story) {
    setInjection("");
    return;
  }
  const takeoutNoteStr = function() {
    setTakeoutNote((takeoutNote || []).filter((t) => now() < t.until));
    if (!takeoutNote.length) return "";
    return `\u3010H\xC0NH \u0110\u1ED8NG V\u1EEAA X\u1EA2Y RA\u3011
- V\u1EADt ph\u1EA9m \u0111\u01B0\u1EE3c l\u1EA5y ra d\xF9ng: ${takeoutNote.map((t) => t.txt).join(", ")}
(Ng\u01B0\u1EDDi ch\u01A1i v\u1EEBa l\u1EA5y c\xE1c v\u1EADt ph\u1EA9m n\xE0y ra kh\u1ECFi Balo \u0111\u1EC3 t\u01B0\u01A1ng t\xE1c trong c\u1ED1t truy\u1EC7n. H\xE3y ti\u1EBFp nh\u1EADn t\u1EF1 nhi\xEAn; ph\u1EA7n trong ngo\u1EB7c l\xE0 hi\u1EC7u \u1EE9ng/m\xF4 t\u1EA3 c\u1EE7a v\u1EADt ph\u1EA9m, h\xE3y l\u1EA5y \u0111\xF3 l\xE0m chu\u1EA9n v\xE0 mi\xEAu t\u1EA3 v\xE0o c\u1ED1t truy\u1EC7n)`;
  }();
  if (!takeoutNoteStr) {
    setInjection("");
    return;
  }
  const promptText = `\u3010H\u1EC7 th\u1ED1ng Gachapon & Kho \u0111\u1ED3\u3011
Ng\u01B0\u1EDDi ch\u01A1i c\xF3 m\u1ED9t h\u1EC7 th\u1ED1ng Gacha quay v\u1EADt ph\u1EA9m, t\u1ED3n t\u1EA1i song song v\u1EDBi c\u1ED1t truy\u1EC7n. Nh\xE2n v\u1EADt/AI KH\xD4NG \u0111\u01B0\u1EE3c bi\u1EBFt tr\u01B0\u1EDBc nh\u1EEFng g\xEC ng\u01B0\u1EDDi ch\u01A1i \u0111ang c\xF3 trong Balo (\u0111\xF3 l\xE0 b\xED m\u1EADt c\u1EE7a ng\u01B0\u1EDDi ch\u01A1i) \u2014 CH\u1EC8 khi m\u1EE5c H\xC0NH \u0110\u1ED8NG V\u1EEAA X\u1EA2Y RA d\u01B0\u1EDBi \u0111\xE2y xu\u1EA5t hi\u1EC7n th\xEC nh\xE2n v\u1EADt m\u1EDBi \u0111\u01B0\u1EE3c bi\u1EBFt v\xE0 ph\u1EA3n \u1EE9ng t\u1EF1 nhi\xEAn v\u1EDBi \u0111\xFAng v\u1EADt ph\u1EA9m \u0111\xF3, kh\xF4ng suy \u0111o\xE1n th\xEAm nh\u1EEFng v\u1EADt ph\u1EA9m kh\xE1c ngo\xE0i danh s\xE1ch n\xE0y.

${takeoutNoteStr}

* H\u01B0\u1EDBng d\u1EABn cho AI: \u0110\u1EEANG t\u1EF1 \xFD nh\u1EAFc t\u1EDBi, m\xF4 t\u1EA3, hay cho nh\xE2n v\u1EADt d\xF9ng b\u1EA5t k\u1EF3 v\u1EADt ph\u1EA9m Gacha n\xE0o ngo\xE0i danh s\xE1ch "v\u1EEBa x\u1EA3y ra" \u1EDF tr\xEAn. \u0110\u1EEANG bi\u1EBFn n\xF3 th\xE0nh m\u1EA1ch ch\xEDnh c\u1EE7a truy\u1EC7n tr\u1EEB phi ng\u01B0\u1EDDi ch\u01A1i ch\u1EE7 \u0111\u1ED9ng nh\u1EAFc t\u1EDBi.`;
  setInjection(promptText);
}
var heartbeat;
function initEvents() {
  try {
    const chatChangedEvent = ctx.event_types?.CHAT_CHANGED;
    if (ctx.eventSource?.on && chatChangedEvent) {
      const onChatChanged = () => {
        loadCharState();
        loadTakenLog();
        updateInjection();
      };
      ctx.eventSource.on(chatChangedEvent, onChatChanged);
      disposers.push(() => {
        try {
          if (ctx.eventSource.removeListener) ctx.eventSource.removeListener(chatChangedEvent, onChatChanged);
          else if (ctx.eventSource.off) ctx.eventSource.off(chatChangedEvent, onChatChanged);
        } catch (e) {
        }
      });
    }
  } catch (e) {
  }
}
var takenLog = [];
function loadTakenLog() {
  try {
    const key = "taken_" + charName();
    takenLog = (ctx.extension_settings[extensionName] || {})[key] || [];
  } catch (e) {
    takenLog = [];
  }
}
function pushTakenLog(entry) {
  try {
    const key = "taken_" + charName();
    if (!ctx.extension_settings[extensionName]) ctx.extension_settings[extensionName] = {};
    const arr = ctx.extension_settings[extensionName][key] || [];
    arr.unshift(entry);
    if (arr.length > 200) arr.length = 200;
    ctx.extension_settings[extensionName][key] = arr;
    takenLog = arr;
    if (ctx.saveSettingsDebounced) ctx.saveSettingsDebounced();
  } catch (e) {
  }
}
function removeTakenLogAt(idx) {
  try {
    const key = "taken_" + charName();
    const arr = (ctx.extension_settings[extensionName] || {})[key] || [];
    arr.splice(idx, 1);
    ctx.extension_settings[extensionName][key] = arr;
    takenLog = arr;
    if (ctx.saveSettingsDebounced) ctx.saveSettingsDebounced();
  } catch (e) {
  }
}
loadTakenLog();

// src/state.js
var now = () => Date.now();
var emptyPlots = () => {
  const a = [];
  for (let i = 0; i < 24; i++) a.push({ crop: null });
  return a;
};
function freshState() {
  return {
    version: 1,
    playerId: typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : "p-" + Date.now().toString(36) + "-" + Math.random().toString(36).substr(2, 9),
    coins: TEST_MODE ? 9999 : 999,
    totalSales: 0,
    unlockedBlocks: 2,
    plots: emptyPlots(),
    seeds: { douya: 4, mystery: 1 },
    ferts: {},
    bag: {},
    petPoke: {},
    // Quà khởi đầu: 4 giá đỗ + 1 hạt giống bí ẩn (popup dạy chơi hộp mù)
    pets: ["slime"],
    passes: {},
    petsOut: ["slime"],
    jobCfg: {},
    petFind: {},
    // Tặng slime xanh lúc mở đầu (thực hiện phương án #9)
    page: 1,
    plots2: emptyPlots(),
    plots3: emptyPlots(),
    unlockedBlocks2: 1,
    unlockedBlocks3: 1,
    // v0.8: ba trang (vé vào trang 2/3 tặng kèm ô đất đầu tiên)
    day0: now(),
    orb: { fx: 0.94, fy: 0.6 },
    win: null
  };
}
ctx.S = null;
var blockPrice = (bi) => BLOCK_PRICE_PG[ctx.S.page][bi];
function loadState() {
  if (!ctx.extension_settings[extensionName]) {
    ctx.extension_settings[extensionName] = {};
  }
  const g = ctx.extension_settings[extensionName] || {};
  ctx.S = g[NS] && g[NS].version === 1 ? g[NS] : freshState();
  if (!ctx.S.playerId) ctx.S.playerId = typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : "p-" + Date.now().toString(36) + "-" + Math.random().toString(36).substr(2, 9);
  if (!ctx.S.petPoke) ctx.S.petPoke = {};
  if (!ctx.S.mutDesc) ctx.S.mutDesc = {};
  if (!ctx.S.passes) ctx.S.passes = {};
  if (!ctx.S.pets) ctx.S.pets = ["slime", "octo"];
  if (!ctx.S.petsOut) ctx.S.petsOut = ctx.S.pets.slice(0, 6);
  if (!ctx.S.jobCfg) ctx.S.jobCfg = {};
  if (!ctx.S.petFind) ctx.S.petFind = {};
  if (!ctx.S.theme) ctx.S.theme = "sakura";
  if (!ctx.S.page) ctx.S.page = 1;
  if (ctx.S.dragPet === void 0) ctx.S.dragPet = false;
  ctx.S.view = "farm";
  const petRenameMap = { "bunny": "jellyfish", "slimeNight": "peach_soda", "batBlob": "mystery_blob" };
  if (ctx.S.pets) ctx.S.pets = ctx.S.pets.map((p) => petRenameMap[p] || p);
  if (ctx.S.petsOut) ctx.S.petsOut = ctx.S.petsOut.map((p) => petRenameMap[p] || p);
  if (petRenameMap[ctx.S.dragPet]) ctx.S.dragPet = petRenameMap[ctx.S.dragPet];
  Object.keys(ctx.S.jobCfg || {}).forEach((k) => {
    if (petRenameMap[k]) {
      ctx.S.jobCfg[petRenameMap[k]] = ctx.S.jobCfg[k];
      delete ctx.S.jobCfg[k];
    }
  });
  Object.keys(ctx.S.bag || {}).forEach((k) => {
    const base = k.split("@")[0];
    if (base === "mysbG" || base === "mysbW" || base === "mysbM" || base === "moonberry") {
      const nk = k.replace(base, "strawberry");
      ctx.S.bag[nk] = (ctx.S.bag[nk] || 0) + ctx.S.bag[k];
      delete ctx.S.bag[k];
    }
  });
  [ctx.S.plots, ctx.S.plots2, ctx.S.plots3].forEach((arr) => (arr || []).forEach((p) => {
    if (p.crop && (p.crop.id === "mysbG" || p.crop.id === "mysbW" || p.crop.id === "mysbM" || p.crop.id === "moonberry")) p.crop.id = "strawberry";
  }));
  if (ctx.S.ferts) {
    if (ctx.S.ferts["f1"]) {
      ctx.S.ferts["compost"] = (ctx.S.ferts["compost"] || 0) + ctx.S.ferts["f1"];
      delete ctx.S.ferts["f1"];
    }
    if (ctx.S.ferts["f2"]) {
      ctx.S.ferts["shiny"] = (ctx.S.ferts["shiny"] || 0) + ctx.S.ferts["f2"];
      delete ctx.S.ferts["f2"];
    }
  }
  if (!ctx.S.witch) ctx.S.witch = { nextAt: now(), leaveAt: 0, missed: 0, order: null };
  if (!ctx.S.shards) ctx.S.shards = { prism: 0, star: 0, legend: 0 };
  else if (ctx.S.shards.legend === void 0) ctx.S.shards.legend = 0;
  if (!ctx.S.tickets) ctx.S.tickets = { norm: 0, spec: 0, super: 0 };
  if (!ctx.S.gachaPity) ctx.S.gachaPity = { norm: 0, spec: 0 };
  if (!ctx.S.uniques) ctx.S.uniques = {};
  if (!ctx.S.dungeonBest) ctx.S.dungeonBest = { wave: 0, gold: 0 };
  Object.keys(ctx.S.uniques || {}).forEach((k) => {
    const item = ctx.S.uniques[k];
    if (item && item.sp && item.spriteMap) {
      registerDynamicSprite(item.sp, item.spriteMap);
    }
  });
  if (!ctx.S.plots2) ctx.S.plots2 = emptyPlots();
  if (!ctx.S.plots3) ctx.S.plots3 = emptyPlots();
  if (ctx.S.unlockedBlocks2 == null) ctx.S.unlockedBlocks2 = 1;
  if (ctx.S.unlockedBlocks3 == null) ctx.S.unlockedBlocks3 = 1;
  [ctx.S.plots, ctx.S.plots2, ctx.S.plots3].forEach((arr) => arr.forEach((p) => {
    const c = p.crop;
    if (!c) return;
    if (!c.fertUsed) c.fertUsed = {};
    if (CROPS[c.id]?.regrow && c.left == null) c.left = REGROW_MAX;
  }));
}
var pagePlots = (pg) => pg === 2 ? ctx.S.plots2 : pg === 3 ? ctx.S.plots3 : ctx.S.plots;
var curPlots = () => pagePlots(ctx.S.page);
var curBlocks = () => ctx.S.page === 2 ? ctx.S.unlockedBlocks2 : ctx.S.page === 3 ? ctx.S.unlockedBlocks3 : ctx.S.unlockedBlocks;
var addBlock = () => {
  if (ctx.S.page === 2) ctx.S.unlockedBlocks2++;
  else if (ctx.S.page === 3) ctx.S.unlockedBlocks3++;
  else ctx.S.unlockedBlocks++;
};
var eachPage = (fn) => [1, 2, 3].forEach((pg) => fn(pagePlots(pg), pg));
var testMode = false;
function setTestMode(v) {
  testMode = v;
}
ctx.saveTimer = null;
function save(immediate) {
  if (testMode) return;
  if (ctx.saveTimer) {
    clearTimeout(ctx.saveTimer);
    ctx.saveTimer = null;
  }
  const doSave = () => {
    if (!ctx.extension_settings[extensionName]) ctx.extension_settings[extensionName] = {};
    ctx.extension_settings[extensionName][NS] = ctx.S;
    if (ctx.saveSettingsDebounced) ctx.saveSettingsDebounced();
    try {
      updateInjection();
    } catch (e) {
    }
  };
  if (immediate) doSave();
  else ctx.saveTimer = setTimeout(doSave, 500);
}

// src/destroy.js
var destroyed = false;
function resetDestroyed() {
  destroyed = false;
}
function destroy() {
  if (destroyed) return;
  destroyed = true;
  try {
    if (tick) window.clearInterval(tick);
  } catch (e) {
  }
  try {
    window.clearInterval(heartbeat);
  } catch (e) {
  }
  try {
    if (ctx.saveTimer) {
      clearTimeout(ctx.saveTimer);
      save(true);
    }
  } catch (e) {
  }
  try {
    if (toastTimer) window.clearTimeout(toastTimer);
  } catch (e) {
  }
  try {
    if (resizeTimer) window.clearTimeout(resizeTimer);
  } catch (e) {
  }
  try {
    if (renderTimeout) window.clearTimeout(renderTimeout);
  } catch (e) {
  }
  while (disposers.length) {
    try {
      disposers.pop()();
    } catch (e) {
    }
  }
  try {
    setInjection("");
  } catch (e) {
  }
  try {
    root.remove();
  } catch (e) {
  }
  try {
    if (extMenuBtn) extMenuBtn.remove();
  } catch (e) {
  }
  try {
    delete window[RUNTIME_KEY];
  } catch (e) {
  }
}
var extMenuBtn = null;
function setupExtButton() {
  if (extMenuBtn) {
    try {
      extMenuBtn.remove();
    } catch (e) {
    }
  }
  const extMenu = document.querySelector("#extensionsMenu");
  if (!extMenu) {
    window.setTimeout(setupExtButton, 500);
    return;
  }
  extMenuBtn = document.createElement("div");
  extMenuBtn.id = "farm-wand-btn";
  extMenuBtn.className = "list-group-item flex-container flexGap5 interactable";
  extMenuBtn.tabIndex = 0;
  extMenuBtn.innerHTML = '<div class="fa-fw fa-solid fa-dice extensionsMenuExtensionButton"></div> Gachapon';
  extMenuBtn.style.cursor = "pointer";
  extMenuBtn.addEventListener("click", toggleWin);
  extMenu.appendChild(extMenuBtn);
}
function setupSlashCommand() {
  (async function() {
    try {
      let scp, SlashCommand;
      try {
        scp = (await import("../../../slash-commands/SlashCommandParser.js")).SlashCommandParser;
        SlashCommand = (await import("../../../slash-commands/SlashCommand.js")).SlashCommand;
      } catch (err) {
      }
      scp = scp || window.SlashCommandParser || globalThis.SlashCommandParser;
      SlashCommand = SlashCommand || window.SlashCommand || globalThis.SlashCommand;
      if (scp && SlashCommand && SlashCommand.fromProps) {
        scp.addCommandObject(SlashCommand.fromProps({
          name: "farm",
          callback: async () => {
            toggleWin();
            return "";
          },
          helpString: "M\u1EDF/\u0110\xF3ng giao di\u1EC7n N\xF4ng tr\u1EA1i (SillyTavern Farm)"
        }));
      }
    } catch (e) {
      console.error("[Farm] L\u1ED7i \u0111\u0103ng k\xFD l\u1EC7nh /farm:", e);
    }
  })();
}

// src/main.js
function initFarm() {
  try {
    window[RUNTIME_KEY]?.destroy?.();
  } catch (e) {
  }
  resetDestroyed();
  document.getElementById("gachapon-only-root")?.remove();
  loadState();
  initUI();
  applyTheme();
  initOrb();
  initWindows();
  initShop();
  loadCharState();
  loadTakenLog();
  initEvents();
  updateInjection();
  setupExtButton();
  setupSlashCommand();
  const api = { destroy };
  window[RUNTIME_KEY] = api;
  window.FarmAll = all_exports;
  const diag = [];
  if (ctx.S) diag.push("S");
  if (ctx.ui) diag.push("ui");
  console.log("[Gacha] ST Context k\u1EBFt n\u1ED1i th\xE0nh c\xF4ng \u2014 " + diag.join(", "));
  console.log("Gacha extension initialized");
}
async function init() {
  if (window[RUNTIME_KEY]) return;
  try {
    let context = null;
    try {
      context = window.SillyTavern?.getContext?.();
    } catch (_) {
    }
    if (!context) try {
      context = globalThis.SillyTavern?.getContext?.();
    } catch (_) {
    }
    if (!context) context = {};
    let ext_set = context.extensionSettings || context.extension_settings || window.extension_settings || {};
    let save_set = context.saveSettingsDebounced || window.saveSettingsDebounced || (() => {
    });
    let ev_src = context.eventSource || window.eventSource;
    let ev_types = context.event_types || context.eventTypes || window.event_types;
    setExtensionContext({
      extension_settings: ext_set,
      saveSettingsDebounced: save_set,
      eventSource: ev_src,
      event_types: ev_types
    });
  } catch (e) {
    console.error("[Gacha] L\u1ED7i khi k\u1EBFt n\u1ED1i ST Context:", e);
    let ext_set = window.extension_settings || {};
    let save_set = window.saveSettingsDebounced || (() => {
    });
    let ev_src = window.eventSource;
    let ev_types = window.event_types;
    setExtensionContext({
      extension_settings: ext_set,
      saveSettingsDebounced: save_set,
      eventSource: ev_src,
      event_types: ev_types
    });
  }
  initFarm();
  warmUpCache(CROPS);
  setTimeout(() => {
    if (!document.getElementById("gachapon-only-root")) {
      console.warn("[Gacha] Failsafe: Giao di\u1EC7n ch\u01B0a \u0111\u01B0\u1EE3c n\u1EA1p. Th\u1EED kh\u1EDFi \u0111\u1ED9ng l\u1EA1i extension...");
      try {
        initFarm();
        if (!document.getElementById("gachapon-only-root")) {
          console.error("[Gacha] Failsafe: Kh\u1EDFi \u0111\u1ED9ng l\u1EA1i th\u1EA5t b\u1EA1i, DOM root v\u1EABn kh\xF4ng t\u1ED3n t\u1EA1i. Vui l\xF2ng ki\u1EC3m tra qu\xE1 tr\xECnh n\u1EA1p extension c\u1EE7a SillyTavern.");
        } else {
          console.log("[Gacha] Failsafe: Kh\u1EDFi \u0111\u1ED9ng l\u1EA1i th\xE0nh c\xF4ng.");
        }
      } catch (err) {
        console.error("[Gacha] Failsafe: Kh\u1EDFi \u0111\u1ED9ng l\u1EA1i g\u1EB7p l\u1ED7i nghi\xEAm tr\u1ECDng! Chi ti\u1EBFt l\u1ED7i:", err);
      }
    }
  }, 1e4);
}
var jQuery = (
  /** @type {any} */
  window.jQuery
);
if (typeof jQuery === "function") {
  jQuery(async () => {
    if (!window[RUNTIME_KEY]) await init();
  });
} else {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      if (!window[RUNTIME_KEY]) init();
    });
  } else {
    if (!window[RUNTIME_KEY]) init();
  }
}
