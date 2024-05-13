import React, { memo,useContext } from 'react'
import PropTypes from 'prop-types'
import DOMPurify from 'dompurify'



import UserDialogWrapper from './style'
import { ThemeContext } from '../index'

const UserDialog = memo((props) => {
  const { itemData, parentName } = props
  // 用于打开留言回复面板的
  const {updateIsShowLeaveMessage} = useContext(ThemeContext)

  // 回复按钮点击处理逻辑
  function userDialogReplyHandler(){
    const replyInfo = {
      parentId:itemData.messageId,
      parentName:itemData.userNickname,
    }
    // 打开textareaPanel组件
    updateIsShowLeaveMessage(true,replyInfo)
  }


 
  return (
    <UserDialogWrapper>
      <div className="userDialog-left">
        <div className="userDialog-img">
          <img src={itemData.imgUrl} alt="" />
        </div>
      </div>
      <div className="userDialog-right">
        <div className="userDialog-info">
          <div className="userDialog-info-top">
            <span>{itemData.userNickname}</span><span>  {itemData.level}</span>
            {
              parentName 
              &&
              (
                <span>
                  回复 @{parentName}:
                </span>
              )
            }
          </div>
          <div className="userDialog-info-bottom">
            <span>发布于 {itemData.createTime}</span>
            <div className="userDialog-info-bottom-button">
              <button className="custom-btn btn-5" onClick={userDialogReplyHandler}>回复</button>
            </div>
          </div>
        </div>
        <div className="userDialog-content" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(itemData.messageContent) }}>
          
        </div>
      </div>

    </UserDialogWrapper>
  )
})

UserDialog.propTypes ={
  itemData: PropTypes.object.isRequired,
  parentName: PropTypes.string,
}

export default UserDialog