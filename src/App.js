import "./App.css";
import React, { useReducer, useContext, createContext } from "react";
import { Root, GlobalStyle } from "./components";
import { reducer, initialState } from "./reducers";

export const UserContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GlobalStyle>
      <UserContext.Provider value={{ state, dispatch }}>
        <Root />
      </UserContext.Provider>
    </GlobalStyle>
  );
}

export default App;
