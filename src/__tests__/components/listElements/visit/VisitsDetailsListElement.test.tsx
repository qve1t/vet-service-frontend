import "@testing-library/jest-dom";
import { Router } from "react-router";
import { createMemoryHistory } from "history";
import { render, fireEvent, screen } from "@testing-library/react";

import { VisitsDetailsListElement } from "../../../../components/ListsElements";

describe("<VisitsDetailsListElement />", () => {
  it("Redirects to details visit panel", () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <VisitsDetailsListElement
          listElement={{ id: "testId", name: "test", dateTime: new Date() }}
        />
      </Router>,
    );

    fireEvent.click(screen.getByRole("link"));
    expect(history.location.pathname).toBe("/dashboard/visits/testId");
  });
});
