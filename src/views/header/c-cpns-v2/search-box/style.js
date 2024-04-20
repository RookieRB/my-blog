import styled from 'styled-components'


const SearchBoxWrapper = styled.div`

  margin: auto 15px;
  z-index: 99;
  // 动画
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  .search-icon-out{
    .icon{
      &:hover{
        cursor: pointer;
        path{
          fill: #FE9600;
        }
      }
    }
  }
  .fade-in{
    // 动画
    opacity: 0;
    animation: fadeIn 4s forwards;
  }
  .searchPage{
    position: absolute;
    display: flex;
    width: 100vw;
    height:100vh;
    bottom: 0;
    left: 0;
    top: 0;
    right: 0;
    background-color: #fff;
    visibility: hidden;
    
    .location{
      margin: 10% auto;
      .text{
        display: flex;
        align-items: start;
        margin-left: 30px;
        font-size: 18px;
        font-weight: 600;
        padding-bottom: 20px;
      }
      .search-content{
        display: flex;  
        width: 600px;
        height: 55px;
        border: 1px solid #ddd;
        border-radius: 50px;
        .search-icon-inner{
          margin: auto 0;
          margin-left: 20px;
          .icon{
            width: 40px;
            height: 40px;
          } 
        }
        input{
          border: none;
          outline: none;
          margin: auto 0;
          width: 75%;
          height: 50%;
          padding: 10px;
          padding-right: 50px;
          font-size: 25px;
        }
      }
    }
    .close{
      width:40px;
      height:40px;
      margin: 20px 20px;
      &:hover{
        cursor: pointer;
        .icon{
          path{
            fill: red;
          }
        }
      }
    }    
  }
  
`


export default SearchBoxWrapper