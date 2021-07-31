export interface IsUserLoggedResponse {
  isLogged: boolean;
  email: string;
}

export interface LoginUserInterface {
  email: string;
  password: string;
}
