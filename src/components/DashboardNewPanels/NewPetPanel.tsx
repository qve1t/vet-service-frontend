import { useState } from "react";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { useHistory } from "react-router";
import { pickBy } from "lodash";
import { PetSexes, PetRegisterInterface } from "../../api/interfaces/pet";

import { BaseInput, FormError, BaseTextArea, SelectCustom } from "../Inputs";
import StandardButton from "../Buttons/StandardButton";
import { MainAreaHeader } from "../Dashboard/MainArea/styledComponents";
import {
  FormsWrapper,
  MultipleInputsWrapper,
  SingleInputWrapper,
} from "./styledComponents";
import { selectTheme } from "../../mainStyles/reactSelectTheme";
import ErrorComponent from "../ErrorComponent";
import { registerNewPetAPI } from "../../api/pet";

const SEX_OPTIONS = [
  { value: PetSexes.MALE, label: "Male" },
  { value: PetSexes.MALE_CASTRATED, label: "Male castrated" },
  { value: PetSexes.FEMALE, label: "Female" },
  { value: PetSexes.FEMALE_CASTRATED, label: "Female castrated" },
];

const NewPetPanel = () => {
  const [error, setError] = useState<string | null>("");
  const history = useHistory();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<PetRegisterInterface>();

  const onSubmit: SubmitHandler<PetRegisterInterface> = async (data, event) => {
    event?.preventDefault();
    setError("");
    const filteredValues = pickBy(
      data,
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
      <FormsWrapper onSubmit={handleSubmit(onSubmit)}>
        <BaseInput
          placeholder="Pet name"
          width="40%"
          error={errors.name?.message}
          autoComplete="off"
          {...register("name", {
            required: "Name is required",
          })}
        />
        {errors.name && <FormError>{errors.name.message}</FormError>}
        <MultipleInputsWrapper>
          <SingleInputWrapper>
            <BaseInput
              placeholder="Type"
              width="80%"
              error={errors.type?.message}
              autoComplete="off"
              {...register("type", {
                required: "Type is required",
              })}
            />
            {errors.type && <FormError>{errors.type.message}</FormError>}
          </SingleInputWrapper>
          <SingleInputWrapper>
            <BaseInput
              placeholder="Race"
              width="80%"
              error={errors.race?.message}
              autoComplete="off"
              {...register("race")}
            />
            {errors.race && <FormError>{errors.race.message}</FormError>}
          </SingleInputWrapper>
        </MultipleInputsWrapper>
        <MultipleInputsWrapper>
          <SingleInputWrapper>
            <BaseInput
              placeholder="Chip number"
              width="80%"
              error={errors.chipId?.message}
              autoComplete="off"
              {...register("chipId")}
            />
            {errors.chipId && <FormError>{errors.chipId.message}</FormError>}
          </SingleInputWrapper>
          <SingleInputWrapper>
            <BaseInput
              placeholder="Tattoo number"
              width="80%"
              error={errors.tatooId?.message}
              autoComplete="off"
              {...register("tatooId")}
            />
            {errors.tatooId && <FormError>{errors.tatooId.message}</FormError>}
          </SingleInputWrapper>
        </MultipleInputsWrapper>
        <MultipleInputsWrapper>
          <SingleInputWrapper>
            <Controller
              name="sex"
              control={control}
              rules={{
                required: { value: true, message: "Sex is required" },
              }}
              render={({ field }) => (
                <SelectCustom
                  classNamePrefix="react-select"
                  placeholder="Sex"
                  options={SEX_OPTIONS}
                  onChange={(option: any) => field.onChange(option.value)}
                  width="80%"
                  error={errors.sex?.message}
                  theme={selectTheme}
                />
              )}
            />
            {errors.sex && <FormError>{errors.sex.message}</FormError>}
          </SingleInputWrapper>
          <SingleInputWrapper>
            <BaseInput
              placeholder="Age"
              type="number"
              width="80%"
              error={errors.age?.message}
              autoComplete="off"
              {...register("age", {
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Age has to be a number",
                },
              })}
            />
            {errors.age && <FormError>{errors.age.message}</FormError>}
          </SingleInputWrapper>
        </MultipleInputsWrapper>
        <MultipleInputsWrapper>
          <SingleInputWrapper>
            <BaseInput
              placeholder="Weight"
              type="number"
              width="70%"
              error={errors.weight?.message}
              autoComplete="off"
              {...register("weight", {
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Weight has to be a number",
                },
              })}
            />
            {errors.weight && <FormError>{errors.weight.message}</FormError>}
          </SingleInputWrapper>
          <SingleInputWrapper>
            <BaseInput
              placeholder="Height"
              type="number"
              width="70%"
              error={errors.height?.message}
              autoComplete="off"
              {...register("height", {
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Height has to be a number",
                },
              })}
            />
            {errors.height && <FormError>{errors.height.message}</FormError>}
          </SingleInputWrapper>
          <SingleInputWrapper>
            <BaseInput
              placeholder="Length"
              type="number"
              width="70%"
              error={errors.length?.message}
              autoComplete="off"
              {...register("length", {
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Length has to be a number",
                },
              })}
            />
            {errors.length && <FormError>{errors.length.message}</FormError>}
          </SingleInputWrapper>
        </MultipleInputsWrapper>
        <BaseTextArea placeholder="Diseases" {...register("diseases")} />
        <BaseTextArea placeholder="Others" {...register("others")} />
        <StandardButton label="Register" />
      </FormsWrapper>
      {error && <ErrorComponent errorMessage={error} />}
    </>
  );
};

export default NewPetPanel;
