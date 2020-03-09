
import React from 'react'
import Loadable from 'react-loadable'



const LoadableComponent = Loadable({
    loader: () => import('./my-component'),
    loading() {
        return <div>正在加载中...</div>
    }
})



export default class App extends React.Component {
    render() {
        return <LoadableComponent />
    }
}
