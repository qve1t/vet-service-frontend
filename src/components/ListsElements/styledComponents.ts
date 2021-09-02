import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import { colors } from "../../mainStyles/colors";
import { transitions } from "../../mainStyles/transitions";
import { typography } from "../../mainStyles/typography";

const wrapperStyle = css`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: baseline;
  gap: 15px;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid white;
  border-radius: 5px;
  background: ${colors.backgroundMain};
  cursor: pointer;

  transition: ${transitions.standardTransition};
  &:hover {
    border-color: ${colors.themeGreen};
  }
`;

export const DeleteIcon = styled.img`
  width: 20px;
  height: 20px;
  opacity: 0.7;
  transition: ${transitions.standardTransition};
`;

export const IconWrapper = styled.div`
  position: absolute;
  right: 10px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  opacity: 0;
  transition: ${transitions.standardTransition};

  &:hover > ${DeleteIcon} {
    opacity: 1;
  }
`;

export const ListElementWrapper = styled.div`
  ${wrapperStyle}
`;

export const NoteElementWrapper = styled.div`
  ${wrapperStyle}
  position: relative;
  max-width: 20%;
  flex-direction: column;
  cursor: default;

  &:hover > ${IconWrapper} {
    opacity: 1;
  }
`;

export const NoteSectionDivider = styled.div`
  width: 100%;
  height: 1px;
  background: ${colors.themeGreen};
`;

export const ListElementWrapperLink = styled(Link)<{
  width?: string;
  column?: boolean;
}>`
  ${wrapperStyle}
  width: ${({ width }) => (width ? width : "100%")};
  color: ${colors.fontMain};
  text-decoration: none;

  ${({ column }) =>
    column &&
    css`
      flex-direction: column;
      gap: 5px;
    `}
`;

export const ListElementMainText = styled.h4`
  font-size: ${typography.large};
  font-weight: 700;
  text-transform: capitalize;
`;

export const ListElementSecondaryText = styled.p``;

export const ListElementLink = styled(Link)`
  color: ${colors.fontMain};
  font-weight: 300;
  font-style: italic;
  text-decoration: none;
  text-transform: capitalize;

  transition: ${transitions.standardTransition};
  &:hover {
    text-decoration: underline;
    color: ${colors.themeGreen};
  }
`;
