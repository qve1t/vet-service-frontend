import { LoadingStateInterface } from "../../api/interfaces/fetch";
import { VisitListInterface } from "../../api/interfaces/visit";
import EmptyDataComponent from "../EmptyDataComponent";
import ErrorComponent from "../ErrorComponent";
import { VisitsListElement } from "../ListsElements";
import LoadingComponent from "../LoadingComponent";

interface DataComponentInterface {
  loadingState: LoadingStateInterface;
  visitsList: VisitListInterface[];
  customEmptyText?: string;
}

const VisitsListComponent = ({
  loadingState,
  visitsList,
  customEmptyText,
}: DataComponentInterface) => {
  if (loadingState.loading) {
    return <LoadingComponent />;
  }

  if (loadingState.error) {
    return <ErrorComponent errorMessage={loadingState.error} />;
  }

  if (visitsList.length <= 0) {
    return (
      <EmptyDataComponent textInInfo="visits" customText={customEmptyText} />
    );
  }
  return (
    <>
      {visitsList.map((elem) => (
        <VisitsListElement listElement={elem} key={elem.id} />
      ))}
    </>
  );
};

export default VisitsListComponent;
