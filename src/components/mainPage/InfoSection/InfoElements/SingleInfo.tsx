import {
  SingleElementWrapper,
  InfoElementImage,
  InfoElementHeader,
  InfoElementDescription,
} from "./styledComponents";

export interface SingleElementProps {
  name: string;
  description: string;
  icon: string;
}

const SingleInfo = ({ name, description, icon }: SingleElementProps) => {
  return (
    <SingleElementWrapper>
      <InfoElementImage src={icon} alt="info icon" />
      <InfoElementHeader>{name}</InfoElementHeader>
      <InfoElementDescription>{description}</InfoElementDescription>
    </SingleElementWrapper>
  );
};

export default SingleInfo;
