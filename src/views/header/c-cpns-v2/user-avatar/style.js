import styled from 'styled-components'


const AvatarWrapper = styled.div`
  position: relative;
  &:hover{
    cursor: pointer;
    .user-avatar{
      animation: avatarMoveToPanel 0.5s ease-in-out forwards;
    }
  }
  .user-avatar{
    margin-top: 10px;
    overflow: hidden;
    border-radius: 50%;
    
    .user-avatar-img{
      width: 100%;
      height:100%;
      object-fit: cover;
    }
    
  }
  .userAvatar-panel{
    position: absolute;
    top: 60px;
    left: -140px;
    width: 140px;
    z-index: -1;
    box-shadow: var(--card-box-shadow);
    border-radius: var(--card-border-radius);
    background-color: #fff;
    

    padding: 15px 0;
    .userLogin{
      width: 100%;
      padding: 10px 0;
      text-align: center;
      box-sizing: border-box;
      &:hover{
        background-color: rgba(0,0,0,0.05);
      }
      svg{
        width: 18px;
        height: 18px;
      }
      .userLogin-name{
        margin-left: 5px;
        font-size: 16px;
        line-height:16px;
        vertical-align: top;
      }
    }
    
  }
  
  
`


export default AvatarWrapper