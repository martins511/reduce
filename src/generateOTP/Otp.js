import React from 'react'
import { useState } from 'react';

const Otp = () => {
    const [otpo, setOtpo] = useState()
    const generateOtp =()=>{
    var digits = '0123456789';
    var otp = "";
    for(let i =0; i <6; i++){
        otp += digits[Math.floor(Math.random()*10)];
    }
    setOtpo(otp)
}
    
  return (
    <div>
       <label>{otpo}</label> 
      <button onClick={generateOtp}>GenerateOtp</button>
    </div>
  )
}

export default Otp
