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

export const StandardButtonStyled = styled.button<{
  width: string;
  primaryColor: string;
  background?: string;
}>`
  width: ${({ width }) => (width ? width : "100px")};
  font-size: ${typography.standard};
  border-style: solid;
  border-width: 2px;
  border-color: ${({ primaryColor }) =>
    primaryColor ? primaryColor : "#ffffff"};
  border-radius: 100px;
  background: ${({ background }) => (background ? background : "#ffffff")};
  color: ${({ primaryColor }) => (primaryColor ? primaryColor : "#ffffff")};
  padding: 5px 10px;
  cursor: pointer;
  transition: ${transitions.standardTransition};

  &:hover {
    background: ${({ primaryColor }) =>
      primaryColor ? primaryColor : "#ffffff"};
    color: #ffffff;
  }
`;
