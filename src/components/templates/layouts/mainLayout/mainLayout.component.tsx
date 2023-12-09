// * import tools
import { Fragment } from "react";
import { Outlet } from "react-router-dom";

// * import style
import { MainLayoutStyle as S } from "@components/templates/layouts/mainLayout/mainLayout.component.style";
import { HeaderOrganism } from "@components/organisms";

export const MainLayoutComponent = () => {
    return (
        <S.Container>
            <HeaderOrganism />
            <Fragment>
                <Outlet />
            </Fragment>
        </S.Container>
    );
};
