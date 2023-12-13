import { ITheme } from "@constants/themes/theme.constant.interface"
import { rgba } from "polished";

const BASE_COLORS = {
    WHITE: '#ffffff',
    BLACK: '#000000',
};


const SYSTEM_THEME_COLORS = {
    PRIMARY: "#0088CC",
    SECONDARY: "#179CDE",
   /*  SUCCESS: '#10B981', */
}


const SYSTEM_THEME_COLORS_PALE = {
    PRIMARY_PALE: rgba(SYSTEM_THEME_COLORS.PRIMARY, 0.2),

    /* SUCCESS_PALE: rgba(SYSTEM_THEME_COLORS.SUCCESS, 0.2), */
}

const TYPOGRAPHY_COLORS = {
    TEXT_PRIMARY: "#0088CC",
    TEXT_SECONDARY: "#179CDE",
    TEXT: "#333333",
    TITLE: "#8C8C8C"
}






export const THEME_LIGHT: ITheme = {
    ...BASE_COLORS,
    ...SYSTEM_THEME_COLORS,
    ...TYPOGRAPHY_COLORS,
    ...SYSTEM_THEME_COLORS_PALE
};