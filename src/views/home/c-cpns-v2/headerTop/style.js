import styled from 'styled-components'


const TopWrapper = styled.div`
  position: relative;
  .center-bg{
    width: 100%;
    height: 100vh;
    background-image: url("https://img-baofun.zhhainiao.com/fs/2991befffd35f4beab59e2b464f7d38f.jpg");
    margin: 0;
    padding: 0;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;
  }
 
  .content{
    position: absolute;
    top: 40%;
    left: 30%;
    width: 780px;
    height: 120px;
    @keyframes huerotate {
      100% {
          filter: hue-rotate(360deg);
      }
    }
    .text{
      width:100%;
      height: 100%;
      text-align: center;
      vertical-align: center;
      font-size: 60px;
      font-weight: bold;
      margin: 50px auto;
      color: transparent;
      text-transform:uppercase;
      background: linear-gradient(45deg, #ffeb3b, #009688, yellowgreen, pink, #03a9f4, #9c27b0, #8bc34a);
      background-size: cover;
      background-position: center center;
      background-clip: text;
      animation: huerotate 3s infinite;
    }
  }
`

export default TopWrapper