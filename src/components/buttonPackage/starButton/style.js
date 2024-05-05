import styled from 'styled-components'

const StarButtonWrapper = styled.div`
  .starButton{
    position: relative;
    padding: 12px 35px;
    background: var(--button-color);
    font-size: 17px;
    font-weight: 500;
    color: #181818;
    border: 3px solid var(--button-color);
    border-radius: 8px;
    transition: all .3s ease-in-out;
    cursor: pointer;
    .star{
      filter: drop-shadow(0 0 0 #fffdef);
    }
    .star-1 {
      position: absolute;
      top: 20%;
      left: 20%;
      width: 25px;
      height: auto;

      z-index: -5;
      transition: all 1s cubic-bezier(0.05, 0.83, 0.43, 0.96);
    }

    .star-2 {
      position: absolute;
      top: 45%;
      left: 45%;
      width: 15px;
      height: auto;
      
      z-index: -5;
      transition: all 1s cubic-bezier(0, 0.4, 0, 1.01);
    }

    .star-3 {
      position: absolute;
      top: 40%;
      left: 40%;
      width: 5px;
      height: auto;

      z-index: -5;
      transition: all 1s cubic-bezier(0, 0.4, 0, 1.01);
    }

    .star-4 {
      position: absolute;
      top: 20%;
      left: 40%;
      width: 8px;
      height: auto;

      z-index: -5;
      transition: all .8s cubic-bezier(0, 0.4, 0, 1.01);
    }

    .star-5 {
      position: absolute;
      top: 25%;
      left: 45%;
      width: 15px;
      height: auto;
      filter: drop-shadow(0 0 0 #fffdef);
      z-index: -5;
      transition: all .6s cubic-bezier(0, 0.4, 0, 1.01);
    }

    .star-6 {
      position: absolute;
      top: 5%;
      left: 50%;
      width: 5px;
      height: auto;
      filter: drop-shadow(0 0 0 #fffdef);
      z-index: -5;
      transition: all .8s ease;
    }
    &:hover{
      
      background: transparent;
      color: var(--button-color);
      box-shadow: 0 0 25px #fec1958c;
      .star-1{
        position: absolute;
        top: -80%;
        left: -30%;

        filter: drop-shadow(0 0 10px #fffdef);
        z-index: 2;
      }
      .star-2{
        position: absolute;
        top: -25%;
        left: 10%;
   
        filter: drop-shadow(0 0 10px #fffdef);
        z-index: 2;
      }
      .star-3{
        position: absolute;
        top: 55%;
        left: 25%;

        filter: drop-shadow(0 0 10px #fffdef);
        z-index: 2;
      }
      .star-4{
        position: absolute;
        top: 30%;
        left: 80%;

        filter: drop-shadow(0 0 10px #fffdef);
        z-index: 2;
      }
      .star-5{
        position: absolute;
        top: 25%;
        left: 115%;

        filter: drop-shadow(0 0 10px #fffdef);
        z-index: 2;
      }
      .star-6{
        position: absolute;
        top: 5%;
        left: 60%;
  
        filter: drop-shadow(0 0 10px #fffdef);
        z-index: 2;
      }
    }
  }
  .fil0 {
    fill: #FFFDEF
  }
`

export default StarButtonWrapper