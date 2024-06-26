import styled from "styled-components";

const GlassButtonWrapper = styled.button`
  position: relative;
  padding: 10px 45px;
  background: #fec195;
  font-size: 12px;
  font-weight: 500;
  color: #181818;
  cursor: pointer;
  border: 1px solid #fec195;
  border-radius: 8px;
  filter: drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.2));

  &:hover{
    border: 1px solid #f3b182;
    background: linear-gradient(
      85deg,
      #fec195,
      #fcc196,
      #fabd92,
      #fac097,
      #fac39c
    );
    animation: wind 2s ease-in-out infinite;
    .icon-1{
      animation: slay-1 3s cubic-bezier(0.52, 0, 0.58, 1) infinite;
      transform: rotate(10deg);
    }
    .icon-2{
      animation: slay-2 3s cubic-bezier(0.52, 0, 0.58, 1) 1s infinite;
      transform: rotate(0);
    }
    .icon-3{
      animation: slay-3 2s cubic-bezier(0.52, 0, 0.58, 1) 1s infinite;
      transform: rotate(0);
    }
  }
  .icon-1{
    position: absolute;
    top: 0;
    right: 0;
    width: 25px;
    transform-origin: 0 0;
    transform: rotate(10deg);
    transition: all 0.5s ease-in-out;
    filter: drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.3));
  }
  .icon-2{
    position: absolute;
    top: 0;
    left: 25px;
    width: 12px;
    transform-origin: 50% 0;
    transform: rotate(10deg);
    transition: all 1s ease-in-out;
    filter: drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.5));
  }
  .icon-3{
    position: absolute;
    top: 0;
    left: 0;
    width: 18px;
    transform-origin: 50% 0;
    transform: rotate(-5deg);
    transition: all 1s ease-in-out;
    filter: drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.5));
  }
`

export default GlassButtonWrapper;