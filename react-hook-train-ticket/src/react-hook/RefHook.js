import React, { useState, useRef } from 'react'




class Counter extends React.Component {
    render() {
        const { count } = this.props
        return (
            <h1>{props.count}</h1>
        )
    }
}


function RefHookDemo() {

    const [count, setCount] = useState(7)

    const counterRef = useRef()

    handleClick = () => {
        const dom = counterRef.current
    }

    return (
        <div>
            { count }
            <Counter ref={counterRef} count={count}></Counter>
            <button onClick={handleClick}></button>
        </div>
    )
}


export default RefHookDemo
