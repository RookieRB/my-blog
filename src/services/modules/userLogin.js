import myRequest from '../request';

const userURL = '/user/user';

// 用户登录
export function toLogin(data){
  return myRequest.post({
    url:`${userURL}/login`, 
    data
  });
}

// 获取验证码
export function getCaptcha(emailString){
  return myRequest.get({
    url:`${userURL}/sendEmail/${emailString}`
  });
}
// 用户注册
export function toRegister(data){
  return myRequest.post({
    url: `${userURL}/register`,
    data
  });
}