import { useState } from "react";
import { DashboardSidepanelWrapper, LogoWrapper } from "./styledComponents";
import SingleSectionLink from "./SingleSectionLink";
import { LogoLight } from "../../Logo";

const DashboardSidepanel = () => {
  const [selectedItem, setSelectedItem] = useState<string>("/dashboard");

  const linkClikcHandler = (path: string): void => {
    setSelectedItem(path);
  };

  return (
    <DashboardSidepanelWrapper>
      <LogoWrapper>
        <LogoLight />
      </LogoWrapper>
      <SingleSectionLink
        label="Home"
        linkClickHandler={linkClikcHandler}
        linkTo="/dashboard"
        selectedPath={selectedItem}
      />
      <SingleSectionLink
        label="Visits"
        linkClickHandler={linkClikcHandler}
        linkTo="/dashboard/visits"
        selectedPath={selectedItem}
      />
      <SingleSectionLink
        label="Pets"
        linkClickHandler={linkClikcHandler}
        linkTo="/dashboard/pets"
        selectedPath={selectedItem}
      />
      <SingleSectionLink
        label="Owners"
        linkClickHandler={linkClikcHandler}
        linkTo="/dashboard/owners"
        selectedPath={selectedItem}
      />
      <SingleSectionLink
        label="Notes"
        linkClickHandler={linkClikcHandler}
        linkTo="/dashboard/notes"
        selectedPath={selectedItem}
      />
    </DashboardSidepanelWrapper>
  );
};

export default DashboardSidepanel;
