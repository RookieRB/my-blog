import React, { memo,useRef } from 'react'

 
import SearchBoxWrapper from './style'
import SearchIcon from '@/assets/svg/SearchIcon'
import CloseSVG from '@/assets/svg/CloseSVG'

const SearchBox = memo(() => {
  /**
   * 局部变量
   */
  const searchPageRef = useRef();

  /**
   * 函数处理
   */
  // 前往搜索页面
  function getSearchHandler(){
    searchPageRef.current.style.visibility = "visible"
    searchPageRef.current.classList.add("fade-in")
  }
  // 回到主页面
  function getBackHandler(){
    searchPageRef.current.style.visibility = "hidden"
    searchPageRef.current.classList.remove("fade-in")
  }
  return (
    <SearchBoxWrapper>
      <div onClick={getSearchHandler} className="search-icon-out">
        <SearchIcon />
      </div>
      <div className="searchPage" ref={searchPageRef}>
        <div className="location">
          <div className="text">search Something</div>
          <div className="search-content">
            <div className="search-icon-inner">
              <SearchIcon />
            </div>
            <input type="text" placeholder="Search"/>
          </div>
        </div>
        <div className="close" onClick={getBackHandler}>
          <CloseSVG/>
        </div>
      </div>
      
    </SearchBoxWrapper>
  )
})

export default SearchBox