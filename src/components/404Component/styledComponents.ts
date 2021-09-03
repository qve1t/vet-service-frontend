import styled from "styled-components";
import { colors } from "../../mainStyles/colors";
import { typography } from "../../mainStyles/typography";

export const TextWrapper = styled.div`
  font-size: ${typography.large};
  font-weight: 700;
`;

export const LargeSpan = styled.span`
  font-size: ${typography.header};
`;

export const GreenSpan = styled.span`
  color: ${colors.themeGreen};
`;
