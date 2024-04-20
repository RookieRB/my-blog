import React, { memo } from 'react'
import {Outlet} from 'react-router-dom'

import MusicPanelWrapper from './style'
import MusicLeftPanel from './cpns/musicLeftPanel'
import MusicFooter from './cpns/musicFooter'

const MusicPanel = memo(() => {
  return (
    <MusicPanelWrapper>
      <div className="left-Banner">
        <MusicLeftPanel/>
      </div>
      <div className="right-content">
        <Outlet/>
      </div>
      <div className="footer">
        <MusicFooter/>
      </div>
    </MusicPanelWrapper>
  )
})

export default MusicPanel