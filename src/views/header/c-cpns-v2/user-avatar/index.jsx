import React, { memo,useState } from 'react'
import {useNavigate} from 'react-router-dom'


import AvatarWrapper from './style'
import UserAvatarSVG from '@/assets/svg/UserAvatarSVG.jsx'

const UserAvatar = memo(() => {
  /**
   * 局部变量
   */
  // 控制message 显示
  const [isShow,setIsShow] = useState(false)
  const navigate = useNavigate()
  /**
   * 函数处理
   */
  // 展示message
  function showMessageHandler(){
    setIsShow(true)
  }
  // 隐藏message
  function hiddenMessageHandler(){
    setIsShow(false)
  }
  // toLogin
  function goToLoginPageHandler(){
    navigate("/login")
  }
  return (
    <AvatarWrapper 
      onMouseEnter={showMessageHandler} 
      onMouseLeave={hiddenMessageHandler}
      onClick={goToLoginPageHandler}
    >
      <div className="avatar">
        <UserAvatarSVG/>
      </div>
      {
        isShow &&
        <div className="message">
          <div className="dialog-triangle"></div>
          <div className="content">You Want to Login? </div>
        </div>
      }
      
      
    </AvatarWrapper>
  )
})

export default UserAvatar