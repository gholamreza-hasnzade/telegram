// * Import Interfaces
import { ReactNode } from 'react';
import { OverridableStringUnion } from '@mui/types';
import { IconButtonPropsColorOverrides } from '@mui/material';

export interface IIconButtonAtom {
    children?: ReactNode;
    ariaLabel?: string;
    size?: "small" | "medium" | "large";
    onClick?: () => void;
    color?: OverridableStringUnion<
        'inherit' | 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning',
        IconButtonPropsColorOverrides
    >;
}