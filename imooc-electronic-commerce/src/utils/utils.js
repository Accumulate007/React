/**
 * Utils 公共工具方法
 */


export default {
    formateDate(time) {
        if(!time) return ''
        let date = new Date(time)
        return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
    }
}
