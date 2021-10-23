/* eslint-disable jest/no-mocks-import */
import "@testing-library/jest-dom";
import { Router } from "react-router-dom";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import * as api from "../../../../api/user";
import {
  userRegisterResponseMock,
  userRegisterResponseErrorMock,
} from "../../../../__mocks__/user.mock";

import RegisterForm from "../../../../components/loginRegisterPage/Forms/RegisterForm";

describe("<Register Form />", () => {
  it("has empty fields at the begginning", () => {
    render(<RegisterForm />);

    expect(screen.getByPlaceholderText("Email")).toHaveTextContent("");
    expect(screen.getByPlaceholderText("Password")).toHaveTextContent("");
    expect(screen.getByPlaceholderText("Confirm password")).toHaveTextContent(
      "",
    );
  });

  it("shows error when submit empty data", async () => {
    render(<RegisterForm />);

    fireEvent.click(screen.getByText("Register"));
    await waitFor(() => {
      expect(screen.getByText("Email is required")).toBeInTheDocument();
      expect(screen.getByText("Password is required")).toBeInTheDocument();
    });
  });

  it("shows error when submit and passwords do not match", async () => {
    render(<RegisterForm />);

    fireEvent.change(screen.getByPlaceholderText("Email"), {
      target: { value: "test@test.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Password"), {
      target: { value: "testpassword" },
    });
    fireEvent.change(screen.getByPlaceholderText("Confirm password"), {
      target: { value: "abcd" },
    });
    fireEvent.click(screen.getByText("Register"));
    await waitFor(() => {
      expect(screen.getByText("Passwords do not match")).toBeInTheDocument();
    });
  });

  describe("register error", () => {
    beforeEach(() => {
      jest
        .spyOn(api, "registerUserAPI")
        .mockResolvedValue(userRegisterResponseErrorMock);
    });

    it("shows error from api", async () => {
      render(<RegisterForm />);

      fireEvent.change(screen.getByPlaceholderText("Email"), {
        target: { value: "test@test.com" },
      });
      fireEvent.change(screen.getByPlaceholderText("Password"), {
        target: { value: "testpassword" },
      });
      fireEvent.change(screen.getByPlaceholderText("Confirm password"), {
        target: { value: "testpassword" },
      });
      fireEvent.click(screen.getByText("Register"));

      await waitFor(() => expect(api.registerUserAPI).toBeCalled());
      expect(
        screen.getByText(userRegisterResponseErrorMock.error as string),
      ).toBeInTheDocument();
    });
  });

  describe("successfull register", () => {
    const history = createMemoryHistory();

    beforeEach(() => {
      jest
        .spyOn(api, "registerUserAPI")
        .mockResolvedValue(userRegisterResponseMock);
    });

    it("redirects to login page", async () => {
      render(
        <Router history={history}>
          <RegisterForm />
        </Router>,
      );

      fireEvent.change(screen.getByPlaceholderText("Email"), {
        target: { value: "test@test.com" },
      });
      fireEvent.change(screen.getByPlaceholderText("Password"), {
        target: { value: "testpassword" },
      });
      fireEvent.change(screen.getByPlaceholderText("Confirm password"), {
        target: { value: "testpassword" },
      });
      fireEvent.click(screen.getByText("Register"));

      await waitFor(() => expect(api.registerUserAPI).toBeCalled());
      expect(history.location.pathname).toBe("/login");
    });
  });
});
