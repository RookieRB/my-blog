import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Loading3QuartersOutlined } from '@ant-design/icons'

import ArticleRecommendWrapper from './style'
import ArticleRecommendItem from './articleRecommendItem'

const ArticleRecommend = memo((props) => {
  const {recommendData} = props
  return (
    <ArticleRecommendWrapper>
      <div className="recommend-title">
        <Loading3QuartersOutlined className="refresh-icon" />
        <h3>推荐文章</h3>
      </div>
      <div className="recommend-content">
        {
          recommendData?.map((item, index) => (
            <ArticleRecommendItem key={index} itemData={item} />
          ))
        }
      </div>
    </ArticleRecommendWrapper>
  )
})
ArticleRecommend.propTypes ={
  recommendData: PropTypes.array.isRequired
}
export default ArticleRecommend