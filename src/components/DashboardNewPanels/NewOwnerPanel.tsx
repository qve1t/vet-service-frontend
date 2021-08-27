import { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { useHistory } from "react-router";
import { pickBy } from "lodash";
import { RegisterOwnerInterface } from "../../api/interfaces/owner";
import { registerNewOwnerAPI } from "../../api/owner";

import { MainAreaHeader } from "../Dashboard/MainArea/styledComponents";

import ErrorComponent from "../ErrorComponent";
import { NewOwnerForm } from "../Forms";

const NewOwnerPanel = () => {
  const [error, setError] = useState<string | null>("");
  const history = useHistory();

  const onSubmit: SubmitHandler<RegisterOwnerInterface> = async (
    data,
    event,
  ) => {
    event?.preventDefault();
    setError("");
    const filteredValues = pickBy(
      data,
      (value: string | undefined) => value && value.length > 0,
    );
    const registerResponse = await registerNewOwnerAPI(
      filteredValues as RegisterOwnerInterface,
    );
    if (registerResponse.response) {
      history.push(`/dashboard/owners/${registerResponse.response.id}`);
    } else {
      setError(registerResponse.error);
    }
  };

  return (
    <>
      <MainAreaHeader>Register new owner</MainAreaHeader>
      <NewOwnerForm onSubmit={onSubmit} />
      {error && <ErrorComponent errorMessage={error} />}
    </>
  );
};

export default NewOwnerPanel;
