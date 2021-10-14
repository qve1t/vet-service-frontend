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
      <ListElementMainText>
        {new Date(listElement?.dateTime).toLocaleTimeString([], {
          timeStyle: "short",
        })}
      </ListElementMainText>
      <ListElementSecondaryText>{listElement?.name}</ListElementSecondaryText>
    </ListElementWrapperLink>
  );
};

export default VisitsListElement;
