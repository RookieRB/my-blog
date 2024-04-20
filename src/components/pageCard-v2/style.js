import styled from "styled-components";


const CardWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  .pageCard{
    margin: auto;
    width: 780px;
    height: 300px;
    display: flex;
    border-radius:15px;
    overflow:hidden;
    background-color: transparent;
    box-shadow: 0 1px 20px -6px rgba(0,0,0,.5); 
    &:hover{
      box-shadow: 0 1px 20px 0px rgba(0,0,0,.5);
      transition: box-shadow 0.5s ease;
      .rightPage{
        img{
          transform: translate(-50%,-50%) scale(1.3) rotate(10deg);
        }
      }
    }
    
    .leftPage{
      flex:1;
      padding: 40px 40px 0 20px;
      
      .page-title{
        height: 45px;
        font-size: 1em;
        margin-bottom:20px;
        /* overflow:hidden; */
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2; /* 限制在一个块元素显示的文本的行数 */
        overflow: hidden;
        text-overflow: ellipsis;
        &:hover{
            cursor: pointer;
            color: ${props => props.theme.font.hoverColor};
          }
      }
      .page-description{  
        height: 80px;
        font-size: 1.0em;
        margin-bottom:30px; 
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4; /* 限制在一个块元素显示的文本的行数 */
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .page-info{
        height: 20px;
        width: 100%;
        display: flex;
        font-size: 0.8em;  
        font-family:STKaiti;
        padding-bottom: 20px;
        span{
          margin-left: 5px;
        }
        .hot-look{
          display: flex;
          padding-right: 15px
        }
        .comment-count{
          display: flex;
          padding-right: 15px;
          &:hover{
            cursor: pointer;
            color: ${props => props.theme.font.hoverColor};
          }
        }
        .publish-user{
          display: flex;
          padding-right: 15px;
          &:hover{
            cursor: pointer;
            color: ${props => props.theme.font.hoverColor};
          }
        }
        
      }
      .page-bottom{
        height:45px;
        display: flex;
        .page-more{
          &:hover{
            cursor: pointer;
            svg{
              >path{
                fill: ${props => props.theme.font.hoverColor};
              }
            }
          }
          svg{
            height: 40px;
            width: 40px;
            >path{
              fill: #D3D3D3;
            }
          }
        }
        .publish-date-left{
          flex:1;
          display: flex;
          margin: auto 0; 
          justify-content: start;
          font-size: 12px;
          svg{
            width: 12px;
            height:12px;
          }
          span{
            margin-left: 3px;
          }
        }
        .publish-date{
          flex:1;
          display: flex;
          margin: auto 0; 
          justify-content: end;
          font-size: 12px;
          svg{
            width: 12px;
            height:12px;
          }
          span{
            margin-left: 3px;
          }
        }
      }
      
    }
    .rightPage{
      position:relative;
      flex:0 0 50%;


      overflow: hidden; /* 隐藏溢出的部分 */
      display: flex; /* 使用Flexbox布局 */
      justify-content: center; /* 水平居中 */
      align-items: center; /* 垂直居中 */
      img{
        width:100%;
        height:100%;
       
        /* object-fit: cover;  */
        position:absolute;
        top:50%;
        left:50%;
        transform: translate(-50%, -50%);
        transition: transform 0.5s ease;
        
      }
    }
  }
  
`


export default CardWrapper