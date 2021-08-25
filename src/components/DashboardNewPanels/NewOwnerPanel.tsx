import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { pickBy } from "lodash";
import { RegisterOwnerInterface } from "../../api/interfaces/owner";
import { registerNewOwnerAPI } from "../../api/owner";

import { BaseInput, FormError } from "../Inputs";
import StandardButton from "../Buttons/StandardButton";
import { MainAreaHeader } from "../Dashboard/MainArea/styledComponents";
import {
  FormsWrapper,
  MultipleInputsWrapper,
  SingleInputWrapper,
} from "./styledComponents";
import ErrorComponent from "../ErrorComponent";

const NewOwnerPanel = () => {
  const [error, setError] = useState<string | null>("");
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterOwnerInterface>();

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
      <FormsWrapper onSubmit={handleSubmit(onSubmit)}>
        <MultipleInputsWrapper>
          <SingleInputWrapper>
            <BaseInput
              placeholder="Name"
              width="80%"
              error={errors.name?.message}
              autoComplete="off"
              {...register("name", {
                required: "Name is required",
              })}
            />
            {errors.name && <FormError>{errors.name.message}</FormError>}
          </SingleInputWrapper>
          <SingleInputWrapper>
            <BaseInput
              placeholder="Surname"
              width="80%"
              error={errors.surname?.message}
              autoComplete="off"
              {...register("surname", {
                required: "Surname is required",
              })}
            />
            {errors.surname && <FormError>{errors.surname.message}</FormError>}
          </SingleInputWrapper>
        </MultipleInputsWrapper>
        <MultipleInputsWrapper>
          <SingleInputWrapper>
            <BaseInput
              placeholder="Phone number"
              width="50%"
              type="number"
              error={errors.phone?.message}
              autoComplete="off"
              {...register("phone")}
            />
            {errors.phone && <FormError>{errors.phone.message}</FormError>}
          </SingleInputWrapper>
          <SingleInputWrapper>
            <BaseInput
              placeholder="Email address"
              width="50%"
              error={errors.email?.message}
              autoComplete="off"
              {...register("email", {
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Value has to be an email",
                },
              })}
            />
            {errors.email && <FormError>{errors.email.message}</FormError>}
          </SingleInputWrapper>
        </MultipleInputsWrapper>
        <BaseInput
          placeholder="Address"
          width="40%"
          error={errors.address?.message}
          autoComplete="off"
          {...register("address")}
        />
        {errors.address && <FormError>{errors.address.message}</FormError>}

        <StandardButton label="Register" />
      </FormsWrapper>
      {error && <ErrorComponent errorMessage={error} />}
    </>
  );
};

export default NewOwnerPanel;
