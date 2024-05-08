import styled from 'styled-components'

const UserInfoWrapper = styled.div`
  box-sizing: border-box;
  padding: var(--card-padding);
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: ${props => props.theme.font.fontFamily};
  box-shadow: var(--card-box-shadow);
  border-radius: var(--card-border-radius);
  &:hover{
    box-shadow: var(--card-hover-box-shadow);
  }
  .userInfo-img{
    height: 110px;
    width: 110px;
    overflow: hidden;
    border-radius: 50%;
    img{
      height: 100%;
      width: 100%;
      object-fit: cover;
      transition: transform 1s ease-in-out;
      &:hover{
        transform: rotate(360deg);
      }
    }
  }
  .userInfo-userName{
    margin-top: 10px;
    font-weight: 500;
    font-size: 2.4em;
  }
  .userInfo-article{
    margin-top: 15px;
    display: flex;
    justify-content: center;
    align-items:center;
    .userInfo-article-item{
      font-size: 1.1em;
      padding: 10px 18px;
      font-weight: 500;
      span{
        display: block;
        text-align: center;
        margin-bottom: 15px;
      }
    }
  }
  .userInfo-button{
    
  }
  .userInfo-bottom{
    margin-top:10px;
    svg{
      width: 23px;
      height: 23px;
      padding: 0 9px;
    }
    .userInfo-icon{
      transition: transform 0.5s ease-in-out;
      cursor: pointer;
      &:hover{
        transform: rotate(360deg)
      }
    }
  }
`

export default UserInfoWrapper