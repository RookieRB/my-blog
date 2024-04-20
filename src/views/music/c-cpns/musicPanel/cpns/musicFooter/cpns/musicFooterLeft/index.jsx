import React, { memo } from 'react'
import MusicFooterLeftWrapper from './style'

import musicBottomLeftUtilsData from '@/assets/data/Music/MusicBottom/MusicBottomLeftUtilsData'
import MusicFooterUtilsItem from '../musicFooterUtilsItem'



const MusicFooterLeft = memo(() => {
  return (
    <MusicFooterLeftWrapper>
      <div className="music-footer-left-img">
        <img src="https://ts1.cn.mm.bing.net/th?id=OIP-C.vfVc1qSHcSxUobeZrzsiXQHaEo&w=161&h=150&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"  alt=""/>
      </div>
      <div className="music-footer-left-utils">
        <div className="music-footer-left-utils-top">
          <span>
          Everywhere We Go 陈冠希 / MC仁 / 厨房仔
          </span>
        </div>
        <div className="music-footer-left-utils-bottom">
          {
            musicBottomLeftUtilsData.map((item,index) => {
              return (
                <MusicFooterUtilsItem iconData={item} key={index}/>
              )
            })
          }
         
        </div>
      </div>
    </MusicFooterLeftWrapper>
  )
})

export default MusicFooterLeft