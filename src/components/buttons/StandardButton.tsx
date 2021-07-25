import { StandardButtonStyled } from "./styledComponents";
import { colors } from "../../mainStyles/colors";

interface StandardButtonProps {
  width?: string;
  primaryColor?: string;
  label: string;
  onClick?: () => void;
}

const StandardButton = ({
  primaryColor = colors.themeGreen,
  width = "100px",
  label,
  onClick,
}: StandardButtonProps) => {
  return (
    <StandardButtonStyled
      primaryColor={primaryColor}
      width={width}
      onClick={onClick}
    >
      {label}
    </StandardButtonStyled>
  );
};

export default StandardButton;
