// * Import Tools
import { createTheme, Theme } from '@mui/material/styles';

// * Import Constants
import { THEME_LIGHT } from '@constants/themes';


const { palette: { augmentColor } } = createTheme();

const createColor = (mainColor: string) => augmentColor({ color: { main: mainColor } })




declare module '@mui/material/styles' {
    interface PaletteColor {
        darker?: string;
    }

    interface SimplePaletteColorOptions {
        darker?: string;
    }
}

export const MATERIAL_UI_THEME_CONFIG: Theme = createTheme({
    direction: 'ltr',
    typography: {
        fontFamily: 'Roboto',
        button: {
            fontSize: '1rem',
        }

    },
    palette: {
        primary: createColor(THEME_LIGHT.PRIMARY),
        white: createColor(THEME_LIGHT.WHITE)
    },
    /*  palette: {
         violet: {
             main: createColor(THEME_LIGHT.PRIMARY),
             
         },
     }, */
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
        }
    },

});