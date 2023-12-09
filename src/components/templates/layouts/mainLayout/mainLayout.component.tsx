// * import tools
import { Fragment } from "react";
import { Outlet } from "react-router-dom";

// * import
import { MainLayoutStyle as S } from "@components/templates/layouts/mainLayout/mainLayout.component.style";
import { AppbarMolecule } from "@components/molecules/appbar/appbar.molecule";

export const MainLayoutComponent = () => {
    return (
        <S.Container>
            <AppbarMolecule>
                
            </AppbarMolecule>
            <Fragment>
                <Outlet />
            </Fragment>
        </S.Container>
    );
};
