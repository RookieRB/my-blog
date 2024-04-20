import styled from 'styled-components'


const MusicFooterCenterWrapper = styled.div`
  flex: 1 0 auto;
  
  .music-footer-center-top{
    height: 30px;
    width: 100%;
    margin: 15px 0 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    .music-footer-center-top-favorite{
      margin: 0 5px;
    }

    .music-footer-center-top-lastSong{
      margin: 0 5px;
    }
    
    .music-footer-center-top-playButton{
      flex: 0 0 40px;
      .music-footer-utils-bottom-item-function{
        svg{
          width: 40px;
          height: 40px;
        }
      }
    }

    .music-footer-center-top-nextSong{
      margin: 0 5px;
    }

    .music-footer-center-top-stateSwitch{
      margin: 0 5px;
      .music-footer-utils-bottom-item-style{
        svg{
          width: 20px;
          height: 20px;
        }
      }
    }
  }
  .music-footer-center-bottom{
    height: 20px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .slider{
      flex: 1;
    }
    span{
      font-size: 11px;
      color: #666;
      padding: 0 5px;
    }
  }
`
export default MusicFooterCenterWrapper