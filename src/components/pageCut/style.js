import styled from "styled-components";


const PageCutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  .pageCut-header{
    width: 100%;
    height: 100vh;
    overflow: hidden;

    clip-path: polygon(0 0,100% 0%, 100% 100%, 0 100%);
    transition: clip-path 0.5s ease;
    .pageCut-header-img{
      width: 100%;
      height: 100%;
      object-fit: cover;
      transform: scale(1);
      transition: transform 0.5s ease;
    }
  }
  .pageCut-content{
    width: 1200px;
    height: 1000px;
    margin: 50px auto;
  }
`


export default PageCutWrapper