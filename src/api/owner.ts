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
import { refreshTokenWrapper } from "./refreshTokenWrapper";

export const getOwnersListAPI = async ({
  page,
  limit,
  nameSurname,
}: OwnerQueryInterface): Promise<FetchResponse<OwnerListResponse | null>> => {
  try {
    const response = await refreshTokenWrapper(() =>
      fetch(
        `${process.env.REACT_APP_API}/owner/?page=${page}&limit=${limit}&nameSurname=${nameSurname}`,
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

export const getOwnerDetailsAPI = async (
  ownerId: string,
): Promise<FetchResponse<OwnerInterface | null>> => {
  try {
    const response = await refreshTokenWrapper(() =>
      fetch(`${process.env.REACT_APP_API}/owner/${ownerId}`, {
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

export const registerNewOwnerAPI = async (
  registerData: RegisterOwnerInterface,
): Promise<FetchResponse<OwnerRegisterResponse | null>> => {
  try {
    const response = await refreshTokenWrapper(() =>
      fetch(`${process.env.REACT_APP_API}/owner/register`, {
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

export const updateOwnerInfoAPI = async (
  updateData: OwnerInfoToUpdateInterface,
): Promise<FetchResponse<OwnerUpdateResponse | null>> => {
  try {
    const response = await refreshTokenWrapper(() =>
      fetch(`${process.env.REACT_APP_API}/owner/update`, {
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

export const deleteOwnerAPI = async (
  ownerId: string,
): Promise<FetchResponse<OwnerDeleteResponse | null>> => {
  try {
    const response = await refreshTokenWrapper(() =>
      fetch(`${process.env.REACT_APP_API}/owner/delete/${ownerId}`, {
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

export const assingPetToOwnerAPI = async ({
  ownerId,
  petId,
}: AssignPetToOwnerInterface): Promise<
  FetchResponse<AssignPetToOwnerResponse | null>
> => {
  try {
    const response = await refreshTokenWrapper(() =>
      fetch(`${process.env.REACT_APP_API}/pet/assign-pet`, {
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
