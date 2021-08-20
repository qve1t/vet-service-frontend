import { PetListInterface } from "../../api/interfaces/pet";

import {
  ListElementWrapperLink,
  ListElementMainText,
  ListElementSecondaryText,
  ListElementLink,
} from "./styledComponents";

interface PetListElementInterface {
  listElement: PetListInterface;
}

const PetListElement = ({ listElement }: PetListElementInterface) => {
  return (
    <ListElementWrapperLink to={`/dashboard/pets/${listElement.id}`}>
      <ListElementMainText>{listElement.name}</ListElementMainText>
      <ListElementSecondaryText>{listElement.type}</ListElementSecondaryText>
      <ListElementLink
        to={`/dashboard/owners/${listElement.owner?.id}`}
      >{`${listElement.owner?.name} ${listElement.owner?.surname}`}</ListElementLink>
    </ListElementWrapperLink>
  );
};

export default PetListElement;