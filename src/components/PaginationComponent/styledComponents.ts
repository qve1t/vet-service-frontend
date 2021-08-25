import styled from "styled-components";
import { colors } from "../../mainStyles/colors";
import { transitions } from "../../mainStyles/transitions";
import { typography } from "../../mainStyles/typography";

export const PaginationWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 15px;
  margin-top: 15px;
  align-items: center;
  justify-content: center;
`;

export const PaginationButton = styled.button`
  width: 35px;
  height: 35px;
  font-size: ${typography.large};
  border: 1px solid ${colors.themeGreen};
  border-radius: 5px;
  background: #ffffff;
  color: ${colors.themeGreen};
  cursor: pointer;
  transition: ${transitions.standardTransition};

  &:enabled:hover {
    background: ${colors.themeGreen};
    color: ${colors.fontSecondary};
  }

  &:disabled {
    cursor: auto;
    opacity: 30%;
  }
`;

export const PaginationCount = styled.p`
  font-weight: 700;
`;
