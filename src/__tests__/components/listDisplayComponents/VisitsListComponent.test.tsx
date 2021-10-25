import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { VisitsListComponent } from "../../../components/ListDisplayComponent";

describe("<VisitsListComponent />", () => {
  it("renders loading state if state is true", () => {
    render(
      <VisitsListComponent
        loadingState={{ loading: true, error: null }}
        customEmptyText=""
        visitsList={[]}
      />,
    );

    expect(screen.getByAltText("Loading...")).toBeInTheDocument();
  });

  it("renders error if error state is true", () => {
    render(
      <VisitsListComponent
        loadingState={{ loading: false, error: "Error message" }}
        customEmptyText=""
        visitsList={[]}
      />,
    );

    expect(screen.getByText("Error message")).toBeInTheDocument();
  });

  it("renders custom empty text if array is empty", () => {
    render(
      <VisitsListComponent
        loadingState={{ loading: false, error: null }}
        customEmptyText="Empty text"
        visitsList={[]}
      />,
    );

    expect(screen.getByText("Empty text")).toBeInTheDocument();
  });
});
