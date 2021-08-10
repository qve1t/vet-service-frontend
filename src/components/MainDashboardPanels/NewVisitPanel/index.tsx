import { SubmitHandler, useForm } from "react-hook-form";
import { VisitRegisterInterface } from "../../../api/interfaces/visit";

import { BaseInput, FormError } from "../../Inputs";
import StandardButton from "../../Buttons/StandardButton";
import { MainAreaHeader } from "../../Dashboard/MainArea/styledComponents";
import { FormsWrapper } from "../styledComponents";

const NewVisitPanel = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<VisitRegisterInterface>();

  const onSubmit: SubmitHandler<VisitRegisterInterface> = (data, event) => {
    event?.preventDefault();
    console.log(data);
  };

  return (
    <div>
      <MainAreaHeader>Register new owner</MainAreaHeader>
      <FormsWrapper onSubmit={handleSubmit(onSubmit)}>
        <BaseInput
          placeholder="Date"
          width="40%"
          type="datetime-local"
          error={errors.dateTime?.message}
          {...register("dateTime", {
            required: "Date and time are required",
          })}
        />
        {errors.dateTime && <FormError>{errors.dateTime.message}</FormError>}
        <BaseInput
          placeholder="Name"
          width="40%"
          error={errors.name?.message}
          {...register("name", {
            required: "Name is required",
          })}
        />
        {errors.name && <FormError>{errors.name.message}</FormError>}

        <BaseInput
          placeholder="Pet"
          width="40%"
          error={errors.petId?.message}
          {...register("petId", {
            required: "Pet is required",
          })}
        />
        {errors.petId && <FormError>{errors.petId.message}</FormError>}

        <BaseInput
          placeholder="Owner"
          width="40%"
          error={errors.ownerId?.message}
          {...register("ownerId", {
            required: "Owner is required",
          })}
        />
        {errors.ownerId && <FormError>{errors.ownerId.message}</FormError>}

        <StandardButton label="Register" />
      </FormsWrapper>
    </div>
  );
};

export default NewVisitPanel;
