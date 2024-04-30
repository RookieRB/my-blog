import styled from "styled-components";


const LeftWrapper = styled.div`
  color: #464646;
  font-size: 25px;
  font-family: 'Moe-Mashiro', 'Merriweather Sans', Helvetica, Tahoma, Arial, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft Yahei', 'WenQuanYi Micro Hei', sans-serif;
  position: relative;
  margin: 25px 20px;
  
 
  .left{
    padding: 2px 2px;
    background-color: rgba(255, 255, 255, .5);
    border-radius: 10px;
    font-weight: 600
  }
  .center{
    padding: 0 2px;
  }
  .right{
    font-weight: 800;

  }
  &:hover{
    &::after{
      content: "welcome to my blog";
      position: absolute;
      color: ${props => props.theme.font.hoverColor};
      font-size: 18px;
      display: block;
      left: 30px;
    }
    .left{
      color:#fff;
      background-color:${props => props.theme.font.hoverColor};
    }
    
    .center{
      display: inline-block;
      animation: rotate 2s linear infinite; /* 动画名称，持续时间，动画类型，循环次数 */
    }
    .right{
      color: ${props => props.theme.font.hoverColor};
    }
  }
`

export default LeftWrapper