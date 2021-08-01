import { FetchResponse } from "../api/interfaces/fetch";

export const apiResponse = (jsonResponse: any): FetchResponse<any> => {
  if (!jsonResponse.ok) {
    return {
      error: jsonResponse.message,
      response: null,
    };
  }

  return {
    error: null,
    response: jsonResponse,
  };
};
