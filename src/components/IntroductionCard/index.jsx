import React, { memo } from 'react'

import IntroductionCardWrapper from './style'
import tagData from '@/assets/data/tagData'



const IntroductionCard = memo(() => {
  return (
    <IntroductionCardWrapper>
      <img src={require("@/assets/imgs/bg9.jpg")} alt="" className='cover'/>
      <div className='IntroductionCard-header'>
        <div className="IntroductionCard-data">
          <div className='IntroductionCard-title1'>我の前端小屋<span>BILIBILI</span></div>
          <div className='IntroductionCard-title2'>前端开发者</div>
        </div>
      </div>
      <div className='IntroductionCard-footer'>
        <div className="IntroductionCard-footer-tags">
          {
            tagData.map((item,index) => {
              return (
              <span className='IntroductionCard-footer-tag' key={index}>
                {item}
              </span>
              )
            })
          }
        </div>
        <div className="introduce">
          <p>
          您好！我是一名专业的前端开发者，专注于创造直观、动态且用户友好的网页界面。我熟练掌握HTML、CSS、JavaScript等前端技术，并使用React、Vue等现代框架来构建高性能的应用程序。我热衷于通过细节优化和创新设计，提升用户体验。在前端项目设计中，我遵循最佳实践，确保代码的可维护性和可扩展性，同时注重网站的性能优化和跨浏览器兼容性。期待与您合作，共同打造出色的网络产品。
          </p>
        </div>
      </div>
    </IntroductionCardWrapper>
  )
})

export default IntroductionCard