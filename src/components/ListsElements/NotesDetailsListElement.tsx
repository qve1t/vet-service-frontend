import { NoteInterface } from "../../api/interfaces/note";

import {
  NoteElementWrapper,
  NoteSectionDivider,
  ListElementSecondaryText,
} from "./styledComponents";

interface NoteListElementInterface {
  listElement: NoteInterface;
}

const NoteDetailsListElement = ({ listElement }: NoteListElementInterface) => {
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
      <NoteSectionDivider />
      <ListElementSecondaryText>{listElement?.text}</ListElementSecondaryText>
    </NoteElementWrapper>
  );
};

export default NoteDetailsListElement;
