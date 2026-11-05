const CACHE = "rola-d20-v1";

const ARQUIVOS = [
    "./",
    "./index.html",
    "./manifest.json",
    "./android-chrome-192x192.png",
    "./android-chrome-512x512.png"
];

// 1. Ao instalar: guarda os arquivos no cache
self.addEventListener("install", (e) => {
    e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ARQUIVOS)));
});

// 2. Ao pedir um arquivo: procura no cache; se não achar, busca na internet
self.addEventListener("fetch", (e) => {
    e.respondWith(
        caches.match(e.request).then((r) => r || fetch(e.request))
    );
});
