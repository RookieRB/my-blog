import React, { memo } from 'react'


// import { CommentOutlined, CustomerServiceOutlined } from '@ant-design/icons';
// import { FloatButton } from 'antd';
// import {Outlet} from 'react-router-dom'


import Header from '../header';
import HomeWrapper from './style'
import HeaderTop from './c-cpns-v2/headerTop';
import PageCardV2 from '@/components/pageCard-v2'
import {array} from '@/assets/data/pageCard.js'


const Home = memo(() => {
  
  return (
    <HomeWrapper>
       
        <HeaderTop/>
         <Header/>

        <div className="content">
          {/* <Outlet/> */}
          {
            array?.map((item,index) => {
              const isLeft = (index % 2 === 0) ? false : true
              return (
                <PageCardV2 infoData={item} key={index} isLeftShowImg={isLeft}/>
              )
            })
          }
          <div className="get-more">
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