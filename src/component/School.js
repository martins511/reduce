import React from 'react'
import { useSelector } from 'react-redux'
const School = () => {
    const pupil = useSelector(state =>state.pupil.value)
  return (
    <div>
     <h2>Basic four(4) result</h2>
     <p> id: {pupil.id}</p>
     <p> Name: {pupil.name}</p>
     <p> Score: {pupil.score}</p>
    </div>
  )
}

export default School
