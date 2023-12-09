import { FC } from "react";

// * import style
import { TopAppbarMoleculeStyle as S } from "@components/molecules/topAppbar/topAppbar.molecule.style";

// * import interface
import { ITopAppbarMolecule } from "@components/molecules/topAppbar/topAppbar.molecule.interface";

export const TopAppbarMolecule: FC<ITopAppbarMolecule> = ({ children }) => {
    return <S.Appbar>{children}</S.Appbar>;
};
