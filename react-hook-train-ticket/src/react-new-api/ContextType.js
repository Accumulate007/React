import React, { Component, createContext } from 'react'


const BatteryContext = createContext()

class Leaf extends Component {
    static contextType = BatteryContext

    render() {
        const battery = this.context
        return (
            <h3>the name is: {battery}</h3>
        )
    }
}


class Middle extends Component {
    render() {
        return (
            <Leaf />
        )
    }
}


class ContextDemo extends Component {

    state = {
        name: 'jack'
    }

    render() {
        const { name } = this.state
        return (
            <BatteryContext.Provider value={name}>
                <Middle />
            </BatteryContext.Provider>
        )
    }
}


export default ContextDemo

