import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { OwnersListComponent } from "../../../components/ListDisplayComponent";

describe("<OwnersListComponent />", () => {
  it("renders loading state if state is true", () => {
    render(
      <OwnersListComponent
        loadingState={{ loading: true, error: null }}
        customEmptyText=""
        ownersList={[]}
      />,
    );

    expect(screen.getByAltText("Loading...")).toBeInTheDocument();
  });

  it("renders error if error state is true", () => {
    render(
      <OwnersListComponent
        loadingState={{ loading: false, error: "Error message" }}
        customEmptyText=""
        ownersList={[]}
      />,
    );

    expect(screen.getByText("Error message")).toBeInTheDocument();
  });

  it("renders custom empty text if array is empty", () => {
    render(
      <OwnersListComponent
        loadingState={{ loading: false, error: null }}
        customEmptyText="Empty text"
        ownersList={[]}
      />,
    );

    expect(screen.getByText("Empty text")).toBeInTheDocument();
  });
});
