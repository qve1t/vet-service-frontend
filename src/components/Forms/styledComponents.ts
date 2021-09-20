import styled from "styled-components";

export const FormsWrapper = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const MultipleInputsWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const SingleInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ButtonsWrapper = styled.div<{ noMargin?: boolean }>`
  display: flex;
  width: 250px;
  justify-content: space-between;
  ${({ noMargin }) => !noMargin && "margin-top: 30px;"}
`;

export const FlexWrapper = styled.div`
  display: flex;
  max-height: 355px;
`;

export const FormHalfWidthWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const VisitsListWrapper = styled.div`
  overflow: auto;
`;
