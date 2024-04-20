import React, { memo } from 'react'


import LogoWrapper from './style'



const HeaderLogo = memo(() => {

  return (
    <LogoWrapper >
        <img src={require("@/assets/imgs/logo.jpg")} alt=''></img>
        <div className="text">Blog</div>
    </LogoWrapper>
  )
})

export default HeaderLogo