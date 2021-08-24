import { DashboardSidepanelWrapper, LogoWrapper } from "./styledComponents";
import SingleSectionLink from "./SingleSectionLink";
import { LogoLight } from "../../Logo";

const DashboardSidepanel = () => {
  return (
    <DashboardSidepanelWrapper>
      <LogoWrapper>
        <LogoLight />
      </LogoWrapper>
      <SingleSectionLink label="Home" linkTo="/dashboard" />
      <SingleSectionLink label="Visits" linkTo="/dashboard/visits" />
      <SingleSectionLink label="Pets" linkTo="/dashboard/pets" />
      <SingleSectionLink label="Owners" linkTo="/dashboard/owners" />
      <SingleSectionLink label="Notes" linkTo="/dashboard/notes" />
    </DashboardSidepanelWrapper>
  );
};

export default DashboardSidepanel;
