import {
  ListElementMainText,
  ListElementSecondaryText,
  ListElementWrapperLink,
} from "../styledComponents";

interface MedicineListElementInterface {
  name: string;
  count: number;
  id: string;
  width?: string;
}

const MedicineDetailsListElement = ({
  name,
  count,
  id,
  width,
}: MedicineListElementInterface) => {
  return (
    <ListElementWrapperLink to={`/dashboard/medicines/${id}`} width={width}>
      <ListElementMainText>{name}</ListElementMainText>
      <ListElementSecondaryText>{`Amount: ${count}`}</ListElementSecondaryText>
    </ListElementWrapperLink>
  );
};

export default MedicineDetailsListElement;
