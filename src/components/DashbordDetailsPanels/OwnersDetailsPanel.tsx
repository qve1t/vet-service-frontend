import { pickBy } from "lodash";
import { useEffect, useReducer, useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { useParams, useHistory } from "react-router";
import { LoadingStateInterface } from "../../api/interfaces/fetch";
import {
  OwnerInfoToUpdateInterface,
  OwnerInterface,
} from "../../api/interfaces/owner";
import {
  deleteOwnerAPI,
  getOwnerDetailsAPI,
  updateOwnerInfoAPI,
} from "../../api/owner";
import { colors } from "../../mainStyles/colors";
import { UseDeletePopupActions } from "../../modules/DeletePopupModule";
import StandardButton from "../Buttons/StandardButton";

import { MainAreaHeader } from "../Dashboard/MainArea/styledComponents";
import ErrorComponent from "../ErrorComponent";
import { EditOwnerForm } from "../Forms";
import { FormLabel } from "../Inputs";
import {
  NotesDetailsListElement,
  PetsDetailsListElement,
} from "../ListsElements";
import LoadingComponent from "../LoadingComponent";
import DataElement from "./Components/DataElement";
import {
  MultipleElementsWrapper,
  Wrapper,
  ListElementsWrapper,
  ButtonsWrapper,
} from "./styledComponents";

interface PathParamsInterface {
  id: string;
}

const OwnerDetailsPanel = () => {
  const history = useHistory();
  const { id } = useParams<PathParamsInterface>();
  const [data, setData] = useState<OwnerInterface | null>(null);
  const [loadingState, setLoadingState] = useState<LoadingStateInterface>({
    loading: true,
    error: "",
  });
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);
  const { showPopup } = UseDeletePopupActions();

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await getOwnerDetailsAPI(id);

      if (fetchedData.response) {
        setLoadingState({ loading: false, error: "" });
        setData(fetchedData.response);
      } else {
        setLoadingState({ loading: false, error: fetchedData.error });
      }
    };

    fetchData();
  }, [id, ignored]);

  const onEditSubmit: SubmitHandler<OwnerInfoToUpdateInterface> = async (
    data,
    event,
  ) => {
    event?.preventDefault();
    setLoadingState({ loading: false, error: "" });
    const filteredValues = pickBy(
      data,
      (value: string | undefined) => value && value.length > 0,
    );
    const registerResponse = await updateOwnerInfoAPI({
      id: id,
      ...filteredValues,
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
        <MainAreaHeader>Owner details</MainAreaHeader>
        <LoadingComponent />
      </>
    );
  }

  if (loadingState.error) {
    return (
      <>
        <MainAreaHeader>Owner details</MainAreaHeader>
        <ErrorComponent errorMessage={loadingState.error} />
      </>
    );
  }

  if (isEdit) {
    return (
      <>
        <MainAreaHeader>Owner details</MainAreaHeader>
        <EditOwnerForm
          data={data}
          onSubmit={onEditSubmit}
          onCancel={() => setIsEdit(false)}
        />
      </>
    );
  }

  return (
    <>
      <MainAreaHeader>Owner details</MainAreaHeader>
      <Wrapper>
        <MultipleElementsWrapper>
          <DataElement label="Name" displayData={data?.name} width="80%" />
          <DataElement
            label="Surname"
            displayData={data?.surname}
            width="80%"
          />
        </MultipleElementsWrapper>
        <MultipleElementsWrapper>
          <DataElement
            label="Phone number"
            displayData={data?.phone}
            width="50%"
          />
          <DataElement
            label="Email address"
            displayData={data?.email}
            width="50%"
          />
        </MultipleElementsWrapper>
        <DataElement label="Address" displayData={data?.address} width="40%" />
        <FormLabel>Pets</FormLabel>
        <ListElementsWrapper>
          {data?.pets.map((elem) => (
            <PetsDetailsListElement
              listElement={elem}
              width="20%"
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
            label="Delete owner"
            width="120px"
            primaryColor={colors.errorRed}
            onClick={() =>
              showPopup(() => {
                deleteOwnerAPI(id);
                history.push("/dashboard/owners");
              })
            }
          />
        </ButtonsWrapper>
      </Wrapper>
    </>
  );
};

export default OwnerDetailsPanel;
