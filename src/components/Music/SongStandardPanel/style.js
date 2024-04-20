import styled from 'styled-components'


const SongStandardPanelWrapper = styled.div`
  margin-top: 10px;
  .songStandard-panel-title{
    display: flex;
    align-items:center;
    margin-left: 10px;
    .songStandard-panel-title-name{
      color: #555c6e;
      font-weight: 600;
      margin-right: 3px;
    }
    svg{
      width: 17px;
      height: 17px;
    }
  }
  .songStandard-panel-subtitle{
    font-size: 12px;
    color: #aaaeb7;
    padding: 10px;
  }

`


export default SongStandardPanelWrapper