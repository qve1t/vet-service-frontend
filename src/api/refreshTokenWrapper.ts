//send request for refresh tokens and make another call for api

export const refreshTokenWrapper = async (
  fetchCall: any,
): Promise<Response> => {
  const response = await fetchCall();
  if (response.status === 401) {
    const refresh = await fetch(
      `${process.env.REACT_APP_API}/auth/refreshTokens`,
      {
        method: "get",
        credentials: "include",
      },
    );

    if (refresh.status === 200) {
      return await fetchCall();
    }
  }

  return response;
};
