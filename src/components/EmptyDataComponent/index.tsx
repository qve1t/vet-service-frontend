interface EmptyDataComponentInterface {
  textInInfo: string;
}

const EmptyDataComponent = ({ textInInfo }: EmptyDataComponentInterface) => {
  return <div>{`There is no ${textInInfo} to display.`}</div>;
};

export default EmptyDataComponent;
