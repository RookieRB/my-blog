import styled from 'styled-components'



const MusicPlayListItemWrapper = styled.div`
  height: 65px;
  box-sizing: border-box;
  width:100%;
  display: flex;
  padding: 10px 0 10px 20px;
  align-items: center;
  .musicPlayListItem-img{
    flex: 0 0 45px;
    border-radius: 5px;
    overflow: hidden;
    position: relative;
    img{
      height: 100%;
      width: 100%;
      object-fit: cover;
    }

    .musicPlayListItem-img-icon{
      position: absolute;
      left: 25%;
      top: 25%;
      right: 0;
      bottom: 0;
      svg{
        width: 25px;
        height:25px;
      }
    }
    
    &:hover{
      cursor: pointer;
      
    }
  }
  .musicPlayListItem-information{
    flex: 1;
    padding-left: 10px;
    .musicPlayListItem-information-songName{
      width: 210px;
      white-space: nowrap;
      overflow: hidden;
      font-size: 18px;
      text-overflow: ellipsis;
    }
    .musicPlayListItem-information-basicInfo{
      font-size: 12px;
      padding-top: 8px;
    }
  }
  .musicPlayListItem-icon{
    flex: 0 0 80px;
    display: flex;
    align-items: center;
    justify-content: end;
    svg{
      width: 20px;
      height: 20px;
    }
    .musicPlayListItem-icon-favorite{
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
    .musicPlayListItem-icon-item{
      padding: 0 5px;
      
      &:hover{
        cursor: pointer;
        svg{
          path{
            fill: rgb(56, 64, 82);
          }
        }
      }
    }
  }
  .musicPlayListItem-songTime{
    flex: 0 0 30px;
    text-align: end;
    font-size: 12px;
    color: rgb(160, 165, 173);
    padding-right: 10px;
  }
  &:hover{
    background-color: rgb(237, 238, 239);
    .musicPlayListItem-img::after{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.5);
        z-index: 999;
      }
  }
`

export default MusicPlayListItemWrapper