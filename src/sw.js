const VERSION = 'v1';

function log(message) {
    console.log(VERSION, message);
}

log('Service Worker installed')

self.addEventListener('install', () => {
    log('SW: installed')
})

self.addEventListener('activate', () => {
    log('SW: activated')
})