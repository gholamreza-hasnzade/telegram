// * Import Tools
import styled from "@emotion/styled";
import { Box } from "@mui/material";

// * import interface

const Header = styled(Box)`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90px;
    background-color: ${({ theme }) => theme.PRIMARY};
`;

export const HeaderOrganismStyle = {
    Header,
};
