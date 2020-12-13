/* eslint-disable react/jsx-filename-extension */

import * as React from "react";

const initialState = {
  status: '',

};

const ContextOne = React.createContext();
// eslint-disable-next-line consistent-return
const reducer = (state, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "default": return initialState;
    case "reset":
      return initialState;
    case "event":
      return { ...state, status: "event" };
  }
};

function ContextOneProvider(props) {
  // [A]
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };

  // [B]
  return (
    // eslint-disable-next-line react/destructuring-assignment
    <ContextOne.Provider value={value}>{props.children}</ContextOne.Provider>
  );
}

const ContextOneConsumer = ContextOne.Consumer;

// [C]
export { ContextOne, ContextOneProvider, ContextOneConsumer };
