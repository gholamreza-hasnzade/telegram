// * Import Tools
import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";

import { ITypographyAtom } from "@components/atoms/typography/typography.atom.interface";

const TypographyAtom = styled(Typography)<ITypographyAtom>`
    font-size: ${({ fontSize }) => `${fontSize}px` || "16px"};
    font-weight: 700;
    color: ${({ theme }) => theme.WHITE};
`;
export const TypographyAtomStyle = {
    TypographyAtom,
};
