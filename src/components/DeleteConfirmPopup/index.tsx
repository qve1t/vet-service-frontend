import { colors } from "../../mainStyles/colors";
import StandardButton from "../Buttons/StandardButton";
import {
  DeletePopupWrapper,
  DeletePopupMainArea,
  DeletePopupHeader,
  DeletePopupButtonsWrapper,
} from "./styledComponents";

interface DeleteConfirmPopupInterface {
  show: boolean;
  onConfirm: () => void;
  onHide: () => void;
}

const DeleteConfirmPopup = ({
  show,
  onConfirm,
  onHide,
}: DeleteConfirmPopupInterface) => {
  console.log(show);
  return (
    <>
      {show && (
        <DeletePopupWrapper>
          <DeletePopupMainArea>
            <DeletePopupHeader>
              Are you sure you want to delete this?
            </DeletePopupHeader>
            <DeletePopupButtonsWrapper>
              <StandardButton
                label="Delete"
                primaryColor={colors.errorRed}
                onClick={onConfirm}
              />
              <StandardButton label="Cancel" onClick={onHide} />
            </DeletePopupButtonsWrapper>
          </DeletePopupMainArea>
        </DeletePopupWrapper>
      )}
    </>
  );
};

export default DeleteConfirmPopup;
