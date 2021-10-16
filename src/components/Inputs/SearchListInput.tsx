import { PageStateInterface } from "../../interfaces/PageStateInterface";
import { BaseInput } from "./styledComponents";

interface SearchListInputInterface {
  pageState: PageStateInterface;
  setPageState: React.Dispatch<React.SetStateAction<PageStateInterface>>;
}

const SearchListInput = ({
  pageState,
  setPageState,
}: SearchListInputInterface) => {
  const setText = (text: string) => {
    setPageState({
      ...pageState,
      searchText: text,
      currentPage: 0,
    });
  };

  const setTextOnEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setText((event.target as HTMLInputElement).value);
    }
  };

  return (
    <BaseInput
      placeholder="Search..."
      width="40%"
      noMargin={true}
      onBlur={(event) => setText(event.target.value)}
      onKeyPress={(event) => setTextOnEnter(event)}
    />
  );
};

export default SearchListInput;
