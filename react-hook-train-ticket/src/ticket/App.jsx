import React, { useEffect, useCallback, useMemo, lazy, Suspense, memo } from 'react'
import { connect } from 'react-redux'
import URI from 'urijs'
import dayjs from 'dayjs'
import classnames from 'classnames'
import leftPad from 'left-pad'
import { h0 } from '../common/fp'
import useNav from '../common/useNav'

import './App.css'

import { TrainContext } from './context'
import Detail from '../common/Detail'
import Candidate from './Candidate'
// import Schedule from './Schedule'
import Header from '../common/Header'
import Nav from '../common/Nav'

const ScheduleRow = memo(function ScheduleRow(props) {
    const {
        index,
        station,
        arriveTime,
        departTime,
        stay,

        isStartStation,
        isEndStation,
        isDepartStation,
        isArriveStation,
        beforeDepartStation,
        afterArriveStation,
    } = props

    return (
        <li>
            <div className={classnames('icon', {
                'icon-red': isDepartStation || isArriveStation
            })}>
                {
                    isDepartStation
                    ? '出'
                    : isArriveStation
                        ? '到'
                        : leftPad(index, 2, 0)
                }
            </div>
            <div className={classnames('row', {
                'grey': beforeDepartStation || afterArriveStation
            })}>
                <span className={'station', {
                    'red': isArriveStation || isDepartStation
                }}>
                    {
                        station
                    }
                </span>
                <span className={classnames('arrtime', {
                    'red': isArriveStation
                })}>
                    { isStartStation ? '始发站' : arriveTime}
                </span>
                <span className={classnames('deptime', {
                    'red': isDepartStation
                })}>
                    { isEndStation ? '终到站' : departTime}
                </span>
                <span className="stoptime">
                    { isStartStation || isEndStation ? '-' : (stay + '分') }
                </span>
            </div>
        </li>
    )
})

import {
    setDepartStation,
    setArriveStation,
    setTrainNumber,
    setDepartDate,
    setSearchParsed,
    prevDate,
    nextDate,

    setDepartTimeStr,
    setArriveTimeStr,
    setArriveDate,
    setDurationStr,
    setTickets,

    toggleIsScheduleVisible,
} from './actions'
import { bindActionCreators } from 'redux'

// 异步加载组件, 异步组件需要使用 Suspense 组件包裹,异步组件加载完成之前 fallback 属性中的内容会被显示
const Schedule = lazy(() => import('./Schedule.jsx'))


function App(props) {
    const {
        departDate,
        arriveDate,
        departTimeStr,
        arriveTimeStr,
        departStation,
        arriveStation,
        trainNumber,
        durationStr,
        tickets,
        isScheduleVisible,
        searchParsed,
        dispatch,
    } = props

    const onBack = useCallback(() => {
        window.history.back()
    }, [])

    useEffect(() => {
        const queries = URI.parseQuery(window.location.search)
        const {
            aStation,
            dStation,
            date,
            trainNumber,
        } = queries

        dispatch(setDepartStation(dStation))
        dispatch(setArriveStation(aStation))
        dispatch(setTrainNumber(trainNumber))
        dispatch(setDepartDate(h0(dayjs(date).valueOf())))

        dispatch(setSearchParsed(true))
    }, [])

    useEffect(() => {
        document.title = trainNumber
    }, [trainNumber])

    useEffect(() => {
        if(!searchParsed) {
            return
        }

        const url = new URI('/reset/ticket')
            .setSearch('date', dayjs(departDate).format('YYYY-MM-DD'))
            .setSearch('traninNumber', trainNumber)
            .toString()

        fetch(url)
            .then(res => res.json())
            .then(res => {
                const {
                    detail,
                    candidates,
                } = res

                const {
                    departTimeStr,
                    arriveTimeStr,
                    arriveDate,
                    durationStr,
                } = detail

                dispatch(setDepartTimeStr(departTimeStr))
                dispatch(setArriveTimeStr(arriveTimeStr))
                dispatch(setArriveDate(arriveDate))
                dispatch(setDurationStr(durationStr))
                dispatch(setTickets(candidates))
            })
    }, [searchParsed])

    const {
        isPrevDisabled,
        isNextDisabled,
        prev,
        next,
    } = useNav(departDate, dispatch, prevDate, nextDate)

    const detailCbs = useMemo(() => {
        return bindActionCreators({
            toggleIsScheduleVisible,
        }, dispatch)
    }, [])

    if(!searchParsed) {
        return
    }

    return (
        <div className="app">
            <div className="header-wrapper">
                <Header title={trainNumber} onBack={onBack} />
            </div>
            <div className="nav-wrapper">
                <Nav
                    date={departDate}
                    isPrevDisabled={isPrevDisabled}
                    isNextDisabled={isNextDisabled}
                    prev={prev}
                    next={next}
                />
            </div>
            <div className="detail-wrapper">
                <Detail
                    departDate={departDate}
                    arriveDate={arriveDate}
                    departTimeStr={departTimeStr}
                    arriveTimeStr={arriveTimeStr}
                    trainNumber={trainNumber}
                    departStation={departStation}
                    arriveStation={arriveStation}
                    durationStr={durationStr}
                >
                    <span className="left"></span>
                    <span className="schedule" onClick={() => detailCbs.toggleIsScheduleVisible()}>时刻表</span>
                    <span className="right"></span>
                </Detail>
            </div>
            <TrainContext.Provider value={{
                trainNumber,
                departStation,
                arriveStation,
                departDate
            }}>
                <Candidate tickets={tickets} />
            </TrainContext.Provider>
            {
                isScheduleVisible && 
                <div className="mask" onClick={() => dispatch(toggleIsScheduleVisible}>
                    <Suspense fallback={<div>...loading</div>}>
                        <Schedule
                            date={departDate}
                            trainNumber={trainNumber}
                            departStation={departStation}
                            arriveStation={arriveStation}
                        />
                    </Suspense>
                </div>
            }
        </div>
    )
}



const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
