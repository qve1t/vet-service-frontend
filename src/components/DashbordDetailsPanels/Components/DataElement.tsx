import { FormLabel } from "../../Inputs";
import {
  ElementDataParagraph,
  SingleElementWrapper,
} from "../styledComponents";

interface DataElementInterface {
  label: string;
  displayData: any;
  width?: string;
  marginTop?: string;
}

const DataElement = ({
  label,
  displayData,
  width,
  marginTop,
}: DataElementInterface) => {
  return (
    <SingleElementWrapper>
      <FormLabel marginTop={marginTop}>{label}</FormLabel>
      <ElementDataParagraph width={width} hasData={displayData !== null}>
        {displayData}
      </ElementDataParagraph>
    </SingleElementWrapper>
  );
};

export default DataElement;
