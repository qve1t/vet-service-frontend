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

export const ListElementWrapper = styled.div`
  ${wrapperStyle}
`;

export const ListElementWrapperLink = styled(Link)`
  ${wrapperStyle}
  color: ${colors.fontMain};
  text-decoration: none;
`;

export const ListElementMainText = styled.h4`
  font-size: ${typography.large};
  font-weight: 700;
`;

export const ListElementSecondaryText = styled.p``;

export const ListElementLink = styled(Link)`
  color: ${colors.fontMain};
  font-weight: 300;
  text-decoration: none;

  transition: ${transitions.standardTransition};
  &:hover {
    text-decoration: underline;
    color: ${colors.themeGreen};
  }
`;
