import { FetchResponse } from "../api/interfaces/fetch";
import { NoteListResponse } from "../api/interfaces/note";

const notesList: NoteListResponse = {
  results: [
    {
      id: "note1",
      text: "note1",
      dateTime: new Date(),
      petNote: null as any,
      ownerNote: null as any,
    },
    {
      id: "note2",
      text: "note2",
      dateTime: new Date(),
      petNote: null as any,
      ownerNote: null as any,
    },
  ],
  count: 2,
};

export const GetNotesResponseMock: FetchResponse<NoteListResponse> = {
  response: notesList,
  error: null,
};

export const GetNoNotesResponseMock: FetchResponse<NoteListResponse> = {
  response: { results: [], count: 0 },
  error: null,
};
