import { useState, useEffect } from "react";
import { LoadingStateInterface } from "../../api/interfaces/fetch";
import { OwnerListInterface } from "../../api/interfaces/owner";
import { getOwnersListAPI } from "../../api/owner";
import { MainAreaHeader } from "../Dashboard/MainArea/styledComponents";
import ErrorComponent from "../ErrorComponent";
import { OwnersListElement } from "../ListsElements";
import LoadingComponent from "../LoadingComponent";

const OwnersListPanel = () => {
  const [ownersList, setOwnersList] = useState<OwnerListInterface[]>([]);
  const [loadingState, setLoadingState] = useState<LoadingStateInterface>({
    loading: true,
    error: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await getOwnersListAPI({
        page: 0,
        limit: 20,
        nameSurname: "",
      });

      if (fetchedData.response) {
        setLoadingState({ loading: false, error: "" });
        setOwnersList(fetchedData.response.results);
      } else {
        setLoadingState({ loading: false, error: fetchedData.error });
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <MainAreaHeader>List of owners</MainAreaHeader>
      <div>
        {loadingState.loading ? (
          <LoadingComponent />
        ) : loadingState.error ? (
          <ErrorComponent errorMessage={loadingState.error} />
        ) : (
          ownersList.map((elem) => (
            <OwnersListElement listElement={elem} key={elem.id} />
          ))
        )}
      </div>
    </>
  );
};

export default OwnersListPanel;
