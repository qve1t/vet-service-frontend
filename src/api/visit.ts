import { API_ADDRESS } from "../consts";
import { FetchResponse } from "./interfaces/fetch";
import { apiResponse } from "../utils/apiResponse";
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

export const getVisitsListAPI = async ({
  startDate,
  endDate,
}: VisitGetQuery): Promise<FetchResponse<VisitListReponse | null>> => {
  const response = await fetch(
    `${API_ADDRESS}/visit/?startDate=${startDate}&endDate=${endDate}`,
    {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  const jsonResponse = await response.json();

  return apiResponse(jsonResponse);
};

export const getVisitDetailsAPI = async (
  visitId: string,
): Promise<FetchResponse<VisitInterface | null>> => {
  const response = await fetch(`${API_ADDRESS}/visit/${visitId}`, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const jsonResponse = await response.json();

  return apiResponse(jsonResponse);
};

export const registerNewVisitAPI = async (
  registerData: VisitRegisterInterface,
): Promise<FetchResponse<VisitRegisterResponse | null>> => {
  const response = await fetch(`${API_ADDRESS}/visit/register`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...registerData }),
  });
  const jsonResponse = await response.json();

  return apiResponse(jsonResponse);
};

export const updateVisitAPI = async (
  updateData: VisitUPdateInterface,
): Promise<FetchResponse<VisitUpdateResponse | null>> => {
  const response = await fetch(`${API_ADDRESS}/visit/update`, {
    method: "patch",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...updateData }),
  });
  const jsonResponse = await response.json();

  return apiResponse(jsonResponse);
};

export const deleteVisitAPI = async (
  visitId: string,
): Promise<FetchResponse<VisitDeleteResponse | null>> => {
  const response = await fetch(`${API_ADDRESS}/visit/delete/${visitId}`, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const jsonResponse = await response.json();

  return apiResponse(jsonResponse);
};
