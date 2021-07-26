import React from "react";
import ReactDOM from "react-dom";
import { LoggedUserModule } from "./modules/LoggedUserModule";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <LoggedUserModule>
      <App />
    </LoggedUserModule>
  </React.StrictMode>,
  document.getElementById("root"),
);
