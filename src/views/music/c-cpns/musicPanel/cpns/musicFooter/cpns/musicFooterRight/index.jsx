import React, { memo,useState,useCallback } from 'react'
import {Slider} from 'antd'




import MusicFooterRightWrapper from './style'
import musicBottomRightSoundData from '@/assets/data/Music/MusicBottom/MusicBottomRightSoundData'
import musicBottomRightUtilsData from '@/assets/data/Music/MusicBottom/MusicBottomRightUtilsData'
import musicBottomRightSongStandardData from '@/assets/data/Music/MusicBottom/MusicBottomRightSongStandardData'
import MusicFooterUtilsItem from '../musicFooterUtilsItem'
import SongStandardPanel from '@/components/Music/SongStandardPanel'

const MusicFooterRight = memo(() => {
  /**
   * 内部变量
   */
  // 控制songStandard-panel出现与消失
  const [isShowSongStandardPanel,setIsShowSongStandardPanel] = useState(false)
  // 控制当前展示哪个songStandard-icon 的showname
  const [currentItemDataShowName,setCurrentItemDataShowName] = useState(musicBottomRightSongStandardData[musicBottomRightSongStandardData.length - 1].showName)
  /**
   * 函数处理逻辑
   */
  // 控制songStandard-panel出现与消失
  function SongStandardPanelShowHandler(){
    setIsShowSongStandardPanel(!isShowSongStandardPanel)
  }

  //  改变music-footer-right-songStandard-icon 中 data的名字
  
  const tabClick = useCallback((itemShowName)=>{
    setCurrentItemDataShowName(itemShowName)
  },[])
  return (
    <MusicFooterRightWrapper>
      <div className="music-footer-right-songStandard" onClick={SongStandardPanelShowHandler}>
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
            <MusicFooterUtilsItem iconData={item} key={index}/>
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
     
    </MusicFooterRightWrapper>
  )
})

export default MusicFooterRight