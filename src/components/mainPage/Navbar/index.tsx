import { useState } from "react";

import { NavbarWrapper, NavbarLink, LinksWrapper } from "./styledComponents";
import VerticalMenu, { VerticalMenuLinkInterface } from "../../VerticalNavbar";
import { Logo } from "../../Logo";
import HamburgetButton from "../../VerticalNavbar/HamburgerButton";

const NAVBAR_LINKS: VerticalMenuLinkInterface[] = [
  {
    label: "Login",
    linkTo: "/login",
  },
  {
    label: "Register",
    linkTo: "/register",
  },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const hamburgerMenuClick = (): void => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <NavbarWrapper showMenu={showMenu}>
        <Logo margin="0 0 0 15px" />
        <LinksWrapper>
          <NavbarLink to="/login">Login</NavbarLink>
          <NavbarLink to="/register">Register</NavbarLink>
        </LinksWrapper>
        <HamburgetButton
          showMenu={showMenu}
          onClickFunction={hamburgerMenuClick}
        />
      </NavbarWrapper>
      <VerticalMenu showMenu={showMenu} links={NAVBAR_LINKS} />
    </>
  );
};

export default Navbar;
