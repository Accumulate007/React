import React, { useCallback, useMemo } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { h0 } from '../common/fp'

import './App.css'

import Header from '../common/Header'
import CitySelector from '../common/CitySelector'
import DateSelector from '../common/DateSelector'
import DepartDate from './DeparDate.jsx'
import HighSpeed from './HighSpeed.jsx'
import Journey from './Journey.jsx'
import Submit from './Submit.jsx'


import {
    exchangeFromTo,
    showCitySelector,
    hideCitySlector,
    fetchCityData,
    setSelectedCity,
    setDepartDate,
    hideDateSelector,
    toggleHighSpeed,
} from './actions'


function App(props) {
    const {
        from,
        to,
        isCitySelectorVisible,
        isDateSelectorVisible,
        cityData,
        isLoadingCityData,
        highSpeed,
        departDate,
        showDateSelector,
        hideDateSelector,
        dispatch
    } = props

    // onBack每次都生成新的句柄，Header组件就会每次都重新渲染。使用useCallBack进行优化
    // 每次App组件重新渲染，onBack都会是同一个句柄
    const onBack = useCallback(() => {
        window.history.back()
    }, [])

    // const doExchangeFromTo = useCallback(() => {
    //     dispatch(exchangeFromTo())
    // }, [])

    // const doShowCitySelector = useCallback((m) => {
    //     dispatch(showCitySelector(m))
    // }, [])

    const citySelectorCbs = useMemo(() => {
        return bindActionCreators({
            onBack: hideCitySlector,
            fetchCityData,
            onSelect: setSelectedCity
        }, dispatch)
    }, [])

    const cbs = useMemo(() => {
        return bindActionCreators({
            exchangeFromTo,
            showCitySelector
        }, dispatch)
    }, [])

    const departDateCbs = useMemo(() => {
        return bindActionCreators({
            onClick: showDateSelector,
        }, dispatch)
    })

    const dateSelectorCbs = useMemo(() => {
        return bindActionCreators({
            onBack: hideDateSelector
        }, dispatch)
    }, [])

    const onSelectDate = useCallback((day) => {
        if(!day) return;
        if(day < h0()) return;

        dispatch(setDepartDate(day))
        dispatch(hideDateSelector(hideDateSelector()))
    }, [])

    const highSpeedCbs = useMemo(() => {
        return bindActionCreators({
            toggle: toggleHighSpeed,
        }, dispatch)
    }, [])


    return (
        <div>
            <div className="header-wrapper">
                <Header title="火车票" onBack={onBack} />
            </div>
            <form className="form" action="./query.html">
                <Journey
                    from={from}
                    to={to}
                    {...cbs}
                />
                <HighSpeed
                    highSpeed={highSpeed}
                    {...highSpeedCbs}
                />
                <DepartDate
                    time={departDate}
                    {...departDateCbs}
                />
                <Submit />
            </form>
            <CitySelector
                show={isCitySelectorVisible}
                cityData={cityData}
                isLoading={isLoadingCityData}
                {...citySelectorCbs}
            />
            <DateSelector 
                show={isDateSelectorVisible}
                {...dateSelectorCbs}
                onSelect={onSelectDate}
            />
        </div>
    )
}



const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return { dispatch }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
