// * Import Tools
import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";

import { ITypographyAtom } from "@components/atoms/typography/typography.atom.interface";

const TypographyAtom = styled(Typography)<ITypographyAtom>`
  color: ${({ theme, color }) => (color ? color : theme.WHITE)};
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "16px")};
  font-weight: ${({ fontWeight }) => (fontWeight ? `${fontWeight}` : "500")};
`;
export const TypographyAtomStyle = {
  TypographyAtom,
};
