import { FC } from "react";

// * import interface
import { IDrawer } from "@components/molecules/drawer/drawer.molecule.interface";

// * import style
import { DrawerMoleculeStyle as S } from "@components/molecules/drawer/drawer.molecule.style";

export const DrawerAtom: FC<IDrawer> = ({
    children,
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
            {children}
        </S.Drawer>
    );
};
