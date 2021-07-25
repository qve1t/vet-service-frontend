import Layout from "../components/loginRegisterPage/Layout";
import LoginForm from "../components/loginRegisterPage/Forms/LoginForm";
import RedirectSection from "../components/loginRegisterPage/RedirectSection";

const LoginPage = () => {
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
