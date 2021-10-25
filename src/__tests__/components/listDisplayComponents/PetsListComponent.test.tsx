import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { PetsListComponent } from "../../../components/ListDisplayComponent";

describe("<PetsListComponent />", () => {
  it("renders loading state if state is true", () => {
    render(
      <PetsListComponent
        loadingState={{ loading: true, error: null }}
        customEmptyText=""
        petsList={[]}
      />,
    );

    expect(screen.getByAltText("Loading...")).toBeInTheDocument();
  });

  it("renders error if error state is true", () => {
    render(
      <PetsListComponent
        loadingState={{ loading: false, error: "Error message" }}
        customEmptyText=""
        petsList={[]}
      />,
    );

    expect(screen.getByText("Error message")).toBeInTheDocument();
  });

  it("renders custom empty text if array is empty", () => {
    render(
      <PetsListComponent
        loadingState={{ loading: false, error: null }}
        customEmptyText="Empty text"
        petsList={[]}
      />,
    );

    expect(screen.getByText("Empty text")).toBeInTheDocument();
  });
});
