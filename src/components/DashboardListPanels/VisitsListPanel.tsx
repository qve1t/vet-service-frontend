import { useState, useEffect } from "react";
import { LoadingStateInterface } from "../../api/interfaces/fetch";
import { VisitListInterface } from "../../api/interfaces/visit";
import { getVisitsListAPI } from "../../api/visit";
import {
  getCurrentDayBeginning,
  getCurrentDayEnd,
} from "../../utils/getCurrentDate";
import { MainAreaHeader } from "../Dashboard/MainArea/styledComponents";
import { VisitsListElement } from "../ListsElements";
import LoadingComponent from "../LoadingComponent";

const VisitsListPanel = () => {
  const [visitsList, setVisitsList] = useState<VisitListInterface[]>([]);
  const [loadingState, setLoadingState] = useState<LoadingStateInterface>({
    loading: true,
    error: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await getVisitsListAPI({
        startDate: getCurrentDayBeginning(),
        endDate: getCurrentDayEnd(),
      });

      if (fetchedData.response) {
        setLoadingState({ loading: false, error: "" });
        setVisitsList(fetchedData.response);
      } else {
        setLoadingState({ loading: false, error: fetchedData.error });
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <MainAreaHeader>List of visits</MainAreaHeader>
      <div>
        {loadingState.loading ? (
          <LoadingComponent />
        ) : loadingState.error ? (
          <div>{loadingState.error}</div>
        ) : (
          visitsList.map((elem) => (
            <VisitsListElement listElement={elem} key={elem.id} />
          ))
        )}
      </div>
    </>
  );
};

export default VisitsListPanel;
