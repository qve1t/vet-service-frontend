export interface NoteInterface {
  id: string;
  text: string;
  dateTime: Date;
}

export interface NoteRegisterInterface {
  text: string;
  dateTime: Date;
  ownerId?: string;
  petId?: string;
}

export interface NoteUpdateInterface {
  id: string;
  text?: string;
  ownerId?: string;
  petId?: string;
}

export interface NoteQueryInterface {
  page: number;
  limit: number;
  text: string;
}

export interface NoteDayQuery {
  startDate: Date;
  endDate: Date;
}

export interface NoteListInterface {
  id: string;
  text: string;
  dateTime: Date;
  petNote: { id: string; name: string };
  ownerNote: { id: string; name: string; surname: string };
}

export interface NoteListResponse {
  results: NoteListInterface[];
  count: number;
}

export interface NoteRegisterResponse {
  id: string;
  status: string;
}

export type NoteUpdateResponse = NoteRegisterResponse;

export type NoteDeleteResponse = NoteRegisterResponse;
