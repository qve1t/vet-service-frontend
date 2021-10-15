import { OwnerListInterface } from "../../../api/interfaces/owner";

import {
  ListElementWrapperLink,
  ListElementMainText,
  ListElementSecondaryText,
} from "../styledComponents";

interface OwnersListElementInterface {
  listElement: OwnerListInterface;
  width?: string;
}

const OwnersListElement = ({
  listElement,
  width,
}: OwnersListElementInterface) => {
  return (
    <ListElementWrapperLink
      to={`/dashboard/owners/${listElement?.id}`}
      width={width}
    >
      <ListElementMainText style={{ flex: 1 }}>
        {listElement?.surname}
      </ListElementMainText>
      <ListElementSecondaryText style={{ flex: 5 }}>
        {listElement?.name}
      </ListElementSecondaryText>
    </ListElementWrapperLink>
  );
};

export default OwnersListElement;
