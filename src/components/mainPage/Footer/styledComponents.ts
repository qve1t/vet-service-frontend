import styled from "styled-components";
import { colors } from "../../../mainStyles/colors";
import { typography } from "../../../mainStyles/typography";

export const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  padding: 15px 0;
  background-color: ${colors.themeGreenDark};
  align-items: center;
`;

export const FooterParagraph = styled.p`
  font-size: ${typography.standard};
  color: ${colors.fontSecondary};
  padding: 5px 0;
`;
