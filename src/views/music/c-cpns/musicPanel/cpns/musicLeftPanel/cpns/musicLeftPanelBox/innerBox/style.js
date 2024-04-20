import styled from 'styled-components'


const MusicLeftPanelInnerBoxWrapper = styled.div`
    display: flex;
    height: 25px;
    align-items: center;
    padding: 5px;
    margin-top: 2px;
    border-radius: 8px;
    &:hover{
      cursor: pointer;
      background-color: #e4e8ec;
    }
    svg{
      width: 18px;
      height: 18px;
      path{
        fill: #787f8d;
      }
    }
    span{
      margin: 0 10px;
      font-size: 14px;
      line-height: 12px;
      color: #6e7585;
    }
`


export default MusicLeftPanelInnerBoxWrapper