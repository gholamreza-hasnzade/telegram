import { FC } from "react";

// * import interface
import { IDrawerMolecule } from "@components/molecules/drawer/drawer.molecule.interface";

// * import style
import { DrawerMoleculeStyle as S } from "@components/molecules/drawer/drawer.molecule.style";
import {
  FlexboxAtom,
  IconAtom,
  IconButtonAtom,
  ImageAvatar,
  TypographyAtom,
} from "@components/atoms";
import { ModeNightIcon, KeyboardArrowDownIcon } from "@assets/muiIcons";

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
      <FlexboxAtom flexDirection="column" width={100} height={100}>
        <S.AppBarDrawer>
          <S.AppBarDrawerRow>
            <ImageAvatar height={50} width={50} />
            <IconButtonAtom
              size="small"
              color="inherit"
              ariaLabel={"ModeNight"}
            >
              <IconAtom component={ModeNightIcon} />
            </IconButtonAtom>
          </S.AppBarDrawerRow>
          <S.AppBarDrawerRow>
            <FlexboxAtom flexDirection="column" width={80}>
              <TypographyAtom  fontWeight={500}>
                Gholamreza.hassanzadeh
              </TypographyAtom>
              <TypographyAtom fontWeight={100} fontSize={12}>
                +98 936 978 0985
              </TypographyAtom>
            </FlexboxAtom>
            <IconButtonAtom
              size="medium"
              color="inherit"
              ariaLabel={"KeyboardArrow"}
            >
              <IconAtom component={KeyboardArrowDownIcon} fontSize="medium" />
            </IconButtonAtom>
          </S.AppBarDrawerRow>
        </S.AppBarDrawer>
        <div>1</div>
        <div>1</div>
      </FlexboxAtom>
    </S.Drawer>
  );
};
