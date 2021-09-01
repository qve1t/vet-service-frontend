import { OwnerListInterface } from "../interfaces/owner";
import { getOwnersListAPI } from "../owner";

interface OwnersOptionsInterface {
  value: OwnerListInterface;
  label: string;
}

export const loadOwners = async (inputValue: string) => {
  const loadOptions = await getOwnersListAPI({
    page: 0,
    limit: 50,
    nameSurname: inputValue,
  });
  if (loadOptions.response) {
    const newArray: OwnersOptionsInterface[] = [];
    loadOptions.response.results.map((elem) =>
      newArray.push({ value: elem, label: `${elem.name} ${elem.surname}` }),
    );
    return newArray;
  } else {
    return [];
  }
};
