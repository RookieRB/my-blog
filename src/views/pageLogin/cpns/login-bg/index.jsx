import React, { memo,useRef,useState  } from 'react'


import {BgWrapper} from './style'
import AudioOpen from '@/assets/svg/audioOpen'
import AudioClose from '@/assets/svg/audioClose';

const LoginBg = memo(() => {
   // 定义内部变量
  // 获取video背景图对象
  const videoRef = useRef();
  const [isMuted,changeIsMuted] = useState(true)
  // 内部处理函数
  // 是否静音
  function ChangeMuteHandler( ){
    if(isMuted){
      videoRef.current.muted = false;
    }else{
      videoRef.current.muted = true;
    }
    changeIsMuted(!isMuted)
    
  }
  return (
    <BgWrapper>
      <span className="SoundControl" onClick={ChangeMuteHandler}>
        {
          isMuted ? <AudioClose/> : <AudioOpen/>
        }
      </span>
      
      <video muted autoPlay="autoplay" loop="loop" className="bgv" ref={videoRef}>
	      {/* <source src={require("@/assets/video/background.mp4")} type="video/mp4" ></source> */}
      </video>
    </BgWrapper>
  )
})

export default LoginBg