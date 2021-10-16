import Loader from "../../icons/loader.svg";

import { LoaderImg, LoaderWrapper } from "./styledComponents";

const LoadingComponent = () => {
  return (
    <LoaderWrapper>
      <LoaderImg src={Loader} alt="Loading..." />
    </LoaderWrapper>
  );
};

export default LoadingComponent;
