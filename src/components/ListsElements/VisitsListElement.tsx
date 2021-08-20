import { VisitListInterface } from "../../api/interfaces/visit";

import {
  ListElementWrapperLink,
  ListElementMainText,
  ListElementSecondaryText,
} from "./styledComponents";

interface VisitsListElementInterface {
  listElement: VisitListInterface;
}

const VisitsListElement = ({ listElement }: VisitsListElementInterface) => {
  return (
    <ListElementWrapperLink to={`/dashboard/visits/${listElement.id}`}>
      <ListElementMainText>{listElement.dateTime}</ListElementMainText>
      <ListElementSecondaryText>{listElement.name}</ListElementSecondaryText>
    </ListElementWrapperLink>
  );
};

export default VisitsListElement;
