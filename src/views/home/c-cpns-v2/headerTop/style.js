import styled from 'styled-components'


const TopWrapper = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  // 模糊遮荫效果
  /* &::before{
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
    background-attachment: fixed;
    background-image: url(${require("@/assets/imgs/dot.gif")});
  } */
  animation: bgMove 1s ease ;
  .center-bg{
    width: 100%;
    height: 100vh;
    background-image: url(${require("@/assets/imgs/bg6.jpg")});
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
    left: 35%;
    width: 780px;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .center-text-title{
      margin-bottom: 30px;
      font-size: 40px;
      color: var(--button-color)
    }
    .center-text-bg{
      color: #fff;
      font-size: 30px;
      padding: 10px 10px;
      background-color: rgb(0,0,0,.5);
      border-radius: 15px;
      .center-text{
       
        
      }
      .typed-cursor {

      }
    }
  
    /*抖音效果   
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
    } */
    // 炫光效果
  /*@keyframes huerotate {
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
  .arrow-toContent{
      position: absolute;
      bottom: 20px;
      left: 47%;
      cursor: pointer;
      z-index: 11;
      animation: jumpButton 1.5s ease-out infinite;  
      svg{
        width: 100px;
        height: 100px;
     
        path{
          fill: #fff;
        }
      }
    }
  // wave 效果
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