import React, { memo,useState,useRef } from 'react'
import PropTypes from 'prop-types'

import MusicPlayListItemWrapper from './style'
import StartSVG from '@/assets/svg/music-panel/StartSVG'
import CollectionSVG from '@/assets/svg/music-panel/CollectionSVG'
import MoreSVG from '@/assets/svg/page-card/MoreSVG'
import MusicFooterUtilsItem from '@/views/music/c-cpns/musicPanel/cpns/musicFooter/cpns/musicFooterUtilsItem'

// 爱心数据
import musicBottomCenterFavoriteData from '@/assets/data/Music/MusicBottom/MusicBottomCenterFavoriteData'

const MusicPlayListItem = memo((props) => {
  /**
   *  局部变量
   */
  // 控制模式转换
  const [showIcons,SetShowIcons] = useState(false)
  // item数据
  const {itemData} = props
  //歌曲名字的ref
  const songNameRef = useRef()

  /**
   * 函数处理
   */
  // 移入item的逻辑处理
  function mouseEnterHandler(){
    SetShowIcons(true)
    // 改变name的宽度
    songNameRef.current.style.width = "180px"
  }
  // 移出item的逻辑处理
  function mouseLeaveHandler(){
    SetShowIcons(false)
    // 改变name的宽度    
    songNameRef.current.style.width = "210px"
  
  }
  return (
    <MusicPlayListItemWrapper onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
      <div className="musicPlayListItem-img">
        <img src={itemData.ImgUrl} alt="" />
        {
          showIcons
          &&
          <div className="musicPlayListItem-img-icon">
            <StartSVG/>
          </div>
        }
      </div>
      
      <div className="musicPlayListItem-information">
        <div className="musicPlayListItem-information-songName" ref={songNameRef}>
          {itemData.songName}
        </div>
        <div className="musicPlayListItem-information-basicInfo">
          {itemData.basicInfo}
        </div>
      </div>
      {
        showIcons
        &&
        (
          <div className="musicPlayListItem-icon">
            <div className="musicPlayListItem-icon-favorite" >
              <MusicFooterUtilsItem iconData={musicBottomCenterFavoriteData[itemData.favorite]}/>
            </div>
            <div className="musicPlayListItem-icon-item">
              <CollectionSVG/>
            </div>
            <div className="musicPlayListItem-icon-item">
              <MoreSVG/>
            </div>
          </div>
        )
      }
      
      {
        !showIcons
        &&
        (
          <div className="musicPlayListItem-songTime">
            {itemData.songTime}
          </div>  
        )
      }
      
    </MusicPlayListItemWrapper>
  )
})

MusicPlayListItem.propTypes = {
  itemData : PropTypes.object
}


export default MusicPlayListItem