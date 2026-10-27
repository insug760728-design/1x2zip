const CACHE_NAME = 'gpc-1x2zip-v20261027-27';
const ASSETS = [
  './manifest.json',
  './app-icon.svg',
  './og-banner.png'
];

self.addEventListener('install', function(event) {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(ASSETS).catch(function() {});
    })
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(k) { return k !== CACHE_NAME; }).map(function(k) { return caches.delete(k); })
      );
    }).then(function() {
      return self.clients.claim();
    })
  );
});

// Clean passthrough for HTML navigations - fixes mobile first-load white screen bug
self.addEventListener('fetch', function(event) {
  if (event.request.method !== 'GET') return;
  if (event.request.mode === 'navigate') {
    return; // Allow native browser navigation without service worker interference
  }
  event.respondWith(
    caches.match(event.request).then(function(cached) {
      return cached || fetch(event.request);
    }).catch(function() {
      return fetch(event.request);
    })
  );
});
