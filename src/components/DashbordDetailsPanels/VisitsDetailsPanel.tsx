import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { LoadingStateInterface } from "../../api/interfaces/fetch";
import { VisitInterface } from "../../api/interfaces/visit";
import { getVisitDetailsAPI } from "../../api/visit";

import { MainAreaHeader } from "../Dashboard/MainArea/styledComponents";
import ErrorComponent from "../ErrorComponent";
import { FormLabel } from "../Inputs";
import {
  OwnersDetailsListElement,
  PetsDetailsListElement,
} from "../ListsElements";
import LoadingComponent from "../LoadingComponent";
import DataElement from "./Components/DataElement";
import {
  ElementDataParagraph,
  MultipleElementsWrapper,
  SingleElementWrapper,
  Wrapper,
} from "./styledComponents";

interface PathParamsInterface {
  id: string;
}

const VisitsDetailsPanel = () => {
  const { id } = useParams<PathParamsInterface>();
  const [data, setData] = useState<VisitInterface | null>(null);
  const [loadingState, setLoadingState] = useState<LoadingStateInterface>({
    loading: true,
    error: "",
  });

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
  }, [id]);

  return (
    <>
      <MainAreaHeader>Visit details</MainAreaHeader>
      <div>
        {loadingState.loading ? (
          <LoadingComponent />
        ) : loadingState.error ? (
          <ErrorComponent errorMessage={loadingState.error} />
        ) : (
          <Wrapper>
            <SingleElementWrapper>
              <FormLabel>Date</FormLabel>
              <ElementDataParagraph
                width="40%"
                hasData={data?.dateTime !== null}
              >
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
            />
            <DataElement
              label="Interview"
              displayData={data?.interview}
              width="100%"
            />
            <DataElement
              label="Healing"
              displayData={data?.healing}
              width="100%"
            />
            <DataElement label="Note" displayData={data?.note} width="100%" />
          </Wrapper>
        )}
      </div>
    </>
  );
};

export default VisitsDetailsPanel;
