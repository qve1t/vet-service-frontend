import { SubmitHandler, useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";

import {
  BaseInput,
  FormError,
  DatePickerWrapper,
  FormLabel,
  BaseTextArea,
} from "../../Inputs";
import StandardButton from "../../Buttons/StandardButton";
import { ButtonsWrapper, FormsWrapper } from "../styledComponents";

import "react-datepicker/dist/react-datepicker.css";
import {
  VisitInterface,
  VisitUPdateInterface,
} from "../../../api/interfaces/visit";
import {
  MultipleElementsWrapper,
  SingleElementWrapper,
} from "../../DashbordDetailsPanels/styledComponents";
import {
  OwnersDetailsListElement,
  PetsDetailsListElement,
} from "../../ListsElements";

interface NewVisitFormInterface {
  onSubmit: SubmitHandler<VisitUPdateInterface>;
  onCancel: () => void;
  data: VisitInterface | null;
}

const EditVisitForm = ({ onSubmit, onCancel, data }: NewVisitFormInterface) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<VisitUPdateInterface>();

  return (
    <FormsWrapper onSubmit={handleSubmit(onSubmit)}>
      <FormLabel>Date (Required)</FormLabel>
      <Controller
        name="dateTime"
        control={control}
        defaultValue={new Date(data?.dateTime as Date)}
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
      {errors.dateTime && (
        <FormError marginTop="-25px">{errors.dateTime.message}</FormError>
      )}
      <FormLabel>Visit name (required)</FormLabel>
      <BaseInput
        placeholder="Vaccination"
        width="40%"
        error={errors.name?.message}
        autoComplete="off"
        defaultValue={data?.name}
        {...register("name", {
          required: "Name is required",
        })}
      />
      {errors.name && <FormError>{errors.name.message}</FormError>}
      <MultipleElementsWrapper>
        <SingleElementWrapper>
          <FormLabel>Pet</FormLabel>
          <PetsDetailsListElement
            listElement={data?.petOnVisit as any}
            width="40%"
          />
        </SingleElementWrapper>

        <SingleElementWrapper>
          <FormLabel>Owner</FormLabel>
          <OwnersDetailsListElement
            listElement={data?.ownerOnVisit as any}
            width="40%"
          />
        </SingleElementWrapper>
      </MultipleElementsWrapper>
      <FormLabel marginTop="30px">Description</FormLabel>
      <BaseTextArea
        placeholder="Description..."
        defaultValue={data?.description || ""}
        {...register("description")}
      />
      <FormLabel>Interview</FormLabel>
      <BaseTextArea
        placeholder="Interview..."
        defaultValue={data?.interview || ""}
        {...register("interview")}
      />
      <FormLabel>Healing</FormLabel>
      <BaseTextArea
        placeholder="Healing..."
        defaultValue={data?.healing || ""}
        {...register("healing")}
      />
      <FormLabel>Note</FormLabel>
      <BaseTextArea
        placeholder="Note..."
        defaultValue={data?.note || ""}
        {...register("note")}
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

export default EditVisitForm;
