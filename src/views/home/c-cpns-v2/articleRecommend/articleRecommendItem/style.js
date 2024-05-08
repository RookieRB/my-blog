import styled from'styled-components';

const ArticleRecommendItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #F7F7F7;
  padding: 10px 0;
  .article-recommend-item-img{
    width: 60px;
    height: 60px;
    overflow: hidden;
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
      cursor: pointer;
      &:hover{
        transform: scale(1.1); 
      }
    }

  }
  .article-recommend-item-content{
    flex: 1;
    margin-left: 10px;
    .article-recommend-item-title{
      width: 100%;
      height: 40px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .article-recommend-item-time{
      margin-top: 5px;
      font-size: 14px;
      color: var(--Snow4-color);
    }
  }

`

export default ArticleRecommendItemWrapper