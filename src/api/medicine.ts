import { FetchResponse } from "./interfaces/fetch";
import { apiResponse, fetchError } from "../utils/apiResponse";
import { refreshTokenWrapper } from "./refreshTokenWrapper";
import {
  MedicineDeleteResponse,
  MedicineInterface,
  MedicineListResponse,
  MedicineQueryInterface,
  MedicineRegisterResponse,
  MedicineUpdateInterface,
  MedicineUpdateResponse,
  RegisterMedicineInterface,
} from "./interfaces/medicine";

export const getMedicinesListApi = async ({
  page,
  limit,
  searchText,
}: MedicineQueryInterface): Promise<
  FetchResponse<MedicineListResponse | null>
> => {
  try {
    const response = await refreshTokenWrapper(() =>
      fetch(
        `${process.env.REACT_APP_API}/medicine/?page=${page}&limit=${limit}&searchText=${searchText}`,
        {
          method: "get",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        },
      ),
    );

    const jsonResponse = await response.json();

    return apiResponse(response.ok, jsonResponse);
  } catch (error) {
    return fetchError(error as Error);
  }
};

export const getMedicineDetailsApi = async (
  medicineId: string,
): Promise<FetchResponse<MedicineInterface | null>> => {
  try {
    const response = await refreshTokenWrapper(() =>
      fetch(`${process.env.REACT_APP_API}/medicine/${medicineId}`, {
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

export const registerNewMedicineApi = async (
  registerData: RegisterMedicineInterface,
): Promise<FetchResponse<MedicineRegisterResponse | null>> => {
  try {
    const response = await refreshTokenWrapper(() =>
      fetch(`${process.env.REACT_APP_API}/medicine/register`, {
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

export const updateMEdicineApi = async (
  updateData: MedicineUpdateInterface,
): Promise<FetchResponse<MedicineUpdateResponse | null>> => {
  try {
    const response = await refreshTokenWrapper(() =>
      fetch(`${process.env.REACT_APP_API}/medicine/update`, {
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

export const deleteMEdicineApi = async (
  medicineId: string,
): Promise<FetchResponse<MedicineDeleteResponse | null>> => {
  try {
    const response = await refreshTokenWrapper(() =>
      fetch(`${process.env.REACT_APP_API}/medicine/delete/${medicineId}`, {
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
