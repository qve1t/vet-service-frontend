import { API_ADDRESS } from "../consts";
import { FetchResponse } from "./interfaces/fetch";
import { apiResponse } from "../utils/apiResponse";
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
  const response = await fetch(
    `${API_ADDRESS}/owner/?page=${page}&limit=${limit}&nameSurname=${nameSurname}`,
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

export const getOwnerDetailsAPI = async (
  ownerId: string,
): Promise<FetchResponse<OwnerInterface | null>> => {
  const response = await fetch(`${API_ADDRESS}/owner/${ownerId}`, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const jsonResponse = await response.json();

  return apiResponse(jsonResponse);
};

export const registerNewOwnerAPI = async (
  registerData: RegisterOwnerInterface,
): Promise<FetchResponse<OwnerRegisterResponse | null>> => {
  const response = await fetch(`${API_ADDRESS}/owner/register`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...registerData }),
  });
  const jsonResponse = await response.json();

  return apiResponse(jsonResponse);
};

export const updateOwnerInfoAPI = async (
  updateData: OwnerInfoToUpdateInterface,
): Promise<FetchResponse<OwnerUpdateResponse | null>> => {
  const response = await fetch(`${API_ADDRESS}/owner/update`, {
    method: "patch",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...updateData }),
  });
  const jsonResponse = await response.json();

  return apiResponse(jsonResponse);
};

export const deleteOwnerAPI = async (
  ownerId: string,
): Promise<FetchResponse<OwnerDeleteResponse | null>> => {
  const response = await fetch(`${API_ADDRESS}/pet/delete/${ownerId}`, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const jsonResponse = await response.json();

  return apiResponse(jsonResponse);
};

export const assingPetToOwnerAPI = async ({
  ownerId,
  petId,
}: AssignPetToOwnerInterface): Promise<
  FetchResponse<AssignPetToOwnerResponse | null>
> => {
  const response = await fetch(`${API_ADDRESS}/pet/assign-pet`, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ownerId, petId }),
  });
  const jsonResponse = await response.json();

  return apiResponse(jsonResponse);
};
