import styled from "styled-components";
import { Link } from "react-router-dom";
import { transitions } from "../../../mainStyles/transitions";
import { colors } from "../../../mainStyles/colors";
import { typography } from "../../../mainStyles/typography";
import { mediaQuery } from "../../../mainStyles/madiaQuery";

export const DashboardNavbarWrapper = styled.section`
  grid-area: nav;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 15px;

  @media (max-width: ${mediaQuery.standard}) {
    z-index: 5;
    justify-content: space-between;
  }
`;

export const LogoutButton = styled.button`
  display: flex;
  width: 100px;
  height: 30px;
  text-decoration: none;
  font-weight: 700;
  font-family: "Lato", sans-serif;
  font-size: ${typography.standard};
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  border: none;
  color: ${colors.fontMain};
  background-color: transparent;
  cursor: pointer;
  transition: ${transitions.standardTransition};

  &:hover {
    background-color: ${colors.errorRed};
    color: ${colors.fontSecondary};
  }

  @media (max-width: ${mediaQuery.standard}) {
    display: none;
  }
`;

export const SectionSeparator = styled.div`
  flex: 1;

  @media (max-width: ${mediaQuery.standard}) {
    display: none;
  }
`;

export const NavbarSectionWrapper = styled.div`
  @media (max-width: ${mediaQuery.standard}) {
    display: none;
  }
`;

export const NavbarSectionLink = styled(Link)`
  position: relative;
  font-family: "Lato", sans-serif;
  text-decoration: none;
  font-weight: 700;
  font-size: ${typography.standard};
  color: ${colors.fontMain};
  margin-right: 40px;

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

export const NavbarEmail = styled.p`
  margin-right: 15px;
`;
