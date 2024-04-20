import React, { memo } from 'react'


import MusicWrapper from './style'
import Header from '../header'
import MusicPanel from './c-cpns/musicPanel'

const PageMusic = memo(() => {
  return (
    <MusicWrapper>
      <Header/>
      <div className="top-img">
        <img src="https://img2.baidu.com/it/u=1149469748,1472064548&fm=253&fmt=auto&app=138&f=JPEG?w=1250&h=800" alt="" />
        
         {/* <img src="https://browser6.qhimg.com/t017aeab5d66caf0329.jpg" alt="" />   */}
      </div>
      <div className="content">
        <MusicPanel/>
      </div>
      <div className="footer">

      </div>
    </MusicWrapper>
  )
})

export default PageMusic