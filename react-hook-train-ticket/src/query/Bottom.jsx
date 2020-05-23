import React, { useState, useCallback, useReducer } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Slider from './Slider.jsx'
import './Bottom.css'
import { ORDER_DEPART } from './constant'

const Filter = memo(function Filter(props) {
    const {
        name,
        checked,
        value,
        toggle,
    } = props
    return (
        <li className={classnames({checked})} onClick={() => toggle(value)}>
            { name }
        </li>
    )
})

Filter.propTypes = {
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    value: PropTypes.string.isRequired,
    toggle: PropTypes.func.isRequired,
}

const Option = memo(function Option(props) {
    const {
        title,
        options,
        checkedMap,
        update,
    } = props

    const toggle = useCallback((value) => {
        const newCheckedMap = {...checkedMap}

        if(value in newCheckedMap) {
            delete newCheckedMap[value]
        } else {
            newCheckedMap[value] = true
        }
        update(newCheckedMap)
    }, [checkedMap, update])

    return (
        <div className="option">
            <h3>{title}</h3>
            <ul>
                {
                    options.map(option => {
                        return (
                            <Filter
                                key={option.value}
                                {...option}
                                checked={option.value in checkedMap}
                                toggle={toggle}
                            />
                        )
                    })
                }
            </ul>
        </div>
    )
})

Option.propTypes = {
    title: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    checkedMap: PropTypes.object.isRequired,
    update: PropTypes.func.isRequired
}

const BottomModal = memo(function BottomModal(props) {
    const {
        ticketTypes,
        trainTypes,
        departStatons,
        arriveStations,
        checkedTicketTypes,
        checkedTrainTypes,
        checkedDepartStations,
        checkedArriveStations,
        departTimeStart,
        departTimeEnd,
        arriveTimeEnd,
        setCheckedTicketTypes,
        setCheckedTrainTypes,
        setCheckedDepartStations,
        setCheckedArriveStations,
        setDepartTimeEnd,
        setDepartTimeStart,
        setArriveTimeEnd,
        setArriveTimeStart,
        toggleIsFiltersVisible,
    } = props

    /* 改为下面使用 useReducer 的版本优化
    const [localCheckedTicketTypes, setLocalCheckedTicketTypes] = useState({
        ...checkedTicketTypes
    })
    */

    const [localCheckedTicketTypes, localCheckedTicketTypesDispatch] = useReducer(checkedReducer, checkedTicketTypes, (checkedTicketTypes) => {
        return {
            ...checkedTicketTypes
        }
    })

    const [localCheckedTrainTypes, setLocalCheckedTrainTypes] = useState({
        ...checkedTrainTypes
    })

    const [localCheckedDepartStations, setLocalCheckedDepartStations] = useState({
        ...checkedDepartStations
    })

    const [localCheckedArriveStations, setLocalCheckedArriveStations] = useState({
        ...checkedArriveStations
    })


    const [localDepartTimeStart, setLocalDepartTimeStart] = useState(departTimeStart)
    const [localDepartTimeEnd, setLocalDepartTimeEnd] = useState(departTimeEnd)
    const [localArriveTimeStart, setLocalArriveTimeStart] = useState(arriveTimeStart)
    const [localArriveTimeEnd, setLocalArriveTimeEnd] = useState(arriveTimeEnd)

    const optionGroup = [
        {
            title: '坐席类型',
            options: ticketTypes,
            checkedMap: localCheckedTicketTypes,
            update: setLocalCheckedTicketTypes
        },
        {
            title: '车次类型',
            options: trainTypes,
            checkedMap: localCheckedTrainTypes,
            update: setLocalCheckedTrainTypes
        },
        {
            title: '出发类型',
            options: departStatons,
            checkedMap: localCheckedDepartStations,
            update: setLocalCheckedDepartStations
        },
        {
            title: '到达车站',
            options: arriveStations,
            checkedMap: localCheckedArriveStations,
            update: setLocalCheckedArriveStations
        }
    ]

    function sure() {
        setCheckedTicketTypes(localCheckedTicketTypes)
        setCheckedTrainTypes(localCheckedTrainTypes)
        setCheckedDepartStations(localCheckedDepartStations)
        setCheckedArriveStations(localCheckedArriveStations)

        setLocalDepartTimeStart(localDepartTimeStart)
        setLocalDepartTimeEnd(localDepartTimeEnd)

        setLocalArriveTimeStart(localArriveTimeStart)
        setLocalArriveTimeEnd(localArriveTimeEnd)

        toggleIsFiltersVisible()
    }

    const isResetDisabled = Object.keys(localCheckedTicketTypes).length === 0 
        && Object.keys(localCheckedTrainTypes).length === 0
        && Object.keys(localCheckedDepartStations).length === 0
        && Object.keys(localCheckedArriveStations).length === 0
        && localDepartTimeStart === 0
        && localDepartTimeEnd === 24
        && localArriveTimeStart === 0
        && localArriveTimeEnd === 0;

    function reset() {
        if(isResetDisabled) return;
        setLocalCheckedTicketTypes({})
        setLocalCheckedTrainTypes({})
        setLoaclCheckedDepartStations({})
        setLocalCheckedArriveStations({})

        setLocalDepartTimeStart(0)
        setLocalDepartTimeEnd(24)
        setLocalArriveTimeStart(0)
        setLocalArriveTimeEnd(24)
    }

    return (
        <div className="bottom-modal">
            <div className="bottom-dialog">
                <div className="bottom-dialog-content">
                    <div className="title">
                        <span className={classnames('reset', {
                            disabled: isResetDisabled
                        })} onClick={reset}>
                            重置
                        </span>
                        <span className="ok" onClick={sure}>
                            确定
                        </span>
                    </div>
                    <div className="options">
                        {
                            optionGroup.map(group => {
                                return (
                                    <Option
                                        {...group}
                                        key={group.title}
                                    />
                                )
                            })
                        }
                        <Slider
                            title="出发时间"
                            currentStartHours={localDepartTimeStart}
                            currentEndHours={localDepartTimeEnd}
                            onStartChanged={setLocalDepartTimeStart}
                            onEndChanged={setLocalDepartTimeEnd}
                        />
                        <Slider
                            title="到达时间"
                            currentStartHours={localArriveTimeStart}
                            currentEndHours={localArriveTimeEnd}
                            onStartChanged={setLocalArriveTimeStart}
                            onEndChanged={setLocalArriveTimeEnd}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
})

function Bottom(props) {
    const {
        orderType,
        highSpeed,
        onlyTickets,
        isFiltersVisible,
        toggleOrderType,
        toggleHighSpeed,
        toggleOnlyTickets,
        toggleIsFiltersVisible,

        ticketTypes,
        trainTypes,
        departStatons,
        arriveStations,
        checkedTicketTypes,
        checkedTrainTypes,
        checkedDepartStations,
        checkedArriveStations,
        departTimeStart,
        departTimeEnd,
        arriveTimeEnd,
        setCheckedTicketTypes,
        setCheckedTrainTypes,
        setCheckedDepartStations,
        setCheckedArriveStations,
        setDepartTimeEnd,
        setDepartTimeStart,
        setArriveTimeEnd,
        setArriveTimeStart,
    } = props

    const noChecked = Object.keys(checkedTicketTypes).length === 0 
        && Object.keys(checkedTrainTypes).length === 0
        && Object.keys(checkedDepartStations).length === 0
        && Object.keys(checkedArriveStations).length === 0
        && departTimeStart === 0
        && departTimeEnd === 24
        && arriveTimeStart === 0
        && arriveTimeEnd === 0;


    return (
        <div className="bottom">
            <div className="bottom-filters">
                <span className="item" onClick={toggleOrderType}>
                    <i className="icon">&#xf065;</i>
                    { orderType === ORDER_DEPART ? '出发 早→晚' : '耗时 短→长'}
                </span>
                <span
                    className={classnames('item', {
                        'item-on': highSpeed
                    })}
                    onClick={toggleHighSpeed}
                >
                    <i className="icon">{highSpeed ? '\uf43f' : '\uf43e'}</i>
                    只看高铁动车
                </span>
                <span
                    className={classnames('item', {
                        'item-on': onlyTickets
                    })}
                    onClick={toggleOnlyTickets}
                >
                    <i className="icon">{onlyTickets ? '\uf43f' : '\uf43e'}</i>
                    只看有票
                </span>
                <span
                    className={classnames('item', {
                        'item-on': isFiltersVisible || !noChecked
                    })}
                    onClick={toggleIsFiltersVisible}
                >
                    <i className="icon">{noChecked ? '\uf0f7' : '\uf446'}</i>
                    综合筛选
                </span>
            </div>
            {
                isFiltersVisible && (
                    <BottomModal
                        ticketTypes={}
                        trainTypes={}
                        departStatons={}
                        arriveStations={}
                        checkedTicketTypes={}
                        checkedTrainTypes={}
                        checkedDepartStations={}
                        checkedArriveStations={}
                        departTimeStart={}
                        departTimeEnd={}
                        arriveTimeEnd={}
                        setCheckedTicketTypes={}
                        setCheckedTrainTypes={}
                        setCheckedDepartStations={}
                        setCheckedArriveStations={}
                        setDepartTimeEnd={}
                        setDepartTimeStart={}
                        setArriveTimeEnd={}
                        setArriveTimeStart={}
                        toggleIsFiltersVisible={toggleIsFiltersVisible}
                    />
                )
            }
        </div>
    )
}


Bottom.propTypes = {
    orderType: PropTypes.number.isRequired,
    highSpeed: PropTypes.bool.isRequired,
    onlyTickets: PropTypes.bool.isRequired,
    isFiltersVisible: PropTypes.bool.isRequired,
    toggleOrderType: PropTypes.func.isRequired,
    toggleHighSpeed: PropTypes.func.isRequired,
    toggleOnlyTickets: PropTypes.func.isRequired,
    toggleIsFiltersVisible: PropTypes.func.isRequired,

    ticketTypes: PropTypes.array.isRequired,
    trainTypes:PropTypes.array.isRequired,
    departStatons:PropTypes.func.isRequired,
    arriveStations:PropTypes.func.isRequired,
    checkedTicketTypes:PropTypes.func.isRequired,
    checkedTrainTypes:PropTypes.func.isRequired,
    checkedDepartStations:PropTypes.func.isRequired,
    checkedArriveStations:PropTypes.func.isRequired,
    departTimeStart:PropTypes.number.isRequired,
    departTimeEnd:PropTypes.number.isRequired,
    arriveTimeEnd:PropTypes.number.isRequired,
    setCheckedTicketTypes:PropTypes.func.isRequired,
    setCheckedTrainTypes:PropTypes.func.isRequired,
    setCheckedDepartStations:PropTypes.func.isRequired,
    setCheckedArriveStations:PropTypes.func.isRequired,
    setDepartTimeEnd:PropTypes.func.isRequired,
    setDepartTimeStart:PropTypes.func.isRequired,
    setArriveTimeEnd:PropTypes.func.isRequired,
    setArriveTimeStart:PropTypes.func.isRequired,
}


export default Bottom;
