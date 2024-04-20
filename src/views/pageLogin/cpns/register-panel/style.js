import styled from 'styled-components'



const RegisterWrapper = styled.div`
  position:absolute;
  top: 100px;
  right: 0;
  width: 18%;
  height: 600px;
  padding: 10px 40px;
  background-color: #00000060;
  margin: auto;
  text-align: center;
  border-radius: 10px;
  padding: 50px 50px;
  
  .name{
    font-size: 25px;
    color: #ffffff90;
    padding: 50px 20px;
  }
  .input-box{
    border-bottom: 1px solid #fff;
    padding: 0 10px;
    margin-top: 40px;
    input{
      height: 50%;
      width: 90%;
      border: 0;
      outline: none;
      background: transparent;
    }
    
  }
  .agree{
    padding-left: 12px;
    padding-top: 50px;
    input{

    }
    span{
      color:#F5FFFA;
    } 
  }
  button{
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
  .bottom{
    padding-top: 40px;
    color:#F5FFFA;
    span{
      margin-left: 10px;
      color:#F5FFFA;
      cursor: pointer;
      font-size: 19px;
      &:hover{
        color: ${props => props.theme.font.HoverColor};
      }
    }
  }

`


export default RegisterWrapper;