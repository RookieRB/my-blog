import styled  from 'styled-components'


const PageLeaveMessageWrapper = styled.div`
  .leaveMessage-top{ 
    height:100vh;
    z-index: -1;
  
    .leaveMessage-top-img{
      position: fixed;
      width: 100%;
      height: 100%;
      animation: bgMove 2s ease 0s 1 none;
      object-fit:  cover;
    }
    .leaveMessage-message-in{
      position: absolute;
      width:360px;
      top: 40%;
      left: 38.5%;
      
      text-align: center;
      color: #fff;
      z-index: 3;
      .leaveMessage-message-in-title{
        user-select: none;
        font-family:poetize-font , serif;
      }
      .leaveMessage-message-in-emit{
        display: flex;
        .leaveMessage-message-in-common{
          padding: 10px 10px;
          margin-top: 25px;
          width: 100%;  
          background: transparent;
          border: 1px solid #fff;
          border-radius: 1.2rem; 
          color: #fff;
        }
        .leaveMessage-message-input{
          flex: 1;
          outline: none;
          &::placeholder{
            color: #fff;
          }
        }
        .leaveMessage-message-button{
          flex: 0 0 70px;
          padding: 10px 5px;
          margin-left: 12px;
        }
      }
    }
    .leaveMessage-barrage{
      position: absolute;
      right: 0;
      left: 0;
      top: 0;
      bottom: 0;
      overflow: hidden;

      .barrage-line{
        position:relative;
        height: 40px;
      }
    }
  }
  .content{
    position: absolute;
    display: flex;
    top: 100vh;
    width: 100%;
    background-color: transparent;
    .messagePanel{
      width: 100%;
      height: 2000px;
      background-color: #fff;
      .img{

      }
    }
  }
`

export default PageLeaveMessageWrapper