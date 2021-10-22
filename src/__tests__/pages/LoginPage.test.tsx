/* eslint-disable jest/no-mocks-import */
import "@testing-library/jest-dom";
import { Router } from "react-router-dom";
import { render, waitFor } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { LoggedUserModule } from "../../modules/LoggedUserModule";
import LoginPage from "../../pages/LoginPage";
import * as api from "../../api/auth";
import {
  userLoggedMockResponse,
  userNotLoggedMockResponse,
} from "../../__mocks__/auth.mock";

describe("<LoginPage />", () => {
  describe("User already logged", () => {
    const history = createMemoryHistory();

    beforeEach(() => {
      jest
        .spyOn(api, "isUserLoggedAPI")
        .mockResolvedValue(userLoggedMockResponse);
    });

    it("redirects to the dashboard page", async () => {
      render(
        <LoggedUserModule>
          <Router history={history}>
            <LoginPage />
          </Router>
        </LoggedUserModule>,
      );

      await waitFor(() => expect(api.isUserLoggedAPI).toBeCalled());
      expect(history.location.pathname).toBe("/dashboard");
    });
  });

  describe("User not logged in", () => {
    const history = createMemoryHistory();

    beforeEach(() => {
      jest
        .spyOn(api, "isUserLoggedAPI")
        .mockResolvedValue(userNotLoggedMockResponse);
    });

    it("login page is not redirected", async () => {
      render(
        <LoggedUserModule>
          <Router history={history}>
            <LoginPage />
          </Router>
        </LoggedUserModule>,
      );

      await waitFor(() => expect(api.isUserLoggedAPI).toBeCalled());
      expect(history.location.pathname).toBe("/");
    });
  });
});
