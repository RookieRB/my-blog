import styled from 'styled-components'


const MusicWrapper = styled.div`
  background-color: #FFF5EE;
  .top-img{
    width: 100vw;
    height: 600px;
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .content{ 
    margin-top: 100px !important;
    display:flex;
    margin: 0 auto;
    width: 1057px;
    height: 752px;
    overflow: hidden;
    border-radius: 12px;
    box-shadow: 0px 0px 4px  0 rgba(255,106,106,.6);
  }
  .footer{
    height: 1000px;
  }

 
`


export default MusicWrapper