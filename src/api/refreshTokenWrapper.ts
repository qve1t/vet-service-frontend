//send request for refresh tokens and make another call for api

import { API_ADDRESS } from "../consts";

export const refreshTokenWrapper = async (
  fetchCall: any,
): Promise<Response> => {
  const response = await fetchCall();
  if (response.status === 401) {
    const refresh = await fetch(`${API_ADDRESS}/auth/refreshTokens`, {
      method: "get",
      credentials: "include",
    });

    if (refresh.status === 200) {
      return await fetchCall();
    }
  }

  return response;
};
