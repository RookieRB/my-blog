import React, { memo } from 'react'
import {DownOutlined } from '@ant-design/icons';
import {useNavigate} from 'react-router-dom'
import { Dropdown,Space } from 'antd';

import LoginWrapper from './style'



const HeaderLogin = memo(() => {
  let navigate = useNavigate() 
  const onClick = ({ key }) => {
    if(key === '1'){
      navigate("/login")
    }
    if(key === '2'){
      // todo
    }
  };
  const items = [
    {
      label: '登录',
      key: '1',
    },
    {
      label: '退出',
      key: '2',
    }
  ];
  return (
    <LoginWrapper>
        <Dropdown
            menu={{
            items,
            onClick,
            }}
        >
            <Space>
                admin
                <DownOutlined />
            </Space>
        </Dropdown>
    </LoginWrapper>
  )
})

export default HeaderLogin