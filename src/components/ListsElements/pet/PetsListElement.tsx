import { PetListInterface } from "../../../api/interfaces/pet";

import {
  ListElementWrapperLink,
  ListElementMainText,
  ListElementSecondaryText,
  ListElementLink,
} from "../styledComponents";

interface PetListElementInterface {
  listElement: PetListInterface;
}

const PetListElement = ({ listElement }: PetListElementInterface) => {
  return (
    <ListElementWrapperLink to={`/dashboard/pets/${listElement?.id}`}>
      <ListElementMainText style={{ flex: 1 }}>
        {listElement?.name}
      </ListElementMainText>
      <ListElementSecondaryText style={{ flex: 1 }}>
        {listElement?.type}
      </ListElementSecondaryText>
      {listElement?.owner && (
        <ListElementLink
          to={`/dashboard/owners/${listElement?.owner?.id}`}
          style={{ flex: 4 }}
        >{`${listElement?.owner?.name} ${listElement?.owner?.surname}`}</ListElementLink>
      )}
    </ListElementWrapperLink>
  );
};

export default PetListElement;
