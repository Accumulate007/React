// reducer.js


const defaultState = {
    inputValue: '',
    list: []
}



// reducer 可以接收state，但是绝对不可以修改 state
export default (state = defaultState, action) => {
    // state 是最新的state的值
    const newState = JSON.parse(JSON.stringify(state))  // copy 旧的state值(state不能去改变)

    if(action.type === 'change_input_value') {
        newState.inputValue = action.value
        return newState
    } else if(action.type === 'add_todo_item') {
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    } else if(action.type === 'delete_todo_item') {
        const index = action.index
        newState.list.splice(index, 1)
        return newState
    } else if(action.type === 'init_list_action') {
        // 这是一个异步action
        newState.list = action.data
    }

    return state
}

