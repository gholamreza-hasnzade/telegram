// * Import Tools
import styled from "@emotion/styled";
import { Drawer as DrawerMUI } from "@mui/material";

// * import interface
import { IDrawerStyle } from "@components/atoms/drawer/drawer.atom.interface";

const Drawer = styled(DrawerMUI)<IDrawerStyle>`
    & .MuiDrawer-paper {
        box-sizing: border-box;
        width: ${({ drawerwidth }) => drawerwidth ? `${drawerwidth}px` : "250px"};
    }
`;
export const DrawerAtomStyle = {
    Drawer,
};
