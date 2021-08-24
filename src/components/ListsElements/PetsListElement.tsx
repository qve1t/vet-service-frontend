import { PetListInterface } from "../../api/interfaces/pet";
import { UseLoggedUserActions } from "../../modules/LoggedUserModule";

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
  const { setSelectedPage } = UseLoggedUserActions();
  return (
    <ListElementWrapperLink to={`/dashboard/pets/${listElement.id}`}>
      <ListElementMainText>{listElement.name}</ListElementMainText>
      <ListElementSecondaryText>{listElement.type}</ListElementSecondaryText>
      {listElement.owner && (
        <ListElementLink
          to={`/dashboard/owners/${listElement.owner?.id}`}
          onClick={() => setSelectedPage("/dashboard/owners")}
        >{`${listElement.owner?.name} ${listElement.owner?.surname}`}</ListElementLink>
      )}
    </ListElementWrapperLink>
  );
};

export default PetListElement;
