import PropTypes from 'prop-types'
import React, { memo } from 'react'

import CardWrapper from './style'
import CommentSVG from '@/assets/svg/page-card/CommentSVG'
import EyeSVG from '@/assets/svg/page-card/EyeSVG'
import FolderSVG from '@/assets/svg/page-card/FolderSVG'
import TimeSVG from '@/assets/svg/page-card/TimeSVG'
import MoreSVG from '@/assets/svg/page-card/MoreSVG'

const PageCardV2 = memo((props) => {
  // 是否左边显示图片
  const { isLeftShowImg = false, infoData}  = props

  return (
    <CardWrapper>
      <div className="pageCard">
        {
          isLeftShowImg
          &&
          <div className="rightPage">
            <img src={infoData?.articleImg} alt=""/>
          </div>
        }
        <div className="leftPage">
            <div className="page-title">
              <h3>
                {infoData?.title}
              </h3>
            </div>
            <div className="page-description">
              <p>
              {infoData?.articleSummary}
              </p>
            </div>
            <div className="page-info">
              <div className="hot-look">
                <EyeSVG/>
                <span>
                  {infoData?.readCount}  热度
                </span>
              </div>
              <div className="comment-count">
                <CommentSVG/>
                <span>
                  {infoData?.commentCount} 条评论
                </span>
              </div>
              <div className="publish-user">
                <FolderSVG/>
                <span>
                  {infoData?.articleUser}
                </span>
              </div>
             
            </div>
            {
              !isLeftShowImg
                &&
              <div className="page-bottom">
                <div className="page-more">
                  <MoreSVG/>
                </div>
                <div className="publish-date">
                    <TimeSVG/>
                    <span>
                      发布于 {infoData?.pushDate}
                    </span>
                </div>
              </div>
            }
            {
              isLeftShowImg
                &&
                
              <div className="page-bottom">
                <div className="publish-date-left">
                    <TimeSVG/>
                    <span>
                      发布于 {infoData?.pushDate}
                    </span>
                </div>
                <div className="page-more">
                  <MoreSVG/>
                </div>
               
              </div>
            }
           
           
        </div>
        {
          !isLeftShowImg
          &&
          <div className="rightPage">
            <img src={infoData?.articleImg} alt=""/>
          </div>
        }
      </div>
    
    </CardWrapper>
  )
})

PageCardV2.propTypes = {
  isLeftShowImg: PropTypes.bool,
  infoData: PropTypes.object
}

export default PageCardV2