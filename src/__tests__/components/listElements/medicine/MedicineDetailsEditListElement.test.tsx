import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";

import { MedicineDetailsEditListElement } from "../../../../components/ListsElements";

describe("<MedicineDetailsEditListElement />", () => {
  it("runs onDelete function when click bin icon", () => {
    const onDeleteMock = jest.fn();
    render(
      <MedicineDetailsEditListElement
        name="test"
        count={0}
        index={0}
        onDelete={onDeleteMock}
        onCountChange={() => {}}
      />,
    );

    fireEvent.click(screen.getByRole("img"));
    expect(onDeleteMock).toBeCalled();
  });

  it("runs onCountChange function when input change", () => {
    const onCountChangeMock = jest.fn();
    render(
      <MedicineDetailsEditListElement
        name="test"
        count={0}
        index={0}
        onDelete={() => {}}
        onCountChange={onCountChangeMock}
      />,
    );

    fireEvent.change(screen.getByRole("spinbutton"), {
      target: { value: "test" },
    });
    expect(onCountChangeMock).toBeCalled();
  });
});
