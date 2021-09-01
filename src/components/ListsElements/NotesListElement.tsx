import { NoteListInterface } from "../../api/interfaces/note";

import {
  NoteElementWrapper,
  NoteSectionDivider,
  ListElementSecondaryText,
  ListElementLink,
} from "./styledComponents";

interface NoteListElementInterface {
  listElement: NoteListInterface;
}

const NoteListElement = ({ listElement }: NoteListElementInterface) => {
  console.log(listElement);
  return (
    <NoteElementWrapper>
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
