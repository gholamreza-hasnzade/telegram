// * import tools
/* import { FC } from "react"; */

// * import interfaces
/* import { IAuthLayout } from "@components/templates/layouts/authLayout/authLayout.component.interfaces"; */
import { Outlet } from "react-router-dom";

export const AuthLayoutComponent /* : FC<IAuthLayout> */ = () => {
    return (
        <div>
            <Outlet />
        </div>
    );
};
