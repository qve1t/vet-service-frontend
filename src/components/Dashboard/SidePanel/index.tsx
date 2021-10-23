import { DashboardSidepanelWrapper, LogoWrapper } from "./styledComponents";
import SingleSectionLink from "./SingleSectionLink";
import { LogoLight } from "../../Logo";

const DashboardSidepanel = () => {
  return (
    <DashboardSidepanelWrapper>
      <LogoWrapper>
        <LogoLight />
      </LogoWrapper>
      <SingleSectionLink id="home-id" label="Home" linkTo="/dashboard" />
      <SingleSectionLink
        id="visits-id"
        label="Visits"
        linkTo="/dashboard/visits"
      />
      <SingleSectionLink id="pets-id" label="Pets" linkTo="/dashboard/pets" />
      <SingleSectionLink
        id="owners-id"
        label="Owners"
        linkTo="/dashboard/owners"
      />
      <SingleSectionLink
        id="medicines-id"
        label="Medicines"
        linkTo="/dashboard/medicines"
      />
      <SingleSectionLink
        id="notes-id"
        label="Notes"
        linkTo="/dashboard/notes"
      />
    </DashboardSidepanelWrapper>
  );
};

export default DashboardSidepanel;
