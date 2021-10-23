/* eslint-disable jest/no-mocks-import */
import "@testing-library/jest-dom";
import { Router } from "react-router-dom";
import { render, waitFor, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";

import * as notesApi from "../../../api/note";
import * as visitsApi from "../../../api/visit";
import { DeletePopupModule } from "../../../modules/DeletePopupModule";
import DashboardMainPanel from "../../../components/Dashboard/MainArea/DashboardMainPanel";
import {
  GetNoNotesResponseMock,
  GetNotesResponseMock,
} from "../../../__mocks__/note.mock";
import {
  GetNoVisitsResponseMock,
  GetVisitsResponseMock,
} from "../../../__mocks__/visit.mock";

describe("<DashboardMainPanel />", () => {
  it("shows main with loading component", () => {
    render(<DashboardMainPanel />);

    expect(screen.getByAltText("Loading...")).toBeInTheDocument();
  });

  describe("api calls for visits and notes", () => {
    describe("gets visits and notes in response", () => {
      const history = createMemoryHistory();
      beforeEach(() => {
        jest
          .spyOn(notesApi, "getDayNotesApi")
          .mockResolvedValueOnce(GetNotesResponseMock);

        jest
          .spyOn(visitsApi, "getVisitsListAPI")
          .mockResolvedValueOnce(GetVisitsResponseMock);
      });

      it("renders notes and visits list", async () => {
        render(
          <Router history={history}>
            <DeletePopupModule>
              <DashboardMainPanel />
            </DeletePopupModule>
          </Router>,
        );

        await waitFor(() => expect(notesApi.getDayNotesApi).toBeCalled());
        await waitFor(() => expect(visitsApi.getVisitsListAPI).toBeCalled());

        expect(screen.getByText("Notes for Today")).toBeInTheDocument();
        expect(screen.getByText("note1")).toBeInTheDocument();
        expect(screen.getByText("note2")).toBeInTheDocument();
        expect(screen.getByText("Visits for Today")).toBeInTheDocument();
        expect(screen.getByText("visit1")).toBeInTheDocument();
        expect(screen.getByText("visit2")).toBeInTheDocument();
      });
    });
    describe("gets visits and no notes in response", () => {
      const history = createMemoryHistory();
      beforeEach(() => {
        jest
          .spyOn(notesApi, "getDayNotesApi")
          .mockResolvedValueOnce(GetNoNotesResponseMock);

        jest
          .spyOn(visitsApi, "getVisitsListAPI")
          .mockResolvedValueOnce(GetVisitsResponseMock);
      });

      it("renders visits list", async () => {
        render(
          <Router history={history}>
            <DeletePopupModule>
              <DashboardMainPanel />
            </DeletePopupModule>
          </Router>,
        );

        await waitFor(() => expect(notesApi.getDayNotesApi).toBeCalled());
        await waitFor(() => expect(visitsApi.getVisitsListAPI).toBeCalled());

        expect(screen.queryByText("Notes for Today")).not.toBeInTheDocument();
        expect(screen.getByText("Visits for Today")).toBeInTheDocument();
        expect(screen.getByText("visit1")).toBeInTheDocument();
        expect(screen.getByText("visit2")).toBeInTheDocument();
      });
    });

    describe("gets no visits and no notes in response", () => {
      const history = createMemoryHistory();
      beforeEach(() => {
        jest
          .spyOn(notesApi, "getDayNotesApi")
          .mockResolvedValueOnce(GetNoNotesResponseMock);

        jest
          .spyOn(visitsApi, "getVisitsListAPI")
          .mockResolvedValueOnce(GetNoVisitsResponseMock);
      });

      it("renders visits list", async () => {
        render(
          <Router history={history}>
            <DeletePopupModule>
              <DashboardMainPanel />
            </DeletePopupModule>
          </Router>,
        );

        await waitFor(() => expect(notesApi.getDayNotesApi).toBeCalled());
        await waitFor(() => expect(visitsApi.getVisitsListAPI).toBeCalled());

        expect(screen.queryByText("Notes for Today")).not.toBeInTheDocument();
        expect(screen.getByText("Visits for Today")).toBeInTheDocument();
        expect(
          screen.getByText("You have a free day today :)"),
        ).toBeInTheDocument();
      });
    });
  });
});
