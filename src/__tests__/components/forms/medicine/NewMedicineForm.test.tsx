import "@testing-library/jest-dom";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";

import { NewMedicineForm } from "../../../../components/Forms";

describe("<NewMedicineForm />", () => {
  const onSubmitMock = jest.fn();

  it("shows errors when register with empty inputs", async () => {
    render(<NewMedicineForm onSubmit={onSubmitMock} />);

    expect(screen.queryAllByRole("paragraph")).toHaveLength(0);

    await waitFor(() => fireEvent.click(screen.getByText("Register")));

    expect(screen.getByText("Name is required")).toBeInTheDocument();
    expect(
      screen.getByText("Number of medicines in magazine is required"),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Number of medicines is required"),
    ).toBeInTheDocument();
  });

  it("Runs onSubmit function when fields are with text", async () => {
    render(<NewMedicineForm onSubmit={onSubmitMock} />);

    fireEvent.change(screen.getByPlaceholderText("Medicine name"), {
      target: { value: "test medicine" },
    });
    fireEvent.change(screen.getByPlaceholderText("Number of medicines"), {
      target: { value: 5 },
    });
    fireEvent.change(
      screen.getByPlaceholderText("Number of medicines in magazine"),
      {
        target: { value: 5 },
      },
    );
    fireEvent.change(screen.getByPlaceholderText("Description..."), {
      target: { value: "test description" },
    });

    await waitFor(() => fireEvent.click(screen.getByText("Register")));

    expect(onSubmitMock).toBeCalled();
  });
});
