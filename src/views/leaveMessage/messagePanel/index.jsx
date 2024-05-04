import React, { memo } from 'react'

import MessagePanelWrapper from './style'
import poemData from '@/assets/data/poemData'

const MessagePanel = memo(() => {
  const poem = poemData[1]
  return (  
    <MessagePanelWrapper>
      <div className="messagePanel-top">
        <img src={require("@/assets/imgs/bg5.jpg")} alt="" />
        <span className="messagePanel-top-title">留言板</span>
        <div className="messagePanel-poem">
          <div className="poem-title">
            {poem.title}
          </div>
          <div className="poem-author">
            {poem.author}
          </div>
          <div className="poem-content">
            {poem.content.split("。").slice(0,-1).map((item,index) => {
              return <p key={index}>{item}。</p>
            })}
          </div>

        </div>
      </div>
     
    </MessagePanelWrapper>
  )
})

export default MessagePanel