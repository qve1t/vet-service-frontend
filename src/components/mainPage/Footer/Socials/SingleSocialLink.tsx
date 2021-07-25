import { IconLinkWrapper, SingleIcon } from "./styledComponents";

export interface SocialLinkProps {
  link: string;
  icon: string;
}

const SingleSocialLink = ({ link, icon }: SocialLinkProps) => {
  return (
    <IconLinkWrapper href={link} target="_blank">
      <SingleIcon src={icon} alt="social icon" />
    </IconLinkWrapper>
  );
};

export default SingleSocialLink;
