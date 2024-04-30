import React, { memo } from 'react'

import MessagePanelWrapper from './style'

const MessagePanel = memo(() => {
  return (
    <MessagePanelWrapper>
      <div className="messagePanel-top">
        <img src={require("@/assets/imgs/bg5.jpg")} alt="" />
        <span className="messagePanel-top-title">留言板</span>
      </div>
      
    </MessagePanelWrapper>
  )
})

export default MessagePanel