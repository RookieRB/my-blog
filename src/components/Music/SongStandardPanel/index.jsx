import React, { memo } from 'react'
import PropTypes from 'prop-types'


import SongStandardPanelWrapper from './style'
import SongStandardPanelItem from './cps/SongStandardPanelItem'

const SongStandardPanel = memo((props) => {
  const {itemData,tabClick} = props
  return (
    <SongStandardPanelWrapper>
      <div className="songStandard-panel-title">
        <div className="songStandard-panel-title-name">
          歌曲音质
        </div>
        <svg t="1713523474613" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="29036" width="200" height="200"><path d="M512 958.016611c-245.919634 0-446.016611-200.064292-446.016611-446.016611 0-245.919634 200.095256-446.016611 446.016611-446.016611 245.952318 0 446.016611 200.064292 446.016611 446.016611S757.952318 958.016611 512 958.016611zM512 129.983389c-210.655557 0-382.016611 171.359333-382.016611 382.016611 0 210.624593 171.359333 382.016611 382.016611 382.016611 210.624593 0 382.016611-171.359333 382.016611-382.016611S722.624593 129.983389 512 129.983389z" fill="#515151" p-id="29037"></path><path d="M463.99957 304.00043c0 26.509985 21.490445 48.00043 48.00043 48.00043s48.00043-21.490445 48.00043-48.00043-21.490445-48.00043-48.00043-48.00043S463.99957 277.490445 463.99957 304.00043z" fill="#515151" p-id="29038"></path><path d="M512 768c-17.664722 0-32.00086-14.303454-32.00086-32.00086L479.99914 448c0-17.664722 14.336138-32.00086 32.00086-32.00086s32.00086 14.336138 32.00086 32.00086l0 287.99914C544.00086 753.696546 529.664722 768 512 768z" fill="#515151" p-id="29039"></path></svg>
      </div>
      <div className="songStandard-panel-subtitle">
        空间音感
      </div>
      <SongStandardPanelItem itemData={itemData[0]} tabClick={tabClick}/>
      <div className="songStandard-panel-subtitle">
        音质
      </div>
      {
        itemData.slice(1,6).map((item,index) => {
          return (
             <SongStandardPanelItem itemData={item} tabClick={tabClick} key={index}/>
          )
        })
      }
    </SongStandardPanelWrapper>
  )
})

SongStandardPanel.propTypes = {
  itemData: PropTypes.array,
  tabClick: PropTypes.func
}

export default SongStandardPanel