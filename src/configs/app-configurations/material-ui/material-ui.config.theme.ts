// * Import Tools
import { createTheme, Theme } from '@mui/material/styles';

// * Import Constants
import { THEME_LIGHT } from '@constants/themes';


 const { palette: { augmentColor } } = createTheme();
const createColor = (mainColor: string) => augmentColor({ color: { main: mainColor } })

export const MATERIAL_UI_THEME_CONFIG: Theme = createTheme({
    direction: 'ltr',
    typography: {
        fontFamily: 'Roboto'
    },
    
});