import styled from "styled-components";
import { colors } from "../../../mainStyles/colors";
import { typography } from "../../../mainStyles/typography";

export const LayoutWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background: ${colors.themeGreenDark};
`;

export const Container = styled.div`
  min-width: 400px;
  padding: 25px;
  -webkit-box-shadow: 0px 0px 15px 7px ${colors.themeGreen};
  box-shadow: 0px 0px 15px 7px ${colors.themeGreen};
  background-color: ${colors.backgroundMain};
  display: flex;
  flex-direction: column;
`;

export const LoginRegisterHeader = styled.h4`
  font-family: "Lato", sans-serif;
  font-size: ${typography.large};
  margin: 15px auto;
`;
