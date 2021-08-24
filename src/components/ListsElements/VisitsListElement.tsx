import { VisitListInterface } from "../../api/interfaces/visit";
import { UseLoggedUserActions } from "../../modules/LoggedUserModule";

import {
  ListElementWrapperLink,
  ListElementMainText,
  ListElementSecondaryText,
} from "./styledComponents";

interface VisitsListElementInterface {
  listElement: VisitListInterface;
}

const VisitsListElement = ({ listElement }: VisitsListElementInterface) => {
  const { setSelectedPage } = UseLoggedUserActions();
  return (
    <ListElementWrapperLink
      to={`/dashboard/visits/${listElement.id}`}
      onClick={() => setSelectedPage("/dashboard/visits")}
    >
      <ListElementMainText>{listElement.dateTime}</ListElementMainText>
      <ListElementSecondaryText>{listElement.name}</ListElementSecondaryText>
    </ListElementWrapperLink>
  );
};

export default VisitsListElement;
