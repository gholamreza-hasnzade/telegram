// * Import Interfaces

export interface IDrawerMolecule {
    drawerwidth?: number;
    handleDrawerToggle?: () => void,
    isOpen?: boolean;
    variant?: 'permanent' | 'persistent' | 'temporary'
}

export interface IDrawerMoleculeStyle {
    drawerwidth?: number;
}
