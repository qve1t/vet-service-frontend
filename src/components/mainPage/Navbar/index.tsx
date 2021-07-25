import { useState } from "react";

import {
  NavbarWrapper,
  NavbarLink,
  LinksWrapper,
  NavbarHamburgerWrapper,
  NavbarHamburger,
} from "./styledComponents";
import VerticalMenu from "./VerticalMenu";
import { Logo } from "../../Logo";

import Menu from "../../../icons/menu.svg";
import Cancel from "../../../icons/cancel.svg";

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
        <NavbarHamburgerWrapper onClick={hamburgerMenuClick}>
          <NavbarHamburger src={showMenu ? Cancel : Menu} />
        </NavbarHamburgerWrapper>
      </NavbarWrapper>
      <VerticalMenu showMenu={showMenu} />
    </>
  );
};

export default Navbar;
