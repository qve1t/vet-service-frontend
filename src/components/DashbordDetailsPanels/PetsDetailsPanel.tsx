import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { LoadingStateInterface } from "../../api/interfaces/fetch";
import { PetInterface } from "../../api/interfaces/pet";
import { getPetDetailsAPI } from "../../api/pet";

import { MainAreaHeader } from "../Dashboard/MainArea/styledComponents";
import ErrorComponent from "../ErrorComponent";
import LoadingComponent from "../LoadingComponent";

interface PathParamsInterface {
  id: string;
}

const PetsDetailsPanel = () => {
  const { id } = useParams<PathParamsInterface>();
  const [data, setData] = useState<PetInterface | null>(null);
  const [loadingState, setLoadingState] = useState<LoadingStateInterface>({
    loading: true,
    error: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await getPetDetailsAPI(id);

      if (fetchedData.response) {
        setLoadingState({ loading: false, error: "" });
        setData(fetchedData.response);
      } else {
        setLoadingState({ loading: false, error: fetchedData.error });
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      <MainAreaHeader>Pet details</MainAreaHeader>
      <div>
        {loadingState.loading ? (
          <LoadingComponent />
        ) : loadingState.error ? (
          <ErrorComponent errorMessage={loadingState.error} />
        ) : (
          <>{JSON.stringify(data)}</>
        )}
      </div>
    </>
  );
};

export default PetsDetailsPanel;
