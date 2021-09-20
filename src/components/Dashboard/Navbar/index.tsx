import { useState } from "react";
import { useHistory } from "react-router";
import { Switch, Route } from "react-router";
import { logoutUserAPI } from "../../../api/auth";
import {
  DashboardNavbarWrapper,
  LogoutButton,
  SectionSeparator,
  NavbarEmail,
} from "./styledComponents";
import {
  OwnersSection,
  PetsSection,
  VisitsSection,
  NotesSection,
} from "./LinksSections";
import VerticalMenu from "../../VerticalNavbar";
import HamburgetButton from "../../VerticalNavbar/HamburgerButton";

import {
  UseLoggedUserActions,
  UseLoggedUserState,
} from "../../../modules/LoggedUserModule";

import { DASHBOARD_NAVBAR_LINKS } from "./dashboardNavbarLinks";

const DashboardNavbar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const history = useHistory();
  const { email } = UseLoggedUserState();
  const { logoutUser } = UseLoggedUserActions();

  const hamburgerMenuClick = (): void => {
    setShowMenu(!showMenu);
  };

  const logoutHandler = async (): Promise<void> => {
    const logoutResponse = await logoutUserAPI();
    if (logoutResponse.response) {
      logoutUser(
        logoutResponse.response.isLogged,
        logoutResponse.response.email,
      );
      history.push("/login");
    }
  };

  return (
    <>
      <DashboardNavbarWrapper>
        <Switch>
          <Route path="/dashboard/visits" component={VisitsSection} />
          <Route path="/dashboard/pets" component={PetsSection} />
          <Route path="/dashboard/owners" component={OwnersSection} />
          <Route path="/dashboard/notes" component={NotesSection} />
        </Switch>
        <SectionSeparator />
        <NavbarEmail>{email}</NavbarEmail>
        <LogoutButton onClick={() => logoutHandler()}>Logout</LogoutButton>
        <HamburgetButton
          showMenu={showMenu}
          onClickFunction={hamburgerMenuClick}
        />
      </DashboardNavbarWrapper>
      <VerticalMenu
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        links={DASHBOARD_NAVBAR_LINKS}
      />
    </>
  );
};

export default DashboardNavbar;
