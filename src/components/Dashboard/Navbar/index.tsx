import { DashboardNavbarWrapper, LogoutLinkStyled } from "./styledComponents";

const DashboardNavbar = () => {
  return (
    <DashboardNavbarWrapper>
      <LogoutLinkStyled to="/login">Logout</LogoutLinkStyled>
    </DashboardNavbarWrapper>
  );
};

export default DashboardNavbar;
