import { API_ADDRESS } from "../consts";
import { FetchResponse } from "./interfaces/fetch";
import { apiResponse, fetchError } from "../utils/apiResponse";
import {
  AssignPetToOwnerInterface,
  AssignPetToOwnerResponse,
  OwnerDeleteResponse,
  OwnerInfoToUpdateInterface,
  OwnerInterface,
  OwnerListResponse,
  OwnerQueryInterface,
  OwnerRegisterResponse,
  OwnerUpdateResponse,
  RegisterOwnerInterface,
} from "./interfaces/owner";

export const getOwnersListAPI = async ({
  page,
  limit,
  nameSurname,
}: OwnerQueryInterface): Promise<FetchResponse<OwnerListResponse | null>> => {
  try {
    const response = await fetch(
      `${API_ADDRESS}/owner/?page=${page}&limit=${limit}&nameSurname=${nameSurname}`,
      {
        method: "get",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      },
    );
    const jsonResponse = await response.json();

    return apiResponse(response.ok, jsonResponse);
  } catch (error) {
    return fetchError(error);
  }
};

export const getOwnerDetailsAPI = async (
  ownerId: string,
): Promise<FetchResponse<OwnerInterface | null>> => {
  try {
    const response = await fetch(`${API_ADDRESS}/owner/${ownerId}`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const jsonResponse = await response.json();

    return apiResponse(response.ok, jsonResponse);
  } catch (error) {
    return fetchError(error);
  }
};

export const registerNewOwnerAPI = async (
  registerData: RegisterOwnerInterface,
): Promise<FetchResponse<OwnerRegisterResponse | null>> => {
  try {
    const response = await fetch(`${API_ADDRESS}/owner/register`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ ...registerData }),
    });
    const jsonResponse = await response.json();

    return apiResponse(response.ok, jsonResponse);
  } catch (error) {
    return fetchError(error);
  }
};

export const updateOwnerInfoAPI = async (
  updateData: OwnerInfoToUpdateInterface,
): Promise<FetchResponse<OwnerUpdateResponse | null>> => {
  try {
    const response = await fetch(`${API_ADDRESS}/owner/update`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ ...updateData }),
    });
    const jsonResponse = await response.json();

    return apiResponse(response.ok, jsonResponse);
  } catch (error) {
    return fetchError(error);
  }
};

export const deleteOwnerAPI = async (
  ownerId: string,
): Promise<FetchResponse<OwnerDeleteResponse | null>> => {
  try {
    const response = await fetch(`${API_ADDRESS}/owner/delete/${ownerId}`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const jsonResponse = await response.json();

    return apiResponse(response.ok, jsonResponse);
  } catch (error) {
    return fetchError(error);
  }
};

export const assingPetToOwnerAPI = async ({
  ownerId,
  petId,
}: AssignPetToOwnerInterface): Promise<
  FetchResponse<AssignPetToOwnerResponse | null>
> => {
  try {
    const response = await fetch(`${API_ADDRESS}/pet/assign-pet`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ ownerId, petId }),
    });
    const jsonResponse = await response.json();

    return apiResponse(response.ok, jsonResponse);
  } catch (error) {
    return fetchError(error);
  }
};
