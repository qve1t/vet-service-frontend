import { SubmitHandler, useForm, Controller } from "react-hook-form";
import {
  PetInfoToUpdateInterface,
  PetInterface,
  SEX_OPTIONS,
} from "../../../api/interfaces/pet";
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
  ButtonsWrapper,
  FormsWrapper,
  MultipleInputsWrapper,
  SingleInputWrapper,
} from "../styledComponents";
import { selectTheme } from "../../../mainStyles/reactSelectTheme";
import DataElement from "../../DashbordDetailsPanels/Components/DataElement";

interface NewPetFormInterface {
  onSubmit: SubmitHandler<PetInfoToUpdateInterface>;
  onCancel: () => void;
  data: PetInterface | null;
}

const EditPetForm = ({ onSubmit, onCancel, data }: NewPetFormInterface) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<PetInfoToUpdateInterface>();

  return (
    <FormsWrapper onSubmit={handleSubmit(onSubmit)}>
      <DataElement label="Name" displayData={data?.name} width="40%" />
      <FormLabel>Owner (Required)</FormLabel>
      <Controller
        name="ownerId"
        control={control}
        defaultValue={data?.owner as any}
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
      {errors.ownerId && (
        <FormError marginTop="-25px">{errors.ownerId.message}</FormError>
      )}
      <MultipleInputsWrapper>
        <DataElement label="Type" displayData={data?.type} width="80%" />
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
            defaultValue={data?.chipId || ""}
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
            defaultValue={data?.tatooId || ""}
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
            defaultValue={
              SEX_OPTIONS.find((elem) => elem.value === data?.sex)?.value
            }
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
                defaultValue={SEX_OPTIONS.find(
                  (elem) => elem.value === data?.sex,
                )}
                error={errors.sex?.message}
                theme={selectTheme}
              />
            )}
          />
          {errors.sex && (
            <FormError marginTop="-25px">{errors.sex.message}</FormError>
          )}
        </SingleInputWrapper>
        <SingleInputWrapper>
          <FormLabel>Age</FormLabel>
          <BaseInput
            placeholder="Age"
            type="number"
            width="80%"
            error={errors.age?.message}
            autoComplete="off"
            defaultValue={data?.age || ""}
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
            defaultValue={data?.weight || ""}
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
            defaultValue={data?.height || ""}
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
            defaultValue={data?.length || ""}
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
      <BaseTextArea
        placeholder="Diseases"
        defaultValue={data?.diseases || ""}
        {...register("diseases")}
      />
      <FormLabel>Others</FormLabel>
      <BaseTextArea
        placeholder="Others"
        defaultValue={data?.others || ""}
        {...register("others")}
      />
      <ButtonsWrapper noMargin={true}>
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

export default EditPetForm;
