import styled  from 'styled-components'


const PageLeaveMessageWrapper = styled.div`
  .leaveMessage-img{ 
    position: fixed;
    width: 100vw;
    height:100vh;
    z-index: -1;

    img{
      position: absolute;
      width: 100%;
      height: 100%;
      animation: bgMove 2s ease 0s 1 none;
      object-fit:  cover;
    }
  }
  .content{
    position: absolute;
    display: flex;
    top: 100vh;
    width: 100%;
    background-color: transparent;
    .messagePanel{
      margin: 0 auto;
      width: 1200px;
      height: 2000px;
      background-color: rgb(255,255,255,.6);
      .img{

      }
    }
  }
`

export default PageLeaveMessageWrapper