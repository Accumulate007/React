import React from 'react'


class Component01 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'jack',
            age: 20
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = function() {
        console.log('p click...')
    }

    handleClick02 = () => {
        console.log('p click 02...')
    }

    handleClick03 = (event) => {
        // React 中的 event是组合事件，而不是原生的event
        event.preventDefault()
        event.stopPropagation()
        console.log(event);
        console.log(event.nativeEvent)  // 获取组合事件对象中的原生事件对象event
    }


    render() {
        return (
            <div>
                <p onClick={this.handleClick}>click-01</p>
                <p onClick={this.handleClick02}>click-02</p>
                <p onClick={this.handleClick03}>click-03, eventTest</p>
            </div>
        )
    }
}


export default Component01;
