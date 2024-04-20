import React, { forwardRef } from 'react'
import MusicFooterUtilsItemWrapper from './style'

const MusicFooterUtilsItem = forwardRef((props,ref) => {
  const {iconData} = props

  return (
    <MusicFooterUtilsItemWrapper >
      <div className="music-footer-utils-bottom-item-style music-footer-utils-bottom-item-function" ref={ref}>
        {iconData.icon}
        <div className="music-footer-utils-bottom-item-prompt">
          {iconData.prompt}
        </div>
      </div>
    </MusicFooterUtilsItemWrapper>
  )
})

export default MusicFooterUtilsItem