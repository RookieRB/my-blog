import React, { memo,useEffect,useState } from 'react'


import UtilsWrapper from './style'
import WindowSVG from '@/assets/svg/WindowSVG'
import HeaderUtilsPanel from '@/components/header-utils-panel'


const HeaderUtils = memo(() => {
  /**
   * 局部变量
   */
  const [showPanel,setShowPanel] = useState()
  /**
   * 函数处理
   */
  function openUtilsPanelHandler(){
    setShowPanel(true)
  }

  // 监听函数
  useEffect(() => {
    function windowHandleClick(){
      setShowPanel(false)
    }
    window.addEventListener("click",windowHandleClick,true)
    return () => {
      window.addEventListener("click",windowHandleClick,true)
    }
  },[])

  return (
    <UtilsWrapper>
      <div onClick={openUtilsPanelHandler}>
        <WindowSVG/>
      </div>
      {showPanel &&
      <div className="utilsPanel">
        <HeaderUtilsPanel />
      </div>
      }
    </UtilsWrapper>
  )
})

export default HeaderUtils