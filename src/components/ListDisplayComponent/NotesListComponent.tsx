import { LoadingStateInterface } from "../../api/interfaces/fetch";
import { NoteListInterface } from "../../api/interfaces/note";
import EmptyDataComponent from "../EmptyDataComponent";
import ErrorComponent from "../ErrorComponent";
import { NoteListElement } from "../ListsElements";
import LoadingComponent from "../LoadingComponent";

interface DataComponentInterface {
  loadingState: LoadingStateInterface;
  notesList: NoteListInterface[];
  forceUpdate: () => void;
}

const NotesListComponent = ({
  loadingState,
  notesList,
  forceUpdate,
}: DataComponentInterface) => {
  if (loadingState.loading) {
    return <LoadingComponent />;
  }

  if (loadingState.error) {
    return <ErrorComponent errorMessage={loadingState.error} />;
  }

  if (notesList.length <= 0) {
    return <EmptyDataComponent textInInfo="notes" />;
  }
  return (
    <>
      {notesList.map((elem) => (
        <NoteListElement
          listElement={elem}
          refreshFunction={forceUpdate}
          key={elem.id}
        />
      ))}
    </>
  );
};

export default NotesListComponent;
