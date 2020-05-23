import React, { Component, useState, useEffect } from 'react'


// useEffect: 每次组件render之后调用


function StateHookDemo() {
    const [count, setCount] = useState(0)

    // useEffect的执行时机是在组件渲染之后
    // 传入第二个参数，控制useEffect是会在数据变化的时候执行，只有第二个参数的数据变化了，useEffect才会执行
    // 比如传入空数组，则useEffect只会执行一次
    useEffect(() => {
        document.title = count++

        return () => {
            console.log('返回一个callback函数，可以用于清理定时器等')
        }
    }, [])

    return (
        <div>
            { count }
        </div>
    )
}


export default StateHookDemo

