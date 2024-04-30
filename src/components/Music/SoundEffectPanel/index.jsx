import React, { memo,useState,useCallback} from 'react'
import {Switch} from 'antd'
import classNames from 'classnames'


import SoundEffectPanelWrapper from './style'
import SoundEffectPanelContentItem from './cps/soundEffectPanelContentItem'
// 推荐音效数据
import musicBottomRightSoundRecommendData from '@/assets/data/Music/MusicBottom/MusicBottomRightSoundRecommend'
// 全部音效数据
import musicBottomRightSoundAllSoundData from '@/assets/data/Music/MusicBottom/MusicBottomRightSoundAllSoundData'


// 页面数据
const pageData =["音效","设备适配","均衡器"]


const SoundEffectPanel = memo(() => {
  // 当前选择的页面 默认为0
  const [currentIndex,setCurrentIndex] = useState(0)
  // 定义chooseName的ref用与更新选中的item名字
  const [chooseName,setChooseName] = useState("3D环绕")

  // 处理页面转换逻辑
  function changePageHandler(pageIndex){
    setCurrentIndex(pageIndex)
  }
  
  const getChoseItemName = useCallback((chooseName) => {
    setChooseName(chooseName)
  },[])

  return (
    <SoundEffectPanelWrapper>
      <div className='SoundEffectPanel-topSelect'>
        {
          pageData.map((item,index) => {
            return (
              <div  className={classNames('SoundEffectPanel-topSelect-item',{'active' : currentIndex === index})} onClick={e => changePageHandler(index)} key={index}>
                {item}
                <hr />
              </div>
            )
          })
        }
          
          <div className="SoundEffectPanel-topSelect-right" > 
            音效： {chooseName}
            <Switch className="SoundEffectPanel-topSelect-right-switch"/>
          </div>
      </div>
      <div className="SoundEffectPanel-content">
        <SoundEffectPanelContentItem itemHasSubData={musicBottomRightSoundRecommendData}  itemNoSubData={musicBottomRightSoundAllSoundData} getChoseItemName={getChoseItemName}/>
      </div>
    </SoundEffectPanelWrapper>
  )
})

export default SoundEffectPanel