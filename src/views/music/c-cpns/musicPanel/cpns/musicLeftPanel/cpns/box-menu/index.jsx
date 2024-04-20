import React, { memo,useState } from 'react'

import MusicLeftPanelMenuBoxWrapper from './style'
import PageUpSVG from '@/assets/svg/music-panel/PageUpSVG'
import PageDownSVG from '@/assets/svg/music-panel/PageDownSVG'
import AddSVG from '@/assets/svg/music-panel/AddSVG'



const MusicLeftPanelMenuBox = memo((props) => {
  // 控制展开
  const [isShowMenu,setIsShowMenu] = useState(false)
  // 传入的数据
  const {infoData,title,showAdd} = props
  // 控制展开函数
  function isShowHandler(){
    setIsShowMenu(!isShowMenu)
  }

  return (
    <MusicLeftPanelMenuBoxWrapper>
      <div className="title" >
        <div className="title-left" onClick={isShowHandler}>
          <span>
            {title}
            ({infoData.length})
          </span>
          {
            isShowMenu ? 
            <PageUpSVG/> :
            <PageDownSVG/>
          }
        </div>
        {
          showAdd
          &&
          <div className="last-svg">
            <AddSVG/>
          </div>
        }
        
      </div>
      <div className="box-menu-content">
      {
        isShowMenu
        &&
        (infoData.map((item,index) => {
          return (
            <div className="box-menu-item" key={index}>
              <div className="inner-img">
                <img src={item.img} alt="" />
              </div>
              <div className="inner-name">
                {item.MenuName}
              </div>
            </div>
          )
        })
      )}
      </div>
      {
        showAdd
        &&
        <hr/>
      }
      
    </MusicLeftPanelMenuBoxWrapper>
  )
})

export default MusicLeftPanelMenuBox