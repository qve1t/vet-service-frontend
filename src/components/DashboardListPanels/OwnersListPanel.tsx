import { useState, useEffect } from "react";
import { LoadingStateInterface } from "../../api/interfaces/fetch";
import { OwnerListInterface } from "../../api/interfaces/owner";
import { getOwnersListAPI } from "../../api/owner";
import { PageStateInterface } from "../../interfaces/PageStateInterface";
import { UseLoggedUserState } from "../../modules/LoggedUserModule";
import { MainAreaHeader } from "../Dashboard/MainArea/styledComponents";
import SearchListInput from "../Inputs/SearchListInput";
import { OwnersListComponent } from "../ListDisplayComponent";
import PaginationComponent from "../PaginationComponent";
import { HorizontalDivider } from "./styledComponents";

const OwnersListPanel = () => {
  const { itemsPerPage } = UseLoggedUserState();
  const [ownersList, setOwnersList] = useState<OwnerListInterface[]>([]);
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
      const fetchedData = await getOwnersListAPI({
        page: pageState.currentPage,
        limit: itemsPerPage,
        nameSurname: pageState.searchText,
      });

      if (fetchedData.response) {
        setLoadingState({ loading: false, error: "" });
        setPageState({
          currentPage: pageState.currentPage,
          searchText: pageState.searchText,
          elementsCount: fetchedData.response.count,
        });
        setOwnersList(fetchedData.response.results);
      } else {
        setLoadingState({ loading: false, error: fetchedData.error });
      }
    };

    fetchData();
  }, [itemsPerPage, pageState.currentPage, pageState.searchText]);

  return (
    <>
      <MainAreaHeader>List of owners</MainAreaHeader>
      <SearchListInput pageState={pageState} setPageState={setPageState} />
      <HorizontalDivider />
      <OwnersListComponent
        loadingState={loadingState}
        ownersList={ownersList}
        customEmptyText="You have not registered any owners yet"
      />
      <PaginationComponent
        count={pageState.elementsCount}
        pageState={pageState}
        setPageState={setPageState}
      />
    </>
  );
};

export default OwnersListPanel;
