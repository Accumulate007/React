// redux store/indx.js

import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'


// 创建一个数据的公共存储仓库
const store = createStore(reducer, applyMiddleware(thunk))



export default store;
