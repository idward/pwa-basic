self.addEventListener("install", function(event) {
  console.log("[Service worker] install Service worker, ", event);
  event.waitUntil(
    caches.open("static").then(function(cache) {
      console.log("cache: ", cache);
      cache.addAll([
        '/',
        '/favicon.ico',
        '/src/js/material.min.js',
        '/src/js/app.js',
        '/src/js/feed.js',
        'https://fonts.googleapis.com/icon?family=Material+Icons',
        'https://fonts.googleapis.com/css?family=Roboto:400,700',
        'https://cdnjs.cloudflare.com/ajax/libs/material-design-lite/1.3.0/material.indigo-pink.min.css',
        'https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2',
        'https://fonts.gstatic.com/s/materialicons/v48/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2',
        '/src/css/app.css',
        '/src/css/feed.css',
        '/src/images/main-image.jpg'
      ])
    })
  );
});

self.addEventListener("activate", function(event) {
  console.log("[Service worker] activate Service worker, ", event);
  return self.clients.claim();
});

self.addEventListener("fetch", function(event) {
  console.log("[Service worker] fetching somthing, ", event);
  event.respondWith(
    caches.match(event.request).then(function(response){
      if(response){
        console.log('hit: ', response);
        return response;
      }
      return fetch(event.request);
    })
  );
});
