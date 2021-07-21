import { MainPageButtonStyled } from "./styledComponents";
import { colors } from "../../mainStyles/colors";

interface ButtonProps {
  primaryColor?: string;
  secondaryColor?: string;
  label: string;
  onClick?: () => void;
}

const MainPageButton = ({
  primaryColor = colors.themeGreen,
  secondaryColor = colors.fontSecondary,
  label,
  onClick,
}: ButtonProps) => {
  return (
    <MainPageButtonStyled
      primaryColor={primaryColor}
      secondaryColor={secondaryColor}
      onClick={onClick}
    >
      {label}
    </MainPageButtonStyled>
  );
};

export default MainPageButton;
