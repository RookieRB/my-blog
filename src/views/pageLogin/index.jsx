import React, { memo,useRef} from 'react'
import {useDispatch} from 'react-redux'
import {toast,Bounce,ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {useNavigate} from 'react-router-dom'

import LoginWrapper from './style'
import Header from '../header'
import FlyButton from '@/components/buttonPackage/flyButton'
import GlassButton from '@/components/buttonPackage/glassButton'
import {toLogin} from '@/services/modules/userLogin'
import { 
  changeUserInfoData,
 } from '@/store/modules/currentUser'
 
import { 
  validateEmail,
 } from '@/utils/commonUtils'
import { getCaptcha,toRegister } from '@/services/modules/userLogin'





const LoginPage = memo(() => {
 
  // 内部变量

  // 获取登录面板
  const LoginRef = useRef(null)
  // 获取注册面板
  const RegisterRef = useRef(null)
  // 获取overlay去注册面板
  const OverlayToRegisterRef = useRef(null)
  // 获取overlay去登录面板
  const OverlayToLoginRef = useRef(null)
  // 获取overlay
  const OverlayRef = useRef(null)
  //动画效果
  const toRight = [
    { transform: 'translateX(0)', opacity: 0 },
    { transform: 'translateX(100%)', opacity: 1 }
  ]
  const toLeft =[
    { transform: 'translateX(0)' },
    { transform: 'translateX(-100%)'}
  ]
  const toBottom = [
    { transform: 'translateY(0)' },
    { transform: 'translateY(100%)' }
  ]
  const toBottomWithFade = [
    { transform: 'translateY(0)', opacity: 1 },
    { transform: 'translateY(20%)', opacity: 0 }
  ]
  const toBottomToShow=[
    { transform: 'translate(0,-20%)', opacity: 0,pointerEvents:'none'},
    { transform: 'translate(0,0)', opacity: 1,pointerEvents:'auto' } 
  ]
  let RegisterPanelAnimation;
  let LoginPanelAnimation;
  let OverlayAnimation;
  let OverlayToRegisterAnimation;
  let OverlayToLoginAnimation;

  // 登录界面用户名input组件信息
  const loginInputUserNameRef = useRef(null)
  // 登录界面用户密码input组件信息
  const loginInputPasswordRef = useRef(null)
  // 注册界面用户名input组件信息
  const registerInputUserNameRef = useRef(null)
 // 注册界面用户密码input组件信息
  const registerInputPasswordRef = useRef(null)
  // 注册界面邮箱input组件信息  
  const registerInputEmailRef = useRef(null)
  // 注册界面验证码input组件信息
  const registerInputCodeRef = useRef(null)

  const navigate = useNavigate()


  // 去注册按钮处理逻辑
  const toRegisterButtonClickHandler = () => {
    if(RegisterRef.current){
      RegisterPanelAnimation = RegisterRef.current?.animate(toRight,{duration: 1500, easing: 'ease', fill: 'forwards'})
    }
    if(LoginRef.current){
      LoginPanelAnimation = LoginRef.current?.animate(toBottom,{duration: 1500, easing: 'ease', fill: 'forwards'})
    }
    if(OverlayRef.current){
      OverlayAnimation = OverlayRef.current?.animate(toLeft,{duration: 1500, easing: 'ease', fill: 'forwards'})
    }
    if(OverlayToRegisterRef.current){
      OverlayToRegisterAnimation = OverlayToRegisterRef.current?.animate(toBottomWithFade,{duration: 2000, easing: 'ease', fill: 'forwards'})
    }
    if(OverlayToLoginRef.current){
      OverlayToLoginAnimation = OverlayToLoginRef.current?.animate(toBottomToShow,{duration: 2000, easing: 'ease', fill: 'forwards'})
    }
  }
  // 去登录按钮处理逻辑
  const toLoginButtonClickHandler = () => {
    if(RegisterPanelAnimation && LoginPanelAnimation && OverlayAnimation && OverlayToRegisterAnimation && OverlayToLoginAnimation){
      RegisterPanelAnimation.reverse()
      LoginPanelAnimation.reverse()
      OverlayAnimation.reverse()
      OverlayToRegisterAnimation.reverse()
      OverlayToLoginAnimation.reverse()
    }
   
  }
  const dispatch = useDispatch()
  // 登录按钮逻辑处理
  const loginButtonClickHandler = () => {
    if(loginInputUserNameRef.current && loginInputPasswordRef.current){
      const userName = loginInputUserNameRef.current.value
      const password = loginInputPasswordRef.current.value
      toLogin({userName:userName,password:password}).then(res => {
        if(res.code === 1){
          toast.success('登录成功', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
          dispatch(changeUserInfoData(res.data))
          // 将数据存入localStorage
          localStorage.setItem('token',res.data.token)
          setTimeout(() => {navigate('/home')},500)
          
        }else{
          toast.error('登录失败,请检查用户名或密码', {
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
      })
    }
      
  }
  // 注册按钮逻辑处理
  const registerButtonClickHandler = () => {
    if(registerInputUserNameRef.current.value && registerInputPasswordRef.current.value && registerInputEmailRef.current.value && registerInputCodeRef.current.value){
      const userName = registerInputUserNameRef.current.value
      const password = registerInputPasswordRef.current.value
      const email = registerInputEmailRef.current.value
      const code = registerInputCodeRef.current.value
      toRegister({userName:userName,password:password,email:email,confirmCode:code}).then(res => {
        if(res.code === 1){
          toast.success('注册成功', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        }else{
          toast.error(`注册失败,${res.msg}`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          })
        }
      })
    }
  }
  // 验证码发送按钮逻辑处理
  const sendCodeButtonClickHandler = () => {
    const EmailString = registerInputEmailRef.current.value
    if(EmailString){
      if(validateEmail(EmailString)){
        // 发送验证码
        getCaptcha(EmailString).then(res => {
          toast.success('验证码发送成功', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        })
      }
    }else{
      toast.error('请输入正确的邮箱', {
        position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
      })
    }
  }

  return (
    <LoginWrapper>
      <Header/>
      <img src={require('@/assets/imgs/loginBG.png')} alt=""  className="login-bgImg" />
        <ToastContainer/>
      <div className="login-container">
        <div className="login-panel form-container" ref={LoginRef}>
          <div className="panel-title login-panel-title">
            登录
          </div>
         
          <input type="text" placeholder="用户名/邮箱/手机号" ref={loginInputUserNameRef} />
          <input type="password" placeholder="请输入密码" ref={loginInputPasswordRef} />
          <div className="panel-utils">
            <div className="btn" >忘记密码?</div>
          </div>
      
          
          <div className="panel-btn" onClick={loginButtonClickHandler}>
            <FlyButton>
              登录
            </FlyButton>
          </div>
        </div>
        <div className="register-panel form-container" ref={RegisterRef}>
          <div className="panel-title ">
            注册
          </div>
          <input type="text" placeholder="用户名" ref={registerInputUserNameRef} />
          <input type="password" placeholder="请输入密码" ref={registerInputPasswordRef} />
          <input type="text" placeholder="邮箱" ref={registerInputEmailRef} />
          <input type="text" placeholder="验证码" ref={registerInputCodeRef} />
          <div className="panel-utils">
            <div className="btn" onClick={sendCodeButtonClickHandler}>获取验证码</div>
          </div>
          <div className="panel-btn" onClick={registerButtonClickHandler}>
            <FlyButton>
              注册
            </FlyButton>
          </div>
        </div>
        <div className="overlay" ref={OverlayRef}>
          <div className="overlay-panel overlay-panel-toRegister" ref={OverlayToRegisterRef}>
            <div className="overlay-panel-title">
              还没有账号?
            </div>
            <div className="overlay-panel-description">
              注册一个新账号，享受更多的功能。
            </div>
            <div className="overlay-panel-btn" onClick={toRegisterButtonClickHandler}>
              <GlassButton>
                注册
              </GlassButton>
            </div>
          </div>
          <div className="overlay-panel overlay-panel-toLogin" ref={OverlayToLoginRef}>
            <div className="overlay-panel-title">
                已有账号?
              </div>
              <div className="overlay-panel-description">
                那就登录吧
              </div>
              <div className="overlay-panel-btn" onClick={toLoginButtonClickHandler}>
                <GlassButton>
                  登录
                </GlassButton>
              </div>
          </div>
        </div>
      </div>

    </LoginWrapper>
  )
})

export default LoginPage