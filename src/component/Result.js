import React from 'react'
import { useDispatch } from 'react-redux'
import {data1,data2,data3,data4} from "../features/students"
const Result = () => {
    const dispatch = useDispatch();
  return (
    <div>
      <button onClick={()=>dispatch(data1({ id: 1, name: "Maridiyat", score: 35 }))}>Data1</button>
      <button onClick={()=>dispatch(data2({id: 2, name: "Godgift", score: 30}))}>Data2</button>
      <button onClick={()=>dispatch(data3({id: 3, name: "Blessing", score: 31}))}>Data3</button>
      <button onClick={()=>dispatch(data4({id: 4, name: "Zainab", score: 36}))}>Data4</button>
    </div>
  )
}

export default Result
