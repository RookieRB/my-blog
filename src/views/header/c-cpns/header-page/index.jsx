import React, { memo } from 'react'


import PageWrapper from './style'


const HeaderPage = memo(() => {
  return (
    <PageWrapper>
        <div className="item">Home</div>
        <div className="item">Music</div>
        <div className="item">Blog</div>
        <div className="item">ABOUT</div>
    </PageWrapper>
  )
})

export default HeaderPage