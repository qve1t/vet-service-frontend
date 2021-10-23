import { useLocation } from "react-router";
import { DashboardLinkStyled } from "./styledComponents";

interface singleSectionItemProps {
  label: string;
  linkTo: string;
  id: string;
}

const SingleSectionLink = ({ label, linkTo, id }: singleSectionItemProps) => {
  const location = useLocation();
  const locationToCheck = location.pathname.split("/").slice(0, 3).join("/");
  return (
    <DashboardLinkStyled
      data-testid={id}
      to={linkTo}
      $isSelected={locationToCheck === linkTo}
    >
      {label}
    </DashboardLinkStyled>
  );
};

export default SingleSectionLink;
