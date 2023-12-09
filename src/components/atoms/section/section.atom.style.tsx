// * Import Tools
import styled from "@emotion/styled";
import { Box } from "@mui/material";

// * Import interface
import { ISectionStyle } from "@components/atoms/section/section.atom.interface";

const Section = styled(Box)<ISectionStyle>`
    position: relative;
    height: ${({ height }) => (height ? `${height}vh` : "88vh")};
    background: red;
`;

export const SectionAtomStyle = {
    Section,
};
