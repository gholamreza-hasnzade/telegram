import { FC } from "react";

// * import interface
import { IFlexBox } from "@components/atoms/flexbox/flexbox.atom.interface";

// * import style
import { FlexboxAtomStyle as S } from "@components/atoms/flexbox/flexbox.atom.style";

export const FlexboxAtom: FC<IFlexBox> = ({
    children,
    alignItems,
    flexDirection,
    justifyContent,
    gap = 0,
    width,
}) => {
    return (
        <S.FlexBox
            alignItems={alignItems}
            flexDirection={flexDirection}
            justifyContent={justifyContent}
            gap={gap}
            width={width}
        >
            {children}
        </S.FlexBox>
    );
};
