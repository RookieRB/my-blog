import styled from "styled-components";


const PanelWrapper = styled.div`
  margin-top: 10%;
  #login_box {
    width: 25%;
    height: 400px;
    background-color: #00000060;
    margin: auto;
    text-align: center;
    border-radius: 10px;
    padding: 50px 50px;
  }
  h2 {
    color: #ffffff90;
    margin-top: 5%;
  }
  span {
    color: #F5FFFA;
  }
  .input_box{
    margin-top: 20px;
  }
  input {
    height: 50%;
    border: 0;
    width: 95%;
    font-size: 15px;
    color: #fff;
    background: transparent;
    border-bottom: 1px solid #fff;
    padding: 5px 10px;
    outline: none;
    margin-top: 10px;
  }
  .login-question{
    display: flex;
    text-align: center;
    align-items: center;
    font-size: 15px;  
    input{  
      width: 12px;
      vertical-align: center;
      margin: auto 0;
    }
    span{
      
      white-space: nowrap;
      vertical-align: center;
    }
    .forget{
      flex: 1;
      text-align: end;
      cursor: pointer;
      &:hover{
        color:${props => props.theme.font.HoverColor};
      }
    }
  }
  button {
    margin-top: 50px;
    width: 80%;
    height: 45px;
    background-color: 	#778899;
    border: none;
    outline: none;
    border-radius: 6px;
    cursor: pointer;
    font-size:1em;
    color: #fff;
    font-weight: 500;
    &:hover{
      background-color: #F5FFFA;
      color: ${props => props.theme.font.HoverColor};
    }
  }

  #sign_up {
    margin-top: 45%;
    margin-left: 60%;
  }

  a {
    color: #b94648;
  }
  .bottom{
    margin-top: 30px;
    color: #fff;
    span{
      cursor: pointer;
      &:hover{
        color:${props => props.theme.font.HoverColor};
      }
    }
  }
`


export default PanelWrapper