import React, { memo,useEffect } from 'react'
import {shallowEqual, useDispatch, useSelector} from 'react-redux'

// import { CommentOutlined, CustomerServiceOutlined } from '@ant-design/icons';
// import { FloatButton } from 'antd';
// import {Outlet} from 'react-router-dom'


import Header from '../header';
import HomeWrapper from './style'
import HeaderTop from './c-cpns-v2/headerTop';
import PageCardV2 from '@/components/pageCard-v2'
import {fetchHomeDataAction} from '@/store/modules/home'

const Home = memo(() => {

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
  return (
    <HomeWrapper>
        <HeaderTop/>
         <Header/>

        <div className="content">
          {/* <Outlet/> */}
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