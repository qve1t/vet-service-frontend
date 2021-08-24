import { useState, useEffect } from "react";
import { LoadingStateInterface } from "../../api/interfaces/fetch";
import { PetListInterface } from "../../api/interfaces/pet";
import { getPetsListAPI } from "../../api/pet";
import { MainAreaHeader } from "../Dashboard/MainArea/styledComponents";
import ErrorComponent from "../ErrorComponent";
import { PetsListElement } from "../ListsElements";
import LoadingComponent from "../LoadingComponent";

const PetsListPanel = () => {
  const [petsList, setPetsList] = useState<PetListInterface[]>([]);
  const [loadingState, setLoadingState] = useState<LoadingStateInterface>({
    loading: true,
    error: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await getPetsListAPI({
        page: 0,
        limit: 20,
        name: "",
      });

      if (fetchedData.response) {
        setLoadingState({ loading: false, error: "" });
        setPetsList(fetchedData.response.results);
      } else {
        setLoadingState({ loading: false, error: fetchedData.error });
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <MainAreaHeader>List of pets</MainAreaHeader>
      <div>
        {loadingState.loading ? (
          <LoadingComponent />
        ) : loadingState.error ? (
          <ErrorComponent errorMessage={loadingState.error} />
        ) : (
          petsList.map((elem) => (
            <PetsListElement listElement={elem} key={elem.id} />
          ))
        )}
      </div>
    </>
  );
};

export default PetsListPanel;
