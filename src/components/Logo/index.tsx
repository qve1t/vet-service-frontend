import { LogoText, LogoLink, LogoTextLight } from "./styledComponents";

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

export const LogoLight = ({ margin }: LogoProps) => {
  return (
    <LogoTextLight margin={margin}>
      VET<span>-</span>SERVICE
    </LogoTextLight>
  );
};

export const LogoWithLink = () => {
  return (
    <LogoLink to="/">
      VET<span>-</span>SERVICE
    </LogoLink>
  );
};
