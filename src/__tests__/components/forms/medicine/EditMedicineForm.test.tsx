import "@testing-library/jest-dom";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import { MedicineInterface } from "../../../../api/interfaces/medicine";

import { EditMedicineForm } from "../../../../components/Forms";

describe("<EditMedicineForm />", () => {
  const onSubmitMock = jest.fn();
  const onCancelMock = jest.fn();
  const data: MedicineInterface = {
    name: "medicine name",
    count: 5,
    magazineCount: 7,
    description: "medicine description",
  };

  it("renders input data", () => {
    render(
      <EditMedicineForm
        data={data}
        onCancel={onCancelMock}
        onSubmit={onSubmitMock}
      />,
    );

    expect(screen.getByDisplayValue("medicine name")).toBeInTheDocument();
    expect(screen.getByDisplayValue("5")).toBeInTheDocument();
    expect(screen.getByDisplayValue("7")).toBeInTheDocument();
    expect(
      screen.getByDisplayValue("medicine description"),
    ).toBeInTheDocument();
  });

  it("runs onSubmit method when clicking save", async () => {
    render(
      <EditMedicineForm
        data={data}
        onCancel={onCancelMock}
        onSubmit={onSubmitMock}
      />,
    );

    await waitFor(() => fireEvent.click(screen.getByText("Save")));
    expect(onSubmitMock).toBeCalled();
  });

  it("runs onCancel method when clicking cancel", async () => {
    render(
      <EditMedicineForm
        data={data}
        onCancel={onCancelMock}
        onSubmit={onSubmitMock}
      />,
    );

    await waitFor(() => fireEvent.click(screen.getByText("Cancel")));
    expect(onCancelMock).toBeCalled();
  });

  it("shows error when saves empty required data", async () => {
    render(
      <EditMedicineForm
        data={data}
        onCancel={onCancelMock}
        onSubmit={onSubmitMock}
      />,
    );

    fireEvent.change(screen.getByPlaceholderText("Medicine name"), {
      target: { value: "" },
    });
    fireEvent.change(screen.getByPlaceholderText("Number of medicines"), {
      target: { value: "" },
    });
    fireEvent.change(
      screen.getByPlaceholderText("Number of medicines in magazine"),
      {
        target: { value: "" },
      },
    );

    await waitFor(() => fireEvent.click(screen.getByText("Save")));

    expect(screen.getByText("Name is required")).toBeInTheDocument();
    expect(
      screen.getByText("Number of medicines in magazine is required"),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Number of medicines is required"),
    ).toBeInTheDocument();
  });
});
