import { useState, useEffect } from "react";
import { LoadingStateInterface } from "../../api/interfaces/fetch";
import { OwnerListInterface } from "../../api/interfaces/owner";
import { getOwnersListAPI } from "../../api/owner";
import { UseLoggedUserState } from "../../modules/LoggedUserModule";
import { MainAreaHeader } from "../Dashboard/MainArea/styledComponents";
import { BaseInput } from "../Inputs";
import { OwnersListComponent } from "../ListDisplayComponent";
import PaginationComponent from "../PaginationComponent";
import { HorizontalDivider } from "./styledComponents";

interface PageStateInterface {
  currentPage: number;
  elementsCount: number;
  searchText: string;
}

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
      <MainAreaHeader>List of owners</MainAreaHeader>
      <BaseInput
        placeholder="Search..."
        width="40%"
        noMargin={true}
        onBlur={(event) => setText(event.target.value)}
        onKeyPress={(event) => setTextOnEnter(event)}
      />
      <HorizontalDivider />
      <OwnersListComponent
        loadingState={loadingState}
        ownersList={ownersList}
      />
      <PaginationComponent
        count={pageState.elementsCount}
        currentPage={pageState.currentPage}
        setPage={setPage}
      />
    </>
  );
};

export default OwnersListPanel;
