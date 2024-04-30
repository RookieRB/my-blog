import React, { memo,useRef,useEffect } from 'react'


import HeaderWrapper from './style'
// import HeaderLogo from './c-cpns/header-logo'
// import HeaderPage from './c-cpns/header-page'
// import HeaderSearch from './c-cpns/header-search'
// import HeaderLogin from './c-cpns/header-login'
import LeftLogo from './c-cpns-v2/left-Logo'
import LowerContainer from './c-cpns-v2/lower-container'
import SearchBox from './c-cpns-v2/search-box'
import UserAvatar from './c-cpns-v2/user-avatar'
import HeaderUtils from './c-cpns-v2/header-utils'
import {HEADER_SHOW_SCROLL_Y} from '@/assets/constants/headerShowControl'

const Header = memo(() => {
  /**
   * 内部变量
   */
  // 获取lowerContainer组件
  const lowerContainerRef = useRef()
  const headerRef = useRef()

  // header背景颜色
  const headerBackGroundColor = "rgba(255, 255, 255, .95)"
  /**
   * 函数处理
   */
  // 鼠标移入lowerContainer处理事件
  function mouseEnterHandler(){ 
    if(window.scrollY < HEADER_SHOW_SCROLL_Y ){
      lowerContainerRef.current.style.visibility = 'visible'
      lowerContainerRef.current.style.transform = 'translateX(50%)'
      headerRef.current.style.backgroundColor = headerBackGroundColor 
    }
   
  }
  // 鼠标移出lowerContainer处理事件
  function mouseLeaveHandler(){
    if(window.scrollY < HEADER_SHOW_SCROLL_Y ){
      lowerContainerRef.current.style.visibility = 'hidden'
      lowerContainerRef.current.style.transform = 'translateX(100%)'
      headerRef.current.style.backgroundColor = 'transparent'
    }
  }

  /**
   * 生命周期
   */
  // 滑动到一定程度header变白
  function showHeaderColor(){
    let windowScroll = window.scrollY
    if( windowScroll< HEADER_SHOW_SCROLL_Y){
      if(lowerContainerRef.current.style.visibility === 'visible'){
        lowerContainerRef.current.style.transform = 'translateX(100%)'
        lowerContainerRef.current.style.visibility = 'hidden'
      }
      if(headerRef.current.style.backgroundColor !== 'transparent'){
        headerRef.current.style.backgroundColor = 'transparent'
      }
          
    }else{
      if(lowerContainerRef.current.style.visibility === 'hidden'){
        lowerContainerRef.current.style.visibility = 'visible'
        lowerContainerRef.current.style.transform = 'translateX(50%)'
      }
      if(headerRef.current.style.backgroundColor !== headerBackGroundColor){
        headerRef.current.style.backgroundColor = headerBackGroundColor 
      }  
    }
    
  }

  useEffect(() => {
    // 确保ref已经关联到DOM元素
    if (lowerContainerRef.current) {
      lowerContainerRef.current.style.visibility = 'hidden'
    }
    
    window.addEventListener("scroll",showHeaderColor)
    return () => {
      window.removeEventListener("scroll",showHeaderColor)
    }
  }, []); // 空依赖数组确保只在组件挂载时运行

  return (
    <HeaderWrapper onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} ref={headerRef}>
        {/* <HeaderLogo/>
        <HeaderPage/>
        <HeaderSearch/>
        <HeaderLogin/> */}
   
      <LeftLogo/>
      <LowerContainer ref={lowerContainerRef}/>
      <HeaderUtils/>
      <SearchBox/>
      
      <UserAvatar />

        
    </HeaderWrapper>
  )
})

export default Header