// 导入 React 包
import React from 'react'
import ReactDOM from 'react-dom'

import fetchJSONP from 'fetch-jsonp'
// React.Component.prototype.baseURL = 'http://39.106.32.91:3005'
React.Component.prototype.baseURL = 'https://api.douban.com'

React.Component.prototype.$http = fetchJSONP

// 导入 App 根组件
import App from '@/components/App'

// 使用 ReactDOM.render 渲染根组件
ReactDOM.render( <App /> , document.getElementById('app'))