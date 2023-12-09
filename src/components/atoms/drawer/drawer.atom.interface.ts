// * Import Interfaces
import { ReactNode } from "react";

export interface IDrawer {
    children?: ReactNode;
    drawerwidth?: number;
    handleDrawerToggle?: () => void,
    isOpen?: boolean;
    variant?: 'permanent' | 'persistent' | 'temporary'
}

export interface IDrawerStyle {
    drawerwidth?: number;
}