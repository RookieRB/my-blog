import React, { memo } from 'react'


import RecomWrapper from './style'
import PageList from '../../../../components/HomePageList'

const RecommendList = memo(() => {
  return (
    <RecomWrapper>
        <PageList pageInfo={{
          tileName: "推荐话题",
          content:[
            {
              pageName: "#Sora 技术探索#"
            },
            {
              pageName: "#每日快讯#"
            },
            {
              pageName: "#挑战每日一条沸点#"
            },
            {
              pageName: "#金石计划征文活动#"
            },
            {
              pageName: "#每天一个知识点#"
            },
            
            {
              pageName: "#新人报道#"
            },
            {
              pageName: "#金三银四求职经历分享#"
            },
            {
              pageName: " #创作者训练营#"
            },
            {
              pageName: "#日新计划更文活动#"
            },
            {
              pageName: "#我的技术写作成长之路#"
            }
          ]
        }}/>
    </RecomWrapper>
  )
})

export default RecommendList