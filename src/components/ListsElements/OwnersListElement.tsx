import { OwnerListInterface } from "../../api/interfaces/owner";

import {
  ListElementWrapperLink,
  ListElementMainText,
  ListElementSecondaryText,
} from "./styledComponents";

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
      <ListElementMainText>{listElement?.surname}</ListElementMainText>
      <ListElementSecondaryText>{listElement?.name}</ListElementSecondaryText>
    </ListElementWrapperLink>
  );
};

export default OwnersListElement;
