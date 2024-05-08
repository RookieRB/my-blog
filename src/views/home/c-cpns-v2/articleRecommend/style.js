import styled from 'styled-components'

const ArticleRecommendWrapper = styled.div`
  padding: var(--card-padding);
  box-shadow: var(--card-box-shadow);
  border-radius: var(--card-border-radius);
  &:hover{
    box-shadow: var(--card-hover-box-shadow);
  }
  .recommend-title{
    display: flex;
    h3{
      margin-left: 10px;
      font-weight: 500;
    }
    .refresh-icon{
      transition: transform 0.5s ease-in-out;
      cursor: pointer;
      &:hover{
        transform: rotate(360deg)
      }
    }
  }
  .recommend-content{
    margin-top: 10px;
  }

`


export default ArticleRecommendWrapper