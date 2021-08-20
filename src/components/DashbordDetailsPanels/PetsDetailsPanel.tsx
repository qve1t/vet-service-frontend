import { useParams } from "react-router";

import { MainAreaHeader } from "../Dashboard/MainArea/styledComponents";

interface PathParamsInterface {
  id: string;
}

const PetsDetailsPanel = () => {
  const { id } = useParams<PathParamsInterface>();
  return (
    <>
      <MainAreaHeader>Pet details</MainAreaHeader>
      <div>{id}</div>
    </>
  );
};

export default PetsDetailsPanel;
