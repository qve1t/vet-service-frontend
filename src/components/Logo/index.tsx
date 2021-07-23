import { LogoText } from "./styledComponents";

interface logoProps {
  textAlign?: string;
  margin?: string;
}

const Logo = ({ textAlign, margin }: logoProps) => {
  return (
    <LogoText textAlign={textAlign} margin={margin}>
      VET<span>-</span>SERVICE
    </LogoText>
  );
};

export default Logo;
