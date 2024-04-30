import React, { memo } from 'react'


import PageLeaveMessageWrapper from './style'
import Header from '../header'

const PageLeaveMessage = memo(() => {
  return (
    <PageLeaveMessageWrapper>
      <Header/>
      <div className="leaveMessage-img">
        <img src={require("@/assets/imgs/bg6.jpg")} alt="" />
      </div>
      <div className="messagePanel">
        你好啊
        你好啊
        你好啊
        你好啊
        你好啊
        你好啊
        你好啊
        你好啊
        你好啊
        你好啊
        你好啊
        你好啊
        你好啊
        你好啊
        你好啊
        你好啊
        你好啊
      </div>
    </PageLeaveMessageWrapper>
  )
})

export default PageLeaveMessage