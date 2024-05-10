import styled from'styled-components';

const LogOutButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 125px;
  height: 45px;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition-duration: .3s;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.199);
  background-color: rgb(255, 65, 65);
  &:hover{
   
  
    transition-duration: .3s;
    .text{
      opacity: 1;
      width: 60%;
      transition-duration: .3s;
      padding-right: 10px;
    }
  }
  &:active{
    transform: translate(2px ,2px);
  }
  .sign {
    width: 20%;
    transition-duration: .3s;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 20px;
    .svg{
      width: 17px;
      .path{
        fill: white;
      }
    }
  }
  .text {
    position: absolute;
    right: 0;
    width: 0%;
    opacity: 0;
    color: white;
    font-size: 1.2em;
    font-weight: 600;
    transition-duration: .3s;
  }
`

export default LogOutButtonWrapper;