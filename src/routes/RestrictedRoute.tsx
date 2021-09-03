import { Redirect, Route } from "react-router-dom";
import { UseLoggedUserState } from "../modules/LoggedUserModule";

interface RestrictedRouteInterface {
  Component: React.FC;
  path: string;
}

const RestrictedRoute = ({ Component, path }: RestrictedRouteInterface) => {
  const { isLogged, email } = UseLoggedUserState();

  const componentToRender = () => {
    if (!isLogged || email === "") {
      return <Redirect to="/login" />;
    }

    return <Component />;
  };

  return <Route path={path} component={componentToRender} />;
};

export default RestrictedRoute;
