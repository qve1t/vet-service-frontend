import { useEffect } from "react";

import { VerticalMenuWrapper, VerticalMenuLink } from "./styledComponents";

interface verticalMenuProps {
  showMenu: boolean;
}

const VerticalMenu = ({ showMenu }: verticalMenuProps) => {
  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showMenu]);

  return (
    <VerticalMenuWrapper showMenu={showMenu}>
      <VerticalMenuLink to="/login">Login</VerticalMenuLink>
      <VerticalMenuLink to="/register">Register</VerticalMenuLink>
    </VerticalMenuWrapper>
  );
};

export default VerticalMenu;
