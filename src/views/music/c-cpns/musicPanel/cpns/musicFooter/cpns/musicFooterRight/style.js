import styled from 'styled-components'


const MusicFooterRightWrapper = styled.div`
  flex: 0 0 275px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 20px;
  user-select: none;
  .music-footer-right-songStandard{
    margin-right: 4px;
    position: relative;
    display: flex;
    .music-footer-right-songStandard-icon{
      border: 1px solid #8a8a8a;
      padding: 3px 4px;
      color: #8a8a8a;
      font-size: 10.5px;
      border-radius: 4px;
      &:hover{
        cursor: pointer;
      }
    }
    .music-footer-right-songStandard-panel{
      position: absolute;
      width: 370px;
      height: 480px;
      top:-490px;
      left: -175px;
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0 0px 3px 4px rgba(0,0,0,.1);
      &::before{
        content: '';
        position: absolute;
        left: 50%;
        bottom: -10px; /* 将三角形定位到div的底部之外 */
        border-width: 5px; /* 三角形的大小 */
        border-style: solid;
        border-color: #fff transparent transparent transparent; /* 箭头颜色和透明边界 */
        transform: translateX(-50%); /* 将三角形居中 */
      }
    }

  }
  .music-footer-right-slider{
    width: 75px;
  }
`
export default MusicFooterRightWrapper