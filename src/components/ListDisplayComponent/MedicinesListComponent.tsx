import { LoadingStateInterface } from "../../api/interfaces/fetch";
import { MedicineListInterface } from "../../api/interfaces/medicine";
import EmptyDataComponent from "../EmptyDataComponent";
import ErrorComponent from "../ErrorComponent";
import { MedicinesListElement } from "../ListsElements";
import LoadingComponent from "../LoadingComponent";

interface DataComponentInterface {
  loadingState: LoadingStateInterface;
  medicinesList: MedicineListInterface[];
}

const MedicinesListComponent = ({
  loadingState,
  medicinesList,
}: DataComponentInterface) => {
  if (loadingState.loading) {
    return <LoadingComponent />;
  }

  if (loadingState.error) {
    return <ErrorComponent errorMessage={loadingState.error} />;
  }

  if (medicinesList.length <= 0) {
    return <EmptyDataComponent textInInfo="medicines" />;
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
