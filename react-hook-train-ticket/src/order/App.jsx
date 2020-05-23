import React, { useContext, useCallback, useEffect, useMemo } from 'react'
import { connect } from 'react-redux'
import URI from 'urijs'
import dayjs from 'dayjs'

import './App.css'

import Header from '../common/Header'
import Detail from '../common/Detail'
import Ticket from './Ticket'
import Passengers from './Passengers'
import Choose from './Choose'
import Account from './Account'
import Menu from './Menu'

import {
    setDepartStation,
    setArriveStation,
    setTrainNumber,
    setSeatType,
    setDepartDate,
    setSearchParsed,
    createAdult,
    createChild,
    removePassenger,
    updatePassenger,
    hideMenu,
    showGenderMenu,
    showFollowAdultMenu,
    showTicketTypeMenu,
} from './actions.js'
import { bindActionCreators } from 'redux'

function App(props) {
    const {
        trainNumber,
        departStation,
        arriveStation,
        seatType,
        departDate,
        arriveDate,
        departTimeStr,
        arriveTimeStr,
        durationStr,
        price,
        passengers,
        menu,
        isMenuVisible,
        searchParsed,
        dispatch,
    } = props

    useEffect(() => {
        const query = URI.parseQuery(window.location.search)
        const {
            trainNumber,
            dStation,
            aStation,
            type,
            date,
        } = query

        dispatch(setDepartStation(dStation))
        dispatch(setArriveStation(aStation))
        dispatch(setTrainNumber(trainNumber))
        dispatch(setSeatType(type))
        dispatch(setDepartDate(date))
        dispatch(setSearchParsed(true))
    }, [])

    const onBack = useCallback(() => {
        window.history.back()
    }, [])

    useEffect(() => {
        if(!searchParsed) return;

        const url = new URI('/rest/order')
                        .setSearch('dStation', departStation)
                        .setSearch('aStation', arriveStation)
                        .setSearch('type', seatType)
                        .setSearch('date', dayjs(departDate).format('YYYY-MM-DD'))
                        toString()
        
        dispatch(fetchInitial(url))
    }, [searchParsed, departStation, arriveStation, seatType, departDate])

    const passengersCbs = useMemo(() => {
        return bindActionCreators({
            createAdult,
            createChild,
            removePassenger,
            updatePassenger,
            showGenderMenu,
            showFollowAdultMenu,
            showTicketTypeMenu,
        }, dispatch)
    }, [])

    const menuCbs = useMemo(() => {
        return bindActionCreators({
            hideMenu,
        }, dispatch)
    }, [])

    const chooseCbs = useMemo(() => {
        return bindActionCreators({
            updatePassenger
        }, dispatch)
    }, [])

    if(!searchParsed) {
        return null;
    }

    return (
        <div>
            <div className="header-wrapper">
                <Header title="订单填写" onBack={onBack} />
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
                    <span style={{display:'block'}} className="train-icon"></span>
                </Detail>
            </div>
            <Ticket price={price} type={seatType} />
            <Passengers 
                passengers={passengers}
                {
                    ...passengersCbs
                }
            />
            {
                passengers.length > 0 &&
                <Choose
                    passengers={passengers}
                    {
                        ...chooseCbs
                    }
                />
            }
            <Account
                length={passengers.length}
                price={price}
            />
            <Menu
                show={isMenuVisible}
                {
                    ...menu
                }
                {
                    ...menuCbs
                }
            />
        </div>
    )
}



const mapStateToProps = (state) => {
    return state;
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
