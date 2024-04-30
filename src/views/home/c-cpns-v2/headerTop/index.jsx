import React, { memo } from 'react'

import TopWrapper from './style'

const HeaderTop = memo(() => {
  return (
    <TopWrapper>
      <figure className="center-bg">

      </figure>
      <div className="content">
        {/* <span className="text">
          
        </span> */}
        <h1 className="center-text glitch is-glitching" data-text="再びようこそ">
        再びようこそ
        </h1>
      </div>
      <div className="bannerWave wave1"></div>
      <div className="bannerWave wave2"></div>
    </TopWrapper>
  )
})

export default HeaderTop