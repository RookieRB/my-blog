import PropTypes from 'prop-types'
import React, { memo,useRef,useEffect } from 'react'

import SoundEffectPanelContentItemWrapper from './style'
import ClickSVG from '@/assets/svg/music-panel/ClickSVG'

const SoundEffectPanelContentItem = memo((props) => {
  // 有副标题的数据，没有副标题的数据，返回给上一个组件选中元素的名字
  const {itemHasSubData,itemNoSubData,getChoseItemName} = props
  // 记录上一个被选中的item
  const lastItemRef = useRef()

  // item被点击后的处理
  function contentItemClickHandler(event){
    // console.log(event.currentTarget)
    if(event.currentTarget === lastItemRef.current){
      event.currentTarget.classList.add('active')
    }else{
      event.currentTarget.classList.add('active')
      lastItemRef.current.classList.remove('active')
      lastItemRef.current = event.currentTarget
      getChoseItemName(lastItemRef.current.children[0].textContent)

    }
  }
  useEffect(() => {
    if(lastItemRef.current){
      lastItemRef.current.classList.add('active')
    }
  },[])
  return (
    <SoundEffectPanelContentItemWrapper>
      <div className="soundEffectPanel-contentItem-title">
        推荐音效
      </div>
      <div className="soundEffectPanel-contentItem-body">
        { 
          itemHasSubData.map((item,index) => {
            const attacheRef = index === 0 ? lastItemRef :null;
            return (
                  <div className="soundEffectPanel-contentItem-item soundEffectPanel-contentItem-size-v1" onClick={e => contentItemClickHandler(e)} key={index} ref={attacheRef}>
                    <div className="soundEffectPanel-contentItem-item-name">
                      {item.name}
                    </div>
                    <div className="soundEffectPanel-contentItem-item-subtitle">
                      {item.subTitle}
                    </div>
                    <div className="soundEffectPanel-contentItem-click">
                      <ClickSVG/>
                    </div>
                  </div>
            )
          })
        }
      </div> 
        <div className="soundEffectPanel-contentItem-title">
          全部音效
        </div>  
        <div className="soundEffectPanel-contentItem-body">
          {
            itemNoSubData.map((item,index) => {
              return (
                    <div className="soundEffectPanel-contentItem-item soundEffectPanel-contentItem-size-v2" key={index} onClick={e => contentItemClickHandler(e)}>
                      <div className="soundEffectPanel-contentItem-item-name">
                        {item.name}
                      </div>
                      <div className="soundEffectPanel-contentItem-click">
                        <ClickSVG/>
                      </div>
                    </div>
              )
            })
          }
      </div>
      
    </SoundEffectPanelContentItemWrapper>
  )
})

SoundEffectPanelContentItem.propTypes = {
  itemHasSubData: PropTypes.array,
  itemNoSubData: PropTypes.array,
  getChoseItemName: PropTypes.func
}

export default SoundEffectPanelContentItem