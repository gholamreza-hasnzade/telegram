// * import tools
import { FC } from "react";

// * import style
import { ButtonComponentStyle as S } from "@components/atoms/button/button.conponent.style";

// * interfaces
import { IButton } from "@components/atoms/button/button.conponent.interfaces";

export const ButtonConponent: FC<IButton> = ({
    id,
    children,
    variant,
    onClick,
}) => {
    return (
        <S.Button id={id} variant={variant} onClick={onClick}>
            {children}
        </S.Button>
    );
};
