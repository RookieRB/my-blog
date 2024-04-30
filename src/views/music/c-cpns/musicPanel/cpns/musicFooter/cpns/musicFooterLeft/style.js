import styled from 'styled-components'


const MusicFooterLeftWrapper = styled.div`
  flex: 0 0 275px;
  margin: 10px 10px;
  display: flex;
  .music-footer-left-img{
    flex: 0 0 60px;
    overflow: hidden;
    border-radius: 50%;
    margin-right: 10px;
    img{
      width:100%;
      height:100%;
      object-fit: cover;
    }
  }


  
  .music-footer-left-utils{
    flex: 1;
    .music-footer-left-utils-top{
      height: 20px;
      width: 205px;
      overflow: hidden;
      color: black;
      span{
        display: inline-block;
        padding-left: 100%; /* 让文本开始于容器外部 */
        white-space: nowrap;
        animation: scroll-left linear infinite;
        animation-duration: 15s; /* 根据需要调整滚动速度 */
      }
    }
    .music-footer-left-utils-bottom{
      height: 35px;
      margin-top: 5px;
      display: flex;
      align-items: center;
      
    }
  }
`
export default MusicFooterLeftWrapper