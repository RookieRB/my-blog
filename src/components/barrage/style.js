import styled from 'styled-components'

const BarrageWrapper = styled.div`
  position: absolute;
  
  right: ${props => props.right};
  top:0;
  display: flex;
  align-items: center;
  padding: 5px;
  overflow-x: hidden;
 
  background: rgba(0,0,0,0.7);
  border-radius: 100px;
  color: #fff;
  z-index: 1;
  animation: scroll-left-barrage ${props => props.speed} linear;
  /* transform: translate3d(970.122px, 0px, 0px); */
  .barrage-img{
    width: 30px;
    height: 30px;
    overflow: hidden;
    border-radius: 50px;
    .barrage-img-avatar{
      width:100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .barrage-msg{
    white-space: nowrap;
  }

`


export default BarrageWrapper