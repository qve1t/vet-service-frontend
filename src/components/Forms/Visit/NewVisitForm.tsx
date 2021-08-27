import { SubmitHandler, useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import { PetListInterface } from "../../../api/interfaces/pet";
import { OwnerListInterface } from "../../../api/interfaces/owner";
import { getPetsListAPI } from "../../../api/pet";
import { getOwnersListAPI } from "../../../api/owner";

import {
  BaseInput,
  FormError,
  DatePickerWrapper,
  SelectCustomAsync,
  FormLabel,
} from "../../Inputs";
import StandardButton from "../../Buttons/StandardButton";
import { FormsWrapper } from "../styledComponents";

import { selectTheme } from "../../../mainStyles/reactSelectTheme";

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

interface NewVisitFormInterface {
  onSubmit: SubmitHandler<FormRegisterInterface>;
}

const NewVisitForm = ({ onSubmit }: NewVisitFormInterface) => {
  const {
    setValue,
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormRegisterInterface>();

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
    <FormsWrapper onSubmit={handleSubmit(onSubmit)}>
      <FormLabel>Date (Required)</FormLabel>
      <Controller
        name="dateTime"
        control={control}
        rules={{
          required: { value: true, message: "Date and time are required" },
        }}
        render={({ field }) => (
          <DatePickerWrapper width="40%" error={errors.dateTime?.message}>
            <DatePicker
              placeholderText="Pick a date..."
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
      <FormLabel>Visit name (required)</FormLabel>
      <BaseInput
        placeholder="Vaccination"
        width="40%"
        error={errors.name?.message}
        autoComplete="off"
        {...register("name", {
          required: "Name is required",
        })}
      />
      {errors.name && <FormError>{errors.name.message}</FormError>}
      <FormLabel>Pet (Required)</FormLabel>
      <Controller
        name="petObj"
        control={control}
        rules={{
          required: { value: true, message: "Pet is required" },
        }}
        render={({ field }) => (
          <SelectCustomAsync
            classNamePrefix="react-select"
            placeholder="Type a pet name..."
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
      {errors.petObj && <FormError>{(errors.petObj as any).message}</FormError>}
      <FormLabel>Owner (Required)</FormLabel>
      <Controller
        name="ownerObj"
        control={control}
        rules={{
          required: { value: true, message: "Owner is required" },
        }}
        render={({ field }) => (
          <SelectCustomAsync
            classNamePrefix="react-select"
            placeholder="Type an owner name..."
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
  );
};

export default NewVisitForm;
