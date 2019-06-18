import React from 'react';  //必须引入，ReactDOM依赖于此
import ReactDOM from 'react-dom'; //入口文件必须引入，因为需要渲染DOM节点的内容
import App from '@/components/App'; //引入一个App.js组件

ReactDOM.render(
  <App />,
  document.getElementById('root')
)