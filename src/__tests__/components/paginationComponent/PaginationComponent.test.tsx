import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { LoggedUserModule } from "../../../modules/LoggedUserModule";
import PaginationComponent from "../../../components/PaginationComponent";

describe("<PaginationComponent />", () => {
  it("should have disabled previous page button on first page", () => {
    render(
      <LoggedUserModule>
        <PaginationComponent
          count={1}
          pageState={{ currentPage: 0, elementsCount: 10, searchText: "" }}
          setPageState={() => {}}
        />
      </LoggedUserModule>,
    );

    expect(screen.getByText("<")).toHaveAttribute("disabled");
  });

  it("should have disabled next page button if there are no more items to show", () => {
    render(
      <LoggedUserModule>
        <PaginationComponent
          count={1}
          pageState={{ currentPage: 0, elementsCount: 10, searchText: "" }}
          setPageState={() => {}}
        />
      </LoggedUserModule>,
    );

    expect(screen.getByText(">")).toHaveAttribute("disabled");
  });

  it("should have disabled next page button and previous button enabled if we are on last page", () => {
    render(
      <LoggedUserModule>
        <PaginationComponent
          count={15}
          pageState={{ currentPage: 1, elementsCount: 10, searchText: "" }}
          setPageState={() => {}}
        />
      </LoggedUserModule>,
    );

    expect(screen.getByText("<")).not.toHaveAttribute("disabled");
    expect(screen.getByText(">")).toHaveAttribute("disabled");
  });

  it("should have both buttons enabled if in pages somewhere between", () => {
    render(
      <LoggedUserModule>
        <PaginationComponent
          count={35}
          pageState={{ currentPage: 2, elementsCount: 10, searchText: "" }}
          setPageState={() => {}}
        />
      </LoggedUserModule>,
    );

    expect(screen.getByText("<")).not.toHaveAttribute("disabled");
    expect(screen.getByText(">")).not.toHaveAttribute("disabled");
  });

  it("should have both buttons disabled if on first page and no more pages", () => {
    render(
      <LoggedUserModule>
        <PaginationComponent
          count={5}
          pageState={{ currentPage: 0, elementsCount: 10, searchText: "" }}
          setPageState={() => {}}
        />
      </LoggedUserModule>,
    );

    expect(screen.getByText("<")).toHaveAttribute("disabled");
    expect(screen.getByText(">")).toHaveAttribute("disabled");
  });
});
