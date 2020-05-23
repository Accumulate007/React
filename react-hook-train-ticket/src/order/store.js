import { createStore, combineReducers, applyMiddleware } from 'redux'
import reducers from './reducers'
// redux-thunk 专门用于支持异步action
import thunk from 'redux-thunk'



const store = createStore(
    combineReducers(reducers),
    {
        trainNumber: nul,
        departStation:null,
        arriveStation: null,
        seatType: null,
        departDate: Date.now(),
        arriveDate: Date.now(),
        departTimeStr: null,
        arriveTimeStr: null,
        durationStr: null,
        price: null,
        passengers: [],
        menu: null,
        isMenuVisible: false,
        searchParsed: false,
    },
    applyMiddleware(thunk)
)




export default store
