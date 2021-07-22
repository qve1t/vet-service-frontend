import styled from "styled-components";
import { colors } from "../../../../mainStyles/colors";
import { transitions } from "../../../../mainStyles/transitions";
import { typography } from "../../../../mainStyles/typography";

export const InfoElementsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

export const SingleElementWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 280px;
  margin: 15px 15px 45px;
  align-items: center;
  border-radius: 300px;
  background: ${colors.backgroundMain};
  -webkit-box-shadow: 0px 0px 15px 0px ${colors.themeGreen};
  box-shadow: 0px 0px 15px 0px ${colors.themeGreen};
  transition: ${transitions.standardTransition};

  &:hover {
    -webkit-box-shadow: 0px 0px 15px 7px ${colors.themeGreen};
    box-shadow: 0px 0px 15px 7px ${colors.themeGreen};
  }
`;

export const InfoElementImage = styled.img`
  width: 200px;
  height: auto;
`;

export const InfoElementHeader = styled.h4`
  font-size: ${typography.large};
  color: ${colors.themeGreenDark};
  margin-top: -20px;
  margin-bottom: 10px;
`;

export const InfoElementDescription = styled.p`
  font-size: ${typography.standard};
  text-align: center;
  white-space: pre-wrap;
`;
