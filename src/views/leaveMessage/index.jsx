import React, { memo } from 'react'


import PageLeaveMessageWrapper from './style'
import Header from '../header'
import MessagePanel from './messagePanel'

const PageLeaveMessage = memo(() => {
  return (
    <PageLeaveMessageWrapper>
      <Header/>
      <div className="leaveMessage-img">
        <img src={require("@/assets/imgs/bg6.jpg")} alt="" />
      </div>
      <div className="content">
        <div className="messagePanel">
          <MessagePanel/>
        </div>
      </div>
    </PageLeaveMessageWrapper>
  )
})

export default PageLeaveMessage