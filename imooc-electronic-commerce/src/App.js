import React from 'react';
// import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { Button } from 'antd'

// import 'antd/dist/antd.css'
/**
 * 1.swtich 只匹配第一个匹配到的路由
 * 
 * 
 * 
 * 
 */



class App extends React.Component {
  render() {
    return (
      <div>
        { this.props.children }
      </div>
    )
  }
}

export default App;
