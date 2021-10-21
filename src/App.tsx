import { GlobalStyle } from "./mainStyles/globalStyle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardMain from "./pages/DashboardMain";
import NoPage from "./pages/NoPage";

import RestrictedRoute from "./routes/RestrictedRoute";

const App = () => {
  console.log(process.env.REACT_APP_API);
  return (
    <div>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <RestrictedRoute path="/dashboard" Component={DashboardMain} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="*" component={NoPage} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
