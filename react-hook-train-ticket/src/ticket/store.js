import { createStore, combineReducers, applyMiddleware } from 'redux'
import reducers from './reducers'
// redux-thunk 专门用于支持异步action
import thunk from 'redux-thunk'



const store = createStore(
    combineReducers(reducers),
    {
        departDate: Date.now(),
        arriveDate: Date.now(),
        departTimeStr: null,
        arriveTimeStr: null,
        departStation: null,
        arriveStation: null,
        trainNumber: null,
        durationStr: null,
        tickets: [],
        isScheduleVisible: false,
        searchParsed: false,
    },
    applyMiddleware(thunk)
)




export default store
