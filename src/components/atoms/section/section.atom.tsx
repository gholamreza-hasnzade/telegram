// * import tools
import { FC } from "react";

// * import interface
import { ISection } from "@components/atoms/section/section.atom.interface";

// * import style
import { SectionAtomStyle as S } from "@components/atoms/section/section.atom.style";

export const SectionAtom: FC<ISection> = ({ children, height }) => {
    return <S.Section height={height}>{children}</S.Section>;
};
