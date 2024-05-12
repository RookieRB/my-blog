import myRequest from '../request';
// 得到留言内容
export function getLeaveMessageData() {
  return myRequest.get({
    url: '/message/getMessage',
  });
}
// 获取留言表情包图片地址
export function getFacialImgsUrlData(){
  return myRequest.get({
    url: '/message/getFaceImgsNames'
  });
}
// 获取最后一条留言的id与后端同步
export function getLastMessageIdData() {
  return myRequest.get({
    url: '/message/getLastId'
  });
}

// 将本地留言数据上传至后端
export function insertLeaveMessageData(data) {
  return myRequest.post({
    url: '/message/insertMessage',
    data
  })
}
