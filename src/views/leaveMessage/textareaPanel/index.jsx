import React, { memo,useState,useRef,useContext} from 'react'
import {toast,Bounce,ToastContainer} from 'react-toastify'
import PropTypes from 'prop-types'
import { ThemeContext } from '..'


import TextareaPanelWrapper from './style'
import MessageLeaveLOGO from '@/assets/svg/message-leave/MessageLeaveLOGO'
import {BASE_URL} from '@/services/request/config'
import faceData from '@/assets/data/faceData'
import {formattedDate,parseFaceOf,updateSubMessage} from '@/utils/commonUtils'
import {insertLeaveMessageData} from '@/services/modules/leaveMessage'
import {changeMessageLeaveDataAction} from '@/store/modules/leaveMessage'




const TextareaPanel = memo((props) => {

 

  // 从父组件获取的数据
  const {
    facialImgsUrlData,
    userInfoData,
    lastMessageId,
    messageIdUpdateHandler,
    replyInfo,
    messageLeaveData
  } = props;

  // 获取disptch
  const {dispatch,updateIsShowLeaveMessage} = useContext(ThemeContext)

   // 获取textarea
   const textareaRef = useRef(null);

  // 控制表情面板显示
  const [showEmojiPanel, setShowEmojiPanel] = useState(false)

   // 点击表情按钮显示表情面板
   function showEmojiPanelHandler(){
    setShowEmojiPanel(!showEmojiPanel)
    textareaRef.current.focus()
  }
  // 点击表情将其显示在textarea中
  const extension = '.png'
  function emojiClickHandler(emoji){
    if(textareaRef.current){
      const index = Object.values(faceData).findIndex( arr => arr.includes(emoji.substring(0, emoji.lastIndexOf(extension))));
      textareaRef.current.value += Object.keys(faceData)[index]
    }
  }

  // 提交按钮处理逻辑 发送留言
  function sendMessageHandler(){
    
    //检查用户是否登录
    if(Object.keys(userInfoData).length > 0){
      // 在留言板上添加留言
      // 对message中的表情内容做处理
      let messageContent = textareaRef.current.value
      if(messageContent === '' || messageContent === null){
        toast.error('必须要输入内容才能发送哦!~', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
        return;
      }
      messageContent = parseFaceOf(messageContent)
      // 处理时间
      const createTime = formattedDate();
      //  当前 messageId
      const currentMessageId = lastMessageId + 1;
      const itemData = {
        messageId: currentMessageId,
        createTime,
        likeCount:0,
        userNickname: userInfoData.userNickname,
        imgUrl: userInfoData.imgUrl,
        level: userInfoData.level,
        messageContent,
        childMessages:[]
      }
      // 更新lastMessageId
      // 将数据写入redux中的newMessage数组中
      const newMessageData = {
        messageId: currentMessageId,
        likeCount: 0,
        messageUser: userInfoData.id,
        messageContent,
        parentId: replyInfo.parentId
      }
      insertLeaveMessageData(newMessageData)
      // 更新当前留言的id
      messageIdUpdateHandler(currentMessageId)
      // 当parentId为0时，代表是根留言，需要更新父留言的回复数
      if(replyInfo.parentId === 0){
        // 传入值用于更新留言列表
        dispatch(changeMessageLeaveDataAction([
          ...messageLeaveData,itemData
        ]))
      }else{
        // 当parentId不为0时，代表是子留言，不需要更新父留言的回复数
        // 在所有留言信息中找到parentId对应的留言，在其childMessages数组中添加子留言
        const newMessageLeaveData = updateSubMessage(messageLeaveData,replyInfo.parentId,itemData)
        dispatch(changeMessageLeaveDataAction(newMessageLeaveData))
        // 关闭reply留言板
        updateIsShowLeaveMessage(false,null)
        return;
      }
      
      // 清空留言板
      textareaRef.current.value = ''
      // 关闭表情面板
      setShowEmojiPanel(false)
    }else{
      toast.error('登录了才能留言哦~', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    }
  }


  return (
    <TextareaPanelWrapper>
      <ToastContainer/>
      <div className="messagePanel-top-title">
          <MessageLeaveLOGO/>
          <span>
            留言
          </span>
      </div>
      <div className="messagePanel-top-textarea">
        <textarea
        ref={textareaRef} 
        className="mock-textarea"
        placeholder="写下点什么...."
        >
        
        </textarea>
        <div className="messagePanel-top-bottom">
          <div className="messagePanel-top-bottom-emotion" onClick={showEmojiPanelHandler}>
            <svg t="1714998195831" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="53008" width="20" height="20"><path d="M43.885714 526.628571c0 167.233829 86.4256 321.770057 226.742857 405.386972a441.256229 441.256229 0 0 0 453.485715 0C864.431543 848.398629 950.857143 693.8624 950.857143 526.628571c0-258.545371-203.044571-468.114286-453.485714-468.114285C246.930286 58.514286 43.885714 268.0832 43.885714 526.628571z" fill="#FFC89C" p-id="53009"></path><path d="M43.885714 482.742857C43.885714 717.034057 227.269486 906.971429 453.485714 906.971429s409.6-189.937371 409.6-424.228572S679.701943 58.514286 453.485714 58.514286 43.885714 248.451657 43.885714 482.742857z" fill="#FFFFFF" p-id="53010"></path><path d="M336.457143 643.657143c0 41.837714 16.735086 80.457143 43.885714 101.346743 27.150629 20.918857 60.6208 20.918857 87.771429 0C495.264914 724.114286 512 685.494857 512 643.657143c0-41.837714-16.735086-80.457143-43.885714-101.346743-27.150629-20.918857-60.6208-20.918857-87.771429 0C353.192229 563.2 336.457143 601.819429 336.457143 643.657143zM248.685714 307.2a73.142857 73.142857 0 1 0 146.285715 0 73.142857 73.142857 0 0 0-146.285715 0z" fill="#FF7200" p-id="53011"></path><path d="M573.352229 339.529143a70.217143 70.217143 0 0 0 34.523428 60.650057c21.357714 12.522057 47.689143 12.522057 69.046857 0a70.217143 70.217143 0 0 0 34.523429-60.650057 70.217143 70.217143 0 0 0-34.523429-60.6208 68.1984 68.1984 0 0 0-69.046857 0 70.217143 70.217143 0 0 0-34.523428 60.6208z" fill="#FF7200" p-id="53012"></path><path d="M511.707429 1008.932571C237.3632 1008.932571 14.628571 783.008914 14.628571 504.802743 14.628571 226.567314 237.392457 0.643657 511.707429 0.643657c274.285714 0 497.020343 225.923657 497.020342 504.159086 0 278.206171-222.734629 504.129829-497.0496 504.129828z m0-933.595428c-233.823086 0-423.438629 192.3072-423.438629 429.4656 0 237.129143 189.586286 429.436343 423.409371 429.436343 233.793829 0 423.409371-192.3072 423.409372-429.436343 0-237.1584-189.586286-429.494857-423.409372-429.494857z" fill="#FF7200" p-id="53013"></path></svg>
          </div>
          <div className="messagePanel-top-bottom-img">
          <svg t="1714998271919" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="54035" width="20" height="20"><path d="M917.09952 84.6848H114.41152c-32.83968 0-59.45856 26.624-59.45856 59.45856v772.96128c0 32.83456 26.624 59.45344 59.45856 59.45344h802.688c32.83456 0 59.45344-26.61888 59.45344-59.45344V144.13824c0-32.82944-26.61888-59.45344-59.45344-59.45344z" fill="" p-id="54036"></path><path d="M917.09952 54.95296H114.41152c-32.83968 0-59.45856 26.624-59.45856 59.45856V887.35232c0 32.8448 26.624 59.46368 59.45856 59.46368h802.688c32.83456 0 59.45344-26.61888 59.45344-59.46368V114.41152c0-32.83456-26.61888-59.45856-59.45344-59.45856z" fill="#ECEAE0" p-id="54037"></path><path d="M872.50432 114.41152H159.00672a44.5952 44.5952 0 0 0-44.5952 44.5952V590.07488h802.688V159.00672a44.5952 44.5952 0 0 0-44.5952-44.5952z" fill="#98DCF0" p-id="54038"></path><path d="M613.63712 411.55584l-154.94144 178.51904h309.86752z" fill="#699B54" p-id="54039"></path><path d="M586.82368 590.07488l-206.53568-237.9776-206.5408 237.9776H114.41152V694.12352a44.5952 44.5952 0 0 0 44.5952 44.5952h713.4976a44.5952 44.5952 0 0 0 44.5952-44.5952v-104.05376h-330.27584z" fill="#80BB67" p-id="54040"></path><path d="M768.44544 263.05536m-59.45856 0a59.45856 59.45856 0 1 0 118.91712 0 59.45856 59.45856 0 1 0-118.91712 0Z" fill="#FFE68E" p-id="54041"></path></svg>
          </div>
          <div className="messagePanel-top-bottom-button">
            <button className="custom-btn btn-14" onClick={sendMessageHandler}>提交</button>
          </div>
        </div>
        {
            showEmojiPanel 
            &&
            <div className="messagePanel-emoji-panel">
              {
                facialImgsUrlData?.map((item, index) => 
                (
                  <div key={index} className="messagePanel-emoji-item" onClick={e => emojiClickHandler(item)}>
                    <img src={`http://${BASE_URL}/face/${item}`} alt="" /> 
                  </div>
                ))
              }
            </div>
          }
      </div>
    </TextareaPanelWrapper>
  )
})

TextareaPanel.propTypes = {
  facialImgsUrlData: PropTypes.array,
  userInfoData: PropTypes.object,
  lastMessageId: PropTypes.number,
  replyInfo: PropTypes.object
}

export default TextareaPanel