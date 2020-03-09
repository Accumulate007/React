import React from 'react';
import Header from './common/header/index'
import GlobalStyle from  './static/iconfont/iconfont'
import GlobalSet from './style'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './pages/home'
// 使用了异步组件的 loadable.js 插件
import Detail from './pages/detail/loadable.js'
import Login from './pages/login'
import Write from './pages/write'


// Provider 里面所有的组件经过包装都有能力去使用store


class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
          <GlobalSet />
          <GlobalStyle />
          <BrowserRouter>
            <div>
              <Header />
              <Route path="/" exact component={Home}></Route>
              <Route path="/login" exact component={Login}></Route>
              <Route path="/detail/:id" exact component={Detail}></Route>
              <Route path="/write" exact component={Write}></Route>
            </div>
          </BrowserRouter>
      </Provider>
    )
  }
}

export default App;
