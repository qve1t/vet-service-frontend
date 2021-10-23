import { IsUserLoggedResponse } from "../api/interfaces/auth";
import { FetchResponse } from "../api/interfaces/fetch";

const userSuccessfullResponse: IsUserLoggedResponse = {
  isLogged: true,
  email: "test@email.com",
};

const userSuccessfullLogoutResponse: IsUserLoggedResponse = {
  isLogged: false,
  email: "",
};

export const userErrorMockResponse: FetchResponse<null> = {
  error: "Login error",
  response: null,
};

export const userLoggedMockResponse: FetchResponse<IsUserLoggedResponse> = {
  error: null,
  response: userSuccessfullResponse,
};

export const userNotLoggedMockResponse: FetchResponse<null> =
  userErrorMockResponse;

export const userSuccessLoginMockResponse: FetchResponse<IsUserLoggedResponse> =
  {
    error: null,
    response: userSuccessfullResponse,
  };

export const userSuccessLogoutMockResponse: FetchResponse<IsUserLoggedResponse> =
  {
    error: null,
    response: userSuccessfullLogoutResponse,
  };
