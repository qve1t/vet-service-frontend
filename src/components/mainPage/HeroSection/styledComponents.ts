import styled from "styled-components";
import { colors } from "../../../mainStyles/colors";
import { mediaQuery } from "../../../mainStyles/madiaQuery";

export const HeroSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  height: auto;
  min-height: 650px;
  max-height: calc(100vh - 50px);
  position: relative;
  border-bottom: solid 2px ${colors.themeGreen};
  @media (max-width: ${mediaQuery.standard}) {
    border-bottom: none;
  }
`;

export const HeroImage = styled.img`
  opacity: 0.4;
  width: auto;
  height: auto;
  min-height: 650px;
  @media (max-width: ${mediaQuery.standard}) {
    min-height: 0;
  }
`;

export const HeaderAndButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: calc(50% - 50px);
  left: 50%;
  text-align: center;
  align-items: center;
  transform: translate(-50%, -50%);
  @media (max-width: ${mediaQuery.standard}) {
    position: initial;
    transform: initial;
    padding: 10px 0;
    border-top: solid 2px ${colors.themeGreen};
    border-bottom: solid 2px ${colors.themeGreen};
  }
`;

export const Header = styled.h2`
  font-size: 65px;
  margin-bottom: 20px;
  @media (max-width: ${mediaQuery.standard}) {
    font-size: 45px;
  }
`;
