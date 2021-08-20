import { useParams } from "react-router";

import { MainAreaHeader } from "../Dashboard/MainArea/styledComponents";

interface PathParamsInterface {
  id: string;
}

const OwnerDetailsPanel = () => {
  const { id } = useParams<PathParamsInterface>();
  return (
    <>
      <MainAreaHeader>Owner details</MainAreaHeader>
      <div>{id}</div>
    </>
  );
};

export default OwnerDetailsPanel;
