import { SubmitHandler, useForm } from "react-hook-form";

import { BaseInput, FormError, FormLabel, BaseTextArea } from "../../Inputs";
import StandardButton from "../../Buttons/StandardButton";
import { ButtonsWrapper, FormsWrapper } from "../styledComponents";

import "react-datepicker/dist/react-datepicker.css";
import {
  MultipleElementsWrapper,
  SingleElementWrapper,
} from "../../DashbordDetailsPanels/styledComponents";
import { RegisterMedicineInterface } from "../../../api/interfaces/medicine";

interface NewMedicineFormInterface {
  onSubmit: SubmitHandler<RegisterMedicineInterface>;
}

const NewMedicineForm = ({ onSubmit }: NewMedicineFormInterface) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterMedicineInterface>();

  return (
    <FormsWrapper onSubmit={handleSubmit(onSubmit)}>
      <FormLabel>Name (Required)</FormLabel>
      <BaseInput
        placeholder="Medicine name"
        width="40%"
        error={errors.name?.message}
        autoComplete="off"
        {...register("name", {
          required: "Name is required",
        })}
      />
      {errors.name && <FormError>{errors.name.message}</FormError>}
      <MultipleElementsWrapper>
        <SingleElementWrapper>
          <FormLabel>Number of medicines (Required)</FormLabel>
          <BaseInput
            placeholder="Number of medicines"
            type="number"
            width="40%"
            error={errors.count?.message}
            autoComplete="off"
            {...register("count", {
              required: "Number of medicines is required",
              pattern: {
                value: /^[0-9]+$/,
                message: "It has to be a number",
              },
            })}
          />
          {errors.count && <FormError>{errors.count.message}</FormError>}
        </SingleElementWrapper>
        <SingleElementWrapper>
          <FormLabel>Number of medicines in magazine (Required)</FormLabel>
          <BaseInput
            placeholder="Number of medicines in magazine"
            type="number"
            width="40%"
            error={errors.magazineCount?.message}
            autoComplete="off"
            {...register("magazineCount", {
              required: "Number of medicines in magazine is required",
              pattern: {
                value: /^[0-9]+$/,
                message: "It has to be a number",
              },
            })}
          />
          {errors.magazineCount && (
            <FormError>{errors.magazineCount.message}</FormError>
          )}
        </SingleElementWrapper>
      </MultipleElementsWrapper>
      <FormLabel marginTop="30px">Description</FormLabel>
      <BaseTextArea placeholder="Description..." {...register("description")} />
      <ButtonsWrapper noMargin={true}>
        <StandardButton label="Register" />
      </ButtonsWrapper>
    </FormsWrapper>
  );
};

export default NewMedicineForm;
