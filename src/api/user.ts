import { API_ADDRESS } from "../consts";
import { FetchResponse } from "./interfaces/fetch";
import { GetUserResponse, RegisterUserInterface } from "./interfaces/user";

export const registerUserAPI = async ({
  email,
  password,
}: RegisterUserInterface): Promise<FetchResponse<GetUserResponse | null>> => {
  const response = await fetch(`${API_ADDRESS}/user/register`, {
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
