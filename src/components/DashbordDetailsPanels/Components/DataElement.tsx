import { FormLabel } from "../../Inputs";
import {
  ElementDataParagraph,
  SingleElementWrapper,
} from "../styledComponents";

interface DataElementInterface {
  label: string;
  displayData: any;
  width?: string;
}

const DataElement = ({ label, displayData, width }: DataElementInterface) => {
  return (
    <SingleElementWrapper>
      <FormLabel>{label}</FormLabel>
      <ElementDataParagraph width={width} hasData={displayData !== null}>
        {displayData}
      </ElementDataParagraph>
    </SingleElementWrapper>
  );
};

export default DataElement;
