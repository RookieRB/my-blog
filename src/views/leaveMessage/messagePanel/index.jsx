import React, { memo,Fragment} from 'react'
import PropTypes from 'prop-types'


import MessagePanelWrapper from './style'
import UserDialog from '../userDialog'
import TextareaPanel from '../textareaPanel'




const MessagePanel = memo((props) => {


  // 从父组件获取的数据
  const {
    messageLeaveData,
    facialImgsUrlData,
    userInfoData,
    lastMessageId,
    messageIdUpdateHandler,
  } = props;
 

  // 遍历展示留言信息
  function showMessage(parentName,messageList){
    if(!messageList){
      return;
    }
    return messageList.map((message,index)=>(
      <Fragment key={message.messageId}>
        <UserDialog itemData={message} parentName={parentName} />
        {message.childMessages && (
          <div>
            {showMessage(message.userNickname, message.childMessages)}
          </div>
        )}
      </Fragment>
    ));
  }
  
  


  return (  
    
    <MessagePanelWrapper>
      <div className="messagePanel-content">  
      <TextareaPanel 
        userInfoData={userInfoData} 
        messageIdUpdateHandler={messageIdUpdateHandler} 
        lastMessageId={lastMessageId} 
        facialImgsUrlData={facialImgsUrlData}
        replyInfo={{parentId:0}}
        messageLeaveData={messageLeaveData}
      />
        <div className="messagePanel-content-title">
          <span>Comments | </span> <span>45条留言</span>
        </div>
        <div>
        
          {
            [...messageLeaveData].reverse().map((item) => (
            <div className="messagePanel-content-item" key={item.messageId}>
              <UserDialog itemData={item}/>
              {
                item.childMessages
                &&
                <div className="messagePanel-content-item-reply">
                  {
                    showMessage(null,item.childMessages)
                  }
                </div>
              }
            </div>
            ))
          }
        </div>
      </div>
    
    </MessagePanelWrapper>

  )
})
MessagePanel.propTypes ={
  messageLeaveData: PropTypes.array.isRequired,
  facialImgsUrlData: PropTypes.array,
  userInfoData: PropTypes.object,
  lastMessageId: PropTypes.number,
}


export default MessagePanel