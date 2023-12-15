// * Import Tools
import styled from "@emotion/styled";
import { Box as BoxMUI, Button, Drawer as DrawerMUI } from "@mui/material";

// * import interface
import { IDrawerMolecule } from "@components/molecules/drawer/drawer.molecule.interface";
import { ButtonAtom } from "@components/atoms";

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
  /* height: 20%; */
  background-color: ${({ theme }) => theme.PRIMARY};
  padding: 16px;
  gap: 16px;
`;
const AppBarDrawerRow = styled(BoxMUI)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;
const AppBarProfileRow = styled(BoxMUI)`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
  padding: 8px 0;
  border-bottom: 1px solid #f6f6f6;
`;

export const DrawerMoleculeStyle = {
  Drawer,
  AppBarDrawer,
  AppBarDrawerRow,
  AppBarProfileRow,
};
