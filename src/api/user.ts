import { API_ADDRESS } from "../consts";
import { FetchResponse } from "./interfaces/fetch";
import { GetUserResponse, RegisterUserInterface } from "./interfaces/user";
import { apiResponse } from "../utils/apiResponse";

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

  return apiResponse(jsonResponse);
};

export const changePasswordAPI = async (
  newPassword: string,
): Promise<FetchResponse<GetUserResponse | null>> => {
  const response = await fetch(`${API_ADDRESS}/user/change_password`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      newPassword,
    }),
  });
  const jsonResponse = await response.json();

  return apiResponse(jsonResponse);
};
