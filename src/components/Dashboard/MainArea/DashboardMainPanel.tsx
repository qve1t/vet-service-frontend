import { useState, useEffect, useReducer } from "react";
import { getDayNotesApi } from "../../../api/note";
import {
  getCurrentDayBeginning,
  getCurrentDayEnd,
} from "../../../utils/getCurrentDate";
import { LoadingStateInterface } from "../../../api/interfaces/fetch";
import { NoteListInterface } from "../../../api/interfaces/note";
import { MainAreaHeader, HorizontalWrapper } from "./styledComponents";
import { VisitListInterface } from "../../../api/interfaces/visit";
import { getVisitsListAPI } from "../../../api/visit";
import {
  NotesListComponent,
  VisitsListComponent,
} from "../../ListDisplayComponent";

const DashboardMainPanel = () => {
  const [notesList, setNotesList] = useState<NoteListInterface[]>([]);
  const [visitsList, setVisitsList] = useState<VisitListInterface[]>([]);
  const [loadingNotesState, setLoadingNotesState] =
    useState<LoadingStateInterface>({
      loading: true,
      error: "",
    });
  const [loadingVisitsState, setLoadingVisitsState] =
    useState<LoadingStateInterface>({
      loading: true,
      error: "",
    });
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    // add cashing data
    const fetchNotesData = async () => {
      const fetchedData = await getDayNotesApi({
        startDate: getCurrentDayBeginning(),
        endDate: getCurrentDayEnd(),
      });

      if (fetchedData.response) {
        setLoadingNotesState({ loading: false, error: "" });
        setNotesList(fetchedData.response.results);
      } else {
        setLoadingNotesState({ loading: false, error: fetchedData.error });
      }
    };

    const fetchVisitsData = async () => {
      const fetchedData = await getVisitsListAPI({
        startDate: getCurrentDayBeginning(),
        endDate: getCurrentDayEnd(),
      });

      if (fetchedData.response) {
        setLoadingVisitsState({ loading: false, error: "" });
        setVisitsList(
          fetchedData.response.sort(
            (a, b) =>
              new Date(a.dateTime).getTime() - new Date(b.dateTime).getTime(),
          ),
        );
      } else {
        setLoadingVisitsState({ loading: false, error: fetchedData.error });
      }
    };

    fetchNotesData();
    fetchVisitsData();
  }, [ignored]);

  return (
    <>
      <MainAreaHeader>Notes for Today</MainAreaHeader>
      <HorizontalWrapper>
        <NotesListComponent
          forceUpdate={forceUpdate}
          loadingState={loadingNotesState}
          notesList={notesList}
        />
      </HorizontalWrapper>
      <MainAreaHeader>Visits for Today</MainAreaHeader>
      <VisitsListComponent
        loadingState={loadingVisitsState}
        visitsList={visitsList}
      />
    </>
  );
};

export default DashboardMainPanel;
