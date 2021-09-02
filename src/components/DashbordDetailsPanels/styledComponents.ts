import styled from "styled-components";
import { colors } from "../../mainStyles/colors";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const MultipleElementsWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const SingleElementWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ListElementsWrapper = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: row;
  gap: 15px;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export const ElementDataParagraph = styled.p<{
  width?: string;
  hasData?: boolean | null;
}>`
  width: ${({ width }) => (width ? width : "100%")};
  min-height: 40px;
  padding: 10px 20px;
  text-transform: capitalize;
  margin-bottom: 30px;
  border-bottom: 1px solid
    ${({ hasData }) => (hasData ? colors.themeGreen : colors.inputGrey)};
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  width: 250px;
  justify-content: space-between;
  margin-top: 30px;
`;
