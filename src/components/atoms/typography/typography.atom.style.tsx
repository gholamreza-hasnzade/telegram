// * Import Tools
import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";

import { ITypographyAtom } from "@components/atoms/typography/typography.atom.interface";

const TypographyAtom = styled(Typography)<ITypographyAtom>`
  color: ${({ theme }) => theme.WHITE};
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "16px")};
  font-weight: ${({ fontWeight }) =>
    fontWeight ? `${fontWeight}px` : "500px"};
`;
export const TypographyAtomStyle = {
  TypographyAtom,
};
