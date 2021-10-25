import "@testing-library/jest-dom";
import { Router } from "react-router";
import { createMemoryHistory } from "history";
import { render, fireEvent, screen } from "@testing-library/react";

import MedicineListElement from "../../../../components/ListsElements/medicine/MedicinesListElement";

describe("<MedicineListElement />", () => {
  it("Redirects to details medicine panel", () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <MedicineListElement
          listElement={{
            id: "testId",
            name: "test",
            count: 0,
            magazineCount: 0,
          }}
        />
      </Router>,
    );

    fireEvent.click(screen.getByRole("link"));
    expect(history.location.pathname).toBe("/dashboard/medicines/testId");
  });
});
