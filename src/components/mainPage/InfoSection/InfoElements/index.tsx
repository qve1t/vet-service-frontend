import { InfoElementsWrapper } from "./styledComponents";
import Animal from "../../../../icons/animal.svg";
import Calendar from "../../../../icons/calendar.svg";
import Profile from "../../../../icons/profile.svg";
import Wallet from "../../../../icons/wallet.svg";
import Notes from "../../../../icons/notes.svg";

import SingleInfo, { SingleElementProps } from "./SingleInfo";

const elementsToShow: SingleElementProps[] = [
  {
    name: "Animals",
    description:
      "Everything about animals, their\ndiseases and treatments\nin one place",
    icon: Animal,
  },
  {
    name: "Owners",
    description: "Contact information available\nwith only one click",
    icon: Profile,
  },
  {
    name: "Visits",
    description: "An easy way to\nadd and postpone visits",
    icon: Calendar,
  },
  {
    name: "Notes",
    description: "Your personal notes available\nfor every day",
    icon: Notes,
  },
  {
    name: "Free to use",
    description: "All functions are and will be for free",
    icon: Wallet,
  },
];

const InfoElements = () => {
  return (
    <InfoElementsWrapper>
      {elementsToShow.map((elem, index) => (
        <SingleInfo
          key={"singleIconElement" + index}
          name={elem.name}
          description={elem.description}
          icon={elem.icon}
        />
      ))}
    </InfoElementsWrapper>
  );
};

export default InfoElements;
