import styled from "styled-components";
import { Link } from "react-router-dom";
import { mediaQuery } from "../../../mainStyles/madiaQuery";
import { colors } from "../../../mainStyles/colors";
import { typography } from "../../../mainStyles/typography";
import { transitions } from "../../../mainStyles/transitions";

export const NavbarWrapper = styled.nav<{ showMenu: boolean }>`
  position: absolute;
  display: flex;
  width: 100%;
  height: 50px;
  z-index: 5;
  align-items: center;
  justify-content: space-between;
  background: ${({ showMenu }) =>
    showMenu ? colors.backgroundSecondary : "rgba(255, 255, 255, 0.3)"};
  transition: ${transitions.standardTransition};
`;

export const LinksWrapper = styled.div`
  @media (max-width: ${mediaQuery.standard}) {
    display: none;
  }
`;

export const NavbarLink = styled(Link)`
  position: relative;
  font-family: "Lato", sans-serif;
  font-size: ${typography.large};
  font-weight: 700;
  color: ${colors.fontMain};
  text-decoration: none;
  margin-right: 15px;

  transition: ${transitions.standardTransition};
  &:before {
    content: "";
    position: absolute;
    width: 0;
    left: 50%;
    bottom: -8px;
    height: 3px;
    z-index: -1;
    background: ${colors.themeGreen};
    transition: ${transitions.standardTransition};
  }
  &:hover {
    &:before {
      width: 100%;
      left: 0;
    }
  }
`;

export const LogoText = styled.p`
  font-family: "Lato", sans-serif;
  font-size: ${typography.veryLarge};
  font-weight: 700;
  color: ${colors.fontMain};
  border-bottom: 3px solid ${colors.themeGreen};
  text-align: start;
  margin-left: 15px;

  span {
    color: ${colors.themeGreen};
  }
`;

export const NavbarHamburgerWrapper = styled.div`
  display: none;
  margin-right: 15px;
  @media (max-width: ${mediaQuery.standard}) {
    display: block;
  }
`;

export const NavbarHamburger = styled.img`
  width: 30px;
  height: 30px;
`;
