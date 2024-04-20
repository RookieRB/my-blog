import styled from "styled-components";


const ContainerWrapper = styled.div`
  flex:0 0 700px;
  align-items: start;
  .whole{
    width:100%;
    display: flex;
    transform: translateX(100%); /* 初始位置在父元素右外边 */
    transition: transform 1s ease;
    .item{
      color:#444;
      padding:26px 0;
      margin-left: 40px;
      &:last-child:{
        margin-left: 0;
      }
      &:hover{
        border-bottom: 5px solid #FE9600;
        cursor: pointer;
      }
    }
  }
  
`

export default ContainerWrapper