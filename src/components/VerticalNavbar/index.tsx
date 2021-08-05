import { useEffect } from "react";

import { VerticalMenuWrapper, VerticalMenuLink } from "./styledComponents";

export interface VerticalMenuLinkInterface {
  linkTo: string;
  label: string;
}

interface VerticalMenuProps {
  showMenu: boolean;
  links: VerticalMenuLinkInterface[];
}

const VerticalMenu = ({ showMenu, links }: VerticalMenuProps) => {
  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showMenu]);

  return (
    <VerticalMenuWrapper showMenu={showMenu}>
      {links.map((elem, index) => (
        <VerticalMenuLink key={elem.label + index} to={elem.linkTo}>
          {elem.label}
        </VerticalMenuLink>
      ))}
    </VerticalMenuWrapper>
  );
};

export default VerticalMenu;
