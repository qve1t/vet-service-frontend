import "@testing-library/jest-dom";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";

import { NewOwnerForm } from "../../../../components/Forms";

describe("<NewOwnerForm />", () => {
  const onSubmitMock = jest.fn();

  it("shows errors when register with empty inputs", async () => {
    render(<NewOwnerForm onSubmit={onSubmitMock} />);

    expect(screen.queryAllByRole("paragraph")).toHaveLength(0);

    await waitFor(() => fireEvent.click(screen.getByText("Register")));

    expect(screen.getByText("Name is required")).toBeInTheDocument();
    expect(screen.getByText("Surname is required")).toBeInTheDocument();
  });

  it("Runs onSubmit function when fields are with text", async () => {
    render(<NewOwnerForm onSubmit={onSubmitMock} />);

    fireEvent.change(screen.getByPlaceholderText("Lucy"), {
      target: { value: "test owner" },
    });
    fireEvent.change(screen.getByPlaceholderText("Doe"), {
      target: { value: "test surname" },
    });
    fireEvent.change(screen.getByPlaceholderText("123456789"), {
      target: { value: "111222333" },
    });
    fireEvent.change(screen.getByPlaceholderText("example@example.com"), {
      target: { value: "example@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Street 1, City"), {
      target: { value: "Street 1, Moscow" },
    });

    await waitFor(() => fireEvent.click(screen.getByText("Register")));

    expect(onSubmitMock).toBeCalled();
  });

  it("Show error when email is not an email", async () => {
    render(<NewOwnerForm onSubmit={onSubmitMock} />);

    fireEvent.change(screen.getByPlaceholderText("Lucy"), {
      target: { value: "test owner" },
    });
    fireEvent.change(screen.getByPlaceholderText("Doe"), {
      target: { value: "test surname" },
    });
    fireEvent.change(screen.getByPlaceholderText("123456789"), {
      target: { value: "111222333" },
    });
    fireEvent.change(screen.getByPlaceholderText("example@example.com"), {
      target: { value: "test email" },
    });
    fireEvent.change(screen.getByPlaceholderText("Street 1, City"), {
      target: { value: "Street 1, Moscow" },
    });

    await waitFor(() => fireEvent.click(screen.getByText("Register")));

    expect(screen.getByText("Value has to be an email")).toBeInTheDocument();
  });
});
