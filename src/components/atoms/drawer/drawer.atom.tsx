import { FC } from "react";

// * import interface
import { IDrawer } from "@components/atoms/drawer/drawer.atom.interface";

// * import style
import { DrawerAtomStyle as S } from "@components/atoms/drawer/drawer.atom.style";

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
