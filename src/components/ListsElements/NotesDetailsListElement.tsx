import { NoteInterface } from "../../api/interfaces/note";
import { deleteNoteApi } from "../../api/note";

import Trash from "../../icons/trash.svg";

import { UseDeletePopupActions } from "../../modules/DeletePopupModule";

import {
  NoteElementWrapper,
  NoteSectionDivider,
  ListElementSecondaryText,
  IconWrapper,
  DeleteIcon,
} from "./styledComponents";

interface NoteListElementInterface {
  listElement: NoteInterface;
  refreshFunction: () => void;
}

const NoteDetailsListElement = ({
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
      <NoteSectionDivider />
      <ListElementSecondaryText>{listElement?.text}</ListElementSecondaryText>
    </NoteElementWrapper>
  );
};

export default NoteDetailsListElement;
