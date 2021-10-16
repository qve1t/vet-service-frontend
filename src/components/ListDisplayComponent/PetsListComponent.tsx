import { LoadingStateInterface } from "../../api/interfaces/fetch";
import { PetListInterface } from "../../api/interfaces/pet";
import EmptyDataComponent from "../EmptyDataComponent";
import ErrorComponent from "../ErrorComponent";
import { PetsListElement } from "../ListsElements";
import LoadingComponent from "../LoadingComponent";

interface DataComponentInterface {
  loadingState: LoadingStateInterface;
  petsList: PetListInterface[];
  customEmptyText?: string;
}

const PetsListComponent = ({
  loadingState,
  petsList,
  customEmptyText,
}: DataComponentInterface) => {
  if (loadingState.loading) {
    return <LoadingComponent />;
  }

  if (loadingState.error) {
    return <ErrorComponent errorMessage={loadingState.error} />;
  }

  if (petsList.length <= 0) {
    return (
      <EmptyDataComponent textInInfo="pets" customText={customEmptyText} />
    );
  }
  return (
    <>
      {petsList.map((elem) => (
        <PetsListElement listElement={elem} key={elem.id} />
      ))}
    </>
  );
};

export default PetsListComponent;
