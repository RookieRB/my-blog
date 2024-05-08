import React, { memo } from 'react'
import PropTypes from 'prop-types'

import ArticleRecommendItemWrapper from './style'


const ArticleRecommendItem = memo((props) => {
  const {itemData} = props
  return (
    <ArticleRecommendItemWrapper>
      <div className="article-recommend-item-img">
        <img src={itemData.articleImg} alt="" />
      </div>
      <div className="article-recommend-item-content">
        <div className="article-recommend-item-title">
          <a href="">{itemData.title}</a>
        </div>
        <div className="article-recommend-item-time">
          {itemData.pushDate}
        </div>
      </div>

    </ArticleRecommendItemWrapper>
  )
})
ArticleRecommendItem.propTypes = {
  itemData: PropTypes.object.isRequired
}
export default ArticleRecommendItem