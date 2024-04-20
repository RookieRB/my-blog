import React, { memo } from 'react'
import LeftPanelBoxWrapper from './style'

const MusicLeftPanelBox = memo((props) => {
  return (
    <LeftPanelBoxWrapper>
      {
        props.children
      }
    </LeftPanelBoxWrapper>
  )
})

export default MusicLeftPanelBox