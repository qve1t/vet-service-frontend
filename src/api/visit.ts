import { API_ADDRESS } from "../consts";
import { FetchResponse } from "./interfaces/fetch";
import { apiResponse, fetchError } from "../utils/apiResponse";
import {
  VisitDeleteResponse,
  VisitGetQuery,
  VisitInterface,
  VisitListReponse,
  VisitRegisterInterface,
  VisitRegisterResponse,
  VisitUPdateInterface,
  VisitUpdateResponse,
} from "./interfaces/visit";
import { refreshTokenWrapper } from "./refreshTokenWrapper";

export const getVisitsListAPI = async ({
  startDate,
  endDate,
}: VisitGetQuery): Promise<FetchResponse<VisitListReponse | null>> => {
  try {
    const response = await refreshTokenWrapper(() =>
      fetch(`${API_ADDRESS}/visit/?startDate=${startDate}&endDate=${endDate}`, {
        method: "get",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }),
    );
    const jsonResponse = await response.json();

    return apiResponse(response.ok, jsonResponse);
  } catch (error) {
    return fetchError(error as Error);
  }
};

export const getVisitDetailsAPI = async (
  visitId: string,
): Promise<FetchResponse<VisitInterface | null>> => {
  try {
    const response = await refreshTokenWrapper(() =>
      fetch(`${API_ADDRESS}/visit/${visitId}`, {
        method: "get",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }),
    );
    const jsonResponse = await response.json();

    return apiResponse(response.ok, jsonResponse);
  } catch (error) {
    return fetchError(error as Error);
  }
};

export const registerNewVisitAPI = async (
  registerData: VisitRegisterInterface,
): Promise<FetchResponse<VisitRegisterResponse | null>> => {
  try {
    const response = await refreshTokenWrapper(() =>
      fetch(`${API_ADDRESS}/visit/register`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ ...registerData }),
      }),
    );
    const jsonResponse = await response.json();

    return apiResponse(response.ok, jsonResponse);
  } catch (error) {
    return fetchError(error as Error);
  }
};

export const updateVisitAPI = async (
  updateData: VisitUPdateInterface,
): Promise<FetchResponse<VisitUpdateResponse | null>> => {
  try {
    const response = await refreshTokenWrapper(() =>
      fetch(`${API_ADDRESS}/visit/update`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ ...updateData }),
      }),
    );
    const jsonResponse = await response.json();

    return apiResponse(response.ok, jsonResponse);
  } catch (error) {
    return fetchError(error as Error);
  }
};

export const deleteVisitAPI = async (
  visitId: string,
): Promise<FetchResponse<VisitDeleteResponse | null>> => {
  try {
    const response = await refreshTokenWrapper(() =>
      fetch(`${API_ADDRESS}/visit/delete/${visitId}`, {
        method: "delete",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }),
    );
    const jsonResponse = await response.json();

    return apiResponse(response.ok, jsonResponse);
  } catch (error) {
    return fetchError(error as Error);
  }
};
