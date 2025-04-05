import React, { useEffect, useReducer } from "react";

// Reducer function
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return initialState;
    default:
      throw new Error("Unknown action type");
  }
}

const initialState = { count: 0 };
function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    console.log('reder of the function happened ...');
  })

  return (
    <div className="flex  justify-center flex-col items-center">
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <div>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;