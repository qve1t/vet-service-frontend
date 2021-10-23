import { FetchResponse } from "../api/interfaces/fetch";
import { GetUserResponse } from "../api/interfaces/user";

const userResponseMock: GetUserResponse = {
  id: "testid",
  email: "test@test.com",
};

export const userRegisterResponseMock: FetchResponse<GetUserResponse> = {
  error: null,
  response: userResponseMock,
};

export const userRegisterResponseErrorMock: FetchResponse<null> = {
  error: "Some network error",
  response: null,
};
