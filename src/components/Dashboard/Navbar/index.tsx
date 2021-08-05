import { useHistory } from "react-router";
import { Switch, Route } from "react-router";
import { logoutUserAPI } from "../../../api/auth";
import {
  DashboardNavbarWrapper,
  LogoutButton,
  SectionSeparator,
} from "./styledComponents";
import {
  OwnersSection,
  PetsSection,
  VisitsSection,
  NotesSection,
} from "./LinksSections";

import { UseLoggedUserActions } from "../../../modules/LoggedUserModule";

const DashboardNavbar = () => {
  const history = useHistory();
  const { logoutUser } = UseLoggedUserActions();

  const logoutHandler = async (): Promise<void> => {
    const logoutResponse = await logoutUserAPI();
    if (logoutResponse.response) {
      logoutUser(
        logoutResponse.response.isLogged,
        logoutResponse.response.email,
      );
      history.push("/login");
    } else {
      console.log(logoutResponse.error);
    }
  };

  return (
    <DashboardNavbarWrapper>
      <Switch>
        <Route path="/dashboard/visits" component={VisitsSection} />
        <Route path="/dashboard/pets" component={PetsSection} />
        <Route path="/dashboard/owners" component={OwnersSection} />
        <Route path="/dashboard/notes" component={NotesSection} />
      </Switch>
      <SectionSeparator />
      <LogoutButton onClick={() => logoutHandler()}>Logout</LogoutButton>
    </DashboardNavbarWrapper>
  );
};

export default DashboardNavbar;
