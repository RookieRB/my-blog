import React, { memo, useState,useRef,useEffect,useCallback} from 'react'
import {shallowEqual,useSelector,useDispatch} from 'react-redux'



import PageLeaveMessageWrapper from './style'
import Header from '../header'
import MessagePanel from './messagePanel'
// import Barrage from '@/components/barrage'
import RocketSVG from '@/assets/svg/RocketSVG'
import { fetchLeaveMessageDataAction } from '@/store/modules/leaveMessage'
import {changeLastMessageIdAction} from '@/store/modules/leaveMessage'


const PageLeaveMessage = memo(() => {
  // 内部变量，控制按钮出现
  const [buttonIsShow,setButtonIsShow] = useState(false)
  // 控制火箭的出现
  const [rocketIsShow,setRocketIsShow] = useState(false)
  const inputRef = useRef()

  /**
   * 函数逻辑
   */
  // 随机生成整数
  // function getRandomIntInclusive(min, max) {
  //   min = Math.ceil(min); // 确保最小值是整数
  //   max = Math.floor(max); // 确保最大值是整数
  //   // Math.random() * (max - min + 1) + min 会生成一个[min, max]之间的随机数
  //   // Math.floor() 确保结果是整数
  //   return Math.floor(Math.random() * (max - min + 1) + min);
  // }
  // function getRandomIntInclusiveV1(min, max) {
  //   // Math.random() * (max - min + 1) + min 会生成一个[min, max]之间的随机数
  //   // Math.floor() 确保结果是整数
  //   return Math.floor(Math.random() * (max - min + 1) + min);
  // }
  // 获得input输入框焦点
  function inputFocusHandler(){
    setButtonIsShow(true)
  }
  // 点击发射处理相关逻辑
  function buttonClickHandler(){
    // 展示火箭
    setRocketIsShow(true)
    setButtonIsShow(false)
    // 处理弹幕后续逻辑 
    //TODO
  }
  // 火箭动画结束事件处理
  function rocketAnimationEndHandler() {
    setButtonIsShow(true)
    setRocketIsShow(false)
  }
  /**
   * 从服务器获取页面数据
   */
  const {
    messageLeaveData,
    facialImgsUrlData,
    userInfoData,
    lastMessageId,
  } = useSelector((state) => ({
    messageLeaveData: state.leaveMessage.messageLeaveData,
    facialImgsUrlData: state.leaveMessage.facialImgsUrlData,
    userInfoData: state.currentUser.userInfoData,
    lastMessageId: state.leaveMessage.lastMessageId,
  }),shallowEqual)


  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchLeaveMessageDataAction())
  },[dispatch])
  
  const messageIdUpdateHandler = useCallback((messageId) => {
    dispatch(changeLastMessageIdAction(messageId))
  },[dispatch])

  return (
    <PageLeaveMessageWrapper>
      <Header/> 
      <div className="leaveMessage-top">
        <img src={require("@/assets/imgs/bg12.jpg")} alt="" className='leaveMessage-top-img'/>
        <div className='leaveMessage-message-in'>
          <h2 className='leaveMessage-message-in-title'>梧桐</h2>
          <div className='leaveMessage-message-in-emit '>
            <input type="text" placeholder='留下点什么' className='leaveMessage-message-input leaveMessage-message-in-common' ref={inputRef} onFocus={inputFocusHandler}/>
            {
              buttonIsShow
              &&
              (
                <button className='leaveMessage-message-button leaveMessage-message-in-common' onClick={buttonClickHandler}>发射</button>
              )
            }
            {
              rocketIsShow
              &&
              (
                <div className="leaveMessage-message-rocket" onAnimationEnd={rocketAnimationEndHandler} >
                  <RocketSVG/>
                </div>
              )
              
            }
          </div>
        </div>
        <div className="leaveMessage-barrage">
          {/* { 
            Array.from({ length: 20 }, (_, i) => (
              <div className='barrage-line'>
                 {Array.from({ length: 10 }, (_, i) => (
                  <Barrage key={`barrage-${i}`} right={getRandomIntInclusiveV1(-20,-80) + "%"} speed={getRandomIntInclusiveV1(15,20) + "s"}/>
                 ))}
                
              </div>
            ))
          } */}
        
          
        </div>
      </div>
      <div className="content">
        <div className="messagePanel">
          <MessagePanel 
          messageLeaveData={messageLeaveData} 
          facialImgsUrlData={facialImgsUrlData} 
          userInfoData={userInfoData} 
          lastMessageId={lastMessageId} 
          messageIdUpdateHandler={messageIdUpdateHandler}/>
        </div>
      </div>
    </PageLeaveMessageWrapper>
  )
})

export default PageLeaveMessage