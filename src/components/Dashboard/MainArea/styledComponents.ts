import styled from "styled-components";
import { colors } from "../../../mainStyles/colors";
import { typography } from "../../../mainStyles/typography";

export const DashboardMainAreaWrapper = styled.section`
  grid-area: main;
  padding: 15px;
  background: ${colors.backgroundSecondary};
`;

export const MainAreaHeader = styled.h3`
  font-size: ${typography.veryLarge};
`;
