// * Import Casual modules
import { FC } from "react";
/* @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;700&display=swap');
 */
// * Import interfase
import { IAppConfigurations } from "@configs/app-configurations/app.configurations.interfaces";

import { EmotionConfig } from "@configs/app-configurations/emotion/emotion.config";
import { BaseStylesConfig } from "@configs/app-configurations/base-styles/base-styles.config";
export const AppConfigurations: FC<IAppConfigurations> = ({ children }) => {
    return (
        <>
            <BaseStylesConfig />
            <EmotionConfig>{children}</EmotionConfig>
        </>
    );
};
