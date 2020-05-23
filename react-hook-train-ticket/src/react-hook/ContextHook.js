import React, { createContext, useContext } from 'react'

const CountContext = createContext()


function ContextHookDemo() {
    const count = useContext(CountContext)

    return (
        <div>
            { count }
        </div>
    )
}


export default ContextHookDemo

