import React from 'react';
import ReactDOM from 'react-dom';
// import TodoList from './TodoList'

// import AntdTodoList from './AntdTodoList'


/**
 * 使用 react-redux
 */
import { Provider } from 'react-redux'
import store from './store'
import ReactReduxTodoList from './ReactReduxTodoList'

const App = (
    <Provider store={store}>
        <ReactReduxTodoList />
    </Provider>
)
ReactDOM.render(App, document.getElementById("root"));

// render方法用于将React组件挂载到具体的DOM节点上
// ReactDOM.render(<TodoList />, document.getElementById('root'));

// ReactDOM.render(<AntdTodoList />, document.getElementById("root"));