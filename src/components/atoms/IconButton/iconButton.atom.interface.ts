// * Import Interfaces
import { ReactNode } from 'react';

export interface IIconButtonAtom {
    children?: ReactNode;
    ariaLabel?: string;
    size?: "small" | "medium" | "large";
    onClick?: () => void
}