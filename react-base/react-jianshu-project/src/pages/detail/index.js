import React, { Component } from 'react'
import { DetailWrapper, Header, Content } from './style'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { actionCreators } from './store'


class Detail extends Component {
    
    render() {
        const { title, content } = this.props
        return (
            <DetailWrapper>
                <Header>{title}</Header>
                <Content dangerouslySetInnerHTML={{__html:content}}>
                    
                </Content>
            </DetailWrapper>
        )
    }

    componentDidMount() {
        // 获取路由传递的 id 参数
        const id = this.props.match.params.id
        this.props.getDetail(id)
    }
}

const mapState = (state) => ({
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
})

const mapDispatch = (dispatch) => ({
    getDetail(id) {
        dispatch(actionCreators.getDetail(id))
    }
})

export default connect(mapState, mapDispatch)(withRouter(Detail))
