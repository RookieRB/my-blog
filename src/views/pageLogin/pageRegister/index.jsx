import React, { memo } from 'react'


import RegisterWrapper from './style'
import RegisterPanel from '../cpns/register-panel'

const PageRegister = memo(() => {
  return (
    <RegisterWrapper>
      <RegisterPanel/>
    </RegisterWrapper>
  )
})

export default PageRegister