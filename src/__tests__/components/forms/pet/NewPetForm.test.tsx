import "@testing-library/jest-dom";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import * as ownersApi from "../../../../api/selectListCalls/loadOwners";

import { NewPetForm } from "../../../../components/Forms";

describe("<NewPetForm />", () => {
  const onSubmitMock = jest.fn();

  it("shows errors when register with empty inputs", async () => {
    render(<NewPetForm onSubmit={onSubmitMock} />);

    expect(screen.queryAllByRole("paragraph")).toHaveLength(0);

    await waitFor(() => fireEvent.click(screen.getByText("Register")));

    expect(screen.getByText("Name is required")).toBeInTheDocument();
    expect(screen.getByText("Type is required")).toBeInTheDocument();
    expect(screen.getByText("Sex is required")).toBeInTheDocument();
  });

  it("runs onSubmit function when required fields are with text", async () => {
    render(<NewPetForm onSubmit={onSubmitMock} />);

    const input = document.querySelectorAll('[id^="react-select-"]')[1];

    fireEvent.change(screen.getByPlaceholderText("Rex"), {
      target: { value: "test pet" },
    });
    fireEvent.change(screen.getByPlaceholderText("Dog"), {
      target: { value: "dog type" },
    });
    await waitFor(() =>
      fireEvent.change(input, {
        target: { value: "Ma" },
      }),
    );
    fireEvent.click(screen.getByText("Male"));

    await waitFor(() => fireEvent.click(screen.getByText("Register")));

    expect(onSubmitMock).toBeCalled();
  });

  describe("test api calls", () => {
    beforeEach(() => {
      jest.spyOn(ownersApi, "loadOwners").mockResolvedValue([]);
    });

    it("calls owners api when enters data to react select field", async () => {
      render(<NewPetForm onSubmit={onSubmitMock} />);

      const input = document.querySelectorAll('[id^="react-select-"]')[0];

      await waitFor(() =>
        fireEvent.change(input, {
          target: { value: "owner test" },
        }),
      );

      await waitFor(() => expect(ownersApi.loadOwners).toBeCalled());
    });
  });
});
