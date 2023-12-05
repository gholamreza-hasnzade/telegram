// * import tools
import { FC } from "react";

// * import style
import { ButtonAtomStyle as S } from "@components/atoms/button/button.atom.style";

// * interfaces
import { IButtonAtom } from "@components/atoms/button/button.atom.interface";

export const ButtonAtom: FC<IButtonAtom> = ({
    id,
    children,
    variant,
    startIcon,
    endIcon,
    onClick,
}) => {
    return (
        <S.Button
            id={id}
            variant={variant}
            onClick={onClick}
            startIcon={startIcon}
            endIcon={endIcon}
        >
            {children}
        </S.Button>
    );
};
