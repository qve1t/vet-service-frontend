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
  console.log(listElement);
  return (
    <ListElementWrapperLink to={`/dashboard/pets/${listElement.id}`}>
      <ListElementMainText>{listElement.name}</ListElementMainText>
      <ListElementSecondaryText>{listElement.type}</ListElementSecondaryText>
      {listElement.owner && (
        <ListElementLink
          to={`/dashboard/owners/${listElement.owner?.id}`}
        >{`${listElement.owner?.name} ${listElement.owner?.surname}`}</ListElementLink>
      )}
    </ListElementWrapperLink>
  );
};

export default PetListElement;
