import { fromJS } from 'immutable'
import * as constants from './constants'


const defaultState = fromJS({
    'title': '这是标题,title',
    'content': 'this is content，这是详情AAAAAAAAAA'
})

export default (state = defaultState, action) => {
    switch(action.type) {
        case constants.CHANGE_DETAIL:
            return state.merge({
                title: action.title,
                content: action.content
            })
        default: 
            return state;
    }
}