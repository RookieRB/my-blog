import styled from "styled-components";

const FlyButtonWrapper = styled.button`
  font-family: inherit;
  font-size: 20px;
  background: royalblue;
  color: white;
  padding: 0.5rem 1.6rem;
  padding-left: 0.9em;
  display: flex;
  align-items: center;

  border: none;
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.2s;
  cursor: pointer;
  span {
    display: block;
    margin-left: 0.3em;
    transition: all 0.3s ease-in-out;
    font-size: 17px;
  }

  svg {
    display: block;
    transform-origin: center center;
    transition: transform 0.3s ease-in-out;
  }
  &:hover {
    .svg-wrapper {
      animation: fly-1 0.6s ease-in-out infinite alternate;
    }
    svg{
      transform: translateX(1.2em) rotate(45deg) scale(1.1);
    }
    span{
      transform: translateX(5em);
    }
  }
  &:active {
    transform: scale(0.95);
  }

`

export default FlyButtonWrapper;