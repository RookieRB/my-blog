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
  .messagePanel{
    position: absolute;
    top: 100vh;
    height: 2000px;
    width: 100%;
    background-color: #fff;
  }
`

export default PageLeaveMessageWrapper