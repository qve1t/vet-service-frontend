import { IconLinkWrapper, SingleIcon } from "./styledComponents";

export interface socialLinkProps {
  link: string;
  icon: string;
}

const SingleSocialLink = ({ link, icon }: socialLinkProps) => {
  return (
    <IconLinkWrapper href={link}>
      <SingleIcon src={icon} alt="social icon" />
    </IconLinkWrapper>
  );
};

export default SingleSocialLink;
