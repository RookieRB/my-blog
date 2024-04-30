import styled from "styled-components";

const SoundEffectPanelWrapper = styled.div`
  padding: 30px 0 30px 30px;
  
  .SoundEffectPanel-topSelect{
    display: flex;
    border-bottom: 1px solid #eaedf1;
    justify-content: center;
    align-items: center;
    margin-right: 30px;
    .SoundEffectPanel-topSelect-item{
      font-size: 20px;
      padding: 5px 40px 15px 0;
      hr{
        border: 2px solid transparent;
        width: 15px;
        margin: 5px auto;
      }
      &:hover{
        cursor: pointer;
      }
    }
    .active{
      font-weight: 700;
      hr{
        border: 2px solid red;
       
      }
    }
    .SoundEffectPanel-topSelect-right{
      flex: 1;
      text-align: end;
      font-size: 14px;
      color:#a8b3be;
      font-weight: 600;
      .SoundEffectPanel-topSelect-right-switch{
        margin-left: 15px;
      }
    }
  }
  .SoundEffectPanel-content{
    overflow-y: scroll;
    height: 380px;
    scrollbar-width: thin;
    scrollbar-color: rgb(197, 200, 205) #fff;
  }

`


export default SoundEffectPanelWrapper