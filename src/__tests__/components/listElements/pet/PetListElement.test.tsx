import "@testing-library/jest-dom";
import { Router } from "react-router";
import { createMemoryHistory } from "history";
import { render, fireEvent, screen } from "@testing-library/react";

import PetListElement from "../../../../components/ListsElements/pet/PetsListElement";

describe("<PetListElement />", () => {
  it("Redirects to details pets panel", () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <PetListElement
          listElement={{
            id: "testId",
            name: "test",
            type: "testType",
            owner: { id: "ownerId", name: "name", surname: "surname" },
          }}
        />
      </Router>,
    );

    fireEvent.click(screen.getAllByRole("link")[0]);
    expect(history.location.pathname).toBe("/dashboard/pets/testId");
  });

  it("Link redirects to details owner panel", () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <PetListElement
          listElement={{
            id: "testId",
            name: "test",
            type: "testType",
            owner: { id: "ownerId", name: "name", surname: "surname" },
          }}
        />
      </Router>,
    );

    fireEvent.click(screen.getByText("name surname"));
    expect(history.location.pathname).toBe("/dashboard/owners/ownerId");
  });
});
