/* eslint-disable jest/no-mocks-import */
import "@testing-library/jest-dom";
import React from "react";
import { Router } from "react-router-dom";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";

import { LoggedUserModule } from "../../../modules/LoggedUserModule";
import Dashboard from "../../../components/Dashboard";
import * as notesApi from "../../../api/note";
import * as visitsApi from "../../../api/visit";
import { GetNotesResponseMock } from "../../../__mocks__/note.mock";
import { GetVisitsResponseMock } from "../../../__mocks__/visit.mock";

describe("<Dashboard />", () => {
  describe("changes panels on clicking links on sidepanel", () => {
    const history = createMemoryHistory();
    beforeEach(() => {
      jest.spyOn(React, "useEffect");
      jest
        .spyOn(notesApi, "getDayNotesApi")
        .mockResolvedValueOnce(GetNotesResponseMock);

      jest
        .spyOn(visitsApi, "getVisitsListAPI")
        .mockResolvedValueOnce(GetVisitsResponseMock);
    });

    it("redirects to visits panel", async () => {
      render(
        <Router history={history}>
          <LoggedUserModule>
            <Dashboard />
          </LoggedUserModule>
        </Router>,
      );

      await waitFor(() => expect(React.useEffect).toBeCalled());
      await waitFor(() => fireEvent.click(screen.getByTestId("visits-id")));

      expect(screen.getByTestId("visits-list-id")).toBeInTheDocument();
      expect(screen.getByTestId("new-visit-id")).toBeInTheDocument();
      expect(history.location.pathname).toBe("/dashboard/visits");
    });

    it("redirects to pets panel", async () => {
      render(
        <Router history={history}>
          <LoggedUserModule>
            <Dashboard />
          </LoggedUserModule>
        </Router>,
      );

      await waitFor(() => expect(React.useEffect).toBeCalled());
      await waitFor(() => fireEvent.click(screen.getByTestId("pets-id")));

      expect(screen.getByTestId("pets-list-id")).toBeInTheDocument();
      expect(screen.getByTestId("new-pet-id")).toBeInTheDocument();
      expect(history.location.pathname).toBe("/dashboard/pets");
    });

    it("redirects to owners panel", async () => {
      render(
        <Router history={history}>
          <LoggedUserModule>
            <Dashboard />
          </LoggedUserModule>
        </Router>,
      );

      await waitFor(() => expect(React.useEffect).toBeCalled());
      await waitFor(() => fireEvent.click(screen.getByTestId("owners-id")));

      expect(screen.getByTestId("owners-list-id")).toBeInTheDocument();
      expect(screen.getByTestId("new-owner-id")).toBeInTheDocument();
      expect(history.location.pathname).toBe("/dashboard/owners");
    });

    it("redirects to notes panel", async () => {
      render(
        <Router history={history}>
          <LoggedUserModule>
            <Dashboard />
          </LoggedUserModule>
        </Router>,
      );

      await waitFor(() => expect(React.useEffect).toBeCalled());
      await waitFor(() => fireEvent.click(screen.getByTestId("notes-id")));

      expect(screen.getByTestId("notes-list-id")).toBeInTheDocument();
      expect(screen.getByTestId("new-note-id")).toBeInTheDocument();
      expect(history.location.pathname).toBe("/dashboard/notes");
    });

    it("redirects to medicines panel", async () => {
      render(
        <Router history={history}>
          <LoggedUserModule>
            <Dashboard />
          </LoggedUserModule>
        </Router>,
      );

      await waitFor(() => expect(React.useEffect).toBeCalled());
      await waitFor(() => fireEvent.click(screen.getByTestId("medicines-id")));

      expect(screen.getByTestId("medicines-list-id")).toBeInTheDocument();
      expect(screen.getByTestId("new-medicine-id")).toBeInTheDocument();
      expect(history.location.pathname).toBe("/dashboard/medicines");
    });
  });
});
