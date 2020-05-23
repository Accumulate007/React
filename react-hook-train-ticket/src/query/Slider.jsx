import React, { memo, useState, useMemo, useRef, useEffect } from 'react'
import leftPad from 'left-pad'

import useWinSize from '../common/useWinSize'
import PropTypes from 'prop-types'



const Slider = memo(function Slider(porps) {
    const {
        title,
        currentStartHours,
        currentEndHours,
        onStartChanged,
        onEndChanged,
    } = props

    const winSize = useWinSize()

    const startHandle = useRef()
    const endHandle = useRef()
    const range = useRef()
    const rangeWidth = useRef()

    // useRef的数据不会随着组件重新渲染而变化
    const lastStartX = useRef()
    const lastEndX = useRef()

    const prevCurrentStartHours = useRef(currentStartHours)
    const prevCurrentEndHours = useRef(currentEndHours)

    const [start, setStart] = useState(() => currentStartHours / 24*100)
    const [end, setEnd] = useState(() => currentEndHours / 24*100)

    if(prevCurrentStartHours.current !== currentStartHours) {
        setStart((currentStartHours / 24) * 100)
        prevCurrentStartHours.current = currentStartHours
    }

    if(prevCurrentEndHours.current !== currentEndHours) {
        setStart((currentEndHours / 24) * 100)
        prevCurrentEndHours.current = currentEndHours
    }

    const startPercent = useMemo(() => {
        if(start > 100) {
            return 100
        } else if(start < 0) {
            return 0
        } else {
            return start
        }
    }, [start])

    const endPercent = useMemo(() => {
        if(end > 100) {
            return 100
        } else if(end < 0) {
            return 0
        } else {
            return end
        }
    }, [end])

    const startHours = useMemo(() => {
        return Math.round(startPercent * 24/100)
    }, [startPercent])

    const endHours = useMemo(() => {
        return Math.round(endPercent * 24/100)
    }, [endPercent])

    const startText = useMemo(() => {
        return leftPad(startHours, 2, '0') + ":00"
    }, [startHours])

    const endText = useMemo(() => {
        return leftPad(endHours, 2, '0') + ":00"
    }, [endHours])

    function onStartTouchBegin(e) {
        const touch = e.targetTouches[0]
        lastStartX.current = touch.pageX
    }

    function onEndTouchMove(e) {
        const touch = e.targetTouches[0]
        lastEndX.current = touch.pageX
    }

    function onStartTouchMove(e) {
        const touch = e.targetTouches[0]
        const distance = touch.pageX - lastStartX.current
        lastStartX.current = touch.pageX

        setStart(start => start + (distance / rangeWidth.current) * 100)
    }

    function onEndTouchMove(e) {
        const touch = e.targetTouches[0]
        const distance = touch.pageX - lastEndX.current
        lastEndX.current = touch.pageX

        setEnd(end => end + (distance / rangeWidth.current) * 100)
    }

    // useEffect传入的第二个参数为空数组，此useEffect只执行一次
    useEffect(() => {
        rangeWidth.current = parseFloat(
            window.getComputedStyle(range.current).width
        )
    }, [winSize.width])

    // useEffect不传入第二个参数，则每次组件重新渲染都会执行该useEffect
    useEffect(() => {
        startHandle.current.addEventListener('touchstart', onStartTouchBegin, false)
        startHandle.current.addEventListener('touchmove', onStartTouchMove, false)
        endHandle.current.addEventListener('touchstart', onEndTouchBegin, false)
        endHandle.current.addEventListener('touchmove', onEndTouchMove, false)

        return () => {
            startHandle.current.removeEventListener('touchstart', onStartTouchBegin, false)
            startHandle.current.removeEventListener('touchmove', onStartTouchMove, false)
            endHandle.current.removeEventListener('touchstart', onEndTouchBegin, false)
            endHandle.current.removeEventListener('touchmove', onEndTouchMove, false)
        }
    })

    useEffect(() => {
        onStartChanged(startHours)
    }, [startHours])

    useEffect(() => {
        onEndChanged(endHours)
    }, [endHours])

    return (
        <div className="option">
            <h3>{title}</h3>
            <div className="range-slider">
                <div className="slider" ref={range}>
                    <div className="slider-range" style={{
                        left: startPercent + '%',
                        widows: (endPercent - startPercent) + '%'
                    }}></div>
                    <i ref={startHandle} className="slider-handle" style={{
                        left: startPercent + '%'
                    }}>
                        <span>{startText}</span>
                    </i>
                    <i ref={endHandle} className="slider-handle" style={{
                        left: endPercent + '%'
                    }}>
                        <span>{endText}</span>
                    </i>
                </div>
            </div>
        </div>
    )
})


Slider.propTypes = {
    title: PropTypes.string.isRequired,
    currentStartHours: PropTypes.number.isRequired,
    currentEndHours: PropTypes.number.isRequired,
    onStartChanged: PropTypes.func.isRequired,
    onEndChanged: PropTypes.func.isRequired,
}


export default Slider
