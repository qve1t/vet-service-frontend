import { useEffect, useReducer, useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { useHistory, useParams } from "react-router";
import { LoadingStateInterface } from "../../api/interfaces/fetch";
import {
  VisitInterface,
  VisitUPdateInterface,
} from "../../api/interfaces/visit";
import {
  deleteVisitAPI,
  getVisitDetailsAPI,
  updateVisitAPI,
} from "../../api/visit";
import { colors } from "../../mainStyles/colors";
import { UseDeletePopupActions } from "../../modules/DeletePopupModule";
import StandardButton from "../Buttons/StandardButton";

import { MainAreaHeader } from "../Dashboard/MainArea/styledComponents";
import ErrorComponent from "../ErrorComponent";
import { EditVisitForm } from "../Forms";
import { FormLabel } from "../Inputs";
import {
  OwnersDetailsListElement,
  PetsDetailsListElement,
} from "../ListsElements";
import LoadingComponent from "../LoadingComponent";
import DataElement from "./Components/DataElement";
import {
  ButtonsWrapper,
  ElementDataParagraph,
  MultipleElementsWrapper,
  SingleElementWrapper,
  Wrapper,
} from "./styledComponents";

interface PathParamsInterface {
  id: string;
}

const VisitsDetailsPanel = () => {
  const history = useHistory();
  const { id } = useParams<PathParamsInterface>();
  const [data, setData] = useState<VisitInterface | null>(null);
  const [loadingState, setLoadingState] = useState<LoadingStateInterface>({
    loading: true,
    error: "",
  });
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);
  const { showPopup } = UseDeletePopupActions();

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await getVisitDetailsAPI(id);

      if (fetchedData.response) {
        setLoadingState({ loading: false, error: "" });
        setData(fetchedData.response);
      } else {
        setLoadingState({ loading: false, error: fetchedData.error });
      }
    };

    fetchData();
  }, [id, ignored]);

  const onEditSubmit: SubmitHandler<VisitUPdateInterface> = async (
    data,
    event,
  ) => {
    event?.preventDefault();
    setLoadingState({ loading: false, error: "" });
    const registerResponse = await updateVisitAPI({
      ...data,
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
        <MainAreaHeader>Visit details</MainAreaHeader>
        <LoadingComponent />
      </>
    );
  }

  if (loadingState.error) {
    return (
      <>
        <MainAreaHeader>Visit details</MainAreaHeader>
        <ErrorComponent errorMessage={loadingState.error} />
      </>
    );
  }

  if (isEdit) {
    return (
      <>
        <MainAreaHeader>Visit edit</MainAreaHeader>
        <EditVisitForm
          data={data}
          onCancel={() => setIsEdit(false)}
          onSubmit={onEditSubmit}
        />
      </>
    );
  }

  return (
    <>
      <MainAreaHeader>Visit details</MainAreaHeader>
      <Wrapper>
        <SingleElementWrapper>
          <FormLabel>Date</FormLabel>
          <ElementDataParagraph width="40%" hasData={data?.dateTime !== null}>
            {`${
              data?.dateTime &&
              new Date(data?.dateTime as Date).toLocaleDateString()
            } ${
              data?.dateTime &&
              new Date(data?.dateTime as Date).toLocaleTimeString([], {
                timeStyle: "short",
              })
            }`}
          </ElementDataParagraph>
        </SingleElementWrapper>
        <DataElement label="Name" displayData={data?.name} width="40%" />
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
        <DataElement
          label="Description"
          displayData={data?.description}
          width="100%"
          marginTop="30px"
        />
        <DataElement
          label="Interview"
          displayData={data?.interview}
          width="100%"
        />
        <DataElement label="Healing" displayData={data?.healing} width="100%" />
        <DataElement label="Note" displayData={data?.note} width="100%" />
        <ButtonsWrapper>
          <StandardButton
            label="Edit details"
            width="120px"
            onClick={() => setIsEdit(true)}
          />
          <StandardButton
            label="Delete visit"
            width="120px"
            primaryColor={colors.errorRed}
            onClick={() =>
              showPopup(() => {
                deleteVisitAPI(id);
                history.push("/dashboard/visits");
              })
            }
          />
        </ButtonsWrapper>
      </Wrapper>
    </>
  );
};

export default VisitsDetailsPanel;
