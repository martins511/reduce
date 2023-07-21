import React from 'react'
import { useState } from 'react';
import { useReducer } from 'react'
const initialTask = {name:"", school:"",age:0,weight:0};
const reducerFunction =(state, action)=>{
    switch(action.type){
        case "UpdateName":
            return {...state, name:action.name}
        case "UpdateSchool":
            return {...state, school:action.payload.school,uniformColor:action.payload.uniformColor}
        case "UpdateAge":
            return {...state, age:action.age}
        case "UpdateWeight":
            return {...state,weight:action.payload.weight}    
        case "Reset":
            return initialTask          
        default :
            return state     
    }
}
const AppTaskTwo = () => {
    const [weight, setWeight] = useState(0)
    const [pupil, dispatch] = useReducer(reducerFunction, initialTask)

    const changeWeight =()=>{
        dispatch({
            type:"UpdateWeight",
            payload:{weight:weight}
            
        })
        setWeight("")
    }
  return (
    <div>
      <div>Weight: <input type="text" value ={weight} onChange={(e)=>setWeight(e.target.value)}/></div>
      <div>Name :{pupil.name}</div>
      <div>School :{pupil.school}</div>
      <div>Age :{pupil.age}</div>
      <div>Weight :{pupil.weight}</div>
      <button onClick={()=>dispatch({type:"UpdateName",name:"John"})}>UpdateName</button>
      <button onClick={()=>dispatch({type:"UpdateSchool",payload:{school:"kenth academy",uniformColor:"red"}})}>UpdateSchool</button>
      <button onClick={()=>dispatch({type:"UpdateAge",age:5})}>UpdateAge</button>
      <button onClick={changeWeight}>UpdateWeight</button>
      <button onClick={()=>dispatch({type:"Reset"})}>Reset</button>
    </div>
  )
}

export default AppTaskTwo
