import PropTypes from 'prop-types'
import React, { memo } from 'react'

import SongStandardPanelItemWrapper from './style'

const SongStandardPanelItem = memo((props) => {
  const {itemData} = props
  return (
    <SongStandardPanelItemWrapper>
      <div className="songStandard-panel-item-icon">
        {itemData.icon}
      </div>
      <div className="songStandard-panel-item-right">
        <div className="songStandard-panel-item-right-top">
          {itemData.name}
        </div>
        <div className="songStandard-panel-item-right-bottom">
          <div className="songStandard-panel-item-right-bottom-cost">
            {itemData.cost}
          </div>
          <div className="songStandard-panel-item-right-bottom-description">
            {itemData.description}
          </div>
        </div>
      </div>
    </SongStandardPanelItemWrapper>
  )
})

SongStandardPanelItem.propTypes = {
  itemData: PropTypes.object
}

export default SongStandardPanelItem