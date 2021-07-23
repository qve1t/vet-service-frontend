import {
  LayoutWrapper,
  Container,
  LoginRegisterHeader,
} from "./styledComponents";

import Logo from "../../Logo";

interface layoutProps {
  children: React.ReactNode;
  label: string;
}

const Layout = ({ children, label }: layoutProps) => {
  return (
    <LayoutWrapper>
      <Container>
        <Logo textAlign="center" />
        <LoginRegisterHeader>{label}</LoginRegisterHeader>
        {children}
      </Container>
    </LayoutWrapper>
  );
};

export default Layout;
