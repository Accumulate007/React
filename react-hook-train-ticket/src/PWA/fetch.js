
(function () {
    const xhr = new XMLHttpRequest()
    xhr.responseType = 'json'

    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4) {
            if(xhr.status >= 200 && xhr.status <= 300) {
                console.log(xhr.response)
            }
        }
    }

    xhr.open('GET', '/userInfo.json', true)

    xhr.send(null)
})()



fetch('userInfo.json', {
    method: 'GET',
    headers: new Headers()
}).then(res => res.json()).then(info => {
    console.log(info)
})











