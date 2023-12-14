// * Import Tools
import { createTheme, Theme } from '@mui/material/styles';

// * Import Constants
import { THEME_LIGHT } from '@constants/themes';


const { palette: { augmentColor } } = createTheme();

const createColor = (mainColor: string) => augmentColor({ color: { main: mainColor } })



export const MATERIAL_UI_THEME_LIGHT_CONFIG: Theme = createTheme({
    direction: 'ltr',
    typography: {
        fontFamily: 'Roboto',
        button: {
            fontSize: '1rem',
        }

    },
    palette: {
        primary: {
            main: createColor(THEME_LIGHT.PRIMARY).main,
            light: createColor(THEME_LIGHT.PRIMARY).light,
            dark: createColor(THEME_LIGHT.PRIMARY).dark,
            contrastText: createColor(THEME_LIGHT.PRIMARY).dark,
        },
        secondary: {
            main: createColor(THEME_LIGHT.SECONDARY).main,
            light: createColor(THEME_LIGHT.SECONDARY).light,
            dark: createColor(THEME_LIGHT.SECONDARY).dark,
            contrastText: createColor(THEME_LIGHT.SECONDARY).dark,
        },

    },

    components: {
        // Name of the component
        MuiButton: {
            styleOverrides: {
                root: {
                    fontSize: '1rem',
                },
            },
        },
        MuiTextField: {
            styleOverrides: {

                root: {

                    fontFamily: "Roboto",
                    width: "100%",
                }
            }
        },
        MuiIconButton: {
            styleOverrides: {
                colorPrimary: {
                    color: createColor(THEME_LIGHT.PRIMARY).main
                },
                colorInherit: {
                    color: createColor(THEME_LIGHT.WHITE).main
                },
            }
        },
    },
});
