import React, { memo,useEffect,useCallback,useRef } from 'react'
import {shallowEqual, useDispatch, useSelector} from 'react-redux'

// import { CommentOutlined, CustomerServiceOutlined } from '@ant-design/icons';
// import { FloatButton } from 'antd';
// import {Outlet} from 'react-router-dom'


import Header from '../header';
import HomeWrapper from './style'
import HeaderTop from './c-cpns-v2/headerTop';
import PageCardV2 from '@/components/pageCard-v2'
import {fetchHomeDataAction} from '@/store/modules/home'
import UserInfo from './c-cpns-v2/userInfo';
import ArticleRecommend from './c-cpns-v2/articleRecommend';
import Announcement from './c-cpns-v2/announcement';


const Home = memo(() => {
  // 获取content的对象
  const contentRef = useRef(null)
  /**
   * 从redux 中读取数据
   */
  const {
    pageDataInfo
  } = useSelector((state) => ({
    pageDataInfo: state.home.pageDataInfo
  }),shallowEqual)

  /**
   * 派发异步事件
   */
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction())
  },[dispatch])

  /**
   *  函数逻辑
   */

  // 获取更多数据
  function getMorePageDataInfoHandler(){
    dispatch(fetchHomeDataAction())
  }
  // 跳转事件
  const jumpToPageHandler = useCallback(() => {
    window.scrollTo({
      top: contentRef.current.offsetTop,
      behavior: 'smooth'  
    })
  },[contentRef])
  return (
    <HomeWrapper>
        <HeaderTop jumpToPageHandler={jumpToPageHandler}/>
        
        <Header/> 
        <div className="content" ref={contentRef}>
          <div className="content-left">
            <UserInfo/>
            <div className="content-item"> 
             <ArticleRecommend recommendData={pageDataInfo.slice(0,5)}/>
            </div>
            <div className="content-item">
              <Announcement/>
            </div>
          </div>
          <div className="content-right">
            {
              pageDataInfo?.map((item,index) => {
                const isLeft = (index % 2 === 0) ? false : true
                return (
                  <PageCardV2 infoData={item} key={index} isLeftShowImg={isLeft}/>
                )
              })
            } 
            <div className="get-more" onClick={getMorePageDataInfoHandler}>
              <span>
                Get More
              </span>
            </div>
          </div>
          {/* <Outlet/> */}
        
      
        
        </div>
{/*       
        <FloatButton.Group
            trigger="hover"
            type="primary"
            style={{
                right: 94,
            }}
            icon={<CustomerServiceOutlined />}
            >
            <FloatButton />
            <FloatButton icon={<CommentOutlined />} />
        </FloatButton.Group>
        <FloatButton.BackTop /> */}
    </HomeWrapper>
  )
})

export default Home