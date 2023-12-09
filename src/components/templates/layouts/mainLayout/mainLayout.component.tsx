// * import tools
import { Fragment } from "react";
import { Outlet } from "react-router-dom";

// * import organisms
import { HeaderOrganism } from "@components/organisms";
// * import
import { MainLayoutStyle as S } from "@components/templates/layouts/mainLayout/mainLayout.component.style";
import { AppbarAtom } from "@components/molecules";

export const MainLayoutComponent = () => {
    return (
        <S.Container>
            <AppbarAtom>
                <HeaderOrganism />
            </AppbarAtom>

            <Fragment>
                <Outlet />
            </Fragment>
        </S.Container>
    );
};
