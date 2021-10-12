import { useEffect, useReducer, useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { useHistory, useParams } from "react-router";
import { LoadingStateInterface } from "../../api/interfaces/fetch";
import {
  MedicineInterface,
  MedicineUpdateInterface,
} from "../../api/interfaces/medicine";
import {
  deleteMEdicineApi,
  getMedicineDetailsApi,
  updateMEdicineApi,
} from "../../api/medicine";
import { colors } from "../../mainStyles/colors";
import { UseDeletePopupActions } from "../../modules/DeletePopupModule";
import StandardButton from "../Buttons/StandardButton";

import { MainAreaHeader } from "../Dashboard/MainArea/styledComponents";
import ErrorComponent from "../ErrorComponent";
import { EditMedicineForm } from "../Forms";
import LoadingComponent from "../LoadingComponent";
import DataElement from "./Components/DataElement";
import {
  ButtonsWrapper,
  MultipleElementsWrapper,
  SingleElementWrapper,
  Wrapper,
} from "./styledComponents";

interface PathParamsInterface {
  id: string;
}

const MedicineDetailsPanel = () => {
  const history = useHistory();
  const { id } = useParams<PathParamsInterface>();
  const [data, setData] = useState<MedicineInterface | null>(null);
  const [loadingState, setLoadingState] = useState<LoadingStateInterface>({
    loading: true,
    error: "",
  });
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);
  const { showPopup } = UseDeletePopupActions();

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await getMedicineDetailsApi(id);

      if (fetchedData.response) {
        setLoadingState({ loading: false, error: "" });
        setData(fetchedData.response);
      } else {
        setLoadingState({ loading: false, error: fetchedData.error });
      }
    };

    fetchData();
  }, [id, ignored]);

  const onEditSubmit: SubmitHandler<MedicineUpdateInterface> = async (
    data,
    event,
  ) => {
    event?.preventDefault();
    setLoadingState({ loading: false, error: "" });
    const registerResponse = await updateMEdicineApi({
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
        <MainAreaHeader>Medicine details</MainAreaHeader>
        <LoadingComponent />
      </>
    );
  }

  if (loadingState.error) {
    return (
      <>
        <MainAreaHeader>Medicine details</MainAreaHeader>
        <ErrorComponent errorMessage={loadingState.error} />
      </>
    );
  }

  if (isEdit) {
    return (
      <>
        <MainAreaHeader>Visit edit</MainAreaHeader>
        <EditMedicineForm
          data={data}
          onCancel={() => setIsEdit(false)}
          onSubmit={onEditSubmit}
        />
      </>
    );
  }

  return (
    <>
      <MainAreaHeader>Medicine details</MainAreaHeader>
      <Wrapper>
        <DataElement label="Name" displayData={data?.name} width="40%" />
        <MultipleElementsWrapper>
          <SingleElementWrapper>
            <DataElement label="Count" displayData={data?.count} width="40%" />
          </SingleElementWrapper>

          <SingleElementWrapper>
            <DataElement
              label="Magazine count"
              displayData={data?.magazineCount}
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
        <ButtonsWrapper width="300px">
          <StandardButton
            label="Edit details"
            width="140px"
            onClick={() => setIsEdit(true)}
          />
          <StandardButton
            label="Delete medicine"
            width="140px"
            primaryColor={colors.errorRed}
            onClick={() =>
              showPopup(() => {
                deleteMEdicineApi(id);
                history.push("/dashboard/medicines");
              })
            }
          />
        </ButtonsWrapper>
      </Wrapper>
    </>
  );
};

export default MedicineDetailsPanel;
