import { API_ADDRESS } from "../consts";
import { IsUserLoggedResponse, LoginUserInterface } from "./interfaces/auth";
import { FetchResponse } from "./interfaces/fetch";
import { apiResponse, fetchError } from "../utils/apiResponse";

export const isUserLoggedAPI = async (): Promise<
  FetchResponse<IsUserLoggedResponse | null>
> => {
  try {
    const response = await fetch(`${API_ADDRESS}/auth/isLogged`, {
      method: "get",
      credentials: "include",
    });
    const jsonResponse = await response.json();

    return apiResponse(response.ok, jsonResponse);
  } catch (error) {
    return fetchError(error);
  }
};

export const loginUserAPI = async ({
  email,
  password,
}: LoginUserInterface): Promise<FetchResponse<IsUserLoggedResponse | null>> => {
  try {
    const response = await fetch(`${API_ADDRESS}/auth/login`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const jsonResponse = await response.json();

    return apiResponse(response.ok, jsonResponse);
  } catch (error) {
    return fetchError(error);
  }
};

export const logoutUserAPI = async (): Promise<
  FetchResponse<IsUserLoggedResponse | null>
> => {
  try {
    const response = await fetch(`${API_ADDRESS}/auth/logout`, {
      method: "get",
      credentials: "include",
    });
    const jsonResponse = await response.json();

    return apiResponse(response.ok, jsonResponse);
  } catch (error) {
    return fetchError(error);
  }
};
