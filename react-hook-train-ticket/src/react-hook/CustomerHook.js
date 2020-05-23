import React, { useState, useRef, useEffect } from 'react'


class Counter extends React.Component {
    render() {
        const { count } = this.props
        return (
            <h1>{count}</h1>
        )
    }
}

// 自定义Hook
function useCount(defaultCount) {
    const [count, setCount] = useState(defaultCount)
    const it = useRef()

    useEffect(() => {
        it.current = setInterval(() => {
            setCount(count => count + 1)
        }, 1000)
    }, [])

    useEffect(() => {
        if(count >= 10) {
            clearInterval(it.current)
        }
    })

    return [count, setCount]
}


function CustomerHookDemo() {

    const [count, setCount] = useCount(3)

    return (
        <div>
            { count }
            <Counter ref={counterRef} count={count}></Counter>
        </div>
    )
}


export default CustomerHookDemo
