import { FC, Fragment } from "react";

// * import style
import { TopAppbarMoleculeStyle as S } from "@components/molecules/topAppbar/topAppbar.molecule.style";

// * import interface
import { ITopAppbarMolecule } from "@components/molecules/topAppbar/topAppbar.molecule.interface";

// * import components/atoms
import {
  FlexboxAtom,
  IconAtom,
  IconButtonAtom,
  ImageAvatar,
  TypographyAtom,
} from "@components/atoms";

// * import components/molecules
import { DrawerMolecule } from "@components/molecules/drawer/drawer.molecule";

// * import assets
import { SearchIcon, VerifiedUserIcon, MenuIcon } from "@assets/muiIcons";
import { Box, Button } from "@mui/material";

export const TopAppbarMolecule: FC<ITopAppbarMolecule> = ({
  children,
  isOpen,
  handleDrawerToggle,
}) => {
  return (
    <Fragment>
      <S.TopAppbar>
        <FlexboxAtom
          alignItems="center"
          flexDirection="row"
          justifyContent="space-between"
        >
          <FlexboxAtom flexDirection="row" alignItems="center" gap={12}>
            <IconButtonAtom size="small" onClick={handleDrawerToggle}>
              <IconAtom component={MenuIcon} />
            </IconButtonAtom>
            <ImageAvatar height={25} width={25} />
            <TypographyAtom>Telegram</TypographyAtom>
          </FlexboxAtom>
          <FlexboxAtom flexDirection="row" alignItems="center" gap={12}>
            <IconButtonAtom
              size="small"
              color="primary"
              ariaLabel={"Search Icon"}
            >
              <IconAtom component={VerifiedUserIcon} />
            </IconButtonAtom>
            <IconButtonAtom
              size="small"
              color="primary.main"
              ariaLabel={"Search Icon"}
            >
              <IconAtom component={SearchIcon} />
            </IconButtonAtom>
          </FlexboxAtom>
        </FlexboxAtom>
      </S.TopAppbar>

      <DrawerMolecule
        drawerwidth={310}
        isOpen={isOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
    </Fragment>
  );
};
