import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { LoadingStateInterface } from "../../api/interfaces/fetch";
import { PetInterface } from "../../api/interfaces/pet";
import { getPetDetailsAPI } from "../../api/pet";

import { MainAreaHeader } from "../Dashboard/MainArea/styledComponents";
import ErrorComponent from "../ErrorComponent";
import { FormLabel } from "../Inputs";
import {
  OwnersDetailsListElement,
  VisitsDetailsListElem,
} from "../ListsElements";
import LoadingComponent from "../LoadingComponent";
import DataElement from "./Components/DataElement";
import {
  ListElementsWrapper,
  MultipleElementsWrapper,
  SingleElementWrapper,
  Wrapper,
} from "./styledComponents";

interface PathParamsInterface {
  id: string;
}

const PetsDetailsPanel = () => {
  const { id } = useParams<PathParamsInterface>();
  const [data, setData] = useState<PetInterface | null>(null);
  const [loadingState, setLoadingState] = useState<LoadingStateInterface>({
    loading: true,
    error: "",
  });

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
  }, [id]);

  return (
    <>
      <MainAreaHeader>Pet details</MainAreaHeader>
      <div>
        {loadingState.loading ? (
          <LoadingComponent />
        ) : loadingState.error ? (
          <ErrorComponent errorMessage={loadingState.error} />
        ) : (
          <Wrapper>
            <MultipleElementsWrapper>
              <DataElement label="Name" displayData={data?.name} width="40%" />
              {data?.owner ? (
                <SingleElementWrapper>
                  <FormLabel>Owner</FormLabel>
                  <OwnersDetailsListElement
                    listElement={data?.owner}
                    width="40%"
                  />
                </SingleElementWrapper>
              ) : (
                <DataElement
                  label="Owner"
                  displayData={data?.owner}
                  width="40%"
                />
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
              <DataElement label="Sex" displayData={data?.sex} width="80%" />
              <DataElement label="Age" displayData={data?.age} width="80%" />
            </MultipleElementsWrapper>
            <MultipleElementsWrapper>
              <DataElement
                label="Weight"
                displayData={data?.weight}
                width="70%"
              />
              <DataElement
                label="Height"
                displayData={data?.height}
                width="70%"
              />
              <DataElement
                label="Length"
                displayData={data?.length}
                width="70%"
              />
            </MultipleElementsWrapper>
            <DataElement
              label="Diseases"
              displayData={data?.diseases}
              width="100%"
            />
            <DataElement
              label="Others"
              displayData={data?.others}
              width="100%"
            />
            <ListElementsWrapper>
              {data?.visits
                .sort(
                  (a, b) =>
                    new Date(a.dateTime).getTime() -
                    new Date(b.dateTime).getTime(),
                )
                .map((elem) => (
                  <VisitsDetailsListElem
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

export default PetsDetailsPanel;
