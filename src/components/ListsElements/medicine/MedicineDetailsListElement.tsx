import {
  DeleteIcon,
  IconWrapper,
  ListElementMainText,
  ListElementSecondaryText,
  ListElementWrapperLink,
} from "../styledComponents";

import Trash from "../../../icons/trash.svg";

interface MedicineListElementInterface {
  name: string;
  count: number;
  id: string;
  enableDelete?: boolean;
  width?: string;
}

const MedicineDetailsListElement = ({
  name,
  count,
  id,
  width,
  enableDelete = false,
}: MedicineListElementInterface) => {
  return (
    <ListElementWrapperLink to={`/dashboard/medicines/${id}`} width={width}>
      {enableDelete && (
        <IconWrapper
          onClick={() => console.log("abc")}
          style={{ marginTop: "5px" }}
        >
          <DeleteIcon src={Trash} />
        </IconWrapper>
      )}
      <ListElementMainText>{name}</ListElementMainText>
      <ListElementSecondaryText>{`Amount: ${count}`}</ListElementSecondaryText>
    </ListElementWrapperLink>
  );
};

export default MedicineDetailsListElement;
