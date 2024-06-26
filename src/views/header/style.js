import styled from "styled-components";


const HeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 60px;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: popUp 1.5s ease;
  .left-logo{
  }
  .right-container{
    
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 8px;
    .lower-container{
      flex: 1;
    }
    .user-avatar{
      width: 45px;
      margin-bottom:10px;
      margin-right: 10px;
    

    }
  }
  &:hover{
    background-color: rgba(0,0,0,.5);
  }
`

export default HeaderWrapper