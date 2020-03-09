import axios from 'axios'
import { fromJS } from 'immutable'

const changeHomeData = (result) => ({
    type: "change_home_data",
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList
})

const addHomeList = (list, nextPage) => ({
    type: "add_article_list",
    list: fromJS(list),
    nextPage
})

export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then(res => {
            const result = res.data.data
            dispatch(changeHomeData(result))
        }).catch(err => {
            console.log('err from home/index.js')
        })
    }
}

export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get('/api/homeList.json?page=' + page).then(res => {
            const result = res.data.data
            dispatch(addHomeList(result, page + 1))
        }).catch(err => {
            console.log('err from home/index.js')
        })
    }
}

export const toggleTopShow = (flag) => ({
    type: 'toggle_scroll_show',
    show: flag
})

