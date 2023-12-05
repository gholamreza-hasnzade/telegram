export interface ITextFieldAtom {
    id?: string;
    name?: string;
    label?: string;
    placeholder?: string;
    onChange?: () => void;
    variant?: "filled" | "outlined" | "standard";
    type?: React.InputHTMLAttributes<unknown>["type"];
    disabled?: boolean;
}
