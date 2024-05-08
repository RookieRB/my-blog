import React, { memo,useRef,useEffect } from 'react'
import Typed from 'typed.js'


// 导入诗句
import poemData from '@/assets/data/poemData'
import TopWrapper from './style'
import PageDownSVG from '@/assets/svg/music-panel/PageDownSVG.jsx'


const HeaderTop = memo((props) => {
  const el = useRef(null);
  const {jumpToPageHandler} = props
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

  // 调转到内容区域
  function toContentHandler(){
    jumpToPageHandler()
  }
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
      <div className="arrow-toContent" onClick={toContentHandler}>
        <PageDownSVG/>
      </div>
      <div className="bannerWave wave1"></div>
      <div className="bannerWave wave2"></div>
    </TopWrapper>
  )
})

export default HeaderTop