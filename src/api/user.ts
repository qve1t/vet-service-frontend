import { FetchResponse } from "./interfaces/fetch";
import { GetUserResponse, RegisterUserInterface } from "./interfaces/user";
import { apiResponse, fetchError } from "../utils/apiResponse";
import { refreshTokenWrapper } from "./refreshTokenWrapper";

export const registerUserAPI = async ({
  email,
  password,
}: RegisterUserInterface): Promise<FetchResponse<GetUserResponse | null>> => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API}/user/register`, {
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
    return fetchError(error as Error);
  }
};

export const changePasswordAPI = async (
  newPassword: string,
): Promise<FetchResponse<GetUserResponse | null>> => {
  try {
    const response = await refreshTokenWrapper(() =>
      fetch(`${process.env.REACT_APP_API}/user/change_password`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          newPassword,
        }),
      }),
    );
    const jsonResponse = await response.json();

    return apiResponse(response.ok, jsonResponse);
  } catch (error) {
    return fetchError(error as Error);
  }
};
