export interface VisitInterface {
  dateTime: Date;
  name: string;
  note: string | null;
  interview: string | null;
  description: string | null;
  healing: string | null;
  petOnVisit: { id: string; name: string; type: string };
  ownerOnVisit: { id: string; name: string; surname: string };
}

export interface VisitRegisterInterface {
  dateTime: Date;
  name: string;
  note?: string;
  interview?: string;
  description?: string;
  healing?: string;
  ownerId: string;
  petId: string;
}

export interface VisitUPdateInterface {
  id: string;
  dateTime: Date;
  name: string;
  note?: string;
  interview?: string;
  description?: string;
  healing?: string;
}

export interface VisitGetQuery {
  startDate: Date;
  endDate: Date;
}

export interface VisitListInterface {
  id: string;
  dateTime: Date;
  name: string;
}

export interface VisitRegisterResponse {
  id: string;
  status: string;
}

export type VisitUpdateResponse = VisitRegisterResponse;

export type VisitDeleteResponse = VisitRegisterResponse;

export type VisitListReponse = VisitListInterface[];
