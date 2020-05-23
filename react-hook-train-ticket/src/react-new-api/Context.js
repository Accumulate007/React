import React, { Component, createContext } from 'react'


const BatteryContext = createContext()
const onlineContext = createContext()

class Leaf extends Component {
    render() {
        return (
            <BatteryContext.Consumer>
                {
                    battery => <h3>the name is: {battery}</h3>
                }
            </BatteryContext.Consumer>
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
        name: 'jack',
        online: 'onLine'
    }

    render() {
        const { name, online } = this.state
        return (
            <BatteryContext.Provider value={name}>
                <onlineContext.Provider value={online}>
                    <Middle />
                </onlineContext.Provider>
            </BatteryContext.Provider>
        )
    }
}


export default ContextDemo

