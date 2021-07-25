import Layout from "../components/loginRegisterPage/Layout";
import RegisterForm from "../components/loginRegisterPage/Forms/RegisterForm";
import RedirectSection from "../components/loginRegisterPage/RedirectSection";

const RegisterPage = () => {
  return (
    <Layout label="Register new user">
      <RegisterForm />
      <RedirectSection
        label="Already have an account?"
        redirectLabel="Login"
        redirectTo="/login"
      />
    </Layout>
  );
};

export default RegisterPage;
