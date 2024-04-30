import styled from 'styled-components'


const MessagePanelWrapper = styled.div`
  .messagePanel-top{
    position: relative;
    height: 700px;
    img{
      height: 100%;
      width: 100%;
      object-fit: cover;
      z-index: -1;
    }
    .messagePanel-top-title{
      position: absolute;
      top: 40%;
      left: 40%;
      font-size: 5em;
      color: #fff;
    }
  }
  .poetry-appreciation{
    
  }
`


export default MessagePanelWrapper