import React, { useReducer } from "react";
const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { ...state, count: state.count+1 };
      case "toggleShowText":
        return { ...state, showText: !state.showText };
      default:
        return state;
    }  
  };
  const Redu = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0, showText: false });
    return <div>
        <h1>{state.count}</h1>
        <button onClick={()=>{
            dispatch({type:"INCREMENT"});
            dispatch({type:"toggleShowText"})
        }}>Click Here</button>
        {state.showText && <h2>This is a text</h2>}
    </div>;
  };
  
  export default Redu ;