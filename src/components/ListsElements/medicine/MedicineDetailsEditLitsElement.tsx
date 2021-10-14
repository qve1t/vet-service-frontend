import {
  DeleteIcon,
  IconWrapper,
  ListElementMainText,
  NoBackgroundWrapper,
} from "../styledComponents";

import Trash from "../../../icons/trash.svg";
import { BaseInput } from "../../Inputs";

interface MedicineListElementInterface {
  name: string;
  count: number;
  index: number;
  onDelete: () => void;
  onCountChange: (index: number, value: string) => void;
}

const MedicineDetailsEditListElement = ({
  name,
  count,
  index,
  onDelete,
  onCountChange,
}: MedicineListElementInterface) => {
  return (
    <NoBackgroundWrapper>
      <IconWrapper onClick={onDelete} style={{ marginTop: "5px" }}>
        <DeleteIcon src={Trash} />
      </IconWrapper>

      <ListElementMainText>{name}</ListElementMainText>
      <BaseInput
        style={{
          marginBottom: "0",
          marginLeft: "auto",
          marginRight: "50px",
          padding: "5px 10px",
        }}
        value={count}
        onChange={(event) => onCountChange(index, event.target.value)}
        pattern="/^[0-9]+$/"
        type="number"
        width="50px"
      />
    </NoBackgroundWrapper>
  );
};

export default MedicineDetailsEditListElement;
