import { useEffect, useReducer, useState } from "react";
import { useHistory, useParams } from "react-router";

import { LoadingStateInterface } from "../../api/interfaces/fetch";
import {
  PetInfoToUpdateInterface,
  PetInterface,
  PetSexes,
  SEX_OPTIONS,
} from "../../api/interfaces/pet";
import { deletePetAPI, getPetDetailsAPI, updatePetAPI } from "../../api/pet";
import { UseDeletePopupActions } from "../../modules/DeletePopupModule";
import StandardButton from "../Buttons/StandardButton";

import { MainAreaHeader } from "../Dashboard/MainArea/styledComponents";
import ErrorComponent from "../ErrorComponent";
import { FormLabel } from "../Inputs";
import {
  NotesDetailsListElement,
  OwnersDetailsListElement,
  VisitsDetailsListElement,
} from "../ListsElements";
import LoadingComponent from "../LoadingComponent";
import DataElement from "./Components/DataElement";
import {
  ButtonsWrapper,
  ListElementsWrapper,
  MultipleElementsWrapper,
  SingleElementWrapper,
  Wrapper,
} from "./styledComponents";
import { colors } from "../../mainStyles/colors";
import { EditPetForm } from "../Forms";
import { SubmitHandler } from "react-hook-form";
import { pickBy } from "lodash";

interface PathParamsInterface {
  id: string;
}

const PetsDetailsPanel = () => {
  const history = useHistory();
  const { id } = useParams<PathParamsInterface>();
  const [data, setData] = useState<PetInterface | null>(null);
  const [loadingState, setLoadingState] = useState<LoadingStateInterface>({
    loading: true,
    error: "",
  });
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);
  const { showPopup } = UseDeletePopupActions();

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await getPetDetailsAPI(id);

      if (fetchedData.response) {
        setLoadingState({ loading: false, error: "" });
        setData(fetchedData.response);
      } else {
        setLoadingState({ loading: false, error: fetchedData.error });
      }
    };

    fetchData();
  }, [id, ignored]);

  const onEditSubmit: SubmitHandler<PetInfoToUpdateInterface> = async (
    data,
    event,
  ) => {
    event?.preventDefault();
    setLoadingState({ loading: false, error: "" });
    const filteredValues = pickBy(
      { ...data, ownerId: (data.ownerId as any).id },
      (value: string | undefined) => value && value.length > 0,
    );

    const registerResponse = await updatePetAPI({
      ...filteredValues,
      sex: filteredValues.sex as PetSexes,
      id: id,
    });
    if (registerResponse.response) {
      setIsEdit(false);
      forceUpdate();
    } else {
      setLoadingState({ loading: false, error: registerResponse.error });
    }
  };

  if (loadingState.loading) {
    return (
      <>
        <MainAreaHeader>Pet details</MainAreaHeader>
        <LoadingComponent />
      </>
    );
  }

  if (loadingState.error) {
    return (
      <>
        <MainAreaHeader>Pet details</MainAreaHeader>
        <ErrorComponent errorMessage={loadingState.error} />
      </>
    );
  }

  if (isEdit) {
    return (
      <>
        <MainAreaHeader>Pet edit</MainAreaHeader>
        <EditPetForm
          data={data}
          onCancel={() => setIsEdit(false)}
          onSubmit={onEditSubmit}
        />
      </>
    );
  }

  return (
    <>
      <MainAreaHeader>Pet details</MainAreaHeader>
      <Wrapper>
        <MultipleElementsWrapper>
          <DataElement label="Name" displayData={data?.name} width="40%" />
          {data?.owner ? (
            <SingleElementWrapper>
              <FormLabel>Owner</FormLabel>
              <OwnersDetailsListElement listElement={data?.owner} width="40%" />
            </SingleElementWrapper>
          ) : (
            <DataElement label="Owner" displayData={data?.owner} width="40%" />
          )}
        </MultipleElementsWrapper>
        <MultipleElementsWrapper>
          <DataElement label="Type" displayData={data?.type} width="80%" />
          <DataElement label="Breed" displayData={data?.race} width="80%" />
        </MultipleElementsWrapper>
        <MultipleElementsWrapper>
          <DataElement
            label="Chip number"
            displayData={data?.chipId}
            width="80%"
          />
          <DataElement
            label="Tattoo number"
            displayData={data?.tatooId}
            width="80%"
          />
        </MultipleElementsWrapper>
        <MultipleElementsWrapper>
          <DataElement
            label="Sex"
            displayData={
              SEX_OPTIONS.find((elem) => elem.value === data?.sex)?.label
            }
            width="80%"
          />
          <DataElement label="Age" displayData={data?.age} width="80%" />
        </MultipleElementsWrapper>
        <MultipleElementsWrapper>
          <DataElement label="Weight" displayData={data?.weight} width="70%" />
          <DataElement label="Height" displayData={data?.height} width="70%" />
          <DataElement label="Length" displayData={data?.length} width="70%" />
        </MultipleElementsWrapper>
        <DataElement
          label="Diseases"
          displayData={data?.diseases}
          width="100%"
        />
        <DataElement label="Others" displayData={data?.others} width="100%" />
        <FormLabel>Visits</FormLabel>
        <ListElementsWrapper>
          {data?.visits
            .sort(
              (a, b) =>
                new Date(a.dateTime).getTime() - new Date(b.dateTime).getTime(),
            )
            .map((elem) => (
              <VisitsDetailsListElement
                listElement={elem}
                width="auto"
                key={elem.id}
              />
            ))}
        </ListElementsWrapper>
        <FormLabel marginTop="30px">Notes</FormLabel>
        <ListElementsWrapper>
          {data?.notes.map((elem) => (
            <NotesDetailsListElement
              listElement={elem}
              refreshFunction={forceUpdate}
              key={elem.id}
            />
          ))}
        </ListElementsWrapper>
        <ButtonsWrapper>
          <StandardButton
            label="Edit info"
            width="120px"
            onClick={() => setIsEdit(true)}
          />
          <StandardButton
            label="Delete pet"
            width="120px"
            primaryColor={colors.errorRed}
            onClick={() =>
              showPopup(() => {
                deletePetAPI(id);
                history.push("/dashboard/pets");
              })
            }
          />
        </ButtonsWrapper>
      </Wrapper>
    </>
  );
};

export default PetsDetailsPanel;
