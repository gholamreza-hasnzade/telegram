// * Import Tools
import { css } from "@emotion/react";
import { Global } from "@emotion/react";

// * Import config reset style
import { BaseStylesConfigReset } from "@configs/app-configurations/base-styles/base-styles.config.reset";
export const BaseStylesConfig = () => {
    return (
        <>
            <Global styles={BaseStylesConfigReset} />
            <Global
                styles={css`
                    @font-face {
                        font-family: Roboto;
                        font-style: normal;
                        font-weight: 700;
                        //src: url(https://fonts.googleapis.com/css2?family=Roboto:wght@300;700&display=swap);
                    }
                `}
            />
        </>
    );
};
