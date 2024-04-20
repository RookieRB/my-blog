import React, { memo } from 'react'

import LeftPanelWrapper from './style'
import MusicLogoSVG from '@/assets/svg/music-panel/MusicLogoSVG'
import BetaLogoSVG from '@/assets/svg/music-panel/BetaLogoSVG'
import MusicLeftPanelBoxTop from './cpns/box-top'
import MusicLeftPanelBoxCenter from './cpns/box-center'
import MusicLeftPanelMenuBox from './cpns/box-menu'
// data
import musicLeftPanelCreateMenuData from '@/assets/data/Music/MusicLeftPanel/MusicLeftPanelCreateMenuData'
import musicLeftPanelCollectionMenuData from '@/assets/data/Music/MusicLeftPanel/MusicLeftPanelCollectionMenuData'


const MusicLeftPanel = memo(() => {
  return (
    <LeftPanelWrapper>
      <div className="top">
        <MusicLogoSVG/>
        <span>
          我的音乐
        </span>
        <BetaLogoSVG/>
        
      </div>
      <hr />
      <div className="content-box">
        <div className="inner-box">
          <MusicLeftPanelBoxTop/>
          <MusicLeftPanelBoxCenter/>
          <MusicLeftPanelMenuBox infoData={musicLeftPanelCreateMenuData} title="创建的歌单" showAdd={true}/>
          <MusicLeftPanelMenuBox infoData={musicLeftPanelCollectionMenuData} title="收藏的歌单" showAdd={false}/>
        </div>
      </div>
      
    </LeftPanelWrapper>
  )
})

export default MusicLeftPanel