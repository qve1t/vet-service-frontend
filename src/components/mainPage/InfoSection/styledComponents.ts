import styled from "styled-components";
import { colors } from "../../../mainStyles/colors";
import { mediaQuery } from "../../../mainStyles/madiaQuery";
import { typography } from "../../../mainStyles/typography";

export const Section = styled.section`
  display: grid;
  grid-template: "left mid right";
  grid-template-columns: auto minmax(769px, 1060px) auto;
  height: auto;
  background: ${colors.backgroundSecondary};

  @media (max-width: ${mediaQuery.standard}) {
    grid-template: "mid";
    grid-template-columns: 1fr;
    height: auto;
  }
`;

export const MidSection = styled.div`
  grid-area: mid;
  display: flex;
  flex-direction: column;
  width: auto;
  height: 100%;
  padding: 45px 0px;
  margin: 0 15px;
  align-items: center;
  @media (max-width: ${mediaQuery.standard}) {
    margin: 0 15px;
  }
`;

export const MidSectionHeader = styled.h3`
  font-family: "Lato", sans-serif;
  font-size: ${typography.veryLarge};
`;

export const MidSectionParagraph = styled.p`
  font-size: ${typography.large};
  margin-top: 45px;
  margin-bottom: 45px;
  font-style: italic;
`;
