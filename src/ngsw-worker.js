if( 'serviceWorker' in navigator ) {
    navigator.serviceWorker.register('/sw.js', {
        scope: '/'
    })
    .then(regiseration => {
        console.log("Service Worker Register")
    })
}