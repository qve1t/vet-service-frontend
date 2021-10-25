import "@testing-library/jest-dom";
import { Router } from "react-router";
import { createMemoryHistory } from "history";
import { render, fireEvent, screen } from "@testing-library/react";

import { OwnersDetailsListElement } from "../../../../components/ListsElements";

describe("<OwnersDetailsListElement />", () => {
  it("Redirects to details owner panel", () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <OwnersDetailsListElement
          listElement={{ id: "testId", name: "test", surname: "surname" }}
        />
      </Router>,
    );

    fireEvent.click(screen.getByRole("link"));
    expect(history.location.pathname).toBe("/dashboard/owners/testId");
  });
});
