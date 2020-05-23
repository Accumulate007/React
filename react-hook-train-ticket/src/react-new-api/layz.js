import React, { Component, lazy, Suspense } from 'react'

// 组件懒加载,异步导入组件
const Context = lazy(() => import('./Context.js'))

class LazyDemo extends Component {
    state = {
        hasError: false
    }

    // 捕获组件错误
    componentDidCatch() {
        this.setState({
            hasError: true
        })
    }

    // 该静态方法，一旦组件发生错误，会返回一个state合并到组件的state中
    static getDerivedStateFromError() {
        return {
            newError: true
        }
    }

    render() {
        const { hasError } = this.state

        if(hasError) {
            return (
                <h3>Component LazyDemo has Error</h3>
            )
        } else {
            return (
                <div>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Context />
                    </Suspense>
                </div>
            )
        }
    }
}


export default LazyDemo

