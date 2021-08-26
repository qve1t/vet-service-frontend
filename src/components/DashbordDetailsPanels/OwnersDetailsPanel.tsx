import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { LoadingStateInterface } from "../../api/interfaces/fetch";
import { OwnerInterface } from "../../api/interfaces/owner";
import { getOwnerDetailsAPI } from "../../api/owner";

import { MainAreaHeader } from "../Dashboard/MainArea/styledComponents";
import ErrorComponent from "../ErrorComponent";
import LoadingComponent from "../LoadingComponent";

interface PathParamsInterface {
  id: string;
}

const OwnerDetailsPanel = () => {
  const { id } = useParams<PathParamsInterface>();
  const [data, setData] = useState<OwnerInterface | null>(null);
  const [loadingState, setLoadingState] = useState<LoadingStateInterface>({
    loading: true,
    error: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await getOwnerDetailsAPI(id);

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
      <MainAreaHeader>Owner details</MainAreaHeader>
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

export default OwnerDetailsPanel;
