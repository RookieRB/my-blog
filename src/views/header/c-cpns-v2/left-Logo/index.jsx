import React, { memo } from 'react'

import LeftWrapper from './style'

const LeftLogo = memo(() => {

  return (
    <LeftWrapper>

      <span className="site-title">
        <a href="/home">
          <span className="left">
            世界が终 
          </span>
          <span className="center">
            わる
          </span>
          <span className="right">
            までは
          </span>
        </a>
      </span>
      
      
    </LeftWrapper>
  )
})

export default LeftLogo