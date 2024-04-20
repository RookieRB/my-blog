import styled from 'styled-components'


const AvatarWrapper = styled.div`
  margin: auto 15px;
  position: relative;
  .message{
    position:absolute;
    background-color: #fff;
    top: 40px;
    left:-80px;
    width: 120px;
    height:60px;  
    border-radius: 4px;
    box-shadow: 2px 4px 10px rgba(0, 20, 0, 0.5);
    .dialog-triangle{
      position: absolute;
      top: -10px; /* 根据需要调整，使三角形位于对话框外部 */
      left: 75%; /* 居中对齐 */
      width: 0;
      height: 0;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-bottom: 10px solid white; /* 三角形的底部颜色与对话框背景相同 */
      transform: translateX(-50%);
    }
    .content{
      text-align: center;
      color: 	#EE6363;
      height:100%;
      width: 100%;
    }
  }
`


export default AvatarWrapper