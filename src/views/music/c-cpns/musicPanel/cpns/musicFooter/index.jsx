import React, { memo } from 'react'


import MusicFooterWrapper from './style'
import MusicFooterLeft from './cpns/musicFooterLeft'
import MusicFooterCenter from './cpns/musicFooterCenter'
import MusicFooterRight from './cpns/musicFooterRight'



const MusicFooter = memo(() => {
  return (
    <MusicFooterWrapper>
      <MusicFooterLeft/>
      <MusicFooterCenter/>
      <MusicFooterRight/>
    </MusicFooterWrapper>
  )
})

export default MusicFooter