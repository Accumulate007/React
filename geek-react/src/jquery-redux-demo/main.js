import { createStore } from 'redux'

/**
 * Action
 * 
 * 
 * 
 * 
 * 
 */



/**
 * Reducer函数
 * 
 * reducer必须是一个纯函数，无副作用，确定的输入得到确定的输出
 * reducer的返回值应该是一个state
 * reducer必须返回一个全新的对象，取代之前的state，而不能直接修改state然后返回，会有前后state引用关系的产生
 * 
 */
function counter(state={value: 0}, action) {
    let { type } = action

    switch(type) {
        case 'INCREMENT':
            return Object.assign({}, state, {
                value: state.value + 6
            })
        default:
            return state
    }
}

// 创建store
const store = createStore(counter)

$(document).click(ev => {
    /**
     * Action
     * 
     * action是一个必须包含type属性的对象
     */
    store.dispatch({ type: 'INCREMENT', value: 6})
})


/**
 * state的变化触发 subscribe 回调函数执行
 */
store.subscribe(() => {
    let curt = store.getState()
    console.log(curt)
})


