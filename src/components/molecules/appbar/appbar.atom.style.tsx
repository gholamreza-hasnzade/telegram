// * Import Tools
import styled from "@emotion/styled";
import { Box as BoxMUI } from "@mui/material";

const Appbar = styled(BoxMUI)`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 12%;
    background-color: ${({ theme }) => theme.PRIMARY};
`;

export const AppbarAtomStyle = {
    Appbar,
};
