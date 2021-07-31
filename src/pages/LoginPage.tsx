import { useEffect } from "react";
import { useHistory } from "react-router";
import Layout from "../components/loginRegisterPage/Layout";
import LoginForm from "../components/loginRegisterPage/Forms/LoginForm";
import RedirectSection from "../components/loginRegisterPage/RedirectSection";
import { isUserLoggedAPI } from "../api/auth";

import { UseLoggedUserActions } from "../modules/LoggedUserModule";

const LoginPage = () => {
  const history = useHistory();
  const { checkIsLogged } = UseLoggedUserActions();

  useEffect(() => {
    //check if user is already logged in
    const checkLogin = async () => {
      const checkIfUserLogged = await isUserLoggedAPI();

      if (checkIfUserLogged.response) {
        checkIsLogged(
          checkIfUserLogged.response.isLogged,
          checkIfUserLogged.response.email,
        );
        history.push("/dashboard");
      }
    };

    checkLogin();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Layout label="Login">
      <LoginForm />
      <RedirectSection
        label="Don't have an account?"
        redirectLabel="Register"
        redirectTo="/register"
      />
    </Layout>
  );
};

export default LoginPage;
