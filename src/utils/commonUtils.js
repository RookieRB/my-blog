import {BASE_URL} from '@/services/request/config.js'
import gFaces from '@/assets/data/faceData.js'

const URL = 'http://' + BASE_URL;
// 邮箱校验正则
export function validateEmail(email){
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
}

// 密码正则(密码为6-18位数字/字符/符号的组合) 
export function validatePassword(password){
  const regex = /^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)]|[()])+$)(?!^.*[\u4E00-\u9FA5].*$)([^(0-9a-zA-Z)]|[()]|[a-z]|[A-Z]|[0-9]){6,18}$/;

  return regex.test(password);
}

// 6位数字验证码校验
export function validateConfirmCode(code){
  const regex = /^\d{6}$/;
  return regex.test(code);
}

// 匹配表情图
export function parseFaceOf(str) {
  var reg = /\[(.+?)\]/g;
  str = str.replace(reg, function(a, b) {
      return '<img src="'+URL+'/face/'+gFaces[a]+'.png" style="width: 20px; height: 20px; margin-left:2px;">'; 
  });
  return str;
}

// 格式化时间
export function formattedDate(){
  const date = new Date();
  const year = date.getFullYear();  
  const month = (date.getMonth() + 1).toString().padStart(2, '0');  
  const day = date.getDate().toString().padStart(2, '0'); 
  const hour = date.getHours().toString().padStart(2, '0');
  const minute = date.getMinutes().toString().padStart(2, '0');
  // const second = date.getSeconds().toString().padStart(2, '0');
  const formattedDate = `${year}-${month}-${day} ${hour}:${minute}`;  
  return formattedDate;
}


// 更新留言中的子留言
export function updateSubMessage(messageDataArray, id, subMessage) {
  return messageDataArray.map(messageData => {
    if (messageData.messageId === id) {
      const newChildMessages = Array.isArray(messageData.childMessages) ? [...messageData.childMessages, subMessage] : [subMessage];
      return {...messageData, childMessages: newChildMessages};
    }

    if (Array.isArray(messageData.childMessages)) {
      return {
        ...messageData,
        childMessages: updateSubMessage(messageData.childMessages, id, subMessage)
      };
    }

    return messageData;
  });
}



