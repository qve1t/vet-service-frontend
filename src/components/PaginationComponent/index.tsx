import { UseLoggedUserState } from "../../modules/LoggedUserModule";
import {
  PaginationWrapper,
  PaginationButton,
  PaginationCount,
} from "./styledComponents";

interface PaginationComponentInterface {
  count: number;
  currentPage: number;
  setPage: (page: number) => void;
}

const PaginationComponent = ({
  count,
  currentPage,
  setPage,
}: PaginationComponentInterface) => {
  const { itemsPerPage } = UseLoggedUserState();

  const pagesNumber = Math.ceil(count / itemsPerPage) - 1;
  return (
    <PaginationWrapper>
      <PaginationButton
        disabled={currentPage === 0}
        onClick={() => setPage(currentPage - 1)}
      >
        {"<"}
      </PaginationButton>
      <PaginationCount>{currentPage + 1}</PaginationCount>
      <PaginationButton
        disabled={pagesNumber < 0 || currentPage === pagesNumber}
        onClick={() => setPage(currentPage + 1)}
      >
        {">"}
      </PaginationButton>
    </PaginationWrapper>
  );
};

export default PaginationComponent;
