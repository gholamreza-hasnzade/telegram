// * Import Tools
import styled from "@emotion/styled";
import { Box } from "@mui/material";

// * import interface

const Header = styled(Box)`
    width: 100%;
    height: 12%;
    width: 100%;
    background-color: ${({ theme }) => theme.PRIMARY};
`;

export const HeaderOrganismStyle = {
    Header,
};
