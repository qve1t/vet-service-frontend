import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../../mainStyles/colors";
import { transitions } from "../../mainStyles/transitions";
import { typography } from "../../mainStyles/typography";
import { mediaQuery } from "../../mainStyles/madiaQuery";

export const VerticalMenuWrapper = styled.nav<{ showMenu: boolean }>`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding: 50px 15px 0 15px;
  background: ${colors.backgroundSecondary};
  opacity: 0;
  z-index: 3;
  transform: translateX(-100vw);
  transition: ${transitions.standardTransition};

  ${({ showMenu }) =>
    showMenu &&
    css`
      opacity: 1;
      transform: translateX(0vw);
    `}

  @media (min-width: ${mediaQuery.standard}) {
    display: none;
  }
`;

export const VerticalMenuLink = styled(Link)`
  font-family: "Lato", sans-serif;
  font-size: ${typography.large};
  font-weight: 700;
  color: ${colors.fontMain};
  text-decoration: none;
  text-align: center;
  width: 100%;
  margin: 20px 0;
  border-bottom: 1px solid ${colors.themeGreen};
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
