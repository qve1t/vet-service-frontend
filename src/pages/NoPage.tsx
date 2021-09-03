import NoDataComponent from "../components/404Component";
import Layout from "../components/loginRegisterPage/Layout";
import RedirectSection from "../components/loginRegisterPage/RedirectSection";

const NoPage = () => {
  return (
    <Layout>
      <NoDataComponent />
      <RedirectSection label="" redirectLabel="Main Page" redirectTo="/" />
    </Layout>
  );
};

export default NoPage;
