import "@testing-library/jest-dom";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import { OwnerInterface } from "../../../../api/interfaces/owner";

import { EditOwnerForm } from "../../../../components/Forms";

describe("<EditOwnerForm>", () => {
  const onSubmitMock = jest.fn();
  const onCancelMock = jest.fn();
  const data: OwnerInterface = {
    name: "owner",
    surname: "owner surname",
    phone: "123123123",
    email: "test@email.com",
    address: "addres 1",
    notes: [],
    pets: [],
  };

  it("renders input data, name and surname are not editable", () => {
    render(
      <EditOwnerForm
        data={data}
        onCancel={onCancelMock}
        onSubmit={onSubmitMock}
      />,
    );

    expect(screen.getByText("owner")).toBeInTheDocument();
    expect(screen.getByText("owner surname")).toBeInTheDocument();
    expect(screen.queryByDisplayValue("owner")).not.toBeInTheDocument();
    expect(screen.queryByDisplayValue("owner surname")).not.toBeInTheDocument();
    expect(screen.getByDisplayValue("123123123")).toBeInTheDocument();
    expect(screen.getByDisplayValue("test@email.com")).toBeInTheDocument();
    expect(screen.getByDisplayValue("addres 1")).toBeInTheDocument();
  });

  it("runs onSubmit method when clicking save", async () => {
    render(
      <EditOwnerForm
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
      <EditOwnerForm
        data={data}
        onCancel={onCancelMock}
        onSubmit={onSubmitMock}
      />,
    );

    await waitFor(() => fireEvent.click(screen.getByText("Cancel")));
    expect(onCancelMock).toBeCalled();
  });

  it("saves data even when deleting not required values", async () => {
    render(
      <EditOwnerForm
        data={data}
        onCancel={onCancelMock}
        onSubmit={onSubmitMock}
      />,
    );

    fireEvent.change(screen.getByPlaceholderText("123456789"), {
      target: { value: "" },
    });
    fireEvent.change(screen.getByPlaceholderText("example@example.com"), {
      target: { value: "" },
    });
    fireEvent.change(screen.getByPlaceholderText("Street 1, City"), {
      target: { value: "" },
    });

    await waitFor(() => fireEvent.click(screen.getByText("Save")));
    expect(onSubmitMock).toBeCalled();
  });
});
