import { LoadingStateInterface } from "../../api/interfaces/fetch";
import { MedicineListInterface } from "../../api/interfaces/medicine";
import EmptyDataComponent from "../EmptyDataComponent";
import ErrorComponent from "../ErrorComponent";
import { MedicinesListElement } from "../ListsElements";
import LoadingComponent from "../LoadingComponent";

interface DataComponentInterface {
  loadingState: LoadingStateInterface;
  medicinesList: MedicineListInterface[];
  customEmptyText?: string;
}

const MedicinesListComponent = ({
  loadingState,
  medicinesList,
  customEmptyText,
}: DataComponentInterface) => {
  if (loadingState.loading) {
    return <LoadingComponent />;
  }

  if (loadingState.error) {
    return <ErrorComponent errorMessage={loadingState.error} />;
  }

  if (medicinesList.length <= 0) {
    return (
      <EmptyDataComponent textInInfo="medicines" customText={customEmptyText} />
    );
  }
  return (
    <>
      {medicinesList.map((elem) => (
        <MedicinesListElement listElement={elem} key={elem.id} />
      ))}
    </>
  );
};

export default MedicinesListComponent;
