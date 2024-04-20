import React, { memo } from 'react'


import AuthorListWrapper from './style'
import PageList from '@/components/HomePageList'


const AuthorList = memo(() => {
  return (
    <AuthorListWrapper>
        <PageList pageInfo={{
            tileName: "文章榜",
            content: [
                {
                    pageName: '2024年3月前端面试记录：裸辞、旅游、面试ssssssssssssssssssssssssssssssssss',
                },
                {
                    pageName: '解锁前端难题：亲手实现一个图片标注工具'
                },
                {
                    pageName: '最轻量的后台管理模板没有之一'
                },
                {
                    pageName: 'Redis不再 “开源”'
                }                    
            ]
        }}/>
    </AuthorListWrapper>
  )
})

export default AuthorList