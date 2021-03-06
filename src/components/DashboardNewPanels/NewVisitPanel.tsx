import { useState } from "react";
import { useHistory } from "react-router";
import { SubmitHandler } from "react-hook-form";
import { registerNewVisitAPI } from "../../api/visit";

import { MainAreaHeader } from "../Dashboard/MainArea/styledComponents";
import ErrorComponent from "../ErrorComponent";

import { NewVisitForm } from "../Forms";
import { FormRegisterInterface } from "../Forms/Visit/NewVisitForm";

const NewVisitPanel = () => {
  const [error, setError] = useState<string | null>("");
  const history = useHistory();

  const onSubmit: SubmitHandler<FormRegisterInterface> = async (
    data,
    event,
  ) => {
    event?.preventDefault();
    setError("");
    const registerResponse = await registerNewVisitAPI({
      dateTime: data.dateTime,
      name: data.name,
      petId: data.petObj.id,
      ownerId: data.ownerObj.id,
      note: data.note || "",
    });
    if (registerResponse.response) {
      history.push(`/dashboard/visits/${registerResponse.response.id}`);
    } else {
      setError(registerResponse.error);
    }
  };

  return (
    <>
      <MainAreaHeader>Register new visit</MainAreaHeader>
      <NewVisitForm onSubmit={onSubmit} />
      {error && <ErrorComponent errorMessage={error} />}
    </>
  );
};

export default NewVisitPanel;
