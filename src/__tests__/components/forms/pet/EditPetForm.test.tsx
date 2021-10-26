import "@testing-library/jest-dom";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import { PetInterface, PetSexes } from "../../../../api/interfaces/pet";

import { EditPetForm } from "../../../../components/Forms";

describe("<EditPetForm />", () => {
  const onSubmitMock = jest.fn();
  const onCancelMock = jest.fn();
  const data: PetInterface = {
    age: 1,
    chipId: "",
    diseases: "",
    height: null,
    length: null,
    name: "Pet test",
    notes: [],
    others: "",
    owner: { id: "ownerId", name: "owner", surname: "surname" },
    race: "",
    sex: PetSexes.MALE,
    tatooId: "",
    type: "dog",
    visits: [{ id: "visitId", name: "test visit", dateTime: new Date() }],
    weight: null,
  };

  it("renders input data, name, type and sex are not editable", () => {
    render(
      <EditPetForm
        data={data}
        onCancel={onCancelMock}
        onSubmit={onSubmitMock}
      />,
    );

    expect(screen.getByText("Pet test")).toBeInTheDocument();
    expect(screen.getByText("dog")).toBeInTheDocument();
    expect(screen.getByText("Male")).toBeInTheDocument();
    expect(screen.queryByDisplayValue("Pet test")).not.toBeInTheDocument();
    expect(screen.queryByDisplayValue("dog")).not.toBeInTheDocument();
    expect(screen.queryByDisplayValue("Male")).not.toBeInTheDocument();
    expect(screen.getByDisplayValue("1")).toBeInTheDocument();
  });
});
