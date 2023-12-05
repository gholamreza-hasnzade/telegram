// * import interface
import { SvgIconProps } from '@mui/material';


export interface ISvgIconAtom extends SvgIconProps {
    fontSize?: "small" | "medium" | "large";
    color?: | 'inherit'
    | 'action'
    | 'disabled'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning';
}