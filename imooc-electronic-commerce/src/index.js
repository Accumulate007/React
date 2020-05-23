import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router'

import 'antd/dist/antd.css'

// import App from './App';
// import Demo from './base-knowledge/learn-jsx'
// import ReactComponetDemo from './base-knowledge/react-component'
// import LifeCycleDemo from './base-knowledge/life-cycle'

import Admin from './admin'

ReactDOM.render(
    <Router />,
  document.getElementById('root')
);
