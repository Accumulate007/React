const defaultState = {
    inputValue: '',
    list: []
}


export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(action.vlaue))
    if(action.type === 'change_input_value') {
        newState.inputValue = action.value
        return newState
    }
    return state
}

