import PropTypes from 'prop-types'
import React, { memo } from 'react'
import {NotificationOutlined,MoreOutlined} from '@ant-design/icons'

import AncWrapper from './style'


const Announcement = memo((props) => {
  return (
    <AncWrapper>
        <div className="top">

            <div className="title">
            <NotificationOutlined />公告</div>
            <div className="right">更多
            <MoreOutlined /></div>
        </div>

    </AncWrapper>
  )
})

Announcement.propTypes = {
    AncInfo: PropTypes.array
}

export default Announcement