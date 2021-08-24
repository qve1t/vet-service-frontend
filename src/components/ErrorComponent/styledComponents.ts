import styled from "styled-components";
import { colors } from "../../mainStyles/colors";

export const ErrorWrapper = styled.div`
  border: 1px solid ${colors.errorRed};
  border-radius: 5px;
  padding: 10px;
  background: ${colors.errorRedOpacity};
`;

export const ErrorInfo = styled.p`
  color: ${colors.errorRed};
`;

export const ErrorDescription = styled.p`
  color: ${colors.errorRed};
`;
