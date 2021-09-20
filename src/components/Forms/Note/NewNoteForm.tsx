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
} from "../../Inputs";
import StandardButton from "../../Buttons/StandardButton";
import { FormsWrapper } from "../styledComponents";

import { selectTheme } from "../../../mainStyles/reactSelectTheme";

import "react-datepicker/dist/react-datepicker.css";

export interface NoteFormRegisterInterface {
  text: string;
  dateTime: Date;
  ownerObj: OwnerListInterface;
  petObj: PetListInterface;
}

interface NewNoteFormInterface {
  onSubmit: SubmitHandler<NoteFormRegisterInterface>;
}

const NewNoteForm = ({ onSubmit }: NewNoteFormInterface) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<NoteFormRegisterInterface>();

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
      <FormLabel>Pet</FormLabel>
      <Controller
        name="petObj"
        control={control}
        render={({ field }) => (
          <SelectCustomAsync
            classNamePrefix="react-select"
            placeholder="Type a pet name..."
            width="40%"
            cacheOptions
            loadOptions={loadPets}
            onChange={(option: any) => {
              return field.onChange(option.value);
            }}
            error={(errors.petObj as any)?.message}
            theme={selectTheme}
          />
        )}
      />
      {errors.petObj && (
        <FormError marginTop="-25px">
          {(errors.petObj as any).message}
        </FormError>
      )}
      <FormLabel>Owner</FormLabel>
      <Controller
        name="ownerObj"
        control={control}
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
        <FormError marginTop="-25px">
          {(errors.ownerObj as any).message}
        </FormError>
      )}
      <FormLabel>Text</FormLabel>
      <BaseInput
        placeholder="Note text..."
        width="80%"
        error={errors.text?.message}
        autoComplete="off"
        {...register("text", {
          required: "Text is required",
        })}
      />
      {errors.text && <FormError>{errors.text.message}</FormError>}

      <StandardButton label="Create note" width="120px" />
    </FormsWrapper>
  );
};

export default NewNoteForm;
