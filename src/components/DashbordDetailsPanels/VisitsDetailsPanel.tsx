import { useParams } from "react-router";

import { MainAreaHeader } from "../Dashboard/MainArea/styledComponents";

interface PathParamsInterface {
  id: string;
}

const VisitsDetailsPanel = () => {
  const { id } = useParams<PathParamsInterface>();
  return (
    <>
      <MainAreaHeader>Pet details</MainAreaHeader>
      <div>{id}</div>
    </>
  );
};

export default VisitsDetailsPanel;