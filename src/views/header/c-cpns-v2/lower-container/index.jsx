import React, { forwardRef } from 'react'
import {useNavigate} from 'react-router-dom'

import ContainerWrapper from './style'

import containerArray from '@/assets/data/lowerContainer.js'

const LowerContainer = forwardRef((props,ref) => {
  // 获得路由
  const navigate = useNavigate();
  // 根据判断去往那个页面
  function gotoPageHandler(item){
    switch(item.name) {
      case "HomePage":
        navigate("/home")
        break;
      case "Music":
        navigate("/music")
        break;
      case "LeaveMessage":
        navigate("/leaveMessage")
        break;
      case "worksDisplay":
        navigate("/worksdisplay")
        break;
      default:
        break;
    }
  }
  return (
    <ContainerWrapper>
        <div className="whole" ref={ref}>
        {
          containerArray.map((item,index) => {
            return (
              <div className="item" key={index} onClick={e => gotoPageHandler(item)}>
                <div className="item-icon">
                  {item.icon}
                </div>
                  <span>
                    {item.title}
                  </span>
              </div>
            )
          })
        }
      </div>
     
    </ContainerWrapper>
  )
})

export default LowerContainer