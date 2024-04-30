import React, { memo,useState,useCallback } from 'react'
import {Slider} from 'antd'




import MusicFooterRightWrapper from './style'
import musicBottomRightSoundData from '@/assets/data/Music/MusicBottom/MusicBottomRightSoundData'
import musicBottomRightUtilsData from '@/assets/data/Music/MusicBottom/MusicBottomRightUtilsData'
import musicBottomRightSongStandardData from '@/assets/data/Music/MusicBottom/MusicBottomRightSongStandardData'
import MusicFooterUtilsItem from '../musicFooterUtilsItem'
import SongStandardPanel from '@/components/Music/SongStandardPanel'
import SoundEffectPanel from '@/components/Music/SoundEffectPanel'
import MusicPlayList from '@/components/Music/MusicPlayList'
const MusicFooterRight = memo(() => {
  /**
   * 内部变量
   */
  // 变量控制songStandard-panel出现与消失
  const [isShowSongStandardPanel,setIsShowSongStandardPanel] = useState(false)
  // 变量控制当前展示哪个songStandard-icon 的showname
  const [currentItemDataShowName,setCurrentItemDataShowName] = useState(musicBottomRightSongStandardData[musicBottomRightSongStandardData.length - 1].showName)
  // 变量控制 SoundEffectPanel面板出现与消失
  const [isShowSoundEffectPanel,setIsShowSoundEffectPanel] = useState(false)
  // 变量控制 MusicPlayList面板出现与消失
  const [isShowMusicPlayList,setIsShowMusicPlayList] = useState(false)
  
  /**
   * 函数处理逻辑
   */
  // 控制songStandard-panel出现与消失
  function songStandardPanelShowHandler(){
    setIsShowSongStandardPanel(!isShowSongStandardPanel)
  }

  // 控制 (会员音效,桌面歌词,播放列表) 三个面板的显示
  function soundEffectPanelShowHandler(prompt){
    if(prompt === '会员音效'){
      // 控制SoundEffectPanel面板出现与消失
      setIsShowSoundEffectPanel(!isShowSoundEffectPanel)
    }else if(prompt === '桌面歌词'){
      // 控制歌词面板出现与消失
    }else{
      // 控制播放列表面板出现与消失 
      setIsShowMusicPlayList(!isShowMusicPlayList)
    }
    
  }

  //  改变music-footer-right-songStandard-icon 中 data的名字
  
  const tabClick = useCallback((itemShowName)=>{
    setCurrentItemDataShowName(itemShowName)
  },[])
  return (
    <MusicFooterRightWrapper>
      <div className="music-footer-right-songStandard" onClick={songStandardPanelShowHandler}>
        <div className="music-footer-right-songStandard-icon">
          {
            currentItemDataShowName
          }
        </div>
        {
          isShowSongStandardPanel
            &&
          <div className="music-footer-right-songStandard-panel">
            <SongStandardPanel itemData={musicBottomRightSongStandardData} tabClick={tabClick}/>
         </div>
        }
        
      </div>
      {
        musicBottomRightUtilsData.map((item,index) => {
          return (
            <div className="panelController" onClick={e => soundEffectPanelShowHandler(item.prompt)} key={index}>
              <MusicFooterUtilsItem iconData={item} key={index}/>
            </div> 
          )
        })
      }
      {
        <MusicFooterUtilsItem iconData={musicBottomRightSoundData[0]}/>
      }
      <div className="music-footer-right-slider">
        <Slider styles={{
            track:{
              background: '#a3a2a2'
            }
          }}
          tooltip={{ open: false}}
        />
      </div>
      {
        isShowSoundEffectPanel
        &&
        <div className="music-footer-right-soundEffectPanel">
          <SoundEffectPanel/>
        </div>
      }
      {
        isShowMusicPlayList
        &&
        <div className="music-footer-right-musicPlayList">
          <MusicPlayList/>
        </div>
      }
      
      
    </MusicFooterRightWrapper>
  )
})

export default MusicFooterRight