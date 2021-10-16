import { useState, useEffect } from "react";
import { LoadingStateInterface } from "../../api/interfaces/fetch";
import { MedicineListInterface } from "../../api/interfaces/medicine";
import { getMedicinesListApi } from "../../api/medicine";
import { UseLoggedUserState } from "../../modules/LoggedUserModule";
import { MainAreaHeader } from "../Dashboard/MainArea/styledComponents";
import { BaseInput } from "../Inputs";
import { MedicinesListComponent } from "../ListDisplayComponent";
import PaginationComponent from "../PaginationComponent";
import { HorizontalDivider } from "./styledComponents";

interface PageStateInterface {
  currentPage: number;
  elementsCount: number;
  searchText: string;
}

const MedicinesListPanel = () => {
  const { itemsPerPage } = UseLoggedUserState();
  const [medicinesList, setMedicinesList] = useState<MedicineListInterface[]>(
    [],
  );
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
      const fetchedData = await getMedicinesListApi({
        page: pageState.currentPage,
        limit: itemsPerPage,
        searchText: pageState.searchText,
      });

      if (fetchedData.response) {
        setLoadingState({ loading: false, error: "" });
        setPageState({
          currentPage: pageState.currentPage,
          searchText: pageState.searchText,
          elementsCount: fetchedData.response.count,
        });
        setMedicinesList(fetchedData.response.results);
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
      <MainAreaHeader>List of medicines</MainAreaHeader>
      <BaseInput
        placeholder="Search..."
        width="40%"
        noMargin={true}
        onBlur={(event) => setText(event.target.value)}
        onKeyPress={(event) => setTextOnEnter(event)}
      />
      <HorizontalDivider />
      <MedicinesListComponent
        loadingState={loadingState}
        medicinesList={medicinesList}
        customEmptyText="You do not have any medicines registeres"
      />
      <PaginationComponent
        count={pageState.elementsCount}
        currentPage={pageState.currentPage}
        setPage={setPage}
      />
    </>
  );
};

export default MedicinesListPanel;
