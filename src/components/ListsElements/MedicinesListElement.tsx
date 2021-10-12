import { MedicineListInterface } from "../../api/interfaces/medicine";

import {
  ListElementWrapperLink,
  ListElementMainText,
  ListElementSecondaryText,
} from "./styledComponents";

interface MedicineListElementInterface {
  listElement: MedicineListInterface;
  width?: string;
}

const MedicineListElement = ({
  listElement,
  width,
}: MedicineListElementInterface) => {
  return (
    <ListElementWrapperLink
      to={`/dashboard/medicines/${listElement?.id}`}
      width={width}
    >
      <ListElementMainText>{listElement.name}</ListElementMainText>
      <ListElementSecondaryText>{`Count: ${listElement.count}`}</ListElementSecondaryText>
      <ListElementSecondaryText>{`Magazine count: ${listElement.magazineCount}`}</ListElementSecondaryText>
    </ListElementWrapperLink>
  );
};

export default MedicineListElement;
