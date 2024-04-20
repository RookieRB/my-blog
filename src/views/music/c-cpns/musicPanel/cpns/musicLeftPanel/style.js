import styled from 'styled-components'

const LeftPanelWrapper = styled.div`
  
  .top{
    display: flex;
    height: 45px;
    padding: 20px 10px;
    align-items: center;
    span{
      display: 1;
      margin: auto 10px;
      font-size:  25px;
      font-family: STLiti;
      color: #4d5668;
    }
    svg{
      width:  30px;
      height: 30px;
    } 
  }
  hr{
    margin: 0 auto;
    width: 150px;
    border: 1px solid red;
  }
  .content-box{
    height: 600px;
    width: 100%;
    background-color: #fff;
    overflow-y: scroll; /* 启用垂直滚动条 */
    background-color: #f0f3f6;
    scrollbar-width: thin;
    scrollbar-color: #bec3ca #f0f3f6 ;
    .inner-box{
      margin: 0 10px;
    }
    
  }
`


export default LeftPanelWrapper