self.addEventListener("install", function(event) {
  console.log("[Service worker] install Service worker, ", event);
});

self.addEventListener("activate", function(event) {
  console.log("[Service worker] activate Service worker, ", event);
  return self.clients.claim();
});

self.addEventListener("fetch", function(event) {
  console.log("[Service worker] fetching somthing, ", event);
  event.respondWith(fetch(event.request));
});
