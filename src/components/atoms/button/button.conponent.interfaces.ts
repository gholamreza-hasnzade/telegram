// * Import Interfaces
import { ReactNode } from 'react';

export interface IButton {
    children?: ReactNode,
    variant?: "text" | "outlined" | "contained",
    onClick?: () => void
}