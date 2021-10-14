import { Updater } from "use-immer";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";

import {
  BaseInput,
  FormError,
  DatePickerWrapper,
  FormLabel,
  BaseTextArea,
  SelectCustomAsync,
} from "../../Inputs";
import StandardButton from "../../Buttons/StandardButton";
import { ButtonsWrapper, FormsWrapper } from "../styledComponents";

import "react-datepicker/dist/react-datepicker.css";
import {
  SingleMedicineOnVisit,
  VisitInterface,
  VisitUPdateInterface,
} from "../../../api/interfaces/visit";
import {
  MultipleElementsWrapper,
  SingleElementWrapper,
} from "../../DashbordDetailsPanels/styledComponents";
import {
  MedicineDetailsEditListElement,
  OwnersDetailsListElement,
  PetsDetailsListElement,
} from "../../ListsElements";
import { selectTheme } from "../../../mainStyles/reactSelectTheme";
import { loadMedicines } from "../../../api/selectListCalls/loadMedicines";

interface NewVisitFormInterface {
  onSubmit: SubmitHandler<VisitUPdateInterface>;
  onCancel: () => void;
  data: VisitInterface | null;
  medicinesList: SingleMedicineOnVisit[];
  setMedicinesList: Updater<SingleMedicineOnVisit[]>;
}

const EditVisitForm = ({
  onSubmit,
  onCancel,
  data,
  medicinesList,
  setMedicinesList,
}: NewVisitFormInterface) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<VisitUPdateInterface>();

  const countChange = (index: number, value: string) => {
    const intValue = parseInt(value);
    if (!isNaN(intValue)) {
      setMedicinesList((draft) => {
        draft[index].count = intValue;
      });
    }
  };

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
            width="50%"
          />
        </SingleElementWrapper>

        <SingleElementWrapper>
          <FormLabel>Owner</FormLabel>
          <OwnersDetailsListElement
            listElement={data?.ownerOnVisit as any}
            width="50%"
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
      <SingleElementWrapper>
        <SelectCustomAsync
          classNamePrefix="react-select"
          placeholder="Type a medicine name..."
          width="40%"
          cacheOptions
          loadOptions={loadMedicines}
          onChange={(option: any) => {
            const index = medicinesList.findIndex(
              (elem) => elem.medicine.id === option.value.id,
            );
            if (index === -1) {
              setMedicinesList((draft) => {
                draft.push({
                  count: 0,
                  medicine: { id: option.value.id, name: option.value.name },
                });
              });
            }
          }}
          theme={selectTheme}
        />
      </SingleElementWrapper>
      <SingleElementWrapper style={{ marginBottom: "30px" }}>
        {medicinesList.map((elem, index) => (
          <MedicineDetailsEditListElement
            key={elem.medicine.id}
            index={index}
            count={elem.count}
            name={elem.medicine.name}
            onDelete={() =>
              setMedicinesList((draft) => {
                draft.splice(index, 1);
              })
            }
            onCountChange={countChange}
          />
        ))}
      </SingleElementWrapper>
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
            setMedicinesList((draft) => (draft = data?.medicinesOnVisit || []));
          }}
        />
      </ButtonsWrapper>
    </FormsWrapper>
  );
};

export default EditVisitForm;
