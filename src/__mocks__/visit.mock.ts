import { FetchResponse } from "../api/interfaces/fetch";
import { VisitListReponse } from "../api/interfaces/visit";

const visitsList: VisitListReponse = [
  {
    id: "visit1",
    dateTime: new Date(),
    name: "visit1",
  },
  {
    id: "visit2",
    dateTime: new Date(),
    name: "visit2",
  },
];

export const GetVisitsResponseMock: FetchResponse<VisitListReponse> = {
  response: visitsList,
  error: null,
};

export const GetNoVisitsResponseMock: FetchResponse<VisitListReponse> = {
  response: [],
  error: null,
};
