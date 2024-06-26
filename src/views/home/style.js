import styled  from "styled-components";

const HomeWrapper = styled.div`
  position: relative;
  >.content{
    justify-content: center;
    width: 100%;
    background-color: #fff;
    padding-top: 10px;
    display: flex;
    justify-content: center;
    .content-left{
      flex: 0 0 300px;
      .content-item{
        margin-top: 20px;
      }
      
    }
    .content-right{
      flex: 0 0 950px;
      margin-left: 30px;
      .get-more{
        width: 135px;
        height: 50px;
        border-radius: 25px;
        border: 1px solid #ddd;
        margin: 60px auto 0;
        display: flex;
        justify-content: center; /* 水平居中 */
        align-items: center; /* 垂直居中 */
        color: 	#CDC9C9;
        &:hover{
          color: 	${props => props.theme.font.hoverColor};
          box-shadow: 0 0  4px 1px ${props => props.theme.font.hoverColor};;
        }
      }
    }
  }

`


export default HomeWrapper