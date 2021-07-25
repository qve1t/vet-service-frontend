import styled from "styled-components";
import { Link } from "react-router-dom";

import { colors } from "../../../mainStyles/colors";
import { typography } from "../../../mainStyles/typography";

export const SectionDivider = styled.div`
  width: 100%;
  height: 1px;
  margin: 30px 0px 25px;
  background: ${colors.inputGrey};
`;

export const RedirectLabel = styled.p`
  font-size: ${typography.standard};
  text-align: center;
`;

export const RedirectLink = styled(Link)`
  color: ${colors.themeGreen};
  text-decoration: none;
  font-weight: 700;
`;
