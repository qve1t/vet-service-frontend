import { FooterWrapper, FooterParagraph } from "./styledComponents";
import Socials from "./Socials";
import { getCurrentYear } from "../../../utils/getCurrentDate";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterParagraph>Piotr Warpas</FooterParagraph>
      <FooterParagraph>{"© " + getCurrentYear()}</FooterParagraph>
      <Socials />
    </FooterWrapper>
  );
};

export default Footer;
