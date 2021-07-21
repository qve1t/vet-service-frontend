import {
  HeroSectionWrapper,
  HeroImage,
  Header,
  HeaderAndButtonWrapper,
} from "./styledComponents";
import MainPageButton from "../../buttons/MainPageButton";

import backgroundImage from "../../../images/vet-stock-photo.webp";

const HeroSection = () => {
  return (
    <HeroSectionWrapper>
      <HeroImage src={backgroundImage} alt="main page hero img" />
      <HeaderAndButtonWrapper>
        <Header>Keep your patients in one place</Header>
        <MainPageButton label="Start now" />
      </HeaderAndButtonWrapper>
    </HeroSectionWrapper>
  );
};

export default HeroSection;
