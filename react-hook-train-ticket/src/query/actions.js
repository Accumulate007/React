import { ORDER_DEPART, ORDER_DURATION } from "./constant"

import { h0 } from '../common/fp'

export const ACTION_SET_FROM = 'ACTION_SET_FROM'
export const ACTION_SET_TO = 'ACTION_SET_TO'
export const ACTION_SET_DEPART_DATE = 'ACTION_SET_DEPART_DATE'
export const ACTION_SET_HIGH_SPEED = 'ACTION_SET_HIGH_SPEED'
export const ACTION_SET_TRAIN_LIST = 'ACTION_SET_TRAIN_LIST'
export const ACTION_SET_ORDER_TYPE = 'ACTION_SET_ORDER_TYPE'
export const ACTION_SET_ONLY_TICKETS = 'ACTION_SET_ONLY_TICKETS'
export const ACTION_SET_TICKET_TYPES = 'ACTION_SET_TICKET_TYPES'
export const ACTION_SET_CHECKED_TICKET_TYPES = 'ACTION_SET_CHECKED_TICKET_TYPES'
export const ACTION_SET_TRAIN_TYPES = 'ACTION_SET_TRAIN_TYPES'
export const ACTION_SET_CHECKED_TRAIN_TYPES = 'ACTION_SET_CHECKED_TRAIN_TYPES'
export const ACTION_SET_DEPART_STATIONS = 'ACTION_SET_DEPART_STATIONS'
export const ACTION_SET_CHECKED_DEPART_STATIONS = 'ACTION_SET_CHECKED_DEPART_STATIONS'
export const ACTION_SET_ARRIVE_STATIONS = 'ACTION_SET_ARRIVE_STATIONS'
export const ACTION_SET_CHECKED_ARRIVE_STATIONS = 'ACTION_SET_CHECKED_ARRIVE_STATIONS'
export const ACTION_SET_DEPART_TIME_START = 'ACTION_SET_DEPART_TIME_START'
export const ACTION_SET_DEPART_TIME_END = 'ACTION_SET_DEPART_TIME_END'
export const ACTION_SET_ARRIVE_TIME_START = 'ACTION_SET_ARRIVE_TIME_START'
export const ACTION_SET_ARRIVE_TIME_END = 'ACTION_SET_ARRIVE_TIME_END'
export const ACTION_SET_IS_FILTERS_VISIBLE = 'ACTION_SET_IS_FILTERS_VISIBLE'
export const ACTION_SET_SEARCH_PARSED = 'ACTION_SET_SEARCH_PARSED'


export function setFrom(from) {
    return {
        type: ACTION_SET_FROM,
        payload: from
    }
}

export function setTo(to) {
    return {
        type: ACTION_SET_TO,
        payload: from
    }
}

export function setDepartDate() {
    return {
        type: ACTION_SET_DEPART_DATE,
        payload: from
    }
}

export function setHighSpeed() {
    return {
        type: ACTION_SET_HIGH_SPEED,
        payload: from
    }
}

export function toggleHighSpeed() {
    return (dispatch, getState) => {
        const { highSpeed } = getState()
        dispatch(setHighSpeed(!highSpeed))
    }
}

export function setTrainList() {
    return {
        type: ACTION_SET_TRAIN_LIST,
        payload: from
    }
}

export function toggleOrderType(orderType) {
    return (dispatch, getState) => {
        const { orderType } = getState()
        if(orderType === ORDER_DEPART) {
            dispatch({
                type: ACTION_SET_ORDER_TYPE,
                payload: ORDER_DURATION
            })
        } else {
            dispatch({
                type: ACTION_SET_ORDER_TYPE,
                payload: ORDER_DEPART
            })
        }
    }
}

export function toggleOnlyTickets() {
    return (dispatch, getState) => {
        const { onlyTickets } = getState()
        dispatch({
            type: ACTION_SET_ONLY_TICKETS,
            payload: !onlyTickets
        })
    }
}

export function setTicketTypes() {
    return {
        type: ACTION_SET_TICKET_TYPES,
        payload: from
    }
}

export function setCheckedTicketTypes() {
    return {
        type: ACTION_SET_CHECKED_TICKET_TYPES,
        payload: from
    }
}

export function setTrainTypes() {
    return {
        type: ACTION_SET_TRAIN_TYPES,
        payload: from
    }
}

export function setCheckedTrainTypes() {
    return {
        type: ACTION_SET_CHECKED_TRAIN_TYPES,
        payload: from
    }
}

export function setDepartStations() {
    return {
        type: ACTION_SET_DEPART_STATIONS,
        payload: from
    }
}

export function setCheckedDepartStations() {
    return {
        type: ACTION_SET_CHECKED_DEPART_STATIONS,
        payload: from
    }
}

export function setArriveStations() {
    return {
        type: ACTION_SET_ARRIVE_STATIONS,
        payload: from
    }
}

export function setCheckedArriveStations() {
    return {
        type: ACTION_SET_CHECKED_ARRIVE_STATIONS,
        payload: from
    }
}

export function setDepartTimeStart() {
    return {
        type: ACTION_SET_DEPART_TIME_START,
        payload: from
    }
}

export function setDepartTimeEnd() {
    return {
        type: ACTION_SET_DEPART_TIME_END,
        payload: from
    }
}

export function setArriveTimeStart() {
    return {
        type: ACTION_SET_ARRIVE_TIME_START,
        payload: from
    }
}

export function setArriveTimeEnd() {
    return {
        type: ACTION_SET_ARRIVE_TIME_END,
        payload: from
    }
}

export function toggleIsFiltersVisible() {
    return (dispatch, getState) => {
        const { isFiltersVisible } = getState()
        dispatch({
            type: ACTION_SET_IS_FILTERS_VISIBLE,
            payload: !isFiltersVisible
        })
    }
}

export function setSearchParsed(searchParsed) {
    return {
        type: ACTION_SET_SEARCH_PARSED,
        payload: searchParsed
    }
}

export function nextDate() {
    return (dispatch, getState) => {
        const { departDate } = getState()
        dispatch(setDepartDate(h0(departDate) + 86400 * 1000))
    }
}

export function prevDate() {
    return (dispatch, getState) => {
        const { departDate } = getState()
        dispatch(setDepartDate(h0(departDate) - 86400 * 1000))
    }
}
