import React, { memo,useRef,useEffect } from 'react'
import Typed from 'typed.js'


// 导入诗句
import poemData from '@/assets/data/poemData'
import TopWrapper from './style'

const HeaderTop = memo(() => {
  const el = useRef(null);

  useEffect(() => {
    const type = new Typed(el.current,{
      strings: poemData[0].content.split("。"),
      typeSpeed: 200,
      loop: true,
      backSpeed: 100,
      
    });

    return () => {
      type.destroy();
    }
  },[])
  return (
    <TopWrapper>
      <figure className="center-bg">

      </figure>
      
      <div className="content">
        {/* <span className="text">
          
        </span> */}
        <div className='center-text-title'>Life is a fucking move</div>
        <div className='center-text-bg'>
          <span ref={el} className='center-text'></span>
        </div>
       
        {/* <h1 className="center-text glitch is-glitching" data-text="再びようこそ">
        再びようこそ
        </h1> */}
      </div>
      <div className="bannerWave wave1"></div>
      <div className="bannerWave wave2"></div>
    </TopWrapper>
  )
})

export default HeaderTop