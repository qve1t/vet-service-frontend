import { useForm, SubmitHandler } from "react-hook-form";
import { RegisterOwnerInterface } from "../../../api/interfaces/owner";

import { BaseInput, FormError, FormLabel } from "../../Inputs";
import StandardButton from "../../Buttons/StandardButton";
import {
  FormsWrapper,
  MultipleInputsWrapper,
  SingleInputWrapper,
} from "../styledComponents";

interface NewOwnerFormInterface {
  onSubmit: SubmitHandler<RegisterOwnerInterface>;
}

const NewOwnerForm = ({ onSubmit }: NewOwnerFormInterface) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterOwnerInterface>();

  return (
    <FormsWrapper onSubmit={handleSubmit(onSubmit)}>
      <MultipleInputsWrapper>
        <SingleInputWrapper>
          <FormLabel>Name (Required)</FormLabel>
          <BaseInput
            placeholder="Lucy"
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
          <FormLabel>Surname (Required)</FormLabel>
          <BaseInput
            placeholder="Doe"
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
          <FormLabel>Phone number</FormLabel>
          <BaseInput
            placeholder="123456789"
            width="50%"
            type="number"
            error={errors.phone?.message}
            autoComplete="off"
            {...register("phone")}
          />
          {errors.phone && <FormError>{errors.phone.message}</FormError>}
        </SingleInputWrapper>
        <SingleInputWrapper>
          <FormLabel>Email address</FormLabel>
          <BaseInput
            placeholder="example@example.com"
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
      <FormLabel>Address</FormLabel>
      <BaseInput
        placeholder="Street 1, City"
        width="40%"
        error={errors.address?.message}
        autoComplete="off"
        {...register("address")}
      />
      {errors.address && <FormError>{errors.address.message}</FormError>}

      <StandardButton label="Register" />
    </FormsWrapper>
  );
};

export default NewOwnerForm;
