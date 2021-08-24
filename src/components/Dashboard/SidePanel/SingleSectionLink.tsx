import {
  UseLoggedUserState,
  UseLoggedUserActions,
} from "../../../modules/LoggedUserModule";
import { DashboardLinkStyled } from "./styledComponents";

interface singleSectionItemProps {
  label: string;
  linkTo: string;
}

const SingleSectionLink = ({ label, linkTo }: singleSectionItemProps) => {
  const { selectedPage } = UseLoggedUserState();
  const { setSelectedPage } = UseLoggedUserActions();

  return (
    <DashboardLinkStyled
      to={linkTo}
      $isSelected={selectedPage === linkTo}
      onClick={() => setSelectedPage(linkTo)}
    >
      {label}
    </DashboardLinkStyled>
  );
};

export default SingleSectionLink;
