import React, { useState, useMemo, useEffect, memo, useCallback } from 'react'
import PropTyeps from 'prop-types'
import classnames from 'classnames'

import './CitySelector.css'

// 使用 memo 优化重渲染性能
const CityItem = memo(function CityItem(props) {
    const {
        name,
        onSelect
    } = props

    return (
        <li className="city-li" onClick={() => onSelect(name)}>
            { name }
        </li>
    )
})

CityItem.propsTypes = {
    name: PropTyeps.string.isRequired,
    onSelect: PropTyeps.func.isRequired
}

const CitySection = memo(function CitySection(props) {
    const {
        title,
        cities = [],
        onSelect
    } = props

    return (
        <ul className="city-ul">
            <li className="city-li" key="title">
                {title}
            </li>
            {
                cities.map(city => {
                    return (
                        <CityItem 
                            key={city.name}
                            name={city.name}
                            onSelect={onSelect}
                        />
                    )
                })
            }
        </ul>
    )
})

CitySection.propsTypes = {
    title: PropTyeps.string.isRequired,
    cities: PropTyeps.array,
    onSelect: PropTyeps.func.isRequired
}

const AlphaIndex = memo(function AlphaIndex(props) {
    const {
        alpha,
        onClick
    } = props

    return (
        <i className="city-index-item" onClick={() => onClick(alpha)}>
            {alpha}
        </i>
    )
})

AlphaIndex.propsTypes = {
    alpha: PropTyeps.string.isRequired,
    onClick: PropTyeps.func.isRequired
}

const alphabet = Array.from(new Array(26), (ele, index) => {
    return String.fromCharCode(65 + index)
})

const CityList = memo(function CityList(props) {
    const {
        sections,
        onSelect,
        toAlpha
    } = props

    return (
        <div className="city-list">
            <div className="city-cate">
                {
                    sections.map(section => {
                        return (
                            <CitySection 
                                key={section.name}
                                title={section.title}
                                cities={section.citys}
                                onSelect={onSelect}
                            />
                        )
                    })
                }
            </div>
            <div className="city-index">
                {
                    alphabet.map(alpha => {
                        return <AlphaIndex key={alpha} alpha={alpha} onClick={toAlpha} />
                    })
                }
            </div>
        </div>
    )
})

CityList.propsTypes = {
    sections: PropTyeps.array.isRequired,
    onSelect: PropTyeps.func.isRequired,
    toAlpha: PropTyeps.func.isRequired
}

const SuggestItem = memo(function SuggestItem(props) {
    const { name, onClick } = props

    return (
        <li className="city-suggest-li" onClick={() => onClick(name)}>
            { name }
        </li>
    )
})

SuggestItem.propTyeps = {
    name: PropTyeps.string.isRequired,
    onClick: PropTyeps.func.isRequired
}

const Suggest = memo(function Suggest(props) {
    const { searchKey, onSelect } = props

    const [result, setResult] = useState([])

    useEffect(() => {
        fetch('/rest/search?key=' + encodeURIComponent(searchKey))
            .then(res => res.json())
            .then(data => {
                const { result, searchKey: sKey} = data
                if(skey === searchKey) {
                    setResult(result)
                }
            })
    }, [searchKey])

    const fallBackResult = useMemo(() => {
        if(!result.length) {
            return [{
                display: searchKey
            }]
        }
        return result
    }, [result, searchKey])

    return (
        <div className="city-suggest">
            <ul className="city-suggest-ul">
                {
                    fallBackResult.map(item => {
                        return (
                            <SuggestItem 
                                key={item.display}
                                name={item.display}
                                onClick={onSelect}
                            />
                        )
                    })
                }
            </ul>
        </div>
    )
})

Suggest.propsTypes = {
    searchKey: PropTyeps.string.isRequired,
    onSelect: PropTyeps.func.isRequired
}


const CitySelecotr = memo(function CitySelecotr(props) {
    const { show, cityData, isLoading, onBack, fetchCityData, onSelect } = props

    const [searchKey, setSearchKey] = useState('')

    // useMemo() 用于对值的改变与否做判断，从而进行优化
    // searchKey不变，searchKey.trim()就不会进行重新计算
    const trimKey = useMemo(() => {
        return searchKey.trim()
    }, [searchKey])

    useEffect(() => {
        if(!show || cityData || isLoading) {
            return
        }
        fetchCityData()
    }, [show, cityData, isLoading])

    const wrapClass = classnames('city-selector', {
        hidden: !show
    })

    const iClass = classnames('search-clean', {
        hidden: trimKey.length === 0
    })

    const toAlpha = useCallback(alpha => {
        document.querySelector(`[data-cache='${alpha}']`).scrollIntoView()
    }, [])

    const outputCitySections = () => {
        if(isLoading) {
            return <div>loading</div>
        }

        if(cityData) {
            return (
                <CityList 
                    sections={cityData.CityList}
                    onSelect={onSelect}
                    toAlpha={toAlpha}
                />
            )
        }

        return <div>Error...</div>
    }

    return (
        <div className={wrapClass}>
            <div className="city-search">
                <div className="search-back" onClick={() => onBack()}>
                    <svg width="42" height="42">
                        <polyline
                            points="25,13 16,21 25,29"
                            stroke="#fff"
                            strokeWidth="2"
                            fill="none"
                        />
                    </svg>
                </div>
                <div className="search-input-wrapper">
                    <input
                        type="text"
                        value={searchKey}
                        className="search-input"
                        placeholder="城市、车站的中文或拼音"
                        onChange={e => setSearchKey(e.target.value)}
                    />
                </div>
                <i
                    onClick={() => setSearchKey('')}
                    className={iClass}
                >
                    &#xf063;
                </i>
            </div>
            {
                Boolean(key) && (
                    <Suggest
                        searchKey={key}
                        onSelect={key => onSelect(key)}
                    />
                )
            }
            {
                outputCitySections()
            }
        </div>
    )
})



export default CitySelecotr


CitySelecotr.PropTyeps = {
    show: PropTyeps.bool.isRequired,
    cityData: PropTyeps.object,
    isLoading: PropTyeps.bool.isRequired,
    onBack: PropTyeps.func.isRequired,
    fetchCityData: PropTyeps.func.isRequired,
    onSelect: PropTyeps.func.isRequired
}
