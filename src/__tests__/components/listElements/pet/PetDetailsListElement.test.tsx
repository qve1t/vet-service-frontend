import "@testing-library/jest-dom";
import { Router } from "react-router";
import { createMemoryHistory } from "history";
import { render, fireEvent, screen } from "@testing-library/react";

import { PetsDetailsListElement } from "../../../../components/ListsElements";

describe("<PetsDetailsListElement />", () => {
  it("Redirects to details pet panel", () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <PetsDetailsListElement
          listElement={{ id: "testId", name: "test", type: "type" }}
        />
      </Router>,
    );

    fireEvent.click(screen.getByRole("link"));
    expect(history.location.pathname).toBe("/dashboard/pets/testId");
  });
});
