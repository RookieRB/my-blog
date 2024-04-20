import React, { memo } from 'react'

import TopWrapper from './style'

const HeaderTop = memo(() => {
  return (
    <TopWrapper>
      <figure className="center-bg">

      </figure>
      <div className="content">
        <span className="text">
          Welcome To The Blog !
        </span>
      </div>
    </TopWrapper>
  )
})

export default HeaderTop