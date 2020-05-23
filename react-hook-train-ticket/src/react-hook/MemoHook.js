import React, { useState, useMemo, memo, useCallback, useContext } from 'react'

const Counter = memo(function Counter(props) {
    return (
        <h1>{props.count}</h1>
    )
})


function MemotHookDemo() {

    const [count, setCount] = useState(7)

    // 渲染时机是在组件渲染期间
    // 第二个参数的原理与useEffect相同
    const double = useMemo(() => {
        return count * 2
    }, [count])


    const onClick = useCallback(() => {
        console.log('click')
    }, [])

    return (
        <div>
            { count }
            <Counter count={double}></Counter>
        </div>
    )
}


export default MemotHookDemo
