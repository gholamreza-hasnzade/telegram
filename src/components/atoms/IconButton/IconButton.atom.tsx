// * import tools
import { FC } from "react";

// * import mui
import IconButton from "@mui/material/IconButton";

// * import interface
import { IIconButtonAtom } from "@components/atoms/IconButton/iconButton.atom.interface";

export const IconButtonAtom: FC<IIconButtonAtom> = ({
    children,
    ariaLabel,
    size,
    onClick,
    color,
}) => {
    return (
        <IconButton
            color={color}
            aria-label={ariaLabel}
            size={size}
            onClick={onClick}
        >
            {children}
        </IconButton>
    );
};
