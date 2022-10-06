import React, { useReducer } from 'react'
const initialTodo = {name: "Umar", score:27}
const reducer = (state,action) =>{
    switch(action.type){
        case "UADTE NAME":
            return {...state, name:"Bello"};
        case "INCREMENT":
            return {...state , score: state.score+2 };
        default :
            return state;       
    }

}
const Score = () => {
    const[state, dispatch] = useReducer(reducer,initialTodo )
  return (
    <div>
      <h4>{state.name}</h4>
      <h3>{state.score}</h3>
      <button onClick={()=>{dispatch({type:"UADTE NAME"})}}>Update Name</button>
      <button onClick={() =>{dispatch({type:"INCREMENT"})}}>Update Score</button>
    </div>
  )
}

export default Score
