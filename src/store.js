export const NS = "gachapon_only_save";
export const extensionName = "sillytavern-gacha-only";
export const RUNTIME_KEY = '__GACHAPON_ONLY_EXT__';

export const ctx = {
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

export const setExtensionContext = (params) => {
    Object.assign(ctx, params);
};
