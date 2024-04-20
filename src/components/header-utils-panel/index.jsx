import React, { memo } from 'react'
import {WeiboOutlined,
        GithubOutlined,
        TwitterOutlined,
        WechatOutlined,
        QqOutlined,
        TaobaoOutlined,
        ZhihuOutlined,
        TikTokOutlined
      } from '@ant-design/icons'
import { Slider } from 'antd';

import PanelUtilsWrapper from './style'
import SoundSVG from '@/assets/svg/header-utils/SoundSVG'
import HeaderUtilsBox from '@/components/header-utils-box'



const HeaderUtilsPanel = memo(() => {
  return (
    
    <PanelUtilsWrapper>

      <div className="topControl">
        <HeaderUtilsBox>
          <WeiboOutlined />
        </HeaderUtilsBox>

        <HeaderUtilsBox>
          <GithubOutlined />
        </HeaderUtilsBox>

        <HeaderUtilsBox>
          <TwitterOutlined />
        </HeaderUtilsBox>

        <HeaderUtilsBox>
        <WechatOutlined />
        </HeaderUtilsBox>
      
        <HeaderUtilsBox>
        <QqOutlined />
        </HeaderUtilsBox>
        
        <HeaderUtilsBox>
          <TaobaoOutlined />
        </HeaderUtilsBox>

        <HeaderUtilsBox>
          <ZhihuOutlined />
        </HeaderUtilsBox>

        <HeaderUtilsBox>
          <TikTokOutlined />
        </HeaderUtilsBox>

      </div>
      <div className="middleControl">
        <div className="sound">
          <SoundSVG />
        </div>   
        <div className="slider">
          <Slider
            defaultValue={30}
          />
        </div>
      </div>

    </PanelUtilsWrapper>
  )
})

export default HeaderUtilsPanel