import { API_ADDRESS } from "../consts";
import { apiResponse, fetchError } from "../utils/apiResponse";
import { FetchResponse } from "./interfaces/fetch";
import {
  NoteDayQuery,
  NoteDeleteResponse,
  NoteListResponse,
  NoteQueryInterface,
  NoteRegisterInterface,
  NoteRegisterResponse,
  NoteUpdateInterface,
} from "./interfaces/note";

export const getNotesListApi = async ({
  page,
  limit,
  text,
}: NoteQueryInterface): Promise<FetchResponse<NoteListResponse | null>> => {
  try {
    const response = await fetch(
      `${API_ADDRESS}/note/?page=${page}&limit=${limit}&text=${text}`,
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

export const getDayNotesApi = async ({
  startDate,
  endDate,
}: NoteDayQuery): Promise<FetchResponse<NoteListResponse | null>> => {
  try {
    const response = await fetch(
      `${API_ADDRESS}/note/day?startDate=${startDate}&endDate=${endDate}`,
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

export const registerNewNoteApi = async (
  registerData: NoteRegisterInterface,
): Promise<FetchResponse<NoteRegisterResponse | null>> => {
  try {
    const response = await fetch(`${API_ADDRESS}/note/register`, {
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

export const updateNoteApi = async (
  updateData: NoteUpdateInterface,
): Promise<FetchResponse<NoteUpdateInterface | null>> => {
  try {
    const response = await fetch(`${API_ADDRESS}/note/update`, {
      method: "patch",
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

export const deleteNoteApu = async (
  noteId: string,
): Promise<FetchResponse<NoteDeleteResponse | null>> => {
  try {
    const response = await fetch(`${API_ADDRESS}/pet/delete/${noteId}`, {
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
