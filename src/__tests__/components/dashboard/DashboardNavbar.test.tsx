/* eslint-disable jest/no-mocks-import */
import "@testing-library/jest-dom";
import { Router } from "react-router-dom";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";

import { LoggedUserModule } from "../../../modules/LoggedUserModule";
import * as api from "../../../api/auth";

import DashboardNavbar from "../../../components/Dashboard/Navbar";
import { userSuccessLogoutMockResponse } from "../../../__mocks__/auth.mock";

describe("<Navbar />", () => {
  describe("changes panels on clicking links", () => {
    describe("visits panel", () => {
      const history = createMemoryHistory();
      history.push("/dashboard/visits");

      it("go to the new visit panel", async () => {
        render(
          <Router history={history}>
            <LoggedUserModule>
              <DashboardNavbar />
            </LoggedUserModule>
          </Router>,
        );

        await waitFor(() =>
          fireEvent.click(screen.getByTestId("new-visit-id")),
        );
        expect(history.location.pathname).toBe("/dashboard/visits/new");
      });

      it("go to the visits list panel", async () => {
        render(
          <Router history={history}>
            <LoggedUserModule>
              <DashboardNavbar />
            </LoggedUserModule>
          </Router>,
        );

        await waitFor(() =>
          fireEvent.click(screen.getByTestId("visits-list-id")),
        );
        expect(history.location.pathname).toBe("/dashboard/visits");
      });
    });

    describe("owners panel", () => {
      const history = createMemoryHistory();
      history.push("/dashboard/owners");

      it("go to the new owner panel", async () => {
        render(
          <Router history={history}>
            <LoggedUserModule>
              <DashboardNavbar />
            </LoggedUserModule>
          </Router>,
        );

        await waitFor(() =>
          fireEvent.click(screen.getByTestId("new-owner-id")),
        );
        expect(history.location.pathname).toBe("/dashboard/owners/new");
      });

      it("go to the owners list panel", async () => {
        render(
          <Router history={history}>
            <LoggedUserModule>
              <DashboardNavbar />
            </LoggedUserModule>
          </Router>,
        );

        await waitFor(() =>
          fireEvent.click(screen.getByTestId("owners-list-id")),
        );
        expect(history.location.pathname).toBe("/dashboard/owners");
      });
    });

    describe("pets panel", () => {
      const history = createMemoryHistory();
      history.push("/dashboard/pets");

      it("go to the new pet panel", async () => {
        render(
          <Router history={history}>
            <LoggedUserModule>
              <DashboardNavbar />
            </LoggedUserModule>
          </Router>,
        );

        await waitFor(() => fireEvent.click(screen.getByTestId("new-pet-id")));
        expect(history.location.pathname).toBe("/dashboard/pets/new");
      });

      it("go to the pets list panel", async () => {
        render(
          <Router history={history}>
            <LoggedUserModule>
              <DashboardNavbar />
            </LoggedUserModule>
          </Router>,
        );

        await waitFor(() =>
          fireEvent.click(screen.getByTestId("pets-list-id")),
        );
        expect(history.location.pathname).toBe("/dashboard/pets");
      });
    });

    describe("notes panel", () => {
      const history = createMemoryHistory();
      history.push("/dashboard/notes");

      it("go to the new note panel", async () => {
        render(
          <Router history={history}>
            <LoggedUserModule>
              <DashboardNavbar />
            </LoggedUserModule>
          </Router>,
        );

        await waitFor(() => fireEvent.click(screen.getByTestId("new-note-id")));
        expect(history.location.pathname).toBe("/dashboard/notes/new");
      });

      it("go to the notes list panel", async () => {
        render(
          <Router history={history}>
            <LoggedUserModule>
              <DashboardNavbar />
            </LoggedUserModule>
          </Router>,
        );

        await waitFor(() =>
          fireEvent.click(screen.getByTestId("notes-list-id")),
        );
        expect(history.location.pathname).toBe("/dashboard/notes");
      });
    });

    describe("medicines panel", () => {
      const history = createMemoryHistory();
      history.push("/dashboard/medicines");

      it("go to the new medicine panel", async () => {
        render(
          <Router history={history}>
            <LoggedUserModule>
              <DashboardNavbar />
            </LoggedUserModule>
          </Router>,
        );

        await waitFor(() =>
          fireEvent.click(screen.getByTestId("new-medicine-id")),
        );
        expect(history.location.pathname).toBe("/dashboard/medicines/new");
      });

      it("go to the medicines list panel", async () => {
        render(
          <Router history={history}>
            <LoggedUserModule>
              <DashboardNavbar />
            </LoggedUserModule>
          </Router>,
        );

        await waitFor(() =>
          fireEvent.click(screen.getByTestId("medicines-list-id")),
        );
        expect(history.location.pathname).toBe("/dashboard/medicines");
      });
    });

    describe("clicking logout button", () => {
      const history = createMemoryHistory();

      beforeEach(() => {
        jest
          .spyOn(api, "logoutUserAPI")
          .mockResolvedValue(userSuccessLogoutMockResponse);
      });

      it("redirects to login page if successfull response", async () => {
        render(
          <Router history={history}>
            <LoggedUserModule>
              <DashboardNavbar />
            </LoggedUserModule>
          </Router>,
        );

        fireEvent.click(screen.getByText("Logout"));
        await waitFor(() => expect(api.logoutUserAPI).toBeCalled());
        expect(history.location.pathname).toBe("/login");
      });
    });
  });
});
