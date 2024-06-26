import React, { memo } from 'react'

import AnnouncementWrapper from './style'

const Announcement = memo(() => {
  return (
    <AnnouncementWrapper>
      <div className="announcement-title">
      <svg t="1715177998180" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="27931" width="20" height="20"><path d="M511.406 1.187C229.436 1.187 0.594 229.732 0.594 512c0 281.971 228.545 510.813 510.812 510.813 281.971 0 510.813-228.545 510.813-510.813S793.674 1.187 511.406 1.187zM849.475 736.39c0 22.557-18.403 40.96-41.257 40.96H230.623c-22.855 0-41.257-18.403-41.257-40.96V364.78c0-22.557 18.402-40.96 41.257-40.96h95.276l136.237-121.099c-2.968-7.123-4.453-15.137-4.453-23.448 0-34.133 27.604-62.033 62.034-62.033 34.133 0 62.034 27.603 62.034 62.033 0 8.31-1.484 16.028-4.452 23.448l136.236 121.1h95.277c22.854 0 41.256 18.402 41.256 40.96V736.39h-0.593z" fill="#F08531" p-id="27932"></path><path d="M549.398 233.294c-8.904 5.046-18.996 7.717-29.978 7.717-10.982 0-21.073-2.671-29.978-7.717l-101.51 90.23h262.679l-101.213-90.23zM271.88 612.322h330.055v41.257H271.879z m0-165.027h206.284v41.257H271.88z m0 82.514v41.257h454.122v-41.257H526.544z" fill="#F08531" p-id="27933"></path></svg>
        <h3>公告</h3>
      </div>
      <div className="announcement-content">
        <p>这里是个人博客的公告栏，欢迎大家关注！</p>
      </div>
    </AnnouncementWrapper>
  )
})

export default Announcement