import PropTypes from 'prop-types'
import React, { memo } from 'react'

import BarrageWrapper from './style'

const Barrage = memo((props) => {
  const {speed,right} = props
  return (
    <BarrageWrapper speed={speed} right={right}>
      <div className='barrage-img'>
        <img src={require("@/assets/imgs/bg3.jpg")} alt="" className='barrage-img-avatar'/>
      </div>  
      <div className="barrage-msg">
        大佬!!!!!!!
      </div>
    </BarrageWrapper>
  )
})
Barrage.propTypes = {
  speed: PropTypes.string,
  right: PropTypes.string
}



export default Barrage
