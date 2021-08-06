import { useEffect } from "react";

import { VerticalMenuWrapper, VerticalMenuLink } from "./styledComponents";

export interface VerticalMenuLinkInterface {
  linkTo: string;
  label: string;
}

interface VerticalMenuProps {
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
  links: VerticalMenuLinkInterface[];
}

const VerticalMenu = ({ showMenu, setShowMenu, links }: VerticalMenuProps) => {
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
        <VerticalMenuLink
          key={elem.label + index}
          to={elem.linkTo}
          onClick={() => setShowMenu(false)}
        >
          {elem.label}
        </VerticalMenuLink>
      ))}
    </VerticalMenuWrapper>
  );
};

export default VerticalMenu;
