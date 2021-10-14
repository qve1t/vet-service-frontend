import { NoteListInterface } from "../../../api/interfaces/note";
import { deleteNoteApi } from "../../../api/note";

import Trash from "../../../icons/trash.svg";

import { UseDeletePopupActions } from "../../../modules/DeletePopupModule";

import {
  NoteElementWrapper,
  NoteSectionDivider,
  ListElementSecondaryText,
  ListElementLink,
  IconWrapper,
  DeleteIcon,
} from "../styledComponents";

interface NoteListElementInterface {
  listElement: NoteListInterface;
  refreshFunction: () => void;
}

const NoteListElement = ({
  listElement,
  refreshFunction,
}: NoteListElementInterface) => {
  const { showPopup } = UseDeletePopupActions();
  return (
    <NoteElementWrapper>
      <IconWrapper
        onClick={() =>
          showPopup(() => {
            deleteNoteApi(listElement.id);
            refreshFunction();
          })
        }
      >
        <DeleteIcon src={Trash} />
      </IconWrapper>
      <ListElementSecondaryText>
        {`${
          listElement.dateTime &&
          new Date(listElement.dateTime as Date).toLocaleDateString()
        } ${
          listElement.dateTime &&
          new Date(listElement.dateTime as Date).toLocaleTimeString([], {
            timeStyle: "short",
          })
        }`}
      </ListElementSecondaryText>
      {listElement?.ownerNote && (
        <ListElementLink
          to={`/dashboard/owners/${listElement?.ownerNote?.id}`}
        >{`${listElement?.ownerNote?.name} ${listElement?.ownerNote?.surname}`}</ListElementLink>
      )}
      {listElement?.petNote && (
        <ListElementLink
          to={`/dashboard/pets/${listElement?.petNote?.id}`}
        >{`${listElement?.petNote?.name}`}</ListElementLink>
      )}
      <NoteSectionDivider />
      <ListElementSecondaryText>{listElement?.text}</ListElementSecondaryText>
    </NoteElementWrapper>
  );
};

export default NoteListElement;
