import styled from 'styled-components'


const UserDialogWrapper = styled.div`
 
  display: flex;
  flex-direction: row;
  .userDialog-left{
    .userDialog-img{
      width:40px;
      height: 40px;
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 100%;   
        transition: transform 1.5s ease;
        &:hover{
          transform: rotate(360deg)
        }   
      }
      
    } 
  }
  .userDialog-right{
    width: 100%;
    .userDialog-info{
      margin-left: 10px;
      width: 100%;
      .userDialog-info-top{
        color: var(--primary-color);
        font-size: 15px;
        font-weight: 600;
      }
      .userDialog-info-bottom{
        margin-top: 5px;
        font-size: 14px;
        display: flex;
      
        .userDialog-info-bottom-button{
          flex: 1;
          text-align: end;
        }
      }
    }
    .userDialog-content{
      box-sizing: border-box;
      margin: 12px 0 25px;
      padding: 18px 20px;
      border-radius: 12px;
      background-color: var(--comment-color);
    }
  }


`

export default UserDialogWrapper