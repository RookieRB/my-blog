import styled from 'styled-components'


const MessagePanelWrapper = styled.div`
  .messagePanel-top{
    position: relative;
    height: 960px;
    img{
      height: 100%;
      width: 100%;
      object-fit: cover;
      z-index: -1;
    }
    .messagePanel-top-title{
      position: absolute;
      top: 10%;
      left: 40%;
      font-size: 5em;
      color: #FFE4E1;
    }
    .messagePanel-poem{
      position:absolute;
      top: 30%;
      left: 0;  

      display: flex;
      flex-direction: column;
      text-align: center;

      width:100%;
      height: 500px;
      font-size: 2em;
      font-family: "KaiTi";
      color:	#FFFAFA;
      .poem-title{
       font-size: 60px;
      }
      .poem-author{

      }
      .poem-content{
        p{
          margin-top:5px;
        }
      }
    }
  }
  
`


export default MessagePanelWrapper