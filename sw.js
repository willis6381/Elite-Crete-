const C='elite-crete-v1';
self.addEventListener('install',e=>{self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(clients.claim());});
self.addEventListener('fetch',e=>{
  e.respondWith(caches.open(C).then(c=>c.match(e.request).then(r=>{
    const n=fetch(e.request).then(res=>{c.put(e.request,res.clone());return res;}).catch(()=>r);
    return r||n;
  })));
});
