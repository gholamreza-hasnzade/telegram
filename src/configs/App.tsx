// * import config
import { AppConfigurations } from "@configs/app-configurations/app.configurations";
import { AppRouteConfig } from "@configs/app-configurations/routes/AppRouteConfig";

export const App = () => {
    return (
        <AppConfigurations>
            <AppRouteConfig />
        </AppConfigurations>
    );
};
