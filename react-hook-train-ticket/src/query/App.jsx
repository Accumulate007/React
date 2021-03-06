import React, { useCallback, useEffect, useMemo } from 'react'
import { connect } from 'react-redux'
import URI from 'urijs'
import dayjs from 'dayjs'
import { bindActionCreators } from 'redux'

import { h0 } from '../common/fp'
import Header from '../common/Header.jsx'
import Nav from '../common/Nav.jsx'
import List from './List.jsx'
import Bottom from './Bottom.jsx'
import useNav from '../common/useNav'

import './App.css'

import {
    setFrom,
    setTo,
    setDepartDate,
    setHighSpeed,
    setSearchParsed,
    setTrainList,
    setTicketTypes,
    setTrainTypes,
    setDepartStations,
    setArriveStations,
    prevDate,
    nextDate,
    toggleOrderType,
    toggleHighSpeed,
    toggleOnlyTickets,
    toggleIsFiltersVisible,
    setCheckedTicketTypes,
    setCheckedTrainTypes,
    setCheckedDepartStations,
    setCheckedArriveStations,
    setDepartTimeEnd,
    setDepartTimeStart,
    setArriveTimeEnd,
    setArriveTimeStart,
} from './actions'
import { bindActionCreators } from 'redux'

function App(props) {

    const {
        trainList,
        from,
        to,
        departDate,
        highSpeed,
        searchParsed,
        orderType,
        onlyTickets,
        checkedTicketTypes,
        checkedTrainTypes,
        checkedDepartStations,
        checkedArriveStations,
        departTimeStart,
        departTimeEnd,
        arriveTimeStart,
        arriveTimeEnd,
        isFiltersVisible,
        ticketTypes,
        trainTypes,
        departStatons,
        arriveStations,
        dispatch,
    } = props

    const onBack = useCallback(() => {
        window.history.back()
    }, [])

    // 解析url参数
    useEffect(() => {
        const queries = URI.parseQuery(window.location.search)
        const {
            from,
            to,
            date,
            highSpeed,
        } = queries

        dispatch(setFrom(from))
        dispatch(setTo(to))
        dispatch(setDepartDate(h0(dayjs(date).valueOf())))
        dispatch(setHighSpeed(highSpeed === 'true'))

        dispatch(setSearchParsed(true))
    }, [])

    useEffect(() => {
        if(!searchParsed) {
            return
        }

        const url = new URI('/rest/query')
            .setSearch('from', from)
            .setSearch('to', to)
            .setSearch('date', dayjs(departDate).format('YYYY-MM-DD'))
            .setSearch('highSpeed', highSpeed)
            .setSearch('searchParsed', searchParsed)
            .setSearch('orderType', orderType)
            .setSearch('onlyTickets', onlyTickets)
            .setSearch('checkedTicketTypes', Object.keys(checkedTicketTypes).join())
            .setSearch('checkedTrainTypes', Object.keys(checkedTrainTypes).join())
            .setSearch('checkedDepartStations', Object.keys(checkedDepartStations).join())
            .setSearch('checkedArriveStations', Object.keys(checkedArriveStations).join())
            .setSearch('departTimeStart', departTimeStart)
            .setSearch('departTimeEnd', departTimeEnd)
            .setSearch('arriveTimeStart', arriveTimeStart)
            .setSearch('arriveTimeEnd', arriveTimeEnd)
            .toString()

        fetch(url)
            .then(res => res.json())
            .then(result => {
                const {
                    dataMap: {
                        direcTrainInfo: {
                            trains,
                            filter: {
                                ticketType,
                                trainType,
                                depStation,
                                arrStation,
                            }
                        }
                    }
                } = result

                dispatch(setTrainList(trains))
                dispatch(setTicketTypes(ticketType))
                dispatch(setTrainTypes(trainType))
                dispatch(setDepartStations(depStation))
                dispatch(setArriveStations(arrStation))
            })
    }, [
        from,
        to,
        departDate,
        highSpeed,
        searchParsed,
        orderType,
        onlyTickets,
        checkedTicketTypes,
        checkedTrainTypes,
        checkedDepartStations,
        checkedArriveStations,
        departTimeStart,
        departTimeEnd,
        arriveTimeStart,
        arriveTimeEnd,
    ])

    // const isPrevDisabled = h0(departDate) <= h0()
    // const isNextDisabled = h0(departDate) - h0() > 20*86400*1000

    // const prev = useCallback(() => {
    //     if(isPrevDisabled) return
    //     dispatch(prevDate())
    // }, [isPrevDisabled])

    // const next = useCallback(() => {
    //     if(isNextDisabled) return
    //     dispatch(nextDate())
    // }, [isNextDisabled])

    // 使用自定义hook
    const {
        isPrevDisabled,
        isNextDisabled,
        prev,
        next,
    } = useNav(departDate, dispatch, prevDate, nextDate)

    const bottomCbs = useMemo(() => {
        return bindActionCreators({
            toggleOrderType,
            toggleHighSpeed,
            toggleOnlyTickets,
            toggleIsFiltersVisible,
            setCheckedTicketTypes,
            setCheckedTrainTypes,
            setCheckedDepartStations,
            setCheckedArriveStations,
            setDepartTimeEnd,
            setDepartTimeStart,
            setArriveTimeEnd,
            setArriveTimeStart,
        }, dispatch)
    }, [])

    if(!searchParsed) return null;

    return (
        <div>
            <div className="header-wrapper">
                <Header title={`${from} -> ${to}`} onBack={onBack} />
            </div>
            <Nav
                date={departDate}
                isPrevDisabled={isPrevDisabled}
                isNextDisabled={isNextDisabled}
                prev={prev}
                next={next}
            />
            <List list={trainList} />
            <Bottom
                highSpeed={highSpeed}
                orderType={orderType}
                onlyTickets={onlyTickets}
                isFiltersVisible={isFiltersVisible}
                {...bottomCbs}
                ticketTypes={ticketTypes}
                trainTypes={trainTypes}
                departStatons={departStatons}
                arriveStations={arriveStations}
                checkedTicketTypes={checkedTicketTypes}
                checkedTrainTypes={checkedTrainTypes}
                checkedDepartStations={checkedDepartStations}
                checkedArriveStations={checkedArriveStations}
                departTimeStart={departTimeStart}
                departTimeEnd={departTimeEnd}
                arriveTimeStart={arriveTimeStart}
                arriveTimeEnd={arriveTimeEnd}
            />
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
