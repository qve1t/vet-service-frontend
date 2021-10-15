import { VisitListInterface } from "../../../api/interfaces/visit";

import {
  ListElementWrapperLink,
  ListElementMainText,
  ListElementSecondaryText,
} from "../styledComponents";

interface VisitsListElementInterface {
  listElement: VisitListInterface;
  width?: string;
}

const VisitsListElement = ({
  listElement,
  width,
}: VisitsListElementInterface) => {
  return (
    <ListElementWrapperLink
      to={`/dashboard/visits/${listElement?.id}`}
      width={width}
    >
      <ListElementMainText style={{ flex: 1 }}>
        {new Date(listElement?.dateTime).toLocaleTimeString([], {
          timeStyle: "short",
        })}
      </ListElementMainText>
      <ListElementSecondaryText style={{ flex: 5 }}>
        {listElement?.name}
      </ListElementSecondaryText>
    </ListElementWrapperLink>
  );
};

export default VisitsListElement;
