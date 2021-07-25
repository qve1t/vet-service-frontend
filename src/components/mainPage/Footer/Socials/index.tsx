import { SocialsWrapper } from "./styledComponents";
import SingleSocialLink, { SocialLinkProps } from "./SingleSocialLink";

import Github from "../../../../icons/github.svg";
import Linkedin from "../../../../icons/linkedin.svg";

const socialLinks: SocialLinkProps[] = [
  {
    icon: Github,
    link: "https://github.com/qve1t",
  },
  {
    icon: Linkedin,
    link: "https://www.linkedin.com/in/piotr-warpas/",
  },
];

const Socials = () => {
  return (
    <SocialsWrapper>
      {socialLinks.map((elem, index) => (
        <SingleSocialLink
          key={"socialLink" + index}
          icon={elem.icon}
          link={elem.link}
        />
      ))}
    </SocialsWrapper>
  );
};

export default Socials;
