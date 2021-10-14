import { MedicineListInterface } from "../interfaces/medicine";
import { getMedicinesListApi } from "../medicine";

interface MedicinesOptionsInterface {
  value: MedicineListInterface;
  label: string;
}

export const loadMedicines = async (inputValue: string) => {
  const loadOptions = await getMedicinesListApi({
    page: 0,
    limit: 50,
    searchText: inputValue,
  });
  if (loadOptions.response) {
    const newArray: MedicinesOptionsInterface[] = [];
    loadOptions.response.results.map((elem) =>
      newArray.push({ value: elem, label: elem.name }),
    );
    return newArray;
  } else {
    return [];
  }
};
