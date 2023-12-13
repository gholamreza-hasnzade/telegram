// * Import Tools
import styled from "@emotion/styled";
import { Box as BoxMUI, Drawer as DrawerMUI } from "@mui/material";

// * import interface
import { IDrawerMolecule } from "@components/molecules/drawer/drawer.molecule.interface";

const Drawer = styled(DrawerMUI)<IDrawerMolecule>`
  & .MuiDrawer-paper {
    box-sizing: border-box;
    width: ${({ drawerwidth }) => (drawerwidth ? `${drawerwidth}px` : "250px")};
    display: flex;
  }
`;
const AppBarDrawer = styled(BoxMUI)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 20%;
  background-color: ${({ theme }) => theme.PRIMARY};
  padding: 16px;
  gap: 16px;
`;
const AppBarDrawerRow = styled(BoxMUI)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
 /*  &:not(:last-child) {
    margin-bottom: 16px;
  } */
`;
export const DrawerMoleculeStyle = {
  Drawer,
  AppBarDrawer,
  AppBarDrawerRow,
};
