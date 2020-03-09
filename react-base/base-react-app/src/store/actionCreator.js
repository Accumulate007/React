// actionCreator.js

import { CHANGE_INPUT_VALUE } from './store/actionTypes'
import axios from 'axios'

export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
})

export const initListAction = (data) => {
    type: 'init_list_action',
    data
}


// 使用 redux-thunk
export const getTodoList = () => {
    return (dispatch) => {
        axios.get('/list').then(res => {
            const data = res.data
            const action = initListAction(data)
            dispatch(actioin)
        })
    }
}


