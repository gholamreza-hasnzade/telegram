// * Import Interfaces
import { ReactNode } from 'react';



export interface IFlexBox {
    children?: ReactNode,
    flexDirection?: "row" | "row-reverse" | "column" | "column-reverse" | "initial" | "inherit";
    justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly" | "initial" | "inherit";
    alignItems?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly" | "initial" | "inherit";
    gap?: number;
    width? : number;
}

export interface IFlexBoxStyle {
    flexDirection?: "row" | "row-reverse" | "column" | "column-reverse" | "initial" | "inherit";
    justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly" | "initial" | "inherit";
    alignItems?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly" | "initial" | "inherit";
    gap?: number;
    width? : number;
}