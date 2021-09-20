import styled from "styled-components";
import { colors } from "../../../mainStyles/colors";
import { typography } from "../../../mainStyles/typography";

export const DashboardMainAreaWrapper = styled.section`
  grid-area: main;
  padding: 15px;
  background: ${colors.backgroundSecondary};
  overflow: auto;
`;

export const MainAreaHeader = styled.h3`
  font-size: ${typography.veryLarge};
  margin-bottom: 15px;
`;

export const HorizontalWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 15px;
  margin-bottom: 50px;
`;
