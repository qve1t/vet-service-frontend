import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { LoadingStateInterface } from "../../api/interfaces/fetch";
import { OwnerInterface } from "../../api/interfaces/owner";
import { getOwnerDetailsAPI } from "../../api/owner";

import { MainAreaHeader } from "../Dashboard/MainArea/styledComponents";
import ErrorComponent from "../ErrorComponent";
import { FormLabel } from "../Inputs";
import { PetsDetailsListElement } from "../ListsElements";
import LoadingComponent from "../LoadingComponent";
import DataElement from "./Components/DataElement";
import {
  MultipleElementsWrapper,
  Wrapper,
  ListElementsWrapper,
} from "./styledComponents";

interface PathParamsInterface {
  id: string;
}

const OwnerDetailsPanel = () => {
  const { id } = useParams<PathParamsInterface>();
  const [data, setData] = useState<OwnerInterface | null>(null);
  const [loadingState, setLoadingState] = useState<LoadingStateInterface>({
    loading: true,
    error: "",
  });

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
  }, [id]);

  return (
    <>
      <MainAreaHeader>Owner details</MainAreaHeader>
      <div>
        {loadingState.loading ? (
          <LoadingComponent />
        ) : loadingState.error ? (
          <ErrorComponent errorMessage={loadingState.error} />
        ) : (
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
            <DataElement
              label="Address"
              displayData={data?.address}
              width="40%"
            />
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
          </Wrapper>
        )}
      </div>
    </>
  );
};

export default OwnerDetailsPanel;
