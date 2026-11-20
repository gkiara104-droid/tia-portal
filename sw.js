const C='plc-v1',F=["./", "index.html", "manifest.webmanifest", "icon-192.png", "icon-512.png", "img/sem.jpg", "img/tank.jpg", "img/plat.jpg", "img/alm.jpg", "img/oven.jpg", "img/bend.jpg", "img/drill.jpg", "img/dist.jpg", "img/door.jpg", "img/pump.jpg", "img/air.jpg"];
self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll(F)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!=C).map(x=>caches.delete(x)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>e.respondWith(fetch(e.request).then(r=>{const c=r.clone();caches.open(C).then(x=>x.put(e.request,c));return r}).catch(()=>caches.match(e.request))));
