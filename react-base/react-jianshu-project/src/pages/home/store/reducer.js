import { fromJS } from 'immutable'


const defaultState = fromJS({
    topicList: [{
        id: 1,
        title: '社会热点',
        imgUrl: 'https://upload-images.jianshu.io/upload_images/4947419-d4340ed1f103b726.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    }],
    articleList: [{
        id: 1,
        title: '这是title',
        desc: '这是简介，描述。。。。。'
    }],
    recommendList: [{
        id: '',
        imgUrl: ''
    }],
    articlePage: 0,
    showScroll: false
})


// reducer导出的是一个纯函数
export default (state = defaultState, action) => {
    if(action.type === 'change_home_data') {
        return state.merge({
            topicList: fromJS(action.topicList),
            articleList: fromJS(action.articleList),
            recommendList: fromJS(action.recommendList)
        })
    } else if(action.type === 'add_article_list') {
        return state.merge({
            'articleList': state.get('articleList').concat(action.list),
            articlePage: action.nextPage
        })
    } else if(action.type === 'toggle_scroll_show') {
        return state.merge({
            showScroll: action.show
        })
    }


    return state
}
