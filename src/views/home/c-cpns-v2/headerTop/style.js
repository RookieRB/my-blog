import styled from 'styled-components'


const TopWrapper = styled.div`

  position: relative;
  overflow: hidden;
  &::before{
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
    background-attachment: fixed;
    /* background-image: url(https://jsdelivr.2heng.xin/gh/moezx/cdn@3.1.9/img/Sakura/images/dot.gif); */
    background-image: url(${require("@/assets/imgs/dot.gif")});
  }
  .center-bg{
    width: 100%;
    height: 100vh;
    background-image: url(https://img-baofun.zhhainiao.com/fs/2991befffd35f4beab59e2b464f7d38f.jpg);
    margin: 0;
    padding: 0;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;
    background-attachment: fixed;
  }
 
  .content{
    position: absolute;
    top: 40%;
    left: 30%;
    width: 780px;
    height: 120px;
    display: flex;
    /* display: flex; */
    // 毛玻璃效果
    /* background-color: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(6.5px);
    -webkit-backdrop-filter: blur(6.5px);
    border: 1px solid rgba(255, 255, 255, 0.18);
    box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;
    -webkit-box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;
    border-radius: 16px;
    -webkit-border-radius: 16px;
    color: rgba(255, 255, 255, 0.45); */


    .center-text{
      margin: auto;
      font-size: 80px;
      text-transform: uppercase;
    }
    .glitch{
      position: relative;
      color: #fff;
      mix-blend-mode: lighten;
      z-index: 3;
   
    &::before,&::after{
      content: attr(data-text);
      position: absolute;
      top: 0;
      width: 100%;
      background: rgba(0,0,0,0);
      clip: rect(0,0,0,0);
      box-sizing: inherit;
    }
    &:hover{
      cursor: pointer;
    }
    &::before{
      left: -1px;
      text-shadow: 1px 0 #ff3f1a;
      
    }
    &:hover::before{
      text-shadow: 4px 0 #ff3f1a;
      animation: glitch-loop-1 .8s infinite ease-in-out alternate-reverse
    }
    &::after{
      left: 1px;
      text-shadow: -1px 0 #00a7e0;
    }
    &:hover::after{
      text-shadow: -5px 0 #00a7e0;
      animation: glitch-loop-2 .8s infinite ease-in-out alternate-reverse
    }
      

    }
    .is-glitching{

    }
   
    /* @keyframes huerotate {
      100% {
          filter: hue-rotate(360deg);
      }
    }
    .text{
      font-size: 60px;
      margin: auto;
      font-weight: bold;
      color: transparent;
      text-transform:uppercase;
      background: linear-gradient(45deg, #ffeb3b, #009688, yellowgreen, pink, #03a9f4, #9c27b0, #8bc34a);
      background-size: cover;
      background-position: center center;
      background-clip: text;
      animation: huerotate 3s infinite;
    } */
  }
  .bannerWave{
      position: absolute;
      bottom: 0;
      animation: backGroundGradient 120s linear infinite;
      
    }
    .wave1{
      height: 84px;
      background-image: url(${require("@/assets/imgs/bannerWave1.png")});
      width: 200%;
      z-index: 10; 
    }
    .wave2{
      height: 100px;
      background-image: url(${require("@/assets/imgs/bannerWave2.png")});
      width: 400%;
      z-index: 5;
    }
`

export default TopWrapper