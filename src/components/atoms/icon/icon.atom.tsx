// * import tool
import { FC } from "react";

// * import interface
import { ISvgIconAtom } from "@components/atoms/icon/icon.atom.interface";

// * import style
import { IconAtomStyle as S } from "@components/atoms/icon/icon.atom.style";

export const IconAtom: FC<ISvgIconAtom> = (props) => {
    const { fontSize, color } = props;
    

    return (
        <S.IconAtom {...props} fontSize={fontSize} color={color}></S.IconAtom>
    );
};
