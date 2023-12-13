// * Import Interfaces
/* import { ReactNode } from "react"; */

export interface IDrawerMolecule {
    /* children?: ReactNode; */
    drawerwidth?: number;
    handleDrawerToggle?: () => void,
    isOpen?: boolean;
    variant?: 'permanent' | 'persistent' | 'temporary'
}

export interface IDrawerMoleculeStyle {
    drawerwidth?: number;
}