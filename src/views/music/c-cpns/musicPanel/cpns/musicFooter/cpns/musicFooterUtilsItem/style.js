import styled from 'styled-components'


const MusicFooterUtilsItemWrapper = styled.div`
  .music-footer-utils-bottom-item-style{
    margin: 0 5px;
    position: relative;
    svg{
      width: 24px;
      height: 24px;
    }
    .music-footer-utils-bottom-item-prompt{
      display: none;
      position: absolute;
      top: 80%;
      white-space:nowrap;
      left: 90%;
      border: 1px solid black;
      padding: 2px;
      font-size: 11px;
    }
  }
  .music-footer-utils-bottom-item-function{
    &:hover{
      cursor: pointer;
      svg{
        path{
          fill: #515151;
        }
      }
      .music-footer-utils-bottom-item-prompt{
        display: block;
      }
    }
  }
  @keyframes toBig {
      from {
        transform: scale(1);
      }
      to {
        transform: scale(1.05);
      }
    }
  .music-footer-utils-bottom-item-functionV2{
    &:hover{
      cursor: pointer;
      svg{
        path{
          fill: #E5404F;
        }
      }
      .music-footer-utils-bottom-item-prompt{
        display: block;
      }
    }
  }
  .music-footer-utils-bottom-item-pop-playButton{
    svg{
      width: 40px;
      height: 40px;
      animation:toBig 10ms forwards;
    } 
  }
`
export default MusicFooterUtilsItemWrapper