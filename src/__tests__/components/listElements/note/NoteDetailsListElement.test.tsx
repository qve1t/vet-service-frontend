/* eslint-disable jest/no-mocks-import */
import "@testing-library/jest-dom";
import { Router } from "react-router";
import { createMemoryHistory } from "history";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import { DeletePopupModule } from "../../../../modules/DeletePopupModule";

import { NotesDetailsListElement } from "../../../../components/ListsElements";

describe("<NotesDetailsListElement />", () => {
  it("shows popup when click bin icon", async () => {
    const history = createMemoryHistory();
    const refreshMock = jest.fn();

    render(
      <DeletePopupModule>
        <Router history={history}>
          <NotesDetailsListElement
            listElement={{
              id: "testId",
              dateTime: new Date(),
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
});
