import styled from "styled-components";


const PanelUtilsWrapper = styled.div` 
  width:100%;
  height:100%;
  background-color: rgba(255,255,255,.4);
  border-radius: 10px;
  
  .topControl{
    display: flex;
    flex-wrap: wrap;
  }
  .middleControl{
    margin-top: 20px;
    display:flex;
    padding:10px 10px;
    .sound{
      padding: 5px 10px;
      svg{
        width: 25px;
        height:25px;
      }
    }
    .slider{
      flex:1;
      margin-right: 50px;
    }
  }
`

export default PanelUtilsWrapper