import {
  Section,
  MidSection,
  MidSectionHeader,
  MidSectionParagraph,
} from "./styledComponents";
import InfoElements from "./InfoElements";

const InfoSection = () => {
  return (
    <Section>
      <MidSection>
        <MidSectionHeader>
          One place to replace all of the paperwork
        </MidSectionHeader>
        <MidSectionParagraph>
          Have you had enough papers, notebooks and calendars? Available
          commercial software is complicated to use? You are in the right place.
          This one simple tool will make your vet work easier.
        </MidSectionParagraph>
        <InfoElements />
      </MidSection>
    </Section>
  );
};

export default InfoSection;
