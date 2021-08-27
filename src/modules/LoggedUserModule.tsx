import { useContext } from "react";
import { createContext, useMemo } from "react";
import { useImmer } from "use-immer";

interface State {
  isLogged: boolean;
  email: string;
  itemsPerPage: number;
}

interface Actions {
  logUser: (isLogged: boolean, email: string) => void;
  logoutUser: (isLogged: boolean, email: string) => void;
  checkIsLogged: (isLogged: boolean, email: string) => void;
}

const LoggedUserContext = createContext<{
  state: State;
  actions: Actions;
} | null>(null);

interface LoggedUserContextProps {
  children: React.ReactNode;
}

export const LoggedUserModule = ({ children }: LoggedUserContextProps) => {
  const [state, setState] = useImmer<State>({
    isLogged: false,
    email: "",
    itemsPerPage: 10,
  });

  const actions = useMemo<Actions>(() => {
    return {
      logUser: (isLogged, email) => {
        setState((draft) => {
          draft.isLogged = isLogged;
          draft.email = email;
        });
      },
      logoutUser: (isLogged, email) => {
        setState((draft) => {
          draft.isLogged = isLogged;
          draft.email = email;
        });
      },
      checkIsLogged: (isLogged, email) => {
        setState((draft) => {
          draft.isLogged = isLogged;
          draft.email = email;
        });
      },
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <LoggedUserContext.Provider value={{ state, actions }}>
      {children}
    </LoggedUserContext.Provider>
  );
};

export const UseLoggedUserState = () => {
  const context = useContext(LoggedUserContext);
  if (!context) {
    throw new Error("LoggedUserContext is not set!");
  }
  return context.state;
};

export const UseLoggedUserActions = () => {
  const context = useContext(LoggedUserContext);
  if (!context) {
    throw new Error("LoggedUserContext is not set!");
  }
  return context.actions;
};
