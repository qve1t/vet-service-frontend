import { useState, useEffect } from "react";
import { LoadingStateInterface } from "../../api/interfaces/fetch";
import { PetListInterface } from "../../api/interfaces/pet";
import { getPetsListAPI } from "../../api/pet";
import { UseLoggedUserState } from "../../modules/LoggedUserModule";
import { MainAreaHeader } from "../Dashboard/MainArea/styledComponents";
import { BaseInput } from "../Inputs";
import { PetsListComponent } from "../ListDisplayComponent";
import PaginationComponent from "../PaginationComponent";
import { HorizontalDivider } from "./styledComponents";

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
      currentPage: 0,
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
        noMargin={true}
        onBlur={(event) => setText(event.target.value)}
        onKeyPress={(event) => setTextOnEnter(event)}
      />
      <HorizontalDivider />
      <PetsListComponent loadingState={loadingState} petsList={petsList} />
      <PaginationComponent
        count={pageState.elementsCount}
        currentPage={pageState.currentPage}
        setPage={setPage}
      />
    </>
  );
};

export default PetsListPanel;
