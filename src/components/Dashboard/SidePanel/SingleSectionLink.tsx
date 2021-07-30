import { DashboardLinkStyled } from "./styledComponents";

interface singleSectionItemProps {
  label: string;
  linkTo: string;
  selectedPath: string;
  linkClickHandler: (linkTo: string) => void;
}

const SingleSectionLink = ({
  label,
  linkTo,
  selectedPath,
  linkClickHandler,
}: singleSectionItemProps) => {
  return (
    <DashboardLinkStyled
      to={linkTo}
      isSelected={selectedPath === linkTo}
      onClick={() => linkClickHandler(linkTo)}
    >
      {label}
    </DashboardLinkStyled>
  );
};

export default SingleSectionLink;
