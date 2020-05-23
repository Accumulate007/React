import React from 'react'
import classnames from 'classnames'
import Proptypes from 'prop-types'


import './HighSpeed.css'


function HighSpeed(props) {

    const {
        highSpeed,
        toggle,
    } = props



    return (
        <div className="high-speed">
            <div className="high-speed-label">只看高铁/动车</div>
            <div className="high-speed-switch" onClick={() => toggle()}>
                <input type="hidden" name="highSpeed" value={highSpeed} />
                <div className={classnames('high-speed-track', {
                    checked: highSpeed
                })}>
                    <span className={classnames('high-speed-hanle', {
                        checked: highSpeed
                    })}>
                    </span>
                </div>
            </div>
        </div>
    )
}

HighSpeed.propTypes = {
    highSpeed: Proptypes.bool.isRequired,
    toggle: Proptypes.func.isRequired,
}


export default HighSpeed
