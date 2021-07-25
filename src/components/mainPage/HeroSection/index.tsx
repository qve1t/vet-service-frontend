import { useHistory } from "react-router";

import {
  HeroSectionWrapper,
  HeroImage,
  Header,
  HeaderAndButtonWrapper,
} from "./styledComponents";
import MainPageButton from "../../Buttons/MainPageButton";

import backgroundImage from "../../../images/vet-stock-photo.webp";

const HeroSection = () => {
  const history = useHistory();

  const buttonClickHandle = (): void => {
    history.push("/login");
  };

  return (
    <HeroSectionWrapper>
      <HeroImage src={backgroundImage} alt="main page hero img" />
      <HeaderAndButtonWrapper>
        <Header>
          Keep your patients in <br /> <span>one place</span>
        </Header>
        <MainPageButton label="Start now" onClick={buttonClickHandle} />
      </HeaderAndButtonWrapper>
    </HeroSectionWrapper>
  );
};

export default HeroSection;
