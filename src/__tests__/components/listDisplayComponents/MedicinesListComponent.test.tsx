import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { MedicinesListComponent } from "../../../components/ListDisplayComponent";

describe("<MedicinesListComponent />", () => {
  it("renders loading state if state is true", () => {
    render(
      <MedicinesListComponent
        loadingState={{ loading: true, error: null }}
        customEmptyText=""
        medicinesList={[]}
      />,
    );

    expect(screen.getByAltText("Loading...")).toBeInTheDocument();
  });

  it("renders error if error state is true", () => {
    render(
      <MedicinesListComponent
        loadingState={{ loading: false, error: "Error message" }}
        customEmptyText=""
        medicinesList={[]}
      />,
    );

    expect(screen.getByText("Error message")).toBeInTheDocument();
  });

  it("renders custom empty text if array is empty", () => {
    render(
      <MedicinesListComponent
        loadingState={{ loading: false, error: null }}
        customEmptyText="Empty text"
        medicinesList={[]}
      />,
    );

    expect(screen.getByText("Empty text")).toBeInTheDocument();
  });
});
