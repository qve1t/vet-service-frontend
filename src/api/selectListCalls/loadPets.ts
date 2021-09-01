import { PetListInterface } from "../interfaces/pet";
import { getPetsListAPI } from "../pet";

interface PetsOptionsInterface {
  value: PetListInterface;
  label: string;
}

export const loadPets = async (inputValue: string) => {
  const loadOptions = await getPetsListAPI({
    page: 0,
    limit: 50,
    name: inputValue,
  });
  if (loadOptions.response) {
    const newArray: PetsOptionsInterface[] = [];
    loadOptions.response.results.map((elem) =>
      newArray.push({
        value: elem,
        label: `${elem.name} ${
          elem.owner
            ? "  ||  " + elem.owner.name + " " + elem.owner.surname
            : ""
        }`,
      }),
    );
    return newArray;
  } else {
    return [];
  }
};
