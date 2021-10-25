import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";

import SearchListInput from "../../../components/Inputs/SearchListInput";

describe("<SearchListInput />", () => {
  it("runs onPageState function on enter click", () => {
    const setPageState = jest.fn() as any;
    render(
      <SearchListInput
        pageState={{ currentPage: 0, elementsCount: 5, searchText: "" }}
        setPageState={setPageState}
      />,
    );

    fireEvent.change(screen.getByPlaceholderText("Search..."), {
      target: { value: "test" },
    });
    fireEvent.keyPress(screen.getByPlaceholderText("Search..."), {
      key: "Enter",
      code: "Enter",
      charCode: 13,
    });

    expect(setPageState).toBeCalled();
  });

  it("runs onPageState function on blur", () => {
    const setPageState = jest.fn() as any;
    render(
      <SearchListInput
        pageState={{ currentPage: 0, elementsCount: 5, searchText: "" }}
        setPageState={setPageState}
      />,
    );

    fireEvent.change(screen.getByPlaceholderText("Search..."), {
      target: { value: "test" },
    });
    fireEvent.blur(screen.getByPlaceholderText("Search..."));

    expect(setPageState).toBeCalled();
  });
});
