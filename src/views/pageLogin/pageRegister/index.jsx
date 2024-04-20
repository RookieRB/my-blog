import React, { memo } from 'react'


import RegisterWrapper from './style'
import LoginBg from '../cpns/login-bg'
import RegisterPanel from '../cpns/register-panel'

const PageRegister = memo(() => {
  return (
    <RegisterWrapper>
      <LoginBg/>
      <RegisterPanel/>
    </RegisterWrapper>
  )
})

export default PageRegister