// for Header
import styled from 'styled-components'
import logoPic from '../../static/logo.png' 

export const HeaderWrapper = styled.div`
    position: relative;
    height: 56px;
    border-bottom: 1px solid #f0f0f0;

`

export const Logo = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100px;
    height: 58px;
    background: url(${logoPic});
    background-size: contain;
`

export const Nav = styled.div`
    width: 960px;
    margin: 0 auto;
    padding-right: 70px;
    box-sizing: border-box;
    height: 100%;
`

export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color: #333;
    &.left {
        float: left;
    }

    &.right {
        float: right;
        color: #969696;
    }
    &.active {
        color: #ea6f5a;
    }
`

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 160px;
    height: 38px;
    border: none;
    outline: none;
    border-radius: 19px;
    box-sizing: border-box;
    margin-left: 20px;
    background: #eee;
    margin-top: 9px;
    text-indent: 10px;
    padding: 0 30px 0 20px;
    font-size: 14px;
    color: #666;
    &::placeholder {
        color: #999;
    }
    &.focused {
        width: 220px;
    }

    // 入场
    &.slide-enter {
        width: 160px;
        transition: all .35s ease-out;
    }

    &.slide-enter-active {
        width: 220px;
    }

    // 离场
    &.slide-exit {
        transition: all .35s ease-out;
    }

    &.slide-exit-active {
        width: 160px;
    }
`


export const Addition = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;
`

export const Button = styled.div`
    float: right;
    line-height: 38px;
    border-radius: 19px;
    margin-top: 9px;
    margin-right: 20px;
    border: 1px solid #ec6149;
    padding: 0 20px;
    font-size: 14px;
    &.reg {
        color: #ec6149;
    }
    &.writting {
        color: #fff;
        background: #ec6149;
    }
`

export const SearchWrapper = styled.div`
    position: relative;
    float: left;
    .zoom {
        position: absolute;
        right: 5px;
        bottom: 5px;
        width: 30px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        border-radius: 15px;
        cursor: pointer;
        &.focused {
            background: #777;
            color: #fff;
        }
    }

`

export const SearchInfo = styled.div`
    position: absolute;
    left: 0px;
    top: 56px;
    width: 240px;
    padding: 0 20px;
    box-shadow: 0 0 8px rgba(0, 0, 0, .2)
    background: #fff;
`

export const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 5px;
    line-height: 20px;
    font-size: 14px;
    color: #969696;
`

export const SearchInfoSwitch = styled.span`
    float: right;
    font-size: 13px;
    cursor: pointer;
    .spin {
        display: block;
        float: left;
        font-size: 12px;
        margin-right: 5px;
        transition: all .2s ease-in;
        transform: rotate(0deg);
        transform-origin: center center;
    }
`
export const SearchInfoList = styled.div`
    overflow: hidden;
`


export const SearchInfoItem = styled.a`
    display: block;
    float: left;
    font-size: 12px;
    padding: 0 5px;
    line-height: 20px;
    border: 1px solid #ddd;
    color: #787878;
    border-radius: 3px;
    margin-right: 10px;
    margin-bottom: 15px;
    cursor: pointer;

`






