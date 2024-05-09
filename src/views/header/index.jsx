import React, { memo } from 'react'


import HeaderWrapper from './style'
// import HeaderLogo from './c-cpns/header-logo'
// import HeaderPage from './c-cpns/header-page'
// import HeaderSearch from './c-cpns/header-search'
// import HeaderLogin from './c-cpns/header-login'
import LeftLogo from './c-cpns-v2/left-Logo'
import LowerContainer from './c-cpns-v2/lower-container'
import UserAvatar from './c-cpns-v2/user-avatar'

const Header = memo(() => {
  /**
   * 内部变量
   */

  /**
   * 函数处理
   */
  // 如果


  /**
   * 生命周期
   */
  
  return (
    <HeaderWrapper >
      
      <div className="left-logo">
        <LeftLogo/>
      </div>
      
      <div className="right-container">
        <div className="lower-container">
          <LowerContainer/>
        </div>
        <div className="user-avatar">
          <UserAvatar/>
        </div>
        
      </div>    
    </HeaderWrapper>
  )
})

export default Header