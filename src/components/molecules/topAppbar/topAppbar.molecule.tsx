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

import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import { DrawerMolecule } from "../drawer/drawer.molecule";

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
                    <FlexboxAtom
                        flexDirection="row"
                        alignItems="center"
                        gap={12}
                    >
                        <IconButtonAtom
                            size="small"
                            color="white"
                            onClick={handleDrawerToggle}
                        >
                            <IconAtom component={MenuIcon} />
                        </IconButtonAtom>
                        <ImageAvatar height={25} width={25} />
                        <TypographyAtom>Waiting for network ...</TypographyAtom>
                    </FlexboxAtom>
                    <FlexboxAtom
                        flexDirection="row"
                        alignItems="center"
                        gap={12}
                    >
                        <IconButtonAtom
                            size="small"
                            color="white"
                            ariaLabel={"Search Icon"}
                        >
                            <IconAtom component={VerifiedUserIcon} />
                        </IconButtonAtom>
                        <IconButtonAtom
                            size="small"
                            color="white"
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
