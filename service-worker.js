self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("loja-cache").then((cache) => {
      return Promise.all([
        cache.add("index.html"),
        cache.add("Home.html"),
        cache.add("index.css"),
        cache.add("auth.js"),
        cache.add("192.png")
      ]);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => {
      return res || fetch(e.request);
    })
  );
});
