import styled from "styled-components";
import { colors } from "../../mainStyles/colors";
import { typography } from "../../mainStyles/typography";

export const LogoText = styled.p<{ textAlign?: string; margin?: string }>`
  font-family: "Lato", sans-serif;
  font-size: ${typography.veryLarge};
  font-weight: 700;
  color: ${colors.fontMain};
  border-bottom: 3px solid ${colors.themeGreen};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "start")};
  margin: ${({ margin }) => (margin ? margin : 0)};

  span {
    color: ${colors.themeGreen};
  }
`;
