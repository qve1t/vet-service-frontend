import {
  ListElementWrapperLink,
  ListElementMainText,
  ListElementSecondaryText,
} from "./styledComponents";

interface PetDetailsListElementInterface {
  listElement: { id: string; name: string; type: string };
  width?: string;
}

const PetListElement = ({
  listElement,
  width,
}: PetDetailsListElementInterface) => {
  return (
    <ListElementWrapperLink
      to={`/dashboard/pets/${listElement?.id}`}
      width={width}
    >
      <ListElementMainText>{listElement?.name}</ListElementMainText>
      <ListElementSecondaryText>{listElement?.type}</ListElementSecondaryText>
    </ListElementWrapperLink>
  );
};

export default PetListElement;
