import { useState, useEffect } from "react";
import { LoadingStateInterface } from "../../api/interfaces/fetch";
import { MedicineListInterface } from "../../api/interfaces/medicine";
import { getMedicinesListApi } from "../../api/medicine";
import { PageStateInterface } from "../../interfaces/PageStateInterface";
import { UseLoggedUserState } from "../../modules/LoggedUserModule";
import { MainAreaHeader } from "../Dashboard/MainArea/styledComponents";
import SearchListInput from "../Inputs/SearchListInput";
import { MedicinesListComponent } from "../ListDisplayComponent";
import PaginationComponent from "../PaginationComponent";
import { HorizontalDivider } from "./styledComponents";

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

  return (
    <>
      <MainAreaHeader>List of medicines</MainAreaHeader>
      <SearchListInput pageState={pageState} setPageState={setPageState} />
      <HorizontalDivider />
      <MedicinesListComponent
        loadingState={loadingState}
        medicinesList={medicinesList}
        customEmptyText="You do not have any medicines registeres"
      />
      <PaginationComponent
        count={pageState.elementsCount}
        pageState={pageState}
        setPageState={setPageState}
      />
    </>
  );
};

export default MedicinesListPanel;
