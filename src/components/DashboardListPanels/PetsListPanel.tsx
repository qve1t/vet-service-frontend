import { useState, useEffect } from "react";
import { LoadingStateInterface } from "../../api/interfaces/fetch";
import { PetListInterface } from "../../api/interfaces/pet";
import { getPetsListAPI } from "../../api/pet";
import { UseLoggedUserState } from "../../modules/LoggedUserModule";
import { MainAreaHeader } from "../Dashboard/MainArea/styledComponents";
import ErrorComponent from "../ErrorComponent";
import { BaseInput } from "../Inputs";
import { PetsListElement } from "../ListsElements";
import LoadingComponent from "../LoadingComponent";
import PaginationComponent from "../PaginationComponent";

interface PageStateInterface {
  currentPage: number;
  elementsCount: number;
  searchText: string;
}

const PetsListPanel = () => {
  const { itemsPerPage } = UseLoggedUserState();
  const [petsList, setPetsList] = useState<PetListInterface[]>([]);
  const [pageState, setPageState] = useState<PageStateInterface>({
    currentPage: 0,
    elementsCount: 0,
    searchText: "",
  });
  const [loadingState, setLoadingState] = useState<LoadingStateInterface>({
    loading: true,
    error: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await getPetsListAPI({
        page: pageState.currentPage,
        limit: itemsPerPage,
        name: pageState.searchText,
      });

      if (fetchedData.response) {
        setLoadingState({ loading: false, error: "" });
        setPageState({
          currentPage: pageState.currentPage,
          searchText: pageState.searchText,
          elementsCount: fetchedData.response.count,
        });
        setPetsList(fetchedData.response.results);
      } else {
        setLoadingState({ loading: false, error: fetchedData.error });
      }
    };

    fetchData();
  }, [itemsPerPage, pageState.currentPage, pageState.searchText]);

  const setPage = (page: number) => {
    setPageState({
      ...pageState,
      currentPage: page,
    });
  };

  const setText = (text: string) => {
    setPageState({
      ...pageState,
      searchText: text,
    });
  };

  const setTextOnEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setText((event.target as HTMLInputElement).value);
    }
  };

  return (
    <>
      <MainAreaHeader>List of pets</MainAreaHeader>
      <BaseInput
        placeholder="Search..."
        width="40%"
        onBlur={(event) => setText(event.target.value)}
        onKeyPress={(event) => setTextOnEnter(event)}
      />
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
      <PaginationComponent
        count={pageState.elementsCount}
        currentPage={pageState.currentPage}
        setPage={setPage}
      />
    </>
  );
};

export default PetsListPanel;
