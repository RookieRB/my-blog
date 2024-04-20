import React, { memo } from 'react'
import { Input } from 'antd';


import SearchWrapper from './style'
const { Search } = Input;
const HeaderSearch = memo(() => {
    const onSearch = (value, _e, info) => console.log(info?.source, value);
  return (
    <SearchWrapper>
        <Search placeholder="input search text" onSearch={onSearch} enterButton style={{paddingLeft:"50%"}}/>
    </SearchWrapper>
  )
})

export default HeaderSearch