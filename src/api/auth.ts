import { IsUserLoggedResponse, LoginUserInterface } from "./interfaces/auth";
import { FetchResponse } from "./interfaces/fetch";
import { apiResponse, fetchError } from "../utils/apiResponse";
import { refreshTokenWrapper } from "./refreshTokenWrapper";

export const isUserLoggedAPI = async (): Promise<
  FetchResponse<IsUserLoggedResponse | null>
> => {
  try {
    const response = await refreshTokenWrapper(() =>
      fetch(`${process.env.REACT_APP_API}/auth/isLogged`, {
        method: "get",
        credentials: "include",
      }),
    );

    const jsonResponse = await response.json();

    return apiResponse(response.ok, jsonResponse);
  } catch (error) {
    return fetchError(error as Error);
  }
};

export const loginUserAPI = async ({
  email,
  password,
}: LoginUserInterface): Promise<FetchResponse<IsUserLoggedResponse | null>> => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API}/auth/login`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const jsonResponse = await response.json();

    return apiResponse(response.ok, jsonResponse);
  } catch (error) {
    return fetchError(error as Error);
  }
};

export const logoutUserAPI = async (): Promise<
  FetchResponse<IsUserLoggedResponse | null>
> => {
  try {
    const response = await refreshTokenWrapper(() =>
      fetch(`${process.env.REACT_APP_API}/auth/logout`, {
        method: "get",
        credentials: "include",
      }),
    );
    const jsonResponse = await response.json();

    return apiResponse(response.ok, jsonResponse);
  } catch (error) {
    return fetchError(error as Error);
  }
};
