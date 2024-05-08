import myRequest from '../request';

export function getLeaveMessageData() {
  return myRequest.get({
    url: '/message/getMessage',
  });
}

export function getFacialImgsUrlData(){
  return myRequest.get({
    url: '/message/getFaceImgsUrl'
  });
}