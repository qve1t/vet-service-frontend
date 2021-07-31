import { useHistory } from "react-router";
import { logoutUserAPI } from "../../../api/auth";
import { DashboardNavbarWrapper, LogoutButton } from "./styledComponents";

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
      <LogoutButton onClick={() => logoutHandler()}>Logout</LogoutButton>
    </DashboardNavbarWrapper>
  );
};

export default DashboardNavbar;
