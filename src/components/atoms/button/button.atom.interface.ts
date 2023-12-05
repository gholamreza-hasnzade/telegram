// * Import Interfaces
import { ReactNode } from 'react';

export interface IButtonAtom {
    id?: string
    children?: ReactNode,
    variant?: "text" | "outlined" | "contained",
    onClick?: () => void,
    startIcon?: string,
    endIcon?: string
}