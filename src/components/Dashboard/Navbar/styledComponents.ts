import styled from "styled-components";
import { transitions } from "../../../mainStyles/transitions";
import { colors } from "../../../mainStyles/colors";

export const DashboardNavbarWrapper = styled.section`
  grid-area: nav;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 15px;
`;

export const LogoutButton = styled.button`
  display: flex;
  width: 100px;
  height: 30px;
  text-decoration: none;
  font-weight: 700;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  color: ${colors.fontMain};
  background-color: transparent;
  transition: ${transitions.standardTransition};

  &:hover {
    background-color: ${colors.errorRed};
    color: ${colors.fontSecondary};
  }
`;
