import React, { useReducer } from "react";
import StyledButton from "./button/StyleComponent";
import { Styldev } from "./button/Button.styles";
const initialState = { score: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, score: state.score + action.value };
    case "decrement":
      return { ...state, score: state.score - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};
function Reducer() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return <div>
      <h3>{count.score}</h3>
    <StyledButton>
       <button onClick={()=>dispatch({type:"increment",value:1})}>Increment</button> 
       <Styldev><button onClick={()=>dispatch({type:"decrement",value:1})}>Decrement by 1</button></Styldev>
       <button onClick={()=>dispatch({type:"increment",value:5})}>Increment by 5</button> 
       <button onClick={()=>dispatch({type:"decrement",value:5})}>Decrement by 5</button> 
       <button onClick={()=>dispatch({type:"reset"})}>Reset</button> </StyledButton>
  </div>;
}

export default Reducer;
