import "@testing-library/jest-dom";
import { Router } from "react-router";
import { createMemoryHistory } from "history";
import { render, fireEvent, screen } from "@testing-library/react";

import { VisitsListElement } from "../../../../components/ListsElements";

describe("<VisitsListElement />", () => {
  it("Redirects to details visit panel", () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <VisitsListElement
          listElement={{ id: "testId", name: "test", dateTime: new Date() }}
        />
      </Router>,
    );

    fireEvent.click(screen.getByRole("link"));
    expect(history.location.pathname).toBe("/dashboard/visits/testId");
  });
});
