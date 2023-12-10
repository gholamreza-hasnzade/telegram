// * import tools
import { FC } from "react";

// *  import style
import { TypographyAtomStyle as S } from "@components/atoms/typography/typography.atom.style";

// * import interface
import { ITypographyAtom } from "@components/atoms/typography/typography.atom.interface";
export const TypographyAtom: FC<ITypographyAtom> = ({ fontSize, children }) => {
    return <S.TypographyAtom fontSize={fontSize}>{children}</S.TypographyAtom>;
};
