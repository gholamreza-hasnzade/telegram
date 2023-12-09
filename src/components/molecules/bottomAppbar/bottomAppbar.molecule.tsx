import { FC } from "react";

// * import interface
import { IBottomAppbarMolecule } from "@components/molecules/bottomAppbar/bottomAppbar.molecule.interface";

// * import style
import { BottomAppbarMoleculeStyle as S } from "@components/molecules/bottomAppbar/bottomAppbar.molecule.style";


export const BottomAppbarMolecule: FC<IBottomAppbarMolecule> = ({
    children,
}) => {
    return <S.BottomAppbar>{children}</S.BottomAppbar>;
};
