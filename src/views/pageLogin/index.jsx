import React, { memo} from 'react'


import LoginWrapper from './style'

import LoginPanel from './cpns/login-panel'



const LoginPage = memo(() => {
  return (
    <LoginWrapper>
      <LoginPanel/>
    </LoginWrapper>
  )
})

export default LoginPage