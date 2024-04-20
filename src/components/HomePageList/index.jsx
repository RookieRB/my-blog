import PropTypes from 'prop-types'
import React, { memo } from 'react'
import {ReloadOutlined,RightOutlined} from '@ant-design/icons'


import ListWrapper from './style'

const PageList = memo((props) => {
  const {pageInfo} = props
  return (
    <ListWrapper>
        <div className='top'>
            <div className="title">{pageInfo.tileName}</div>
            <div className="change">换一换<ReloadOutlined /></div>
        </div>
        <div className="contetn">
            {pageInfo.content.map((item,index) => {
                return <div className='item' key={index}>{item.pageName}</div>
            })}
        </div>
        <div className="footer">
            查看更多<RightOutlined />
        </div>
    </ListWrapper>
  )
})

PageList.propTypes = {
    pageInfo: PropTypes.object,
}

export default PageList