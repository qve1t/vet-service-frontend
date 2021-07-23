import styled from "styled-components";
import { transitions } from "../../mainStyles/transitions";
import { typography } from "../../mainStyles/typography";

export const MainPageButtonStyled = styled.button<{
  primaryColor: string;
  secondaryColor: string;
}>`
  width: 200px;
  height: 70px;
  font-size: ${typography.large};
  font-weight: 700;
  border-style: solid;
  border-width: 2px;
  border-color: ${({ primaryColor }) =>
    primaryColor ? primaryColor : "#ffffff"};
  border-radius: 100px;
  background: #ffffff;
  color: ${({ primaryColor }) => (primaryColor ? primaryColor : "#ffffff")};
  cursor: pointer;
  transition: ${transitions.standardTransition};

  &:hover {
    background: ${({ primaryColor }) =>
      primaryColor ? primaryColor : "#ffffff"};
    color: ${({ secondaryColor }) =>
      secondaryColor ? secondaryColor : "#ffffff"};
  }
`;
