import React, { memo } from 'react'


import BoxTopWrapper from './style'
import MusicLeftPanelBox from '../musicLeftPanelBox'
import MusicLeftPanelInnerBox from '../musicLeftPanelBox/innerBox'
import musicLeftPanelTopData from '@/assets/data/Music/MusicLeftPanelTopData.js'


const MusicLeftPanelBoxTop = memo(() => {

  // 函数处理
  // 跳转页面
  
  // const tabClick = useCallback((url) => {

  // },[musicLeftPanelTopData])
  return (
    <BoxTopWrapper>
      <MusicLeftPanelBox >
        {
          musicLeftPanelTopData?.map((item,index) => {
            return (
              <MusicLeftPanelInnerBox key={index} url={item.page}>
                  {item.icon}
                  <span>
                    {item.name}
                  </span>
              </MusicLeftPanelInnerBox>
            )
          })
        }
      </MusicLeftPanelBox>
    </BoxTopWrapper>
  )
})

export default MusicLeftPanelBoxTop
