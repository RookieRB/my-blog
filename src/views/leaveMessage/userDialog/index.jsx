import React, { memo } from 'react'
import PropTypes from 'prop-types'
import DOMPurify from 'dompurify'



import UserDialogWrapper from './style'

const UserDialog = memo((props) => {

  const { itemData, parentName } = props
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
            <span>{itemData.userName}</span><span>  {itemData.level}</span>
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
              <button className="custom-btn btn-5">回复</button>
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