import { FC } from "react";

// * import style
import { AppbarMoleculeStyle as S } from "@components/molecules/appbar/appbar.molecule.style";

// * import interface
import { IAppBar } from "@components/molecules/appbar/appbar.molecule.interface";

export const AppbarMolecule: FC<IAppBar> = ({ children }) => {
    return <S.Appbar>{children}</S.Appbar>;
};
