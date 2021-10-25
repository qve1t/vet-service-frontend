import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { NotesListComponent } from "../../../components/ListDisplayComponent";

describe("<NotesListComponent />", () => {
  it("renders loading state if state is true", () => {
    render(
      <NotesListComponent
        loadingState={{ loading: true, error: null }}
        customEmptyText=""
        notesList={[]}
        forceUpdate={() => {}}
      />,
    );

    expect(screen.getByAltText("Loading...")).toBeInTheDocument();
  });

  it("renders error if error state is true", () => {
    render(
      <NotesListComponent
        loadingState={{ loading: false, error: "Error message" }}
        customEmptyText=""
        notesList={[]}
        forceUpdate={() => {}}
      />,
    );

    expect(screen.getByText("Error message")).toBeInTheDocument();
  });

  it("renders custom empty text if array is empty", () => {
    render(
      <NotesListComponent
        loadingState={{ loading: false, error: null }}
        customEmptyText="Empty text"
        notesList={[]}
        forceUpdate={() => {}}
      />,
    );

    expect(screen.getByText("Empty text")).toBeInTheDocument();
  });
});
