import myRequest from '../request';

const userURL = '/user';

// 用户登录
export function toLogin(data){
  return myRequest.post({
    url:`${userURL}/user/login`, 
    data
  });
}

// 获取验证码
export function getCaptcha(emailString){
  return myRequest.get({
    url:`${userURL}/user/sendEmail/${emailString}`
  });
}
// 用户注册
export function toRegister(data){
  return myRequest.post({
    url: `${userURL}/user/register`,
    data
  });
}

// 查询用户是否在服务器端登录
export function queryLoginStatus(token){
  return myRequest.get({
    url: `${userURL}/getUserInfo`,
    headers: {
      'authentication': token
    }
  });
}