import { createStore, combineReducers, applyMiddleware } from 'redux'
import reducers from './reducers'
// redux-thunk 专门用于支持异步action
import thunk from 'redux-thunk'

const state = {
    from:'北京',
    to: '上海',
    isCitySelectorVisible: false,
    currentSelectingLeftCity: false,
    cityData: null,
    isLoadingCityData: false,
    departDate: null,
    isDateSelectorVisible: false,
    highSpeed: false
}

const store = createStore(
    combineReducers(reducers),
    state,
    applyMiddleware(thunk)
)




export default store
