import React, { memo } from 'react'

import StarButtonWrapper from './style'

const StarButton = memo(() => {
  function convertStyleStringToObj(styleString) {
    return styleString
      .split(';') // 分割字符串，以';'为分隔符
      .filter(style => style.trim() !== '') // 过滤掉空字符串
      .map(style => style.split(':').map(part => part.trim())) // 分割每个属性为键和值，并去除空白字符
      .reduce((acc, [key, value]) => {
        acc[key] = value; // 将键值对添加到累加器对象
        return acc;
      }, {}); // 从空对象开始累加
  }
  return (
    <StarButtonWrapper>
      <button className='starButton'>
        Hover Me
        <div className="star-1 star">
          <svg  viewBox="0 0 784.11 815.53" style={convertStyleStringToObj("shapeRendering:geometricPrecision; textRendering:geometricPrecision; imageRendering:optimizeQuality; fillRule:evenodd; clipRule:evenodd")} version="1.1"  xmlns="http://www.w3.org/2000/svg"><defs></defs><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"></metadata><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path></g></svg>
        </div>
        <div className="star-2 star">
          <svg  viewBox="0 0 784.11 815.53" style={convertStyleStringToObj("shapeRendering:geometricPrecision; textRendering:geometricPrecision; imageRendering:optimizeQuality; fillRule:evenodd; clipRule:evenodd")} version="1.1"  xmlns="http://www.w3.org/2000/svg"><defs></defs><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"></metadata><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path></g></svg>
        </div>
        <div className="star-3 star">
          <svg  viewBox="0 0 784.11 815.53" style={convertStyleStringToObj("shapeRendering:geometricPrecision; textRendering:geometricPrecision; imageRendering:optimizeQuality; fillRule:evenodd; clipRule:evenodd")} version="1.1"  xmlns="http://www.w3.org/2000/svg"><defs></defs><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"></metadata><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path></g></svg>
        </div>
        <div className="star-4 star">
          <svg  viewBox="0 0 784.11 815.53" style={convertStyleStringToObj("shapeRendering:geometricPrecision; textRendering:geometricPrecision; imageRendering:optimizeQuality; fillRule:evenodd; clipRule:evenodd")} version="1.1"  xmlns="http://www.w3.org/2000/svg"><defs></defs><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"></metadata><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path></g></svg>
        </div>
        <div className="star-5 star">
          <svg  viewBox="0 0 784.11 815.53" style={convertStyleStringToObj("shapeRendering:geometricPrecision; textRendering:geometricPrecision; imageRendering:optimizeQuality; fillRule:evenodd; clipRule:evenodd")} version="1.1"  xmlns="http://www.w3.org/2000/svg"><defs></defs><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"></metadata><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path></g></svg>
        </div>
        <div className="star-6 star">
          <svg  viewBox="0 0 784.11 815.53" style={convertStyleStringToObj("shapeRendering:geometricPrecision; textRendering:geometricPrecision; imageRendering:optimizeQuality; fillRule:evenodd; clipRule:evenodd")} version="1.1"  xmlns="http://www.w3.org/2000/svg"><defs></defs><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"></metadata><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0"></path></g></svg>
        </div>
      </button>
    </StarButtonWrapper>
  )
})

export default StarButton