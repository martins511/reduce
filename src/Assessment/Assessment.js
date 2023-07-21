
import { nanoid } from '@reduxjs/toolkit'
import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addAssessment } from './assessmentSlice'
import "./asst.css"
const Assessment = () => {
    const dispatch = useDispatch();

    const [user , setUser] = useState({})

    const handleChange =(e)=>{
        setUser(user =>({...user, [e.target.name]:e.target.value}))
    }

    const addStudent =()=>{
        dispatch(addAssessment({id:nanoid(),name:user.name, ca:user.ca, test:user.test, exam: user.exam, total:user.total}))
    }
  return (
    <div>
      <div className="container">
        <div className="name">
            <label>Name</label>
            <label>CA</label>
            <label>Assessment</label>
            <label>Test</label>
            <label>Exam</label>
            <label>ClicAddButton</label>
        </div>
        <div className="inputs">
            <input type="text" name='name' value={user.name} onChange={handleChange} />
            <input type="text" name='ca' value={user.ca} onChange={handleChange} />
            <input type="text" name='test' value={user.test} onChange={handleChange} />
            <input type="text" name='exam' value={user.exam} onChange={handleChange} />
            <input type="text" name='total' value={user.total} onChange={handleChange} />
            <button onClick={addStudent}>Add</button>
        </div>
      </div>
    </div>
  )
}

export default Assessment
