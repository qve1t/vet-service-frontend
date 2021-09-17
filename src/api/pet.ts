import { API_ADDRESS } from "../consts";
import { FetchResponse } from "./interfaces/fetch";
import { apiResponse, fetchError } from "../utils/apiResponse";
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
import { refreshTokenWrapper } from "./refreshTokenWrapper";

export const getPetsListAPI = async ({
  page,
  limit,
  name,
}: PetQueryInterface): Promise<FetchResponse<PetListResponse | null>> => {
  try {
    const response = await refreshTokenWrapper(() =>
      fetch(`${API_ADDRESS}/pet/?page=${page}&limit=${limit}&name=${name}`, {
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

export const getPetDetailsAPI = async (
  petId: string,
): Promise<FetchResponse<PetInterface | null>> => {
  try {
    const response = await refreshTokenWrapper(() =>
      fetch(`${API_ADDRESS}/pet/${petId}`, {
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

export const registerNewPetAPI = async (
  registerData: PetRegisterInterface,
): Promise<FetchResponse<PetRegisterResponse | null>> => {
  try {
    const response = await refreshTokenWrapper(() =>
      fetch(`${API_ADDRESS}/pet/register`, {
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

export const updatePetAPI = async (
  updateData: PetInfoToUpdateInterface,
): Promise<FetchResponse<PetUpdateResponse | null>> => {
  try {
    const response = await refreshTokenWrapper(() =>
      fetch(`${API_ADDRESS}/pet/update`, {
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

export const deletePetAPI = async (
  petId: string,
): Promise<FetchResponse<PetDeleteResponse | null>> => {
  try {
    const response = await refreshTokenWrapper(() =>
      fetch(`${API_ADDRESS}/pet/delete/${petId}`, {
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

export const assignOwnerToPetAPI = async ({
  ownerId,
  petId,
}: AssignOwnerToPetInterface): Promise<
  FetchResponse<AssignOwnerToPetResponse | null>
> => {
  try {
    const response = await refreshTokenWrapper(() =>
      fetch(`${API_ADDRESS}/pet/assign-owner`, {
        method: "put",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ ownerId, petId }),
      }),
    );
    const jsonResponse = await response.json();

    return apiResponse(response.ok, jsonResponse);
  } catch (error) {
    return fetchError(error as Error);
  }
};
