import styled from "styled-components";
import { colors } from "../../../mainStyles/colors";

export const DashboardSidepanelWrapper = styled.section`
  grid-area: sidepanel;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 15px;
  background: ${colors.themeGreenDark};
`;

export const LogoWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  align-items: center;
`;

export const SectionDivider = styled.div`
  width: 100%;
  height: 1px;
  background: ${colors.backgroundSecondary};
`;
