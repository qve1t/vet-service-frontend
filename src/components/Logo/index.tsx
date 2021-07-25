import { LogoText, LogoLink } from "./styledComponents";

interface LogoProps {
  margin?: string;
}

export const Logo = ({ margin }: LogoProps) => {
  return (
    <LogoText margin={margin}>
      VET<span>-</span>SERVICE
    </LogoText>
  );
};

export const LogoWithLink = () => {
  return (
    <LogoLink to="/">
      VET<span>-</span>SERVICE
    </LogoLink>
  );
};
