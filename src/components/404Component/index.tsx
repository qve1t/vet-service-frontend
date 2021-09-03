import { TextWrapper, LargeSpan, GreenSpan } from "./styledComponents";

export const NoDataComponent = () => {
  return (
    <TextWrapper>
      <LargeSpan>
        40<GreenSpan>4</GreenSpan>
      </LargeSpan>{" "}
      Page not found
    </TextWrapper>
  );
};

export default NoDataComponent;
