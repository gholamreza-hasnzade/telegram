import { FC } from "react";

// * import interface
import { IDrawerMolecule } from "@components/molecules/drawer/drawer.molecule.interface";

// * import style
import { DrawerMoleculeStyle as S } from "@components/molecules/drawer/drawer.molecule.style";
import { FlexboxAtom } from "@components/atoms";

export const DrawerMolecule: FC<IDrawerMolecule> = ({
  /* children, */
  isOpen,
  handleDrawerToggle,
  drawerwidth,
  variant = "temporary",
}) => {
  return (
    <S.Drawer
      variant={variant}
      open={isOpen}
      drawerwidth={drawerwidth}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        display: { xs: "block", sm: "none" },
      }}
    >
      <FlexboxAtom flexDirection="column" width={100}>
        <div>1</div>
        <div>1</div>
        <div>1</div>
      </FlexboxAtom>
    </S.Drawer>
  );
};
