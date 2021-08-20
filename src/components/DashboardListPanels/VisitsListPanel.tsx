import { useState } from "react";
import { VisitListInterface } from "../../api/interfaces/visit";
import { MainAreaHeader } from "../Dashboard/MainArea/styledComponents";
import { VisitsListElement } from "../ListsElements";

const VisitsListPanel = () => {
  const [visitsList, setVisitsList] = useState<VisitListInterface[]>([]);
  return (
    <>
      <MainAreaHeader>List of pets</MainAreaHeader>
      <div>
        {visitsList.map((elem) => (
          <VisitsListElement listElement={elem} key={elem.id} />
        ))}
      </div>
    </>
  );
};

export default VisitsListPanel;
