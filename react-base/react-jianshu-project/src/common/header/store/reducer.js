import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

// state 变成了 immutable 对象
const defaultState = fromJS({
    focused: false,
    list: [],
    mouseIn: false,
    page: 1,
    totalPage: 1
})


// reducer导出的是一个纯函数
export default (state = defaultState, action) => {
    if(action.type === actionTypes.SEARCH_FOCUS) {
        return state.set('focused', true)
    } else if(action.type === actionTypes.SEARCH_BLUR) {
        return state.set('focused', false)
    } else if(action.type === actionTypes.CHANGE_LIST) {
        // return state.set('list', action.data).set('totalPage', action.totalPage)
        return state.merge({
            list: action.data,
            totalPage: action.totalPage
        })
    } else if(action.type === actionTypes.MOUSE_ENTER) {
        return state.set('mouseIn', true)
    } else if(action.type === actionTypes.MOUSE_LEAVE) {
        return state.set('mouseIn', false)
    } else if(action.type === actionTypes.CHANGE_PAGE) {
        return state.set('page', action.page)
    }


    return state
}
