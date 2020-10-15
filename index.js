import handleRequest from './src/handlers/scheduler';

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
