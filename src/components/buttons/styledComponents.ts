import styled from "styled-components";
import { transitions } from "../../mainStyles/transitions";
import { colors } from "../../mainStyles/colors";

export const MainPageButtonStyled = styled.button<{
  primaryColor: string;
  secondaryColor: string;
}>`
  width: 200px;
  height: 50px;
  font-size: 25px;
  font-weight: 700;
  border-style: solid;
  border-width: 2px;
  border-color: ${({ primaryColor }) =>
    primaryColor ? primaryColor : "#ffffff"};
  border-radius: 100px;
  background: ${colors.backgroundSecondary};
  color: ${({ primaryColor }) => (primaryColor ? primaryColor : "#ffffff")};
  transition: ${transitions.standardTransition};

  &:hover {
    background: ${({ primaryColor }) =>
      primaryColor ? primaryColor : "#ffffff"};
    color: ${({ secondaryColor }) =>
      secondaryColor ? secondaryColor : "#ffffff"};
  }
`;
