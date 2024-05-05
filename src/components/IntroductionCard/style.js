import styled from 'styled-components'


const IntroductionCardWrapper = styled.div`
  position: relative;
  width: 780px;
  height: 500px;
  background-color: #fff;
  .cover{
      position: absolute;
      top: 190px;
      left: 25px;
      width: 220px;
      z-index: 2;
      border-radius: 500px;
      border: 10px solid #fff;
      box-shadow: 0 5px 10px #00000065;
  }
  .IntroductionCard-header{
    position: relative;
    height: 340px;
    overflow: hidden;
    z-index: 1;
    &::before{
      content:'';
      position: absolute;
      width: 100%;
      height: 100%;
      background: url(${require("@/assets/imgs/bg4.jpg")});
      background-size: cover;
      z-index: -1;
      transform: skewY(-4deg);
      transform-origin: 0 0;
    }
   
    .IntroductionCard-data{
      padding: 190px 0 0 280px;
      text-shadow: 0 0 20px #000;
      .IntroductionCard-title1{
        position: relative;
        color: white;  
        font: 900 50px '';
        margin-bottom: 5px;
        span{
          position: absolute;
          top: 17px;
          margin-left: 12px;
          background-color: #ffe44c;
          border-radius: 5px;
          color: #000;
          font-size: 14px;
          padding: 0 4px;
        }
      }

      .IntroductionCard-title2{
        color: #fff;
        font: 500 24px '';
      }
    }
  }
  .IntroductionCard-footer{
    line-height: 26px;
    color: #444;
    .IntroductionCard-footer-tags{
      padding-left: 30px;
      padding-top: 100px;
      width: 250px;
      text-align: center;
      float: left;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;

      .IntroductionCard-footer-tag{
        background-color: rgb(149,178,255);
        color: #fff;
        border-radius: 10px;
        padding: 2px 10px;
        font-size: 14px;
        margin-right: 4px;
        margin-top: 12px;
        &:hover{
          cursor: pointer;
          background-color: #eee4ad;
          color: #444;
        }
      }
    }
    .introduce{
      padding: 25px 0 0 35px;
    }
  }

`

export default IntroductionCardWrapper