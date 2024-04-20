import React, { memo } from 'react'

import BoxCenterWrapper from './style'
import MusicLeftPanelBox from '../musicLeftPanelBox'
import MusicLeftPanelInnerBox from '../musicLeftPanelBox/innerBox'
import musicLeftPanelCenterData from '@/assets/data/Music/MusicLeftPanel/MusicLeftPanelCenterData.js'

const MusicLeftPanelBoxCenter = memo(() => {
  return (
    <BoxCenterWrapper>
      <MusicLeftPanelBox >
        <MusicLeftPanelInnerBox url="/music/my_favorite">
          <svg t="1713423673836" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="30423" width="200" height="200"><path d="M535.9 216.7l-22.9 23-22.9-23.1c-89.2-89.7-234.3-90.1-323.9-0.8l-0.8 0.8c-89.7 90.1-89.7 235.8 0 326L476 859.3c20.1 20.4 52.9 20.7 73.4 0.7l0.7-0.7 310.7-316.7c89.7-90.1 89.7-235.8 0-326-89.2-89.7-234.3-90.1-323.9-0.9l-1 1z" p-id="30424"></path></svg>        
          <span>
            我喜欢的音乐
          </span>
          <svg t="1713423713483" className="icon" viewBox="0 0 1184 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="31619" width="200" height="200"><path d="M899.3024 744.96c-123.13088 105.68192-269.55776 211.2-307.3024 238.08-37.7344-26.88-184.1664-132.39808-307.3024-238.08h-48.896c145.152 128.768 336.5888 263.4752 347.0336 270.80192a15.872 15.872 0 0 0 18.3296 0c10.4448-7.32672 201.88672-142.0288 347.0848-270.80192h-48.9472zM1183.9744 320c0 94.6176-23.35744 173.3632-76.44672 252.5696h-39.16288c58.2656-79.9232 83.6608-157.8496 83.6608-252.5696 0-158.8224-129.22368-288-288.0512-288-71.2192 0-139.83744 26.5216-193.024 74.752a288.1024 288.1024 0 0 0-64.6144 85.1968c-5.4272 10.9056-23.2448 10.9056-28.672 0-16.0768-32.256-37.8368-60.928-64.6144-85.248-53.1968-48.1792-121.8048-74.7008-193.024-74.7008-158.8224 0-288.0512 129.1776-288.0512 288 0 94.72 25.3952 172.6464 83.6608 252.5696h-39.1168C23.3728 493.3632 0.0256 414.6176 0.0256 320c0-176.4352 143.5136-320 320-320 79.2064 0 155.392 29.4912 214.4768 82.9952a320.3584 320.3584 0 0 1 57.4976 68.9664c15.7696-25.4976 35.0208-48.5888 57.45152-68.9152C708.62848 29.4912 784.768 0 863.9744 0c176.4864 0 320 143.5648 320 320z" fill="#272636" p-id="31620"></path><path d="M457.83552 807.65952L378.61888 590.1824l-46.00832 73.3184H42.41408v-30.72h273.20832l70.35904-112.13824 69.14048 189.80864 93.80864-310.38976 100.91008 232.71936h478.64832v30.72h-498.81088l-75.58656-174.32576z" fill="#262535" p-id="31621"></path></svg>
        </MusicLeftPanelInnerBox>
        {
          musicLeftPanelCenterData?.map((item,index) => {
            return (
              <MusicLeftPanelInnerBox key={index} url={item.page}>
                  {item.icon}
                  <span>
                    {item.name}
                  </span>
              </MusicLeftPanelInnerBox>
            )
          })
        }
      </MusicLeftPanelBox>
    </BoxCenterWrapper>
  )
})

export default MusicLeftPanelBoxCenter