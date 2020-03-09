import React, { Component } from 'react'
import { ListItem, ListInfo, LoadMore } from '../style'
import { connect } from 'react-redux'
import { actionCreators } from '../store'
import { set } from 'immutable'
import { Link } from 'react-router-dom'

class List extends Component {

    render() {
        const { list, getMoreList, articlePage } = this.props

        return (
            <div>
                {
                    list.map((item) => {
                        return (
                            <Link key={item.get('id')} to={"/detail/" + item.get("id")}>
                                <ListItem>
                                    <img src={item.get('imgUrl')} className="pic" alt="" />
                                    <ListInfo>
                                        <h3 className="title">{item.get('title')}</h3>
                                        <p className="desc">{item.get('desc')}</p>
                                    </ListInfo>
                                </ListItem>
                            </Link>
                        )
                    })
                }
                <LoadMore onClick={() => {getMoreList(articlePage)}}>加载更多</LoadMore>
            </div>
        )
    }
}

const mapState = (state) => ({
    list: state.get('home').get('articleList'),
    articlePage: state.getIn(['home', 'articlePage'])
})

const mapDispatch = (dispatch) => ({
    getMoreList(page) {
        const action = actionCreators.getMoreList(page)
        dispatch(action)
    }
})

export default connect(mapState, mapDispatch)(List)
