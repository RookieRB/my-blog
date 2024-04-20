import React, { memo } from 'react'
import {useNavigate} from 'react-router-dom'
import MusicLeftPanelInnerBoxWrapper from './style'

const MusicLeftPanelInnerBox = memo((props) => {
  /**
   * 内部变量
   */
  const {url} = props;
  // 定义路由
  const navigate = useNavigate()
  /**
   * 函数处理
   */
  // 被点击后的处理逻辑
  function changeStyleHandler(){
    navigate(url)
  }
  return (
    <MusicLeftPanelInnerBoxWrapper onClick={changeStyleHandler}>
      {
        props.children
      }
    </MusicLeftPanelInnerBoxWrapper>
  )
})

export default MusicLeftPanelInnerBox