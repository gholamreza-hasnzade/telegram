// * import tools
import { FC } from "react";

// * import style
import { TextFieldAtomStyle as S } from "@components/atoms/textfield/textfield.atom.style";

// * import interfaces
import { ITextFieldAtom } from "@components/atoms/textfield/textfield.atom.interface";

export const TextFieldAtom: FC<ITextFieldAtom> = ({
    id,
    name,
    label,
    placeholder,
    onChange,
    variant,
    type,
    disabled,
}) => {
    
    return (
        <S.TextField
            id={id}
            name={name}
            label={label}
            placeholder={placeholder}
            onChange={onChange}
            variant={variant}
            type={type}
            disabled={disabled}
        />
    );
};
