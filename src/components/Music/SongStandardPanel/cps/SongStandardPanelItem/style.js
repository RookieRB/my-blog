import styled from 'styled-components'


const SongStandardPanelItemWrapper = styled.div`
  display: flex;
  padding: 12px 10px;
  .songStandard-panel-item-icon{
    margin-right: 10px;
    svg{
      width: 25px;
      height:25px;
    }
  }
  .songStandard-panel-item-right{
    .songStandard-panel-item-right-top{
      font-size: 17px;
      padding-bottom: 5px;
      font-weight: 400;
    }
    .songStandard-panel-item-right-bottom{
      display: flex;
      font-size: 11.5px;
      font-weight: 300;
      color: #aeb2bb;
      .songStandard-panel-item-right-bottom-cost{
        padding-right: 4px;
      }
      .songStandard-panel-item-right-bottom-description{

      }
    }
  }
  &:hover{
    cursor: pointer;
    background-color: #f2f3f4;
  }
`


export default SongStandardPanelItemWrapper