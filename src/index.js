import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'normalize.css'
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import {ConfigProvider} from 'antd'


import '@/assets/css/index.less'
import themeV2 from '@/assets/theme/theme-v2.js'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={themeV2}>  
      <BrowserRouter>
      <ConfigProvider>
       <App /> 
      </ConfigProvider>
      </BrowserRouter> 
    </ThemeProvider>   
  </React.StrictMode>
);


