// * import tools
import { FC } from "react";

// *  import style
import { TypographyAtomStyle as S } from "@components/atoms/typography/typography.atom.style";

// * import interface
import { ITypographyAtom } from "@components/atoms/typography/typography.atom.interface";
export const TypographyAtom: FC<ITypographyAtom> = ({
  fontWeight,
  fontSize,
  children,
  color,
}) => {
  return (
    <S.TypographyAtom color={color} fontWeight={fontWeight} fontSize={fontSize}>
      {children}
    </S.TypographyAtom>
  );
};
