import styled, { css } from "styled-components";
import Select from "react-select";
import { colors } from "../../mainStyles/colors";
import { mediaQuery } from "../../mainStyles/madiaQuery";
import { transitions } from "../../mainStyles/transitions";
import { typography } from "../../mainStyles/typography";

const baseStyle = css`
  font-family: "Lato", sans-serif;

  outline: none;
  border: none;
  padding: 10px 20px;
  border: 1px solid ${colors.inputGrey};
  margin-bottom: 30px;
  transition: border-color ${transitions.standardTransition};

  &:hover {
    border-color: ${colors.themeGreen};
  }

  &:focus {
    border-color: ${colors.themeGreen};
  }

  @media (max-width: ${mediaQuery.standard}) {
    padding: 5px 10px;
  }
`;

export const FormError = styled.p`
  font-family: "Lato", sans-serif;
  font-size: ${typography.small};
  margin-bottom: 10px;
  color: ${colors.errorRed};
  align-self: flex-start;
`;

export const BaseInput = styled.input<{
  error?: string;
  width?: string;
  noMargin?: string;
}>`
  width: ${({ width }) => (width ? width : "100%")};
  ${baseStyle}

  ${({ error }) =>
    error &&
    css`
      border-color: ${colors.errorRed};
      margin-bottom: 5px;
    `}
  
  ${({ noMargin }) =>
    noMargin &&
    css`
      margin-bottom: 30px;
    `}
`;

export const BaseTextArea = styled.textarea`
  width: 100%;
  height: 150px;
  resize: none;
  ${baseStyle}
`;

export const DatePickerWrapper = styled.div<{ error?: string; width?: string }>`
  input {
    width: ${({ width }) => (width ? width : "100%")};
    ${baseStyle}
    padding-top: -30px;

    ${({ error }) =>
      error &&
      css`
        border-color: ${colors.errorRed};
        margin-bottom: 5px;
      `}
  }
`;

export const SelectCustom = styled(Select)<{ error?: string; width?: string }>`
  & .react-select__control {
    width: ${({ width }) => (width ? width : "100%")};
    ${baseStyle}
    padding: 0px 12px;
    border-radius: 0;
    box-shadow: none;

    ${({ error }) =>
      error &&
      css`
        border-color: ${colors.errorRed};
        margin-bottom: 5px;
      `};
  }
  & .react-select__menu {
    border-radius: 0;
    margin-top: -30px;
  }
`;
