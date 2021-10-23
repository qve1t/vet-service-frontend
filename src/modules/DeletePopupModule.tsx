import { useContext } from "react";
import { createContext, useMemo } from "react";
import { useImmer } from "use-immer";
import DeleteConfirmPopup from "../components/DeleteConfirmPopup";

interface State {
  show: boolean;
  acceptFunction: () => void;
}

interface Actions {
  showPopup: (acceptFunction: () => void) => void;
  hidePopup: () => void;
}

const DeletePopupContext = createContext<{
  state: State;
  actions: Actions;
} | null>(null);

interface DeletePopupContextProps {
  children: React.ReactNode;
}

export const DeletePopupModule = ({ children }: DeletePopupContextProps) => {
  const [state, setState] = useImmer<State>({
    show: false,
    acceptFunction: () => {},
  });

  const actions = useMemo<Actions>(() => {
    return {
      showPopup: (acceptFunction) => {
        setState((draft) => {
          draft.show = true;
          draft.acceptFunction = acceptFunction;
        });
      },
      hidePopup: () => {
        setState((draft) => {
          draft.show = false;
          draft.acceptFunction = () => {};
        });
      },
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <DeletePopupContext.Provider value={{ state, actions }}>
      <DeleteConfirmPopup
        show={state.show}
        onConfirm={state.acceptFunction}
        onHide={actions.hidePopup}
      />
      {children}
    </DeletePopupContext.Provider>
  );
};

export const UseDeletePopupState = () => {
  const context = useContext(DeletePopupContext);
  if (!context) {
    throw new Error("DeletePopupContext is not set!");
  }
  return context.state;
};

export const UseDeletePopupActions = () => {
  const context = useContext(DeletePopupContext);
  if (!context) {
    throw new Error("DeletePopupContext is not set!");
  }
  return context.actions;
};
