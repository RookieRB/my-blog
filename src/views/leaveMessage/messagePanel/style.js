import styled from 'styled-components'


const MessagePanelWrapper = styled.div`
  .messagePanel-top{
   .messagePanel-top-title{
    display: flex;
    align-items: top;
    margin: 20px 0;
    span{
      font-size: 22px;
      color: var(--primary-color)
    }
   }
   .messagePanel-top-textarea{
    width: 100%;
    .mock-textarea{
      width: 100%;
      min-height: 180px;
      font-weight: 400;
      box-sizing: border-box;
      padding: 15px;
      resize: none;
      outline:none;
      border: 1px solid var(--lightGray-color);
      background-image: url(${require("@/assets/imgs/human/1.png")});
      background-size: contain;
      background-position: 100%;
      background-repeat: no-repeat;
    }
    .messagePanel-top-bottom{
      display: flex;
      width: 100%;
      align-items: center;
      margin-top: 10px;
      z-index: 2;
      svg{
        width: 25px;
        height: 25px;
        &:hover{
          animation: rotate 1s ease infinite;
        }
      }
      .messagePanel-top-bottom-emotion{
        margin-right: 30px;
        cursor: pointer;
      }
      .messagePanel-top-bottom-img{
        margin-right: 10px;
        cursor: pointer;
      }
      .messagePanel-top-bottom-button{
        flex: 1;
        text-align: end;
        user-select:none;
      }
    }
    .messagePanel-emoji-panel{
      display: flex;
      flex-wrap: wrap;
      padding-top: 10px;
      padding-left: 8px;
      .messagePanel-emoji-item{
        height: 30px;
        width: 30px;
        margin: 0  10px 8px 0;
        padding: 5px;
        cursor: pointer;
       
        &:hover{
          background-color: rgba(0,0,0,.05);
        }
        img{
          width: 100%;
          height: 100%;
          &:hover{
            animation: shake 1s ease-in-out infinite;
          }
        }
      }
    }
   }
 
  }
  .messagePanel-content{
    margin-top: 30px;
    .messagePanel-content-title{
      font-size: 1.14rem;
      color: #797979;
      user-select:none;
      span{
        padding-right: 5px;
      }
    }
    .messagePanel-content-item{
      padding: 30px 0;
      border-bottom: 1px solid rgba(0,0,0,.1);
      .messagePanel-content-item-reply{
        margin-left: 50px;
      }
    }
  }
`


export default MessagePanelWrapper