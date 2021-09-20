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
  BaseTextArea,
} from "../../Inputs";
import StandardButton from "../../Buttons/StandardButton";
import {
  FormsWrapper,
  FormHalfWidthWrapper,
  FlexWrapper,
  VisitsListWrapper,
} from "../styledComponents";

import { selectTheme } from "../../../mainStyles/reactSelectTheme";

import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { VisitListInterface } from "../../../api/interfaces/visit";
import { getVisitsListAPI } from "../../../api/visit";
import { getDayBeginning, getDayEnd } from "../../../utils/getCurrentDate";
import { LoadingStateInterface } from "../../../api/interfaces/fetch";
import { VisitsListComponent } from "../../ListDisplayComponent";

export interface FormRegisterInterface {
  dateTime: Date;
  name: string;
  ownerObj: OwnerListInterface;
  petObj: PetListInterface;
  note?: string;
}

interface NewVisitFormInterface {
  onSubmit: SubmitHandler<FormRegisterInterface>;
}

const NewVisitForm = ({ onSubmit }: NewVisitFormInterface) => {
  const [visitsList, setVisitsList] = useState<VisitListInterface[]>([]);
  const [loadingState, setLoadingState] = useState<LoadingStateInterface>({
    loading: false,
    error: "",
  });
  const {
    setValue,
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormRegisterInterface>();

  return (
    <FormsWrapper onSubmit={handleSubmit(onSubmit)}>
      <FlexWrapper>
        <FormHalfWidthWrapper>
          <FormLabel>Date (Required)</FormLabel>
          <Controller
            name="dateTime"
            control={control}
            rules={{
              required: { value: true, message: "Date and time are required" },
            }}
            render={({ field }) => (
              <DatePickerWrapper width="80%" error={errors.dateTime?.message}>
                <DatePicker
                  placeholderText="Pick a date..."
                  showTimeSelect
                  timeIntervals={15}
                  timeFormat="HH:mm"
                  selected={field.value}
                  onChange={(date: any) => {
                    field.onChange(date);
                    setLoadingState({ loading: true, error: "" });
                    const fetchData = async () => {
                      const fetchedData = await getVisitsListAPI({
                        startDate: getDayBeginning(date),
                        endDate: getDayEnd(date),
                      });

                      if (fetchedData.response) {
                        setLoadingState({ loading: false, error: "" });
                        setVisitsList(
                          fetchedData.response.sort(
                            (a, b) =>
                              new Date(a.dateTime).getTime() -
                              new Date(b.dateTime).getTime(),
                          ),
                        );
                      } else {
                        setLoadingState({
                          loading: false,
                          error: fetchedData.error,
                        });
                      }
                    };

                    fetchData();
                  }}
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
            width="80%"
            error={errors.name?.message}
            autoComplete="off"
            {...register("name", {
              required: "Name is required",
            })}
          />
          {errors.name && <FormError>{errors.name.message}</FormError>}
          <FormLabel>Pet (Required)</FormLabel>
          <Controller
            name="petObj"
            control={control}
            rules={{
              required: { value: true, message: "Pet is required" },
            }}
            render={({ field }) => (
              <SelectCustomAsync
                classNamePrefix="react-select"
                placeholder="Type a pet name..."
                width="80%"
                cacheOptions
                loadOptions={loadPets}
                onChange={(option: any) => {
                  if (option.value.owner) {
                    setValue("ownerObj", option.value.owner);
                  }
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
          <FormLabel>Owner (Required)</FormLabel>
          <Controller
            name="ownerObj"
            control={control}
            rules={{
              required: { value: true, message: "Owner is required" },
            }}
            render={({ field }) => (
              <SelectCustomAsync
                classNamePrefix="react-select"
                placeholder="Type an owner name..."
                width="80%"
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
        </FormHalfWidthWrapper>
        <FormHalfWidthWrapper>
          <FormLabel>Visits that day</FormLabel>
          <VisitsListWrapper>
            <VisitsListComponent
              loadingState={loadingState}
              visitsList={visitsList}
            />
          </VisitsListWrapper>
        </FormHalfWidthWrapper>
      </FlexWrapper>
      <FormLabel>Note</FormLabel>
      <BaseTextArea placeholder="Note..." {...register("note")} />

      <StandardButton label="Register" />
    </FormsWrapper>
  );
};

export default NewVisitForm;
