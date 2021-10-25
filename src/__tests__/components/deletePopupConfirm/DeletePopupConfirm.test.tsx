import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";

import DeleteConfirmPopup from "../../../components/DeleteConfirmPopup";

describe("<DeleteConfirmPopup />", () => {
  it("don't show if there is no prop", () => {
    render(
      <DeleteConfirmPopup
        show={false}
        onConfirm={() => {}}
        onHide={() => {}}
      />,
    );

    expect(
      screen.queryByText("Are you sure you want to delete this?"),
    ).not.toBeInTheDocument();
  });

  it("show if there is prop to show", () => {
    render(
      <DeleteConfirmPopup show={true} onConfirm={() => {}} onHide={() => {}} />,
    );

    expect(
      screen.getByText("Are you sure you want to delete this?"),
    ).toBeInTheDocument();
  });

  it("on Cancel click run onHide function", () => {
    const onHideMock = jest.fn();
    render(
      <DeleteConfirmPopup
        show={true}
        onConfirm={() => {}}
        onHide={onHideMock}
      />,
    );

    fireEvent.click(screen.getByText("Cancel"));
    expect(onHideMock).toBeCalled();
  });

  it("on Delete click run onConfirm and onHide functions", () => {
    const onHideMock = jest.fn();
    const onConfirmMock = jest.fn();
    render(
      <DeleteConfirmPopup
        show={true}
        onConfirm={onConfirmMock}
        onHide={onHideMock}
      />,
    );

    fireEvent.click(screen.getByText("Delete"));
    expect(onConfirmMock).toBeCalled();
    expect(onHideMock).toBeCalled();
  });
});
