// * Import Interfaces
import { ReactNode } from 'react';

export interface IButton {
    id?: string
    children?: ReactNode,
    variant?: "text" | "outlined" | "contained",
    onClick?: () => void
}