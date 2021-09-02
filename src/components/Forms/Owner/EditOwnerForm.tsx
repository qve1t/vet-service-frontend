import { useForm, SubmitHandler } from "react-hook-form";
import {
  OwnerInterface,
  OwnerInfoToUpdateInterface,
} from "../../../api/interfaces/owner";

import { BaseInput, FormError, FormLabel } from "../../Inputs";
import StandardButton from "../../Buttons/StandardButton";
import {
  ButtonsWrapper,
  FormsWrapper,
  MultipleInputsWrapper,
  SingleInputWrapper,
} from "../styledComponents";
import DataElement from "../../DashbordDetailsPanels/Components/DataElement";

interface EditOwnerFormInterface {
  onSubmit: SubmitHandler<OwnerInfoToUpdateInterface>;
  onCancel: () => void;
  data: OwnerInterface | null;
}

const EditOwnerForm = ({
  onSubmit,
  data,
  onCancel,
}: EditOwnerFormInterface) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OwnerInfoToUpdateInterface>();

  return (
    <FormsWrapper onSubmit={handleSubmit(onSubmit)}>
      <MultipleInputsWrapper>
        <DataElement label="Name" displayData={data?.name} width="80%" />
        <DataElement label="Surname" displayData={data?.surname} width="80%" />
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
            defaultValue={data?.phone || ""}
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
            defaultValue={data?.email || ""}
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
        defaultValue={data?.address || ""}
        {...register("address")}
      />
      {errors.address && <FormError>{errors.address.message}</FormError>}
      <ButtonsWrapper>
        <StandardButton label="Save" />
        <StandardButton
          label="Cancel"
          onClick={(event) => {
            event.preventDefault();
            onCancel();
          }}
        />
      </ButtonsWrapper>
    </FormsWrapper>
  );
};

export default EditOwnerForm;
