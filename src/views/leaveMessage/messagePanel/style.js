import styled from 'styled-components'


const MessagePanelWrapper = styled.div`
  .messagePanel-content{
   
    .messagePanel-content-title{
      font-size: 1.14rem;
      color: #797979;
      user-select:none;
      span{
        padding-right: 5px;
      }
    }
    .messagePanel-content-item{
      padding: 30px 0;
      border-bottom: 1px solid rgba(0,0,0,.1);
      .messagePanel-content-item-reply{
        margin-left: 50px;
      }
    }
  }
`


export default MessagePanelWrapper