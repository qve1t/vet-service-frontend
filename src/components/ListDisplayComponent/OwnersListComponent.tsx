import { LoadingStateInterface } from "../../api/interfaces/fetch";
import { OwnerListInterface } from "../../api/interfaces/owner";
import EmptyDataComponent from "../EmptyDataComponent";
import ErrorComponent from "../ErrorComponent";
import { OwnersListElement } from "../ListsElements";
import LoadingComponent from "../LoadingComponent";

interface DataComponentInterface {
  loadingState: LoadingStateInterface;
  ownersList: OwnerListInterface[];
  customEmptyText?: string;
}

const OwnersListComponent = ({
  loadingState,
  ownersList,
  customEmptyText,
}: DataComponentInterface) => {
  if (loadingState.loading) {
    return <LoadingComponent />;
  }

  if (loadingState.error) {
    return <ErrorComponent errorMessage={loadingState.error} />;
  }

  if (ownersList.length <= 0) {
    return (
      <EmptyDataComponent textInInfo="owners" customText={customEmptyText} />
    );
  }
  return (
    <>
      {ownersList.map((elem) => (
        <OwnersListElement listElement={elem} key={elem.id} />
      ))}
    </>
  );
};

export default OwnersListComponent;
