import styled from "styled-components";
import { colors } from "../../mainStyles/colors";

export const HorizontalWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 15px;
`;

export const HorizontalDivider = styled.div<{ customMarginTop?: string }>`
  width: 100%;
  height: 1px;
  background: ${colors.themeGreen};
  margin: 30px 0;

  ${({ customMarginTop }) =>
    customMarginTop && `margin-top: ${customMarginTop}`}
`;
