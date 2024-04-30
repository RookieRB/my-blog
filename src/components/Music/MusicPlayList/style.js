import styled from 'styled-components'


const MusicPlayListWrapper = styled.div`
 
  .musicPlayList-top{
    display: flex;
    padding: 20px 15px;
    
    .musicPlayList-top-left{
      
      flex:1;
      font-size: 18px;
      font-weight: 700;
      position: relative;
      .musicPlayList-top-SongCount{
        position: absolute;
        top: -20%;
        right: 57%;
        font-size: 11px;
        font-weight: 400;
        color: rgb(185, 188, 195);
      }
    }
    .musicPlayList-top-right{
      flex: 0 0 140px;
      display: flex;
      align-items: center;
      svg{
        width: 15px;
        height: 15px;
      }
      font-size: 13px;
      color: rgb(124, 130, 143);
      span{
        margin-left:4px;
      }
      .musicPlayList-top-right-collection{
        display: flex;
        margin-right: 20px;
      }
      .musicPlayList-top-right-bin{
        display: flex;
    
      }
    }
    
   
  }

  .musicPlayList-body{
    overflow-y: scroll;
    height: 500px;
    scrollbar-width: thin;
    scrollbar-color: rgb(197, 200, 205) #fff;
  }
`


export default MusicPlayListWrapper