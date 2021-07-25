import styled, { css } from "styled-components";
import { colors } from "../../../mainStyles/colors";
import { transitions } from "../../../mainStyles/transitions";
import { typography } from "../../../mainStyles/typography";

export const FormBase = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const FormError = styled.p`
  align-self: flex-start;
  font-family: "Lato";
  font-size: ${typography.small};
  margin-bottom: 10px;
  color: ${colors.errorRed};
`;

export const LoginRegisterInputBase = styled.input<{ error?: string }>`
  font-family: "Lato";
  width: 100%;
  padding: 5px 10px;
  outline: none;
  border: none;
  padding: 10px 20px;
  border: 1px solid ${colors.inputGrey};
  margin-bottom: 30px;
  transition: border-color ${transitions.standardTransition};

  &:focus {
    border-color: ${colors.themeGreen};
  }

  ${({ error }) =>
    error &&
    css`
      border-color: ${colors.errorRed};
      margin-bottom: 5px;
    `}
`;
