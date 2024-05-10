import styled from "styled-components";


const LoginWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
 
  .login-bgImg{
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }
  .login-container{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 750px;
    height: 450px;
    box-shadow: var(--card-box-shadow);
    opacity: .9;
    overflow: hidden;
    .form-container{
      position: absolute;
      height: 100%;
      width: 50%;
      display: flex;
      align-items: center;
      flex-direction: column;
      box-sizing: border-box;
      padding: 40px;
      background-color: #fff;
    }
    .login-panel{
      justify-content: center;
      opacity: 1;
      z-index: 3;
    }
    .register-panel{
      opacity:0;
      z-index: 2;
    }
    .overlay{
      position: absolute;
      height: 100%;
      width: 50%;

      left: 50%;
      background-image: url(${require("@/assets/imgs/loginBG1.jpg")});
      background-size: cover;
      background-position: center;
      z-index: 1;
    }
      .overlay-panel{
        position: absolute;
        display: flex;
        height: 100%;
        width: 100%;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: #fff;
        user-select: none;
        .overlay-panel-title{
          font-size: 2rem;
          
        }
        .overlay-panel-description{

          padding: 30px 0;
          font-size: 1.1rem;
        }
        .overlay-panel-btn{
        }
      }
      .overlay-panel-toRegister{
        opacity:1;
      }
      .overlay-panel-toLogin{  
        opacity:0;
        pointer-events: none;
        z-index: 5;
        transform: translateY(-20%);
      }
    
  }
  .panel-title{
    font-size: 2rem;
    margin-bottom: 20px; 
    user-select: none;
  }
  .panel-utils{
    padding: 10px 0;  
    font-size: 15px;
    font-family: KaiTi;
    user-select: none;
    .btn{
      cursor: pointer;
      &:hover{
        color: var(--aHover-color);
      }
    }
  }
  .panel-btn{
    margin-top: 5px;
    user-select: none;
  }
  input{
    padding: 12px 15px;
    margin: 10px 0;
    width: 100%;
    background-color: var(--maxLightGray-color);
    border-radius: 2px;
    border: none;
    outline: none;
  }
`


export default LoginWrapper