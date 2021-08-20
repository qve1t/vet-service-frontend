import { useState } from "react";
import { OwnerListInterface } from "../../api/interfaces/owner";
import { MainAreaHeader } from "../Dashboard/MainArea/styledComponents";
import { OwnersListElement } from "../ListsElements";

const OwnersListPanel = () => {
  const [ownersList, setOwnersList] = useState<OwnerListInterface[]>([]);
  return (
    <>
      <MainAreaHeader>List of owners</MainAreaHeader>
      <div>
        {ownersList.map((elem) => (
          <OwnersListElement listElement={elem} key={elem.id} />
        ))}
      </div>
    </>
  );
};

export default OwnersListPanel;
