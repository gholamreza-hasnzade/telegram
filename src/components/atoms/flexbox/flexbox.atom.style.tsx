// * Import Tools
import styled from "@emotion/styled";
import { Box as BoxMUI } from "@mui/material";

// * import interface

import { IFlexBoxStyle } from "@components/atoms/flexbox/flexbox.atom.interface";

const FlexBox = styled(BoxMUI)<IFlexBoxStyle>`
    display: flex;
    flex-direction: ${({ flexDirection }) => flexDirection || "row"};
    justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
    align-items: ${({ alignItems }) => alignItems || "stretch"};
    gap: ${({ gap }) => `${gap}px` || "0px"};
`;

export const FlexboxAtomStyle = {
    FlexBox,
};
