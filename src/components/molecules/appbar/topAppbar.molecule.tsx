import { FC } from "react";

// * import style
import { TopAppbarMoleculeStyle as S } from "@components/molecules/appbar/topAppbar.molecule.style";

// * import interface
import { ITopAppBar } from "@components/molecules/appbar/topAppbar.molecule.interface";

export const TopAppbarMolecule: FC<ITopAppBar> = ({ children }) => {
    return <S.Appbar>{children}</S.Appbar>;
};
