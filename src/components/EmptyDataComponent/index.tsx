interface EmptyDataComponentInterface {
  textInInfo: string;
  customText?: string;
}

const EmptyDataComponent = ({
  textInInfo,
  customText,
}: EmptyDataComponentInterface) => {
  return (
    <div>
      {customText ? customText : `There is no ${textInInfo} to display.`}
    </div>
  );
};

export default EmptyDataComponent;
