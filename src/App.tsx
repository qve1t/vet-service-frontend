import { GlobalStyle } from "./mainStyles/globalStyle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardMain from "./pages/DashboardMain";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/dashboard" component={DashboardMain} />
          <Route path="/" component={MainPage} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
