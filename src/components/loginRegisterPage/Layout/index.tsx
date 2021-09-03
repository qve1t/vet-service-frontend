import {
  LayoutWrapper,
  Container,
  LoginRegisterHeader,
} from "./styledComponents";

import { LogoWithLink } from "../../Logo";

interface LayoutProps {
  children: React.ReactNode;
  label?: string;
}

const Layout = ({ children, label }: LayoutProps) => {
  return (
    <LayoutWrapper>
      <Container>
        <LogoWithLink />
        <LoginRegisterHeader>{label}</LoginRegisterHeader>
        {children}
      </Container>
    </LayoutWrapper>
  );
};

export default Layout;
