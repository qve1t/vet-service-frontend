import { useState } from "react";

import {
  NavbarWrapper,
  NavbarLink,
  LinksWrapper,
  LogoText,
  NavbarHamburgerWrapper,
  NavbarHamburger,
} from "./styledComponents";
import VerticalMenu from "./VerticalMenu";

import Menu from "../../../icons/menu.svg";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const hamburgerMenuClick = (): void => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <NavbarWrapper showMenu={showMenu}>
        <LogoText>
          VET<span>-</span>SERVICE
        </LogoText>
        <LinksWrapper>
          <NavbarLink to="/login">Login</NavbarLink>
          <NavbarLink to="/register">Register</NavbarLink>
        </LinksWrapper>
        <NavbarHamburgerWrapper onClick={hamburgerMenuClick}>
          <NavbarHamburger src={Menu} />
        </NavbarHamburgerWrapper>
      </NavbarWrapper>
      <VerticalMenu showMenu={showMenu} setShowMenu={setShowMenu} />
    </>
  );
};

export default Navbar;
