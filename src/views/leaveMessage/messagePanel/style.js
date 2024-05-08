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
    textarea{
      width: 100%;
      min-height: 180px;
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
      .messagePanel-top-bottom-emotion{
        margin-right: 10px;
        cursor: pointer;
      }
      .messagePanel-top-bottom-img{
        margin-right: 10px;
        cursor: pointer;

      }
      .messagePanel-top-bottom-button{
        flex: 1;
        text-align: end;
        
      }
    }
   }
  }
  .messagePanel-content{
    margin-top: 30px;
    .messagePanel-content-title{
      font-size: 1.14rem;
      color: #797979;
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