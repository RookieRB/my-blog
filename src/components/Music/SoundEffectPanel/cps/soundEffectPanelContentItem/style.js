import styled from 'styled-components'


const SoundEffectPanelContentItemWrapper = styled.div`
 
  .soundEffectPanel-contentItem-title{
    padding: 25px 0 15px;
    color: #b2b3b7;
    font-size:15px;
  }
  .soundEffectPanel-contentItem-body{
    display: flex;
    flex-wrap: wrap;
   
    .soundEffectPanel-contentItem-item{
      position: relative;
      padding: 20px 20px;
      white-space: nowrap;
      background-color: #eaedf1;
      margin: 0 20px 10px 0;
      border-radius: 12px;
      border: 1px solid  #eaedf1;
      
      .soundEffectPanel-contentItem-item-name{
        font-size: 18px;
      }
      .soundEffectPanel-contentItem-item-subtitle{
        padding-top: 5px;
        font-size: 14px;
        color: #b2b3b7;
      }
      &:hover{
        background-color: rgb(226, 229, 233);
        cursor: pointer;
      }
      .soundEffectPanel-contentItem-click{
        position: absolute;
        bottom: 7px;
        right: 10px;
        display: none;
        svg{
          width: 20px;
          height: 20px;
        }
      }
    }
    .active{
      border: 1px solid red;
      .soundEffectPanel-contentItem-click{
        display: block;
      }
    }
    .soundEffectPanel-contentItem-size-v1{
      flex:  0 0 41.2%;
    }
    .soundEffectPanel-contentItem-size-v2{
      flex:  0 0 24.5%;
    }
    
  }

`

export default SoundEffectPanelContentItemWrapper