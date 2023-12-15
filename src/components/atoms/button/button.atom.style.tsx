// * Import Tools
import styled from "@emotion/styled";
import { Button as ButtonMUI } from "@mui/material";

const Button = styled(ButtonMUI)`
  min-width: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
  color: #474747;
  padding: 8px 16px;
`;
export const ButtonAtomStyle = {
  Button,
};
