import { SubmitHandler, useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import { VisitRegisterInterface } from "../../api/interfaces/visit";

import { BaseInput, FormError, DatePickerWrapper } from "../Inputs";
import StandardButton from "../Buttons/StandardButton";
import { MainAreaHeader } from "../Dashboard/MainArea/styledComponents";
import { FormsWrapper } from "./styledComponents";

import "react-datepicker/dist/react-datepicker.css";

const NewVisitPanel = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<VisitRegisterInterface>();

  const onSubmit: SubmitHandler<VisitRegisterInterface> = (data, event) => {
    event?.preventDefault();
    console.log(data);
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

        <BaseInput
          placeholder="Pet"
          width="40%"
          error={errors.petId?.message}
          autoComplete="off"
          {...register("petId", {
            required: "Pet is required",
          })}
        />
        {errors.petId && <FormError>{errors.petId.message}</FormError>}

        <BaseInput
          placeholder="Owner"
          width="40%"
          error={errors.ownerId?.message}
          autoComplete="off"
          {...register("ownerId", {
            required: "Owner is required",
          })}
        />
        {errors.ownerId && <FormError>{errors.ownerId.message}</FormError>}

        <StandardButton label="Register" />
      </FormsWrapper>
    </>
  );
};

export default NewVisitPanel;
