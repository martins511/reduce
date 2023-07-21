import React from 'react'
import { useReducer } from 'react'
// const initialTask = [
//     {
//       id: 1,
//       title: "Todo 1",
//       complete: false,
//     },
//     {
//       id: 2,
//       title: "Todo 2",
//       complete: false,
//     },
//   ];
const initialTask = 0;

  const taskReducer =(state,action)=>{
    switch(action){
        case "increment":
            return state+1
        case "decrement":
            return state -1
        case "reset":
            return initialTask
        default :
            return state        
    }
}
const AppTask = () => {
    
      
    const [count, dispatch] = useReducer(taskReducer, initialTask);
    
  return (
    <div>
        <div>Count - {count}</div>
      <button onClick={()=>dispatch("increment")}>Increment</button>
      <button onClick={()=>dispatch("decrement")}>Decrement</button>
      <button onClick={()=>dispatch("reset")}>Reset</button>
    </div>
  )
}

export default AppTask
