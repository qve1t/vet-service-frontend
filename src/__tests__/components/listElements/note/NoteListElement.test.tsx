/* eslint-disable jest/no-mocks-import */
import "@testing-library/jest-dom";
import { Router } from "react-router";
import { createMemoryHistory } from "history";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import { DeletePopupModule } from "../../../../modules/DeletePopupModule";

import { NoteListElement } from "../../../../components/ListsElements";

describe("<NoteListElement />", () => {
  it("shows popup when click bin icon", async () => {
    const history = createMemoryHistory();
    const refreshMock = jest.fn();

    render(
      <DeletePopupModule>
        <Router history={history}>
          <NoteListElement
            listElement={{
              id: "testId",
              dateTime: new Date(),
              ownerNote: { id: "ownerId", name: "name", surname: "surname" },
              petNote: { id: "petId", name: "pet" },
              text: "text",
            }}
            refreshFunction={refreshMock}
          />
        </Router>
      </DeletePopupModule>,
    );

    fireEvent.click(screen.getByRole("img"));
    await waitFor(() =>
      expect(
        screen.getByText("Are you sure you want to delete this?"),
      ).toBeInTheDocument(),
    );
  });

  it("shows no additional links if no owners and pets data", async () => {
    const history = createMemoryHistory();
    const refreshMock = jest.fn();

    render(
      <DeletePopupModule>
        <Router history={history}>
          <NoteListElement
            listElement={{
              id: "testId",
              dateTime: new Date(),
              ownerNote: null as any,
              petNote: null as any,
              text: "text",
            }}
            refreshFunction={refreshMock}
          />
        </Router>
      </DeletePopupModule>,
    );

    expect(screen.queryByRole("link")).toBeNull();
  });

  it("redirects to owner details page", async () => {
    const history = createMemoryHistory();
    const refreshMock = jest.fn();

    render(
      <DeletePopupModule>
        <Router history={history}>
          <NoteListElement
            listElement={{
              id: "testId",
              dateTime: new Date(),
              ownerNote: { id: "ownerId", name: "name", surname: "surname" },
              petNote: { id: "petId", name: "pet" },
              text: "text",
            }}
            refreshFunction={refreshMock}
          />
        </Router>
      </DeletePopupModule>,
    );

    fireEvent.click(screen.getByText("name surname"));
    expect(history.location.pathname).toBe("/dashboard/owners/ownerId");
  });

  it("redirects to pet details page", async () => {
    const history = createMemoryHistory();
    const refreshMock = jest.fn();

    render(
      <DeletePopupModule>
        <Router history={history}>
          <NoteListElement
            listElement={{
              id: "testId",
              dateTime: new Date(),
              ownerNote: { id: "ownerId", name: "name", surname: "surname" },
              petNote: { id: "petId", name: "pet" },
              text: "text",
            }}
            refreshFunction={refreshMock}
          />
        </Router>
      </DeletePopupModule>,
    );

    fireEvent.click(screen.getByText("pet"));
    expect(history.location.pathname).toBe("/dashboard/pets/petId");
  });
});
