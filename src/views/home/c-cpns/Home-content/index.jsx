import React, { memo } from 'react'
import { Image } from 'antd';


import PageCard from '@/components/pageCard';
import Announcement from '../announcement';
import AuthorList from '../authorList';
import RecommendList from '../recommendList';
import ContentWrapper from './style'



const HomeContent = memo(() => {
  return (
    <ContentWrapper>
      <div className="contentLeft"> 
            <Image src={require("@/assets/imgs/home/2.jpg")} style={{}}/>
            <div className="pageCard">
                <PageCard/>
                
            </div>
            
        </div>
        <div className="contentRight">
            <Announcement/>
            <AuthorList/>
            <RecommendList/>
        </div>
    </ContentWrapper>
  )
})

export default HomeContent