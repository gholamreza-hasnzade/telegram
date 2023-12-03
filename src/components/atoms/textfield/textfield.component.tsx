// * import tools
import { FC } from "react";

// * import style
import { TextFieldComponentStyle as S } from "@components/atoms/textfield/textfield.component.style";

// * import interfaces
import { ITextField } from "@components/atoms/textfield/textfield.component.interfaces";

export const TextFieldComponent: FC<ITextField> = ({
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
