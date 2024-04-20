import styled from 'styled-components'


const MusicLeftPanelMenuBoxWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 10px;
  padding-bottom: 20px;
  .title{
    display: flex;
    .title-left{
      margin-left: 10px;
      display: flex;
      align-items: center;
      
      span{
        font-size: 14px;
        margin-right: 6px;
        
      }
    }
    svg{
      width: 14px;
      height: 14px;
    }
    .last-svg{
      flex:1;
      text-align: end;
      &:hover{
        cursor: pointer;
        svg{
          path{
            fill: #fc3d49;
          }
        }
      }
    }
  }
  .box-menu-content{ 
    .box-menu-item{
      display: flex;
      height: 35px;
      padding: 2px 8px;
      align-items: center;
      border-radius: 10px;
      margin-top: 5px;
      &:hover{
        cursor: pointer;
        background-color: #e4e8ec;
      }
      .inner-img{
        height: 30px;
        width:  30px;
        border-radius: 4px;
        img{
          width:100%;
          height: 100%;
          object-fit:cover;
        }
      }
      .inner-name{
        flex:1;
        padding-left: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
  hr{
    margin-top: 30px;
    border: 1px solid #e9ecf0;
  }
`

export default MusicLeftPanelMenuBoxWrapper