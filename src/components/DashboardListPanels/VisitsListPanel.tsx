import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { LoadingStateInterface } from "../../api/interfaces/fetch";
import { VisitListInterface } from "../../api/interfaces/visit";
import { getVisitsListAPI } from "../../api/visit";
import { getDayBeginning, getDayEnd } from "../../utils/getCurrentDate";
import { MainAreaHeader } from "../Dashboard/MainArea/styledComponents";
import ErrorComponent from "../ErrorComponent";
import { DatePickerWrapper } from "../Inputs";
import { VisitsListElement } from "../ListsElements";
import LoadingComponent from "../LoadingComponent";

const VisitsListPanel = () => {
  const [visitsList, setVisitsList] = useState<VisitListInterface[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [loadingState, setLoadingState] = useState<LoadingStateInterface>({
    loading: true,
    error: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await getVisitsListAPI({
        startDate: getDayBeginning(selectedDate),
        endDate: getDayEnd(selectedDate),
      });

      if (fetchedData.response) {
        setLoadingState({ loading: false, error: "" });
        setVisitsList(fetchedData.response);
      } else {
        setLoadingState({ loading: false, error: fetchedData.error });
      }
    };

    fetchData();
  }, [selectedDate]);

  return (
    <>
      <MainAreaHeader>List of visits</MainAreaHeader>
      <DatePickerWrapper width="40%">
        <DatePicker
          placeholderText="Date"
          selected={selectedDate}
          onChange={(date: Date) => setSelectedDate(date)}
          dateFormat="dd-MM-yyyy"
        />
      </DatePickerWrapper>
      <div>
        {loadingState.loading ? (
          <LoadingComponent />
        ) : loadingState.error ? (
          <ErrorComponent errorMessage={loadingState.error} />
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
