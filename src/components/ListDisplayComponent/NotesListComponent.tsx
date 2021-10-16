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
  customEmptyText?: string;
}

const NotesListComponent = ({
  loadingState,
  notesList,
  forceUpdate,
  customEmptyText,
}: DataComponentInterface) => {
  if (loadingState.loading) {
    return <LoadingComponent />;
  }

  if (loadingState.error) {
    return <ErrorComponent errorMessage={loadingState.error} />;
  }

  if (notesList.length <= 0) {
    return (
      <EmptyDataComponent textInInfo="notes" customText={customEmptyText} />
    );
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
