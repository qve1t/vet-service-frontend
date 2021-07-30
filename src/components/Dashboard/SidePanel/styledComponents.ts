import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../../../mainStyles/colors";
import { transitions } from "../../../mainStyles/transitions";

export const DashboardSidepanelWrapper = styled.section`
  grid-area: sidepanel;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 15px;
  background: ${colors.themeGreenDark};
`;

export const LogoWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  align-items: center;
`;

export const SectionDivider = styled.div`
  width: 100%;
  height: 1px;
  background: ${colors.backgroundSecondary};
`;

export const DashboardLinkStyled = styled(Link)<{ isSelected: boolean }>`
  display: flex;
  width: 100%;
  height: 30px;
  margin: 5px 0;
  text-decoration: none;
  font-weight: 700;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  color: ${colors.fontSecondary};
  transition: ${transitions.standardTransition};
  background-color: ${({ isSelected }) =>
    isSelected ? "rgba(98, 186, 81, 0.7)" : "transparent"};

  &:hover {
    background-color: ${({ isSelected }) =>
      isSelected ? "rgba(98, 186, 81, 0.7)" : "rgba(98, 186, 81, 0.5)"};
  }
`;
