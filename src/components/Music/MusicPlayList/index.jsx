import React, { memo } from 'react'


import MusicPlayListWrapper from './style'
import CollectionSVG from '@/assets/svg/music-panel/CollectionSVG'
import WasteBinSVG from '@/assets/svg/music-panel/WasteBinSVG'
import MusicPlayListItem from './cpns/MusicPlayListItem'
// 列表数据
import musicPlayListMockData from '@/assets/data/Music/MusicPlayListMockData'



const MusicPlayList = memo(() => {
  return (
    <MusicPlayListWrapper>
      <div className="musicPlayList-top">
        <div className="musicPlayList-top-left">
            播放列表
            <div className="musicPlayList-top-SongCount">
              391
            </div>
        </div>
        <div className="musicPlayList-top-right">
          <div className="musicPlayList-top-right-collection">
            <CollectionSVG/>
            <span>
              收藏全部
            </span> 

          </div>
          <div className="musicPlayList-top-right-bin">
           <WasteBinSVG/>
            <span>
              清空
            </span>
          </div>
        </div>  
      
      </div>
      

      <div className="musicPlayList-body">
        {
          musicPlayListMockData.map((item,index) => {
            return (
                <MusicPlayListItem itemData={item} key={index}/>
            )
          })
        }
        
      </div>
    </MusicPlayListWrapper>
  )
})

export default MusicPlayList