
self.addEventListener('install', event => {
    event.waitUntil(new Promise(resolve => {
        setTimeout(resolve, 5000)
    }))
})


self.addEventListener('activate', event => {})


self.addEventListener('fetch', event => {})







