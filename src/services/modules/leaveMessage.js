import myRequest from '../request';

export function getLeaveMessageData() {
  return myRequest.get({
    url: '/message/getMessage',
  });
}

export function getFacialImgsUrlData(){
  return myRequest.get({
    url: '/message/getFaceImgsNames'
  });
}

export function getLastMessageIdData() {
  return myRequest.get({
    url: '/message/getLastId'
  });
}