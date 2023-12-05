// * import tools
import { FC } from "react";

// * import style
import { AvatarAtomStyle as S } from "@components/atoms/avatar/avatar.atom.style";

// * import interface
import { IAvatarAtom } from "@components/atoms/avatar/avatar.atom.interface";

export const ImageAvatar: FC<IAvatarAtom> = ({
    alt,
    src,
    width,
    height,
    variant,
}) => {
    return (
        <S.ImageAvatar
            alt={alt}
            src={src}
            sx={{ width: width, height: height }}
            variant={variant}
        />
    );
};
