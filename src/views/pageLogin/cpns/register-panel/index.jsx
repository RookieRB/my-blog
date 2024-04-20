import React, { memo } from 'react'
import {useNavigate} from 'react-router-dom'

import RegisterWrapper from './style'

const RegisterPanel = memo((props) => {
  let navigate = useNavigate()  

  function toRegister(){
    navigate("/login")
  }
  return (
    <RegisterWrapper>
      <form action="#">
        <div className="name">Registration</div>
        <div className="input-box">
          <input type="text" placeholder="Username"/>
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password"/>
        </div>
        <div className="input-box">
          <input type="text" placeholder="PhoneNumber"/>
        </div>
        <div className="agree">
          <input type="checkbox" />
          <span>I agree to the terms & conditions</span>
        </div>
        <button type="submit">Register</button>
        <div className="bottom">
          Already have an account?
          <span onClick={toRegister}>Login</span>
        </div>
      </form>
    </RegisterWrapper>
  )
})

export default RegisterPanel