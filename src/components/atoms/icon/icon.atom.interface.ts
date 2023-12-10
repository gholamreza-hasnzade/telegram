// * import interface
import { SvgIconProps, SvgIconPropsColorOverrides, } from '@mui/material';
import { OverridableStringUnion } from '@mui/types';


export interface ISvgIconAtom extends SvgIconProps {
    fontSize?: "small" | "medium" | "large";
    color?: OverridableStringUnion<
        | 'inherit'
        | 'action'
        | 'disabled'
        | 'primary'
        | 'secondary'
        | 'error'
        | 'info'
        | 'success'
        | 'warning',
        SvgIconPropsColorOverrides
    >;
}

