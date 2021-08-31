import { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { useHistory } from "react-router";
import { pickBy } from "lodash";
import { PetRegisterInterface } from "../../api/interfaces/pet";

import { MainAreaHeader } from "../Dashboard/MainArea/styledComponents";

import { registerNewPetAPI } from "../../api/pet";
import { NewPetForm } from "../Forms";
import ErrorComponent from "../ErrorComponent";

const NewPetPanel = () => {
  const [error, setError] = useState<string | null>("");
  const history = useHistory();

  const onSubmit: SubmitHandler<PetRegisterInterface> = async (data, event) => {
    event?.preventDefault();
    setError("");
    const filteredValues = pickBy(
      { ...data, ownerId: (data.ownerId as any).id },
      (value: string | undefined) => value && value.length > 0,
    );

    const registerResponse = await registerNewPetAPI(
      filteredValues as PetRegisterInterface,
    );
    if (registerResponse.response) {
      history.push(`/dashboard/pets/${registerResponse.response.id}`);
    } else {
      setError(registerResponse.error);
    }
  };

  return (
    <>
      <MainAreaHeader>Register new pet</MainAreaHeader>
      <NewPetForm onSubmit={onSubmit} />
      {error && <ErrorComponent errorMessage={error} />}
    </>
  );
};

export default NewPetPanel;
