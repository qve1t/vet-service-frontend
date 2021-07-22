import {
  SingleElementWrapper,
  InfoElementImage,
  InfoElementHeader,
  InfoElementDescription,
} from "./styledComponents";

export interface singleElementProps {
  name: string;
  description: string;
  icon: string;
}

const SingleInfo = ({ name, description, icon }: singleElementProps) => {
  return (
    <SingleElementWrapper>
      <InfoElementImage src={icon} alt="info icon" />
      <InfoElementHeader>{name}</InfoElementHeader>
      <InfoElementDescription>{description}</InfoElementDescription>
    </SingleElementWrapper>
  );
};

export default SingleInfo;
