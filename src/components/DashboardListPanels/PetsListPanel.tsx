import { useState } from "react";
import { PetListInterface } from "../../api/interfaces/pet";
import { MainAreaHeader } from "../Dashboard/MainArea/styledComponents";
import { PetsListElement } from "../ListsElements";

const PetsListPanel = () => {
  const [petsList, setPetsList] = useState<PetListInterface[]>([]);
  return (
    <>
      <MainAreaHeader>List of pets</MainAreaHeader>
      <div>
        {petsList.map((elem) => (
          <PetsListElement listElement={elem} key={elem.id} />
        ))}
      </div>
    </>
  );
};

export default PetsListPanel;
