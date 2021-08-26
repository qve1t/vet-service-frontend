import { useState } from "react";
import { useHistory } from "react-router";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import { PetListInterface } from "../../api/interfaces/pet";
import { OwnerListInterface } from "../../api/interfaces/owner";
import { getPetsListAPI } from "../../api/pet";
import { getOwnersListAPI } from "../../api/owner";
import { registerNewVisitAPI } from "../../api/visit";

import {
  BaseInput,
  FormError,
  DatePickerWrapper,
  SelectCustomAsync,
} from "../Inputs";
import StandardButton from "../Buttons/StandardButton";
import { MainAreaHeader } from "../Dashboard/MainArea/styledComponents";
import { FormsWrapper } from "./styledComponents";

import { selectTheme } from "../../mainStyles/reactSelectTheme";
import ErrorComponent from "../ErrorComponent";

import "react-datepicker/dist/react-datepicker.css";

interface PetsOptionsInterface {
  value: PetListInterface;
  label: string;
}

interface OwnersOptionsInterface {
  value: OwnerListInterface;
  label: string;
}

interface FormRegisterInterface {
  dateTime: Date;
  name: string;
  ownerObj: OwnerListInterface;
  petObj: PetListInterface;
}

const NewVisitPanel = () => {
  const [error, setError] = useState<string | null>("");
  const history = useHistory();
  const {
    setValue,
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormRegisterInterface>();

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
    });
    if (registerResponse.response) {
      history.push(`/dashboard/visits/${registerResponse.response.id}`);
    } else {
      setError(registerResponse.error);
    }
  };

  const loadPets = async (inputValue: string) => {
    const loadOptions = await getPetsListAPI({
      page: 0,
      limit: 50,
      name: inputValue,
    });
    if (loadOptions.response) {
      const newArray: PetsOptionsInterface[] = [];
      loadOptions.response.results.map((elem) =>
        newArray.push({
          value: elem,
          label: `${elem.name} ${
            elem.owner
              ? "  ||  " + elem.owner.name + " " + elem.owner.surname
              : ""
          }`,
        }),
      );
      return newArray;
    } else {
      return [];
    }
  };

  const loadOwners = async (inputValue: string) => {
    const loadOptions = await getOwnersListAPI({
      page: 0,
      limit: 50,
      nameSurname: inputValue,
    });
    if (loadOptions.response) {
      const newArray: OwnersOptionsInterface[] = [];
      loadOptions.response.results.map((elem) =>
        newArray.push({ value: elem, label: `${elem.name} ${elem.surname}` }),
      );
      return newArray;
    } else {
      return [];
    }
  };

  return (
    <>
      <MainAreaHeader>Register new visit</MainAreaHeader>

      <FormsWrapper onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="dateTime"
          control={control}
          rules={{
            required: { value: true, message: "Date and time are required" },
          }}
          render={({ field }) => (
            <DatePickerWrapper width="40%" error={errors.dateTime?.message}>
              <DatePicker
                placeholderText="Date"
                showTimeSelect
                timeIntervals={15}
                timeFormat="HH:mm"
                selected={field.value}
                onChange={(date: any) => field.onChange(date)}
                dateFormat="dd-MM-yyyy, HH:mm"
              />
            </DatePickerWrapper>
          )}
        />
        {errors.dateTime && <FormError>{errors.dateTime.message}</FormError>}
        <BaseInput
          placeholder="Name"
          width="40%"
          error={errors.name?.message}
          autoComplete="off"
          {...register("name", {
            required: "Name is required",
          })}
        />
        {errors.name && <FormError>{errors.name.message}</FormError>}

        <Controller
          name="petObj"
          control={control}
          rules={{
            required: { value: true, message: "Pet is required" },
          }}
          render={({ field }) => (
            <SelectCustomAsync
              classNamePrefix="react-select"
              placeholder="Pet"
              width="40%"
              cacheOptions
              loadOptions={loadPets}
              onChange={(option: any) => {
                if (option.value.owner) {
                  setValue("ownerObj", option.value.owner);
                }
                return field.onChange(option.value);
              }}
              error={(errors.petObj as any)?.message}
              theme={selectTheme}
            />
          )}
        />
        {errors.petObj && (
          <FormError>{(errors.petObj as any).message}</FormError>
        )}

        <Controller
          name="ownerObj"
          control={control}
          rules={{
            required: { value: true, message: "Owner is required" },
          }}
          render={({ field }) => (
            <SelectCustomAsync
              classNamePrefix="react-select"
              placeholder="Owner"
              width="40%"
              cacheOptions
              loadOptions={loadOwners}
              onChange={(option: any) => field.onChange(option.value)}
              value={
                field.value && {
                  value: field.value,
                  label: `${field.value.name} ${field.value.surname}`,
                }
              }
              error={(errors.ownerObj as any)?.message}
              theme={selectTheme}
            />
          )}
        />
        {errors.ownerObj && (
          <FormError>{(errors.ownerObj as any).message}</FormError>
        )}

        <StandardButton label="Register" />
      </FormsWrapper>
      {error && <ErrorComponent errorMessage={error} />}
    </>
  );
};

export default NewVisitPanel;
