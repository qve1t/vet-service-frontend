import { API_ADDRESS } from "../consts";
import { FetchResponse } from "./interfaces/fetch";
import { apiResponse } from "../utils/apiResponse";
import {
  AssignOwnerToPetInterface,
  AssignOwnerToPetResponse,
  PetDeleteResponse,
  PetInfoToUpdateInterface,
  PetInterface,
  PetListResponse,
  PetQueryInterface,
  PetRegisterInterface,
  PetRegisterResponse,
  PetUpdateResponse,
} from "./interfaces/pet";

export const getPetsListAPI = async ({
  page,
  limit,
  name,
}: PetQueryInterface): Promise<FetchResponse<PetListResponse | null>> => {
  const response = await fetch(
    `${API_ADDRESS}/pet/?page=${page}&limit=${limit}&name=${name}`,
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

export const getPetDetailsAPI = async (
  petId: string,
): Promise<FetchResponse<PetInterface | null>> => {
  const response = await fetch(`${API_ADDRESS}/pet/${petId}`, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const jsonResponse = await response.json();

  return apiResponse(jsonResponse);
};

export const registerNewPetAPI = async (
  registerData: PetRegisterInterface,
): Promise<FetchResponse<PetRegisterResponse | null>> => {
  const response = await fetch(`${API_ADDRESS}/pet/register`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...registerData }),
  });
  const jsonResponse = await response.json();

  return apiResponse(jsonResponse);
};

export const updatePetAPI = async (
  updateData: PetInfoToUpdateInterface,
): Promise<FetchResponse<PetUpdateResponse | null>> => {
  const response = await fetch(`${API_ADDRESS}/pet/update`, {
    method: "patch",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...updateData }),
  });
  const jsonResponse = await response.json();

  return apiResponse(jsonResponse);
};

export const deletePetAPI = async (
  petId: string,
): Promise<FetchResponse<PetDeleteResponse | null>> => {
  const response = await fetch(`${API_ADDRESS}/pet/delete/${petId}`, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const jsonResponse = await response.json();

  return apiResponse(jsonResponse);
};

export const assignOwnerToPetAPI = async ({
  ownerId,
  petId,
}: AssignOwnerToPetInterface): Promise<
  FetchResponse<AssignOwnerToPetResponse | null>
> => {
  const response = await fetch(`${API_ADDRESS}/pet/assign-owner`, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ownerId, petId }),
  });
  const jsonResponse = await response.json();

  return apiResponse(jsonResponse);
};
