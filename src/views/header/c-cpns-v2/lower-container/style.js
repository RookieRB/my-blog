import styled from "styled-components";


const ContainerWrapper = styled.div`

  .whole{
    display:flex;
    justify-content: end;
    .item{
      display: flex;
      position: relative;
      color:#fff;
      margin: auto 20px;
      
      &::after{
        content: '';
        display: block;
        position:absolute;
        bottom: 0;
        height: 4px;
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

      .item-icon{
        margin-right: 6px;
      }
      .item-title{

      }
    }
  }
  
`

export default ContainerWrapper