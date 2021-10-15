import { MedicineListInterface } from "../../../api/interfaces/medicine";

import {
  ListElementWrapperLink,
  ListElementMainText,
  ListElementSecondaryText,
} from "../styledComponents";

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
      <ListElementMainText style={{ flex: 1 }}>
        {listElement.name}
      </ListElementMainText>
      <ListElementSecondaryText
        style={{ flex: 1 }}
      >{`Supply: ${listElement.count}`}</ListElementSecondaryText>
      <ListElementSecondaryText
        style={{ flex: 4 }}
      >{`Magazine: ${listElement.magazineCount}`}</ListElementSecondaryText>
    </ListElementWrapperLink>
  );
};

export default MedicineListElement;
