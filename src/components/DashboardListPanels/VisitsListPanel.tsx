import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { LoadingStateInterface } from "../../api/interfaces/fetch";
import { VisitListInterface } from "../../api/interfaces/visit";
import { getVisitsListAPI } from "../../api/visit";
import { getDayBeginning, getDayEnd } from "../../utils/getCurrentDate";
import { MainAreaHeader } from "../Dashboard/MainArea/styledComponents";
import { DatePickerWrapper } from "../Inputs";
import { VisitsListComponent } from "../ListDisplayComponent";
import { HorizontalDivider } from "./styledComponents";

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
        setVisitsList(
          fetchedData.response.sort(
            (a, b) =>
              new Date(a.dateTime).getTime() - new Date(b.dateTime).getTime(),
          ),
        );
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
      <HorizontalDivider customMarginTop="0px" />
      <VisitsListComponent
        loadingState={loadingState}
        visitsList={visitsList}
      />
    </>
  );
};

export default VisitsListPanel;
