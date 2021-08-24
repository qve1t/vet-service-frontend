import { ErrorWrapper, ErrorInfo, ErrorDescription } from "./styledComponents";

interface ErrorComponentPropsInterface {
  errorMessage?: string;
}

const ErrorComponent = ({
  errorMessage = "",
}: ErrorComponentPropsInterface) => {
  return (
    <ErrorWrapper>
      <ErrorInfo>Error appeared</ErrorInfo>
      <ErrorDescription>{errorMessage}</ErrorDescription>
    </ErrorWrapper>
  );
};

export default ErrorComponent;
