import styled from "styled-components";
import { colors } from "../../mainStyles/colors";
import { typography } from "../../mainStyles/typography";

export const DeletePopupWrapper = styled.div`
  position: absolute;
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  z-index: 5;
  background: rgba(0, 0, 0, 0.3);
`;

export const DeletePopupMainArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  min-height: 150px;
  background: ${colors.backgroundMain};
  border: 1px solid ${colors.themeGreen};
  border-radius: 5px;
  padding: 10px;
  margin-top: -300px;
`;

export const DeletePopupHeader = styled.h4`
  font-size: ${typography.large};
  text-align: center;
`;

export const DeletePopupButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;
