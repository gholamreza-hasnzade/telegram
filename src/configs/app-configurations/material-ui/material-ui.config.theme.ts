// * Import Tools
import { createTheme, Theme } from '@mui/material/styles';

// * Import Constants
import { THEME_LIGHT } from '@constants/themes';


const { palette: { augmentColor } } = createTheme();

const createColor = (mainColor: string) => augmentColor({ color: { main: mainColor } })
import { blue } from '@mui/material/colors';


/* export const MATERIAL_UI_THEME_CONFIG: Theme = createTheme({
    direction: 'ltr',
    typography: {
        fontFamily: 'Roboto',
        button: {
            fontSize: '1rem',
        }

    },
    palette: {
        

        primary: {
            main: createColor(THEME_LIGHT.PRIMARY) ,
            light: '#64B5F6', // Lighter shade of the primary color
            dark: '#000', // Darker shade of the primary color
          },
          secondary: {
            main: '#FF4081',
            light: '#FF79B0', // Lighter shade of the secondary color
            dark: '#C60055', // Darker shade of the secondary color
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
        }
    },

});
 */

declare module '@mui/material/styles' {
    interface PaletteColor {
        darker?: string;
    }

    interface SimplePaletteColorOptions {
        darker?: string;
        light?: string;
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
        primary: {
            light: createColor(THEME_LIGHT.PRIMARY),

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
        }
    },
});
