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
          position: relative;
          flex: 0 0 300px;
          outline: none;   
          &::placeholder{
            color: #fff;
          }
        }
        .leaveMessage-message-button{
          flex: 0 0 70px;
          padding: 10px 5px;
          margin-left: 12px;
          cursor: pointer;
        }
        .leaveMessage-message-rocket{
          position: absolute;
          bottom: -20px;
          right: -30px;
          animation: fromBottomToTop 1.5s ease;
          opacity: 0;
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
    display:flex;
    top: 100vh;
    width: 100%;
    background-color: #fff;
    .messagePanel{
      margin: 0 auto;
      width: 800px;
      margin-top: 30px;
    }
  }
  // 按钮样式
  .custom-btn{
    width: 100px;
    height: 45px;
    color: #fff;
    border-radius: 5px;
    padding: 10px 25px;
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    background: transparent;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
    box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
    7px 7px 20px 0px rgba(0,0,0,.1),
    4px 4px 5px 0px rgba(0,0,0,.1);
    outline: none;
  }
  .btn-14 {
    background: rgb(255,151,0);
    border: none;
    z-index: 1;
    &::after{
      position: absolute;
      content: "";
      width: 100%;
      height: 0;
      top: 0;
      left: 0;
      z-index: -1;
      border-radius: 5px;
      background-color: #eaf818;
      background-image: linear-gradient(315deg, #eaf818 0%, #f6fc9c 74%);
      box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5);
      7px 7px 20px 0px rgba(0,0,0,.1),
      4px 4px 5px 0px rgba(0,0,0,.1);
      transition: all 0.3s ease;
    }
    &:hover{
      color: #000;
      &::after{
        top: auto;
        bottom: 0;
        height: 100%;
      }
    }
  }
  .btn-5 {
    width: 50px;
    height: 25px;
    line-height: 25px;
    padding: 0;
    border: none;
    background: rgb(255,27,0);
    background: linear-gradient(0deg, rgba(255,27,0,1) 0%, rgba(251,75,2,1) 100%);
    &:hover{
      color: #f0094a;
      background: transparent;
      box-shadow:none;
      &::after,
      &::before{
        width:100%;
        transition:800ms ease all;
      }
    }
    &::after,
    &::before{
      content:'';
      position:absolute;
      top:0;
      right:0;
      height:2px;
      width:0;
      background: #f0094a;
      box-shadow:
      -1px -1px 5px 0px #fff,
      7px 7px 20px 0px #0003,
      4px 4px 5px 0px #0002;
      transition:400ms ease all;
    }
    &::after{
      right:inherit;
      top:inherit;
      left:0;
      bottom:0;
    }
  }
  .messagePanel-replyPanel-bg{
    position: fixed;
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,0.5);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    display:flex;
    
    .messagePanel-replyPanel{
      position: relative;
      margin: auto auto;
      width: 800px;
      background-color: #fff;
      box-sizing: border-box;
      padding:20px;
      .messagePanel-replyPanel-close{
        position: absolute;
        top:10px;
        right: 10px;
        cursor: pointer;
        &:hover{
          svg{
            path{
              fill: red;
            }
          }
        }
        svg{
          width: 30px;
          height: 30px;
        }
      }
    }
  }
`

export default PageLeaveMessageWrapper