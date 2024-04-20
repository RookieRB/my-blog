import styled from 'styled-components'


const MusicPanelWrapper = styled.div`
  width: 100%;  
  height:100%;
  display: flex;
  position: relative;
  z-index: 4;
  /* background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(7.5px);
  -webkit-backdrop-filter: blur(7.5px);
  border: 0px solid rgba(255, 255, 255, 0.18);
  box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;
  -webkit-box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;
  border-radius: 25px;
  -webkit-border-radius: 25px; 
  color: rgba(255, 255, 255, 0.6); */
  .left-Banner{
    width: 200px;
    height: 100%;
    background-color: #f0f3f6;
    /* background-color: rgba(255,255,255,.5); */
  }
  .right-content{
    flex:1;
    height: 100%;
    background-color: #f7f9fc;
    /* background-color: rgba(255,255,255,.5); */
  }
  .footer{
    position: absolute;
    bottom:0;
    width: 100%;
    height:80px;
  }
`


export default MusicPanelWrapper