/* eslint-disable jest/no-mocks-import */
import "@testing-library/jest-dom";
import { Router } from "react-router-dom";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";

import { LoggedUserModule } from "../../../../modules/LoggedUserModule";
import LoginForm from "../../../../components/loginRegisterPage/Forms/LoginForm";
import * as api from "../../../../api/auth";
import {
  userErrorMockResponse,
  userSuccessLoginMockResponse,
} from "../../../../__mocks__/auth.mock";

describe("<Login Form /", () => {
  it("has empty fields at the begginning", () => {
    render(
      <LoggedUserModule>
        <LoginForm />
      </LoggedUserModule>,
    );

    expect(screen.getByPlaceholderText("Email")).toHaveTextContent("");
    expect(screen.getByPlaceholderText("Password")).toHaveTextContent("");
  });

  it("shows error when submit empty data", async () => {
    render(
      <LoggedUserModule>
        <LoginForm />
      </LoggedUserModule>,
    );

    fireEvent.click(screen.getByText("Login"));
    await waitFor(() => {
      expect(screen.getByText("Email is required")).toBeInTheDocument();
      expect(screen.getByText("Password is required")).toBeInTheDocument();
    });
  });

  describe("submiting wrong credentials", () => {
    beforeEach(() => {
      jest.spyOn(api, "loginUserAPI").mockResolvedValue(userErrorMockResponse);
    });

    it("shows error from api", async () => {
      render(
        <LoggedUserModule>
          <LoginForm />
        </LoggedUserModule>,
      );

      fireEvent.change(screen.getByPlaceholderText("Email"), {
        target: { value: "test@test.com" },
      });
      fireEvent.change(screen.getByPlaceholderText("Password"), {
        target: { value: "testpassword" },
      });
      fireEvent.click(screen.getByText("Login"));

      await waitFor(() => expect(api.loginUserAPI).toBeCalled());
      expect(
        screen.getByText(userErrorMockResponse.error as string),
      ).toBeInTheDocument();
    });
  });

  describe("submiting correct credentials", () => {
    const history = createMemoryHistory();

    beforeEach(() => {
      jest
        .spyOn(api, "loginUserAPI")
        .mockResolvedValue(userSuccessLoginMockResponse);
    });

    it("shows error from api", async () => {
      render(
        <Router history={history}>
          <LoggedUserModule>
            <LoginForm />
          </LoggedUserModule>
        </Router>,
      );

      fireEvent.change(screen.getByPlaceholderText("Email"), {
        target: { value: "test@test.com" },
      });
      fireEvent.change(screen.getByPlaceholderText("Password"), {
        target: { value: "testpassword" },
      });
      fireEvent.click(screen.getByText("Login"));

      await waitFor(() => expect(api.loginUserAPI).toBeCalled());
      expect(history.location.pathname).toBe("/dashboard");
    });
  });
});
