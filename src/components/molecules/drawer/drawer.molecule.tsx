import { FC } from "react";
import { useTheme } from "@emotion/react";

// * import interface
import { IDrawerMolecule } from "@components/molecules/drawer/drawer.molecule.interface";

// * import style
import { DrawerMoleculeStyle as S } from "@components/molecules/drawer/drawer.molecule.style";
import {
  ButtonAtom,
  FlexboxAtom,
  IconAtom,
  IconButtonAtom,
  ImageAvatar,
  TypographyAtom,
} from "@components/atoms";
import {
  ModeNightIcon,
  KeyboardArrowDownIcon,
  AddOutlinedIcon,
  PeopleOutlineIcon,
  PersonOutlineIcon,PhoneOutlinedIcon,
  AccessibilityNewOutlinedIcon,
  BookmarkBorderOutlinedIcon,
  SettingsOutlinedIcon,
  PersonAddAltIcon,
  HelpOutlineIcon
} from "@assets/muiIcons";

export const DrawerMolecule: FC<IDrawerMolecule> = ({
  /* children, */
  isOpen,
  handleDrawerToggle,
  drawerwidth,
  variant = "temporary",
}) => {
  const { TEXT_WHITE, TITLE, TEXT_BLACK } = useTheme();
  
  return (
    <S.Drawer
      variant={variant}
      open={isOpen}
      drawerwidth={drawerwidth}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
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
              <TypographyAtom
                color={`${TEXT_WHITE}`}
                fontWeight={600}
                fontSize={14}
              >
                Gholamreza.hassanzadeh
              </TypographyAtom>
              <TypographyAtom color={`${TITLE}`} fontWeight={500} fontSize={12}>
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
        <S.AppBarProfileRow>
          <ButtonAtom variant="text">
            <ImageAvatar height={30} width={30} />
            <TypographyAtom
              color={`${TEXT_BLACK}`}
              fontWeight={400}
              fontSize={10}
            >
              Gholamreza.hassanzadeh
            </TypographyAtom>
          </ButtonAtom>

          <ButtonAtom variant="text">
            <IconAtom component={AddOutlinedIcon} fontSize="medium" />
            <TypographyAtom
              color={`${TEXT_BLACK}`}
              fontWeight={400}
              fontSize={10}
            >
              Add Account
            </TypographyAtom>
          </ButtonAtom>
        </S.AppBarProfileRow>

        <S.AppBarProfileRow>
          <ButtonAtom variant="text">
            <IconAtom component={PeopleOutlineIcon} fontSize="medium" />
            <TypographyAtom
              color={`${TEXT_BLACK}`}
              fontWeight={400}
              fontSize={10}
            >
              New Group
            </TypographyAtom>
          </ButtonAtom>
          <ButtonAtom variant="text">
            <IconAtom component={PersonOutlineIcon} fontSize="medium" />
            <TypographyAtom
              color={`${TEXT_BLACK}`}
              fontWeight={400}
              fontSize={10}
            >
              Contacts
            </TypographyAtom>
          </ButtonAtom>
          <ButtonAtom variant="text">
            <IconAtom component={PhoneOutlinedIcon} fontSize="medium" />
            <TypographyAtom
              color={`${TEXT_BLACK}`}
              fontWeight={400}
              fontSize={10}
            >
              Calls
            </TypographyAtom>
          </ButtonAtom>
          <ButtonAtom variant="text">
            <IconAtom component={AccessibilityNewOutlinedIcon} fontSize="medium" />
            <TypographyAtom
              color={`${TEXT_BLACK}`}
              fontWeight={400}
              fontSize={10}
            >
              People Nearby
            </TypographyAtom>
          </ButtonAtom>
          <ButtonAtom variant="text">
            <IconAtom component={BookmarkBorderOutlinedIcon} fontSize="medium" />
            <TypographyAtom
              color={`${TEXT_BLACK}`}
              fontWeight={400}
              fontSize={10}
            >
              Saved Messages
            </TypographyAtom>
          </ButtonAtom>

          <ButtonAtom variant="text">
            <IconAtom component={SettingsOutlinedIcon} fontSize="medium" />
            <TypographyAtom
              color={`${TEXT_BLACK}`}
              fontWeight={400}
              fontSize={10}
            >
              Setting
            </TypographyAtom>
          </ButtonAtom>
        </S.AppBarProfileRow>
        <ButtonAtom variant="text">
            <IconAtom component={PersonAddAltIcon} fontSize="medium" />
            <TypographyAtom
              color={`${TEXT_BLACK}`}
              fontWeight={400}
              fontSize={10}
            >
              Invite Friends
            </TypographyAtom>
          </ButtonAtom>
          <ButtonAtom variant="text">
            <IconAtom component={HelpOutlineIcon} fontSize="medium" />
            <TypographyAtom
              color={`${TEXT_BLACK}`}
              fontWeight={400}
              fontSize={10}
            >
              Tekegram Fearures
            </TypographyAtom>
          </ButtonAtom>
      </FlexboxAtom>
    </S.Drawer>
  );
};
