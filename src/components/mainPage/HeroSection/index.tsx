import {
  HeroSectionWrapper,
  HeroImage,
  Header,
  HeaderAndButtonWrapper,
} from "./styledComponents";
import MainPageButton from "../../Buttons/MainPageButton";

import backgroundImage from "../../../images/vet-stock-photo.webp";

const HeroSection = () => {
  return (
    <HeroSectionWrapper>
      <HeroImage src={backgroundImage} alt="main page hero img" />
      <HeaderAndButtonWrapper>
        <Header>
          Keep your patients in <br /> <span>one place</span>
        </Header>
        <MainPageButton label="Start now" />
      </HeaderAndButtonWrapper>
    </HeroSectionWrapper>
  );
};

export default HeroSection;
