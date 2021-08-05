import { NavbarHamburger, NavbarHamburgerWrapper } from "./styledComponents";

import Menu from "../../icons/menu.svg";
import Cancel from "../../icons/cancel.svg";

interface HamburgerMenuProps {
  onClickFunction: () => void;
  showMenu: boolean;
}

const HamburgetButton = ({ onClickFunction, showMenu }: HamburgerMenuProps) => {
  return (
    <NavbarHamburgerWrapper onClick={onClickFunction}>
      <NavbarHamburger src={showMenu ? Cancel : Menu} />
    </NavbarHamburgerWrapper>
  );
};

export default HamburgetButton;
