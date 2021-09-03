import { SubmitHandler, useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import { PetListInterface } from "../../../api/interfaces/pet";
import { OwnerListInterface } from "../../../api/interfaces/owner";
import { loadOwners } from "../../../api/selectListCalls/loadOwners";
import { loadPets } from "../../../api/selectListCalls/loadPets";

import {
  BaseInput,
  FormError,
  DatePickerWrapper,
  SelectCustomAsync,
  FormLabel,
  BaseTextArea,
} from "../../Inputs";
import StandardButton from "../../Buttons/StandardButton";
import { FormsWrapper } from "../styledComponents";

import { selectTheme } from "../../../mainStyles/reactSelectTheme";

import "react-datepicker/dist/react-datepicker.css";

export interface FormRegisterInterface {
  dateTime: Date;
  name: string;
  ownerObj: OwnerListInterface;
  petObj: PetListInterface;
  note?: string;
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
      <FormLabel>Note</FormLabel>
      <BaseTextArea placeholder="Note..." {...register("note")} />

      <StandardButton label="Register" />
    </FormsWrapper>
  );
};

export default NewVisitForm;
