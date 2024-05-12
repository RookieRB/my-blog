import React, { memo } from 'react'
import { GithubOutlined,WechatOutlined,QqOutlined,WeiboCircleOutlined } from '@ant-design/icons'
// import { useSelector,shallowEqual } from 'react-redux'



import UserInfoWrapper from './style'
import CircleButton from '@/components/buttonPackage/circleButton'



const UserInfo = memo(() => {
  //  // 获取当前用户信息currentUserInfo
  //  const {
  //   userInfoData
  // } = useSelector(state => ({
  //   userInfoData: state.currentUser.userInfoData
  // }),shallowEqual) 

  return (
    <UserInfoWrapper>
      <div className="userInfo-img">
        <img src={require("@/assets/imgs/bg5.jpg")} alt="" />
      </div>
      <div className="userInfo-userName">
        Genius
      </div>
      <div className="userInfo-article">
        <div className="userInfo-article-item">
          <span>文章</span>
          <span>10</span>
        </div>
        <div className="userInfo-article-item">
          <span>分类</span>
          <span>10</span>
        </div>
        <div className="userInfo-article-item">
          <span>访问量</span>
          <span>1099</span>
        </div>
      </div>
      <div>
        <CircleButton/>
      </div>
      <div className="userInfo-bottom">
        <GithubOutlined className="userInfo-icon" />
        <WechatOutlined className="userInfo-icon"/>
        <QqOutlined className="userInfo-icon"/>
        <WeiboCircleOutlined className="userInfo-icon"/>
      </div>
    </UserInfoWrapper>
  )
})

export default UserInfo