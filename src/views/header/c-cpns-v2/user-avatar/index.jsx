import React, { memo,useState,useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector,shallowEqual,useDispatch} from 'react-redux'
import {toast,Bounce,ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'




import AvatarWrapper from './style'
import LogOutButton from '@/components/buttonPackage/logOutButton'
import { changeUserInfoData } from '@/store/modules/currentUser'
import {queryLoginStatus} from '@/services/modules/userLogin'


const UserAvatar = memo(() => {
  /**
   * 局部变量
   */
  
  const navigate = useNavigate()
  const [showPanel, setShowPanel] = useState(false)
  // 获取currentUserInfo
  const {
    userInfoData
  } = useSelector(state => ({
    userInfoData: state.currentUser.userInfoData
    }),shallowEqual)
  const dispatch = useDispatch()
  /**
   * 函数处理
   */
  function mouseEnterAvatarHandler(){
    setShowPanel(true)
   
  }
  function mouseLeaveAvatarHandler(){
    setShowPanel(false)
   
  }
  // 登出按钮处理
  function logOutHandler(){
    console.log('logOutHandler')
    // 清空当前用户
    dispatch(changeUserInfoData({}));
    // 清空localStorage
    localStorage.removeItem('token')
    // 跳转到登录页面
    toast.success('退出成功', {
      position: "bottom-right",
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
  // 查询是否之前有登录信息
  useEffect(() => {
    if(Object.keys(userInfoData).length === 0){
      if(localStorage.getItem('token')){
        queryLoginStatus(localStorage.getItem('token')).then(res => {
          if(res.code === 1){
            dispatch(changeUserInfoData(res.data))
          }else{
            toast.warn('登录信息已失效，请重新登录', {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              transition: Bounce,
            })
          }
          
        })
      }
    }
  },[dispatch,userInfoData])

  return (
    <AvatarWrapper onMouseEnter={mouseEnterAvatarHandler} onMouseLeave={mouseLeaveAvatarHandler}>
      <div className="user-avatar" >
        <img src={ Object.keys(userInfoData).length > 0? userInfoData?.imgUrl : require('@/assets/imgs/bg7.jpg')} alt="" className="user-avatar-img" />
        
      </div>
      <ToastContainer/>
      {
        showPanel 
        && 
        (
          <div className="userAvatar-panel" >
            {
              Object.keys(userInfoData).length > 0  ?
              (
              <div className="personalInfo">
                {userInfoData.userNickname}
              <div className="userLogOut" onClick={logOutHandler}>
                <LogOutButton />
              </div>

              </div>
            
              )
              
              
              :(
                <div className="userLogin" onClick={() => navigate('/login')}>
                      <svg t="1715230246455" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4296" width="20" height="20"><path d="M783.69 882.537H289.438c-54.588 0-98.848-44.243-98.848-98.811v-98.808h49.424v98.808c0 27.286 22.132 49.406 49.424 49.406H783.69c27.294 0 49.423-22.124 49.423-49.406V240.274c0-27.287-22.133-49.407-49.423-49.407H289.438c-27.297 0-49.424 22.12-49.424 49.407v98.807H190.59v-98.807c0-54.568 44.26-98.812 98.848-98.812H783.69c54.587 0 98.847 44.243 98.847 98.812v543.451c0 54.568-44.26 98.812-98.847 98.812zM529.746 357.802c-9.63-9.649-9.63-25.304 0-34.93 9.65-9.65 25.313-9.65 34.967 0l170.501 170.432c5.139 5.14 7.335 11.966 6.999 18.695 0.336 6.731-1.86 13.557-6.999 18.723l-170.501 170.43c-9.655 9.648-25.318 9.648-34.967 0-9.63-9.65-9.63-25.306 0-34.932l129.57-129.52h-493.14c-13.637 0-24.713-11.047-24.713-24.702 0-13.627 11.076-24.703 24.711-24.703h493.143L529.746 357.8z m-40.774 0" p-id="4297"></path></svg>
                      <span className="userLogin-name">登录</span>
                </div>
             )
            }
          </div>
        )

      }
      
      
    </AvatarWrapper>
  )
})

export default UserAvatar