import "@testing-library/jest-dom";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import * as ownersApi from "../../../../api/selectListCalls/loadOwners";
import * as petsApi from "../../../../api/selectListCalls/loadPets";

import { NewNoteForm } from "../../../../components/Forms";

describe("<NewNoteForm />", () => {
  const onSubmitMock = jest.fn();

  it("shows errors when register with empty inputs", async () => {
    render(<NewNoteForm onSubmit={onSubmitMock} />);

    expect(screen.queryAllByRole("paragraph")).toHaveLength(0);

    await waitFor(() => fireEvent.click(screen.getByText("Create note")));

    expect(screen.getByText("Date and time are required")).toBeInTheDocument();
    expect(screen.getByText("Text is required")).toBeInTheDocument();
  });

  it("runs onSubmit function when fields are with text", async () => {
    render(<NewNoteForm onSubmit={onSubmitMock} />);

    fireEvent.change(screen.getByPlaceholderText("Note text..."), {
      target: { value: "test note" },
    });
    fireEvent.change(screen.getByPlaceholderText("Pick a date..."), {
      target: { value: new Date() },
    });

    await waitFor(() => fireEvent.click(screen.getByText("Create note")));

    expect(onSubmitMock).toBeCalled();
  });

  describe("test api calls", () => {
    beforeEach(() => {
      jest.spyOn(ownersApi, "loadOwners").mockResolvedValue([]);
      jest.spyOn(petsApi, "loadPets").mockResolvedValue([]);
    });

    it("calls owners api when enters data to react select field", async () => {
      render(<NewNoteForm onSubmit={onSubmitMock} />);

      const input = document.querySelectorAll('[id^="react-select-"]')[1];

      await waitFor(() =>
        fireEvent.change(input, {
          target: { value: "owner test" },
        }),
      );

      await waitFor(() => expect(ownersApi.loadOwners).toBeCalled());
    });

    it("calls pets api when enters data to react select field", async () => {
      render(<NewNoteForm onSubmit={onSubmitMock} />);

      const input = document.querySelectorAll('[id^="react-select-"]')[0];

      if (input) {
        await waitFor(() =>
          fireEvent.change(input, {
            target: { value: "pet test" },
          }),
        );
      }
      await waitFor(() => expect(petsApi.loadPets).toBeCalled());
    });
  });
});
