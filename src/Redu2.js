import React, { useReducer } from "react";
const initialState = [
  { id: 1, name: "Maridiyat", score: 35 },
  { id: 2, name: "Godgift", score: 30 },
  { id: 3, name: "Blessing", score: 31 },
  { id: 4, name: "Zainab", score: 36 },
];
//const initialState = 0;
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state.map((pupil) => {
        if (pupil.id !== action.id) {
          return { ...pupil, score: pupil.score + 1 };
       } else {
         return pupil;
       }
      });

    case "DECREMENT":
      return state.map((pupil) => {
        if (pupil.id !== action.id) {
          return { ...pupil, score: pupil.score - 1 };
        } else {
          return pupil;
        }
      });

    case "RESET":
      return initialState;
    default:
      return state;
  }
};
const Redu2 = () => {
  const [pupils, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      {pupils.map((pupil) => (
        <div key={pupil.id}>
          <h3>{pupil.name} {pupil.score}</h3>

          <button onClick={(pupil) => dispatch({ type: "INCREMENT", id: pupil.id })}>
            Increment
          </button>
          <button onClick={(pupil) => dispatch({type:"DECREMENT", id:pupil.id})}>Decrement</button>
          <button onClick={() => dispatch("RESET")}>Reset</button>
        </div>
      ))}
    </>
  );
};

export default Redu2;
