import {
  DashboardSidepanelWrapper,
  LogoWrapper,
  SectionDivider,
} from "./styledComponents";
import { LogoLight } from "../../Logo";

const DashboardSidepanel = () => {
  return (
    <DashboardSidepanelWrapper>
      <LogoWrapper>
        <LogoLight />
      </LogoWrapper>
    </DashboardSidepanelWrapper>
  );
};

export default DashboardSidepanel;
