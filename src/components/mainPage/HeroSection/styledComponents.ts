import styled from "styled-components";
import { colors } from "../../../mainStyles/colors";
import { mediaQuery } from "../../../mainStyles/madiaQuery";
import { typography } from "../../../mainStyles/typography";

export const HeroSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  height: auto;
  min-height: 650px;
  max-height: 100vh;
  position: relative;
  @media (max-width: ${mediaQuery.standard}) {
    min-height: 0;
  }
`;

export const HeroImage = styled.img`
  opacity: 0.5;
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
  top: calc(25% + 50px);
  left: 50%;
  text-align: center;
  align-items: center;
  transform: translate(-50%, -50%);
  @media (max-width: ${mediaQuery.standard}) {
    position: initial;
    transform: initial;
    padding: 10px 0;
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 1) 70%,
      rgba(243, 243, 243, 1) 100%
    );
    -webkit-box-shadow: 0px 5px 15px -5px ${colors.themeGreen};
    box-shadow: 0px 5px 15px -5px ${colors.themeGreen};
  }
`;

export const Header = styled.h2`
  display: flex;
  flex-direction: column;
  font-family: "Lato", sans-serif;
  font-size: ${typography.header};
  font-weight: 700;
  margin-bottom: 20px;
  @media (max-width: ${mediaQuery.standard}) {
    font-size: ${typography.smallHeader};
  }

  span {
    color: ${colors.themeGreen};
  }
`;
