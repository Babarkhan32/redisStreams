import * as React from "react";


let initialState = {
    status:''
 
};

let ContextOne = React.createContext();
let reducer = (state, action) => {
  switch (action.type) {
    case "default": return initialState
    case "reset":
      return initialState;
    case "event":
      return { ...state,status : "event" };
  }
};
 function ContextOneProvider(props) {
  // [A]
  let [state, dispatch] = React.useReducer(reducer, initialState);
  let value = { state, dispatch };
 

  // [B]
  return (
    <ContextOne.Provider value={value}>{props.children}</ContextOne.Provider>
  );
}

let ContextOneConsumer = ContextOne.Consumer;

// [C]
export { ContextOne, ContextOneProvider, ContextOneConsumer };
