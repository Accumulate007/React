
import { h0 } from '../common/fp'

export const ACTION_SET_DEPART_DATE = 'action_set_depart_date'
export const ACTION_SET_ARRIVE_DATE = 'action_set_arrive_date'
export const ACTION_SET_DEPART_TIME_STR = 'action_set_depart_time_str'
export const ACTION_SET_ARRIVE_TIME_STR = 'action_set_arrive_time_str'
export const ACTION_SET_DEPART_STATION = 'action_set_depart_station'
export const ACTION_SET_ARRIVE_STATION = 'action_set_arrive_station'
export const ACTION_SET_TRAIN_NUMBER = 'action_set_train_number'
export const ACTION_SET_DERATION_STR = 'action_set_duration_str'
export const ACTION_SET_TICKETS = 'action_set_tickets'
export const ACTION_SET_IS_SCHEDULE_VISIBLE = 'action_set_is_schedule_visible'
export const ACTION_SET_SEARCH_PARSED = 'action_set_search_parsed'


export function setDepartDate(departDate) {
    return {
        type: ACTION_SET_DEPART_DATE,
        payload: departDate
    }
}

export function setArriveDate(arriveDate) {
    return {
        type: ACTION_SET_ARRIVE_DATE,
        payload: arriveDate,
    }
}

export function setDepartTimeStr(departTimeStr) {
    return {
        type: ACTION_SET_DEPART_TIME_STR,
        payload: departTimeStr,
    }
}

export function setArriveTimeStr(arriveTimeStr) {
    return {
        type: ACTION_SET_ARRIVE_TIME_STR,
        payload: arriveTimeStr,
    }
}

export function setDepartStation(departStation) {
    return {
        type: ACTION_SET_DEPART_STATION,
        payload: departStation,
    }
}

export function setArriveStation(arriveStation) {
    return {
        type: ACTION_SET_ARRIVE_STATION,
        payload: arriveStation,
    }
}


export function setTrainNumber(trainNumber) {
    return {
        type: ACTION_SET_TRAIN_NUMBER,
        payload: trainNumber,
    }
}

export function setDurationStr(durationStr) {
    return {
        type: ACTION_SET_DERATION_STR,
        payload: durationStr,
    }
}

export function setTickets(tickets) {
    return {
        type: ACTION_SET_TICKETS,
        payload: tickets,
    }
}

export function setIsScheduleVisible(isScheduleVisible) {
    return {
        type: ACTION_SET_IS_SCHEDULE_VISIBLE,
        payload: isScheduleVisible,
    }
}

export function toggleIsScheduleVisible() {
    return (dispatch, getState) => {
        const { isScheduleVisible } = getState()
        dispatch(setIsScheduleVisible(!isScheduleVisible))
    }
}

export function setSearchParsed(searchParsed) {
    return {
        type: ACTION_SET_SEARCH_PARSED,
        payload: searchParsed,
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