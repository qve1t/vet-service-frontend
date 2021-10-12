import { useState } from "react";
import { useHistory } from "react-router";
import { SubmitHandler } from "react-hook-form";

import { MainAreaHeader } from "../Dashboard/MainArea/styledComponents";
import ErrorComponent from "../ErrorComponent";

import { NewMedicineForm } from "../Forms";
import { RegisterMedicineInterface } from "../../api/interfaces/medicine";
import { registerNewMedicineApi } from "../../api/medicine";

const NewMedicinePanel = () => {
  const [error, setError] = useState<string | null>("");
  const history = useHistory();

  const onSubmit: SubmitHandler<RegisterMedicineInterface> = async (
    data,
    event,
  ) => {
    event?.preventDefault();
    setError("");
    const registerResponse = await registerNewMedicineApi({
      name: data.name,
      count: data.count,
      magazineCount: data.magazineCount,
      description: data.description || "",
    });
    if (registerResponse.response) {
      history.push(`/dashboard/medicines/${registerResponse.response.id}`);
    } else {
      setError(registerResponse.error);
    }
  };

  return (
    <>
      <MainAreaHeader>Register new medicine</MainAreaHeader>
      <NewMedicineForm onSubmit={onSubmit} />
      {error && <ErrorComponent errorMessage={error} />}
    </>
  );
};

export default NewMedicinePanel;
