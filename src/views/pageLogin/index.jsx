import React, { memo} from 'react'


import LoginWrapper from './style'
import LoginBg from './cpns/login-bg'
import LoginPanel from './cpns/login-panel'



const LoginPage = memo(() => {
  return (
    <LoginWrapper>
      <LoginBg/>
      <LoginPanel/>
    </LoginWrapper>
  )
})

export default LoginPage