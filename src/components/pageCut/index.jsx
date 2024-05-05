import React, { memo,useEffect,useRef } from 'react'

import PageCutWrapper from './style'


const PageCut = memo(() => {
  const imgRef = useRef()
  const headerRef = useRef()

 

  let scrollDistance = useRef(0)
  let requestId = useRef(null)
  
  
  function updateHeaderClipPath(){
    const clipPathValue = `polygon(0 0 , 100% 0, 100% ${(scrollDistance.current <= 600 ) ? 100 - ((scrollDistance.current / 600) * 80) : 75 }%, 0 100%)`
    headerRef.current.style.clipPath = clipPathValue;
    const scaleValue = 1 + ((scrollDistance.current / 600 ) * 1)
    imgRef.current.style.transform = `scale(${scaleValue})`
  }
  useEffect(() => {
  
    const scrollHandler = (e) => {
      if(e.deltaY < 0){
        scrollDistance.current = Math.max(0,scrollDistance.current + e.deltaY)
      }else{
        scrollDistance.current = Math.min(600,scrollDistance.current + e.deltaY)
      }
      if(!requestId.current){
        requestId.current = window.requestAnimationFrame(() => {
          updateHeaderClipPath()
          requestId.current = null
        })
      }
    }


    window.addEventListener('wheel',scrollHandler)

    return () => {
      window.removeEventListener('wheel',scrollHandler)
    }
  },[])
  return (
    <PageCutWrapper >
      <div className="pageCut-header" ref={headerRef}>
        <img src={require("@/assets/imgs/bg5.jpg")} alt="" className='pageCut-header-img' ref={imgRef}/>
      </div>
      <div className="pageCut-content">
        {/* <IntroductionCard/> */}
      </div>
    </PageCutWrapper>
  )
})

export default PageCut