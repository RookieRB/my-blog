import myRequest from '../request';

export function toLogin(data){
  return myRequest.post({
    url:'/user/user/login', 
    data
  });
}