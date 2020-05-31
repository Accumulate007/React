import React from 'react'

/**
 * 
 * 父子组件数据传递
 * 
 * 
 */

function Childcomponent(props) {
    const {
        name,
        age,
        log,
    } = props

    logCallBack = () => {
        log && log();
    }

    return (
        <div>
            children component
            <p>name: {name}</p>
            <p>age: {age}</p>
            <p onClick={}>click log info</p>
        </div>
    )
}

class Component03 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'jack',
            age: 20,
            info: 'this is textarea'
        }
    }

    consoeInfo = () => {
        const { info } = this.state
        console.log(info)
    }


    render() {
        const { name, age } = this.state
        return (
            <div>
                <Childcomponent
                    name={name}
                    age={age}
                    log={this.consoeInfo}
                />
            </div>
        )
    }
}


export default Component03;
