import styled from 'styled-components'


const CircleButtonWrapper = styled.button`

  padding: 0.5em 4em;
  background-color: transparent;
  border-radius: .3em;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: .5s;
  font-weight: 400;
  font-size: 17px;
  border: 1px solid;
  font-family: inherit;
  text-transform: uppercase;
  background-color: var(--button-color);
  white-space: nowrap;
  z-index: 1;
  color: #fff;
  &::before,
  &::after {
    content: '';
    display: block;
    width: 50px;
    height: 50px;
    transform: translate(-50%, -50%);
    position: absolute;
    border-radius: 50%;
    z-index: -1;
    background-color: var(--primary-color);
    transition: 1s ease;
  }
  &::before{
    top: -1em;
    left: -1em;
  }
  &::after{
    left: calc(100% + 1em);
    top: calc(100% + 1em);
  }
  &:hover{

    &::before,
    &::after{
      height: 410px;
      width: 410px;
    }
  }
  &:active{
    filter: brightness(.8);
  }
`


export default CircleButtonWrapper