import { useState, useEffect, useReducer } from "react";
import { LoadingStateInterface } from "../../api/interfaces/fetch";
import { NoteListInterface } from "../../api/interfaces/note";
import { getNotesListApi } from "../../api/note";
import { PageStateInterface } from "../../interfaces/PageStateInterface";
import { UseLoggedUserState } from "../../modules/LoggedUserModule";
import { MainAreaHeader } from "../Dashboard/MainArea/styledComponents";
import SearchListInput from "../Inputs/SearchListInput";
import { NotesListComponent } from "../ListDisplayComponent";
import PaginationComponent from "../PaginationComponent";
import { HorizontalDivider, HorizontalWrapper } from "./styledComponents";

const NotesListDefault = () => {
  const { itemsPerPage } = UseLoggedUserState();
  const [notesList, setNotesList] = useState<NoteListInterface[]>([]);
  const [pageState, setPageState] = useState<PageStateInterface>({
    currentPage: 0,
    elementsCount: 0,
    searchText: "",
  });
  const [loadingState, setLoadingState] = useState<LoadingStateInterface>({
    loading: true,
    error: "",
  });
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await getNotesListApi({
        page: pageState.currentPage,
        limit: itemsPerPage,
        text: pageState.searchText,
      });

      if (fetchedData.response) {
        setLoadingState({ loading: false, error: "" });
        setPageState({
          currentPage: pageState.currentPage,
          searchText: pageState.searchText,
          elementsCount: fetchedData.response.count,
        });
        setNotesList(fetchedData.response.results);
      } else {
        setLoadingState({ loading: false, error: fetchedData.error });
      }
    };

    fetchData();
  }, [itemsPerPage, pageState.currentPage, pageState.searchText, ignored]);

  return (
    <>
      <MainAreaHeader>List of notes</MainAreaHeader>
      <SearchListInput pageState={pageState} setPageState={setPageState} />
      <HorizontalDivider />
      <HorizontalWrapper>
        <NotesListComponent
          forceUpdate={forceUpdate}
          loadingState={loadingState}
          notesList={notesList}
          customEmptyText="You do not have any notes"
        />
      </HorizontalWrapper>
      <PaginationComponent
        count={pageState.elementsCount}
        pageState={pageState}
        setPageState={setPageState}
      />
    </>
  );
};

export default NotesListDefault;
