import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { PetSexes, PetRegisterInterface } from "../../../api/interfaces/pet";
import { loadOwners } from "../../../api/selectListCalls/loadOwners";

import {
  BaseInput,
  FormError,
  BaseTextArea,
  SelectCustom,
  FormLabel,
  SelectCustomAsync,
} from "../../Inputs";
import StandardButton from "../../Buttons/StandardButton";
import {
  FormsWrapper,
  MultipleInputsWrapper,
  SingleInputWrapper,
} from "../styledComponents";
import { selectTheme } from "../../../mainStyles/reactSelectTheme";

interface NewPetFormInterface {
  onSubmit: SubmitHandler<PetRegisterInterface>;
}

const SEX_OPTIONS = [
  { value: PetSexes.MALE, label: "Male" },
  { value: PetSexes.MALE_CASTRATED, label: "Male castrated" },
  { value: PetSexes.FEMALE, label: "Female" },
  { value: PetSexes.FEMALE_CASTRATED, label: "Female castrated" },
];

const NewPetForm = ({ onSubmit }: NewPetFormInterface) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<PetRegisterInterface>();

  return (
    <FormsWrapper onSubmit={handleSubmit(onSubmit)}>
      <FormLabel>Pet name (Required)</FormLabel>
      <BaseInput
        placeholder="Rex"
        width="40%"
        error={errors.name?.message}
        autoComplete="off"
        {...register("name", {
          required: "Name is required",
        })}
      />
      {errors.name && <FormError>{errors.name.message}</FormError>}
      <FormLabel>Owner (Required)</FormLabel>
      <Controller
        name="ownerId"
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
                label: `${(field.value as any).name} ${
                  (field.value as any).surname
                }`,
              }
            }
            error={errors.ownerId?.message}
            theme={selectTheme}
          />
        )}
      />
      {errors.ownerId && <FormError>{errors.ownerId.message}</FormError>}
      <MultipleInputsWrapper>
        <SingleInputWrapper>
          <FormLabel>Type (Required)</FormLabel>
          <BaseInput
            placeholder="Dog"
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
          <FormLabel>Breed</FormLabel>
          <BaseInput
            placeholder="Chihuahua"
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
          <FormLabel>Chip number</FormLabel>
          <BaseInput
            placeholder="123456789 xyz"
            width="80%"
            error={errors.chipId?.message}
            autoComplete="off"
            {...register("chipId")}
          />
          {errors.chipId && <FormError>{errors.chipId.message}</FormError>}
        </SingleInputWrapper>
        <SingleInputWrapper>
          <FormLabel>Tattoo number</FormLabel>
          <BaseInput
            placeholder="123456789 xyz"
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
          <FormLabel>Sex (Required)</FormLabel>
          <Controller
            name="sex"
            control={control}
            rules={{
              required: { value: true, message: "Sex is required" },
            }}
            render={({ field }) => (
              <SelectCustom
                classNamePrefix="react-select"
                placeholder="Select..."
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
          <FormLabel>Age</FormLabel>
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
          <FormLabel>Weight (kg)</FormLabel>
          <BaseInput
            placeholder="10"
            type="number"
            step="0.01"
            width="70%"
            error={errors.weight?.message}
            autoComplete="off"
            {...register("weight", {
              pattern: {
                value: /^[0-9]+([.][0-9]{1,2})?$/,
                message: "Weight has to be a number",
              },
            })}
          />
          {errors.weight && <FormError>{errors.weight.message}</FormError>}
        </SingleInputWrapper>
        <SingleInputWrapper>
          <FormLabel>Height (cm)</FormLabel>
          <BaseInput
            placeholder="80"
            type="number"
            step="0.1"
            width="70%"
            error={errors.height?.message}
            autoComplete="off"
            {...register("height", {
              pattern: {
                value: /^[0-9]+([.][0-9])?$/,
                message: "Height has to be a number",
              },
            })}
          />
          {errors.height && <FormError>{errors.height.message}</FormError>}
        </SingleInputWrapper>
        <SingleInputWrapper>
          <FormLabel>Length (cm))</FormLabel>
          <BaseInput
            placeholder="90"
            type="number"
            step="0.1"
            width="70%"
            error={errors.length?.message}
            autoComplete="off"
            {...register("length", {
              pattern: {
                value: /^[0-9]+([.][0-9])?$/,
                message: "Length has to be a number",
              },
            })}
          />
          {errors.length && <FormError>{errors.length.message}</FormError>}
        </SingleInputWrapper>
      </MultipleInputsWrapper>
      <FormLabel>Diseases</FormLabel>
      <BaseTextArea placeholder="Diseases" {...register("diseases")} />
      <FormLabel>Others</FormLabel>
      <BaseTextArea placeholder="Others" {...register("others")} />
      <StandardButton label="Register" />
    </FormsWrapper>
  );
};

export default NewPetForm;
