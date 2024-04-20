import React, { memo } from 'react'
import PanelWrapper from './style'
import {useNavigate} from 'react-router-dom'



const LoginPanel = memo((props) => {
  let navigate = useNavigate()  

  function toRegister(){
    navigate("/register")
  }
  function toGetPassword(){
    navigate("/getPassword")
  }
  return (
    <PanelWrapper>
       <div id="login_box">
        <h2>LOGIN</h2>
        <form action="#">
          <div id="input_box">
            <input type="text" placeholder="请输入用户名"/>
          </div>
          <div className="input_box">
            <input type="password" placeholder="请输入密码"/>
          </div>
          <div className="login-question">
            <input type="checkbox" />
            <span>Remember me</span>
            <span className="forget" onClick={toGetPassword}>Forget Password?</span>
          </div>
          <button type="submit">Login</button>
          <div className="bottom">Don't have an account? <span onClick={toRegister}>Register</span></div>
        </form>
      </div>
    </PanelWrapper>
  )
})

export default LoginPanel