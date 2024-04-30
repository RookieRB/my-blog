import React, { memo,useState,useRef } from 'react'
import {Slider} from "antd"

import MusicFooterCenterWrapper from './style'
import musicBottomCenterFavoriteData from '@/assets/data/Music/MusicBottom/MusicBottomCenterFavoriteData'
import musicBottomCenterControlData from '@/assets/data/Music/MusicBottom/MusicBottomCenterControlData'
import musicBottomCenterPlayData from '@/assets/data/Music/MusicBottom/MusicBottomCenterPlayData'
import musicBottomCenterSwitchData from '@/assets/data/Music/MusicBottom/MusicBottomCenterSwitchData'

import MusicFooterUtilsItem from '../musicFooterUtilsItem'

const MusicFooterCenter = memo(() => {
  /**
   *  内部变量
   */
  // 控制爱心图标
  const [loveIndex,setLoveIndex] = useState(0)
  // 控制播放图标
  const [playIndex,SetPlayIndex] = useState(0)
  // 控制状态图标
  const [stateIndex,SetStateIndex] = useState(0)

  // 获取组件的ref
  // playButton的ref
  const playButtonRef = useRef()
  // favorite的ref
  const favoriteRef =useRef()
  /**
   * 函数处理逻辑
   */
  // 变换图标
  function changeIconHandler(iconName){
    let currentIndex;
    if(iconName === "favorite"){
      currentIndex = loveIndex + 1
      if( currentIndex > 1){
        setLoveIndex(0)
      }else{
        setLoveIndex(currentIndex)
      }
    }else if(iconName === "playButton"){
      currentIndex = playIndex + 1
      if( currentIndex > 1){
        SetPlayIndex(0)
      }else{
        SetPlayIndex(currentIndex)
      }
    }else if( iconName === "stateSwitch"){
      currentIndex = stateIndex + 1;
      if(currentIndex > 4 ){
        SetStateIndex(0)
      }else{
        SetStateIndex(currentIndex)
      }
    }
  }
  // 移入爱心与播放图标时改变原有样式
  function changeOriginalStyleHandler(iconName,isEnter){
    // if(isEnter){
    //   console.log(event.target)
    //   event.target.classList.remove("music-footer-utils-bottom-item")
    //   event.target.classList.add("music-footer-utils-bottom-item-pop")
    // }else{
    //   event.target.classList.remove("music-footer-utils-bottom-item-pop")
    //   event.target.classList.add("music-footer-utils-bottom-item")
    // }
    if(iconName === "playButton"){
  
      if(isEnter){
        // 进入
        playButtonRef.current.classList.remove("music-footer-utils-bottom-item-function")
        playButtonRef.current.classList.add("music-footer-utils-bottom-item-functionV2")
        playButtonRef.current.classList.add("music-footer-utils-bottom-item-pop-playButton")
      }else{
        //退出
        playButtonRef.current.classList.remove("music-footer-utils-bottom-item-pop-playButton")
        playButtonRef.current.classList.remove("music-footer-utils-bottom-item-functionV2")
        playButtonRef.current.classList.add("music-footer-utils-bottom-item-function")
      }
    }else if(iconName === "favorite"){
      // 如果是实心状态才改变样式
      if(loveIndex === 1){
        if(isEnter){
          favoriteRef.current.classList.remove("music-footer-utils-bottom-item-function")
          favoriteRef.current.classList.add("music-footer-utils-bottom-item-functionV2")
          console.log(favoriteRef.current)
        }else{
          favoriteRef.current.classList.remove("music-footer-utils-bottom-item-functionV2")
          favoriteRef.current.classList.add("music-footer-utils-bottom-item-function")
          console.log(favoriteRef.current)
        }
      }
    }
  }

  return (
    <MusicFooterCenterWrapper>
      <div className="music-footer-center-top">
        <div className="music-footer-center-top-favorite" onClick={e => changeIconHandler("favorite")} onMouseEnter={e => changeOriginalStyleHandler("favorite",true)} onMouseLeave={e =>changeOriginalStyleHandler("favorite",false)}>
          <MusicFooterUtilsItem iconData={musicBottomCenterFavoriteData[loveIndex]} ref={favoriteRef}/>
        </div>
        <div className="music-footer-center-top-lastSong">
          <MusicFooterUtilsItem iconData={musicBottomCenterControlData[0]}/>
        </div>
        <div className="music-footer-center-top-playButton" onClick={e => changeIconHandler("playButton")} onMouseEnter={e => changeOriginalStyleHandler("playButton",true)} onMouseLeave={e =>changeOriginalStyleHandler("playButton",false)}>
          <MusicFooterUtilsItem iconData={musicBottomCenterPlayData[playIndex]} ref={playButtonRef}/>
        </div>
        <div className="music-footer-center-top-nextSong">
         <MusicFooterUtilsItem iconData={musicBottomCenterControlData[1]}/>
        </div>
        <div className="music-footer-center-top-stateSwitch" onClick={e => changeIconHandler("stateSwitch")}>
          <MusicFooterUtilsItem iconData={musicBottomCenterSwitchData[stateIndex]}/>
        </div>
      </div>
      <div className="music-footer-center-bottom">
        <span>
          00.00
        </span>
        <div className="slider">
          <Slider  styles={{ 
              track: {
                background: '#f26c77',
              },
            }}
            tooltip={{ open: false}}
          />
        </div>
        <span>
          04:19
        </span>
      </div>
    </MusicFooterCenterWrapper>
  )
})

export default MusicFooterCenter