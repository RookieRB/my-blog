import styled from "styled-components";


const ContainerWrapper = styled.div`
  flex:0 0 700px;
  align-items: start;
  .whole{
    width:100%;
    height: 100%;
    display: flex;
    transform: translateX(100%); /* 初始位置在父元素右外边 */
    transition: transform 1s ease;
    .item{
      color:#444;
      margin: auto ;
      box-sizing: border-box;
      position: relative;
      &::after{
        content: '';
        position: absolute;
        display: block;
        bottom: -155%;
        height: 6px;
        background-color: var(--primary-color);
        width: 100%;
        max-width:0;
        transition: max-width .5s ease-in-out;
      }
     
      
      &:last-child:{
        margin-left: 0;
      }
      &:hover{
        /* border-bottom: 5px solid #FE9600; */
        cursor: pointer;
       
        &::after{
          max-width: 100%;
        }
      }
    }
  }
  
`

export default ContainerWrapper