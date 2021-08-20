import { OwnerListInterface } from "../../api/interfaces/owner";

import {
  ListElementWrapperLink,
  ListElementMainText,
  ListElementSecondaryText,
} from "./styledComponents";

interface OwnersListElementInterface {
  listElement: OwnerListInterface;
}

const OwnersListElement = ({ listElement }: OwnersListElementInterface) => {
  return (
    <ListElementWrapperLink to={`/dashboard/owners/${listElement.id}`}>
      <ListElementMainText>{listElement.surname}</ListElementMainText>
      <ListElementSecondaryText>{listElement.name}</ListElementSecondaryText>
    </ListElementWrapperLink>
  );
};

export default OwnersListElement;
