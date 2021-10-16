import { PageStateInterface } from "../../interfaces/PageStateInterface";
import { UseLoggedUserState } from "../../modules/LoggedUserModule";
import {
  PaginationWrapper,
  PaginationButton,
  PaginationCount,
} from "./styledComponents";

interface PaginationComponentInterface {
  count: number;
  pageState: PageStateInterface;
  setPageState: React.Dispatch<React.SetStateAction<PageStateInterface>>;
}

const PaginationComponent = ({
  count,
  pageState,
  setPageState,
}: PaginationComponentInterface) => {
  const { itemsPerPage } = UseLoggedUserState();

  const setPage = (page: number) => {
    setPageState({
      ...pageState,
      currentPage: page,
    });
  };

  const pagesNumber = Math.ceil(count / itemsPerPage) - 1;
  return (
    <PaginationWrapper>
      <PaginationButton
        disabled={pageState.currentPage === 0}
        onClick={() => setPage(pageState.currentPage - 1)}
      >
        {"<"}
      </PaginationButton>
      <PaginationCount>{pageState.currentPage + 1}</PaginationCount>
      <PaginationButton
        disabled={pagesNumber < 0 || pageState.currentPage === pagesNumber}
        onClick={() => setPage(pageState.currentPage + 1)}
      >
        {">"}
      </PaginationButton>
    </PaginationWrapper>
  );
};

export default PaginationComponent;
