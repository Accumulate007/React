import React from 'react'

/**
 * Context
 * 
 * 
 */

const ThemeContext = React.createContext('light')

function ThemeLink(props) {
    return (
        <ThemeContext.Consumer>
            {value => <p>this theme is {value}</p>}
        </ThemeContext.Consumer>
    )
}

class Component06 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            light: 'this is light'
        }
    }
    

    render() {
        const { light } = this.state

        return (
            <ThemeContext.Provider value={light}>
               <ThemeLink />
            </ThemeContext.Provider>
        )
    }
}


export default Component06;
