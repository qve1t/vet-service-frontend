import { useState, useEffect } from "react";
import { LoadingStateInterface } from "../../api/interfaces/fetch";
import { PetListInterface } from "../../api/interfaces/pet";
import { getPetsListAPI } from "../../api/pet";
import { PageStateInterface } from "../../interfaces/PageStateInterface";
import { UseLoggedUserState } from "../../modules/LoggedUserModule";
import { MainAreaHeader } from "../Dashboard/MainArea/styledComponents";
import SearchListInput from "../Inputs/SearchListInput";
import { PetsListComponent } from "../ListDisplayComponent";
import PaginationComponent from "../PaginationComponent";
import { HorizontalDivider } from "./styledComponents";

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

  return (
    <>
      <MainAreaHeader>List of pets</MainAreaHeader>
      <SearchListInput pageState={pageState} setPageState={setPageState} />
      <HorizontalDivider />
      <PetsListComponent
        loadingState={loadingState}
        petsList={petsList}
        customEmptyText="You have not registered any patients yet"
      />
      <PaginationComponent
        count={pageState.elementsCount}
        pageState={pageState}
        setPageState={setPageState}
      />
    </>
  );
};

export default PetsListPanel;
