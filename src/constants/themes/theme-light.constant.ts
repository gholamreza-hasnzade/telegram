import { IThemeLight } from "@constants/themes/theme.constant.interface"

const BASE_COLORS = {
    WHITE: '#ffffff',
    BLACK: '#000000',
};

const SYSTEM_THEME_COLORS = {
    PRIMARY: "#5a8fbb",
    SECONDARY: "#229ED9",
    ERROR: "#d32f2f",
    WARNING: "#ed6c02",
    INFO: "#0288d1",
    SUCCESS: "#2e7d32"
}


const TYPOGRAPHY_COLORS = {
    TEXT_WHITE: '#ffffff',
    TEXT_PRIMARY: "#5a8fbb",
    TEXT_SECONDARY: "#229ED9",
    TEXT: "#b9def8",
    TITLE: "#b9def8"
}

export const THEME_LIGHT: IThemeLight = {
    ...BASE_COLORS,
    ...SYSTEM_THEME_COLORS,
    ...TYPOGRAPHY_COLORS,
};