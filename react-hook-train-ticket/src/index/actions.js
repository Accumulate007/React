
export const ACTION_SET_FROM = 'SET_FROM'
export const ACTION_SET_TO = 'SET_TO'
export const ACTION_SET_IS_CITY_SELECTOR_VISIBLE = 'IS_CITY_SELECTOR_VISIBLE'
export const ACTION_SET_CURRENT_SELECTING_LEFT_CITY = 'CURRENT_SELECTING_LEFT_CITY'
export const ACTION_SET_CITY_DATA = 'CITY_DATA'
export const ACTION_SET_IS_LOADING_CITY_DATA = 'IS_LOADING_CITY_DATA'
export const ACTION_SET_IS_DATE_SELECTOR_VISIBLE = 'IS_DATE_SELECTOR_VISIBLE'
export const ACTION_SET_HIGH_SPEED = 'HIGH_SPEED'

export const ACTION_SET_DEPART_DATE = 'set_depart_date'


export function setFrom(from) {
    return {
        type: ACTION_SET_FROM,
        payload: from
    }
}

export function setTo(to) {
    return {
        type: ACTION_SET_TO,
        payload: to
    }
}

export function setIsLoadingCityData(isLoadingCityData) {
    return {
        type: ACTION_SET_IS_LOADING_CITY_DATA,
        payload: isLoadingCityData
    }
}

export function setCityData(cityData) {
    return {
        type: ACTION_SET_CITY_DATA,
        payload: cityData
    }
}

export function toggleHighSpeed(cityData) {
    return (dispatch, getState) => {
        const { highSpeed } = getState()
        dispatch({
            type: ACTION_SET_HIGH_SPEED,
            payload: !highSpeed
        })
    }
}

export function showCitySelector(currentSelectingLeftCity) {
    return (dispatch) => {
        dispatch({
            type: ACTION_SET_IS_CITY_SELECTOR_VISIBLE,
            payload: true
        })

        dispatch({
            type: ACTION_SET_CURRENT_SELECTING_LEFT_CITY,
            payload: currentSelectingLeftCity
        })
    }
}

export function hideCitySlector() {
    return {
        type: ACTION_SET_IS_CITY_SELECTOR_VISIBLE,
        payload: false
    }
}


export function setSelectedCity(city) {
    return (dispatch, getState) => {
        const { currentSelectingLeftCity } = getState()
        if(currentSelectingLeftCity) {
            dispatch(setFrom(city))
        } else {
            dispatch(setTo(city))
        }

        dispatch(hideCitySlector())
    }
}

export function setDepartDate(city) {
    return (dispatch, getState) => {
        const { currentSelectingLeftCity } = getState()
        if(currentSelectingLeftCity) {
            dispatch(setFrom(city))
        } else {
            dispatch(setTo(city))
        }
    }
}

export function showDateSelector() {
    return {
        type: ACTION_SET_IS_DATE_SELECTOR_VISIBLE,
        payload: true
    }
}

export function hideDateSelector() {
    return {
        type: ACTION_SET_IS_DATE_SELECTOR_VISIBLE,
        payload: false
    }
}


export function exchangeFromTo() {
    return (dispatch, getState) => {
        const { from, to} = getState()
        dispatch(setFrom(to))
        dispatch(setTo(from))
    }
}

export function showDepartDate(departDate) {
    return {
        type: ACTION_SET_DEPART_DATE,
        payload: departDate
    }
}

export function fetchCityData() {
    return (dispatch, getState) => {
        const { isLoadingCityData } = getState()
        if(isLoadingCityData) return

        let cacheData = JSON.parse(localStorage.getItem('city_data_cache') || '{}')

        if(Date.now() < cacheData.expires) {
            dispatch(setCityData(cacheData.data))
            return
        }


        dispatch(setIsLoadingCityData(true))
        fetch('/rest/cities?_' + Date.now()).then(res => res.json)
            .then(cityData => {
                dispatch(setCityData(cityData))

                // 数据缓存
                localStorage.setItem('city_data_cache', JSON.stringify({
                    expires: Date.now() + 60*1000,
                    data: cityData
                }))

                dispatch(setIsLoadingCityData(false))
            })
            .then(() => {
                dispatch(setIsLoadingCityData(false))
            })
    }
}
