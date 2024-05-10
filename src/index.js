import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css'
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import {ConfigProvider} from 'antd'
import { Provider } from 'react-redux'
import 'react-toastify/dist/ReactToastify.css'


import App from './App';
import '@/assets/css/index.less'
import themeV2 from '@/assets/theme/theme-v2.js'
import store from '@/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <ThemeProvider theme={themeV2}>  
      <Provider store={store}>
        <BrowserRouter>
          <ConfigProvider>
            <App /> 
          </ConfigProvider>
        </BrowserRouter> 
      </Provider> 
    </ThemeProvider>   

);


