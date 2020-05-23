import React from 'react'
import PropTyeps from 'prop-types'

import './Header.css'


function Header(props) {
    const { onBack, title } = props

    return (
        <div className="header">
            <div className="header-back" onClick={onBack}> 
                <svg width="42" height="42">
                    <polyline
                        points="25,1316,2125,29"
                        stroke="#fff"
                        strokeWidth="2"
                        fill="none"
                    />
                </svg>
            </div>
            <h1 className="header-title">
                {title}
            </h1>
        </div>
    )
}





export default Header

Header.propTypes = {
    onBack: PropTyeps.func.isRequired,
    title: PropTyeps.string.isRequired
}