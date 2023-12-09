import { FC } from "react";

// * import style
import { AppbarAtomStyle as S } from "@components/molecules/appbar/appbar.atom.style";

// * import interface
import { IAppBar } from "@components/molecules/appbar/appbar.atom.interface";

export const AppbarAtom: FC<IAppBar> = ({ children }) => {
    return <S.Appbar>{children}</S.Appbar>;
};
