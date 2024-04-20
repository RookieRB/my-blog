import React, { memo } from 'react'


import BoxUtilsWrapper from './style'

const HeaderUtilsBox = memo((props) => {
  return (
    <BoxUtilsWrapper>
        {props.children}
    </BoxUtilsWrapper>
  )
})

export default HeaderUtilsBox