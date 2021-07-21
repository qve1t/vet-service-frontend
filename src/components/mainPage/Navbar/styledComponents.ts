import styled from "styled-components";
import { colors } from "../../../mainStyles/colors";
import { mediaQuery } from "../../../mainStyles/madiaQuery";

export const NavbarWrapper = styled.nav`
  width: 100%;
  height: 50px;
  border-bottom: 2px solid ${colors.themeGreen};
  @media (max-width: ${mediaQuery.standard}) {
    display: none;
  }
`;
