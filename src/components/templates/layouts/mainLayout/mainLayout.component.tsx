// * import tools
import { Outlet } from "react-router-dom";

// * import organisms
import { HeaderOrganism } from "@components/organisms";

// * import
import { MainLayoutStyle as S } from "@components/templates/layouts/mainLayout/mainLayout.component.style";

export const MainLayoutComponent = () => {
    return (
        <S.Container>
            <HeaderOrganism />
            <div>
                <Outlet />
            </div>
        </S.Container>
    );
};
