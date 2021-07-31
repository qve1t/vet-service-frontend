import { API_ADDRESS } from "../consts";
import { IsUserLoggedResponse, LoginUserInterface } from "./interfaces/auth";
import { FetchResponse } from "./interfaces/fetch";

export const isUserLoggedAPI = async (): Promise<
  FetchResponse<IsUserLoggedResponse | null>
> => {
  const response = await fetch(`${API_ADDRESS}/auth/isLogged`, {
    method: "get",
    credentials: "include",
  });
  const jsonResponse = await response.json();

  if (!response.ok) {
    return {
      error: jsonResponse.message,
      response: null,
    };
  }

  return {
    error: null,
    response: jsonResponse,
  };
};

export const loginUserAPI = async ({
  email,
  password,
}: LoginUserInterface): Promise<FetchResponse<IsUserLoggedResponse | null>> => {
  const response = await fetch(`${API_ADDRESS}/auth/login`, {
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

  if (!response.ok) {
    return {
      error: jsonResponse.message,
      response: null,
    };
  }

  return {
    error: null,
    response: jsonResponse,
  };
};

export const logoutUserAPI = async (): Promise<
  FetchResponse<IsUserLoggedResponse | null>
> => {
  const response = await fetch(`${API_ADDRESS}/auth/logout`, {
    method: "get",
    credentials: "include",
  });
  const jsonResponse = await response.json();

  if (!response.ok) {
    return {
      error: jsonResponse.message,
      response: null,
    };
  }

  return {
    error: null,
    response: jsonResponse,
  };
};
