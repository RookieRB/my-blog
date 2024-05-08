import myRequest from '../request';

export function getLeaveMessageData() {
  return myRequest.get({
    url: '/message/getMessage',
  });
}