import{k as h}from"./index-9ba3f23e.js";import{jJ as d,b as i,r as c,_ as b,v6 as v,v7 as w,eY as z,ku as j,v8 as _}from"./MapView-d4248bee.js";let s=y();function y(){return new d(50)}function P(){s=y()}function $(e,r){if(e.type==="icon")return l(e,r);if(e.type==="object")return f(e,r);throw new i("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")}async function k(e,r){if(e.type==="icon")return g(e,r);if(e.type==="object")return x(e,r);throw new i("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")}async function l(e,r){var t,n;if((t=e.resource)!=null&&t.href)return L(e.resource.href).then(o=>[o.width,o.height]);if((n=e.resource)!=null&&n.primitive)return c(r)?[r,r]:[256,256];throw new i("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")}function g(e,r){return l(e,r).then(t=>{if(e.size==null)return t;const n=t[0]/t[1];return n>1?[e.size,e.size/n]:[e.size*n,e.size]})}function L(e){return b(e,{responseType:"image"}).then(r=>r.data)}function f(e,r){return B(e,r).then(t=>v(t))}async function x(e,r){const t=await f(e,r);return w(t,e)}async function B(e,r){var n;if(!e.isPrimitive){const o=z((n=e.resource)==null?void 0:n.href),u=s.get(o);if(u!==void 0)return u;const m=await h(()=>import("./MapView-d4248bee.js").then(p=>p.x$),["assets/MapView-d4248bee.js","assets/index-9ba3f23e.js","assets/index-fecf00a2.css"]),a=await m.fetch(o,{disableTextures:!0});return s.put(o,a.referenceBoundingBox),a.referenceBoundingBox}let t=null;if(e.resource&&e.resource.primitive&&(t=j(_(e.resource.primitive)),c(r)))for(let o=0;o<t.length;o++)t[o]*=r;return t?Promise.resolve(t):Promise.reject(new i("symbol:invalid-resource","The symbol does not have a valid resource"))}export{P as clearBoundingBoxCache,l as computeIconLayerResourceSize,$ as computeLayerResourceSize,k as computeLayerSize,f as computeObjectLayerResourceSize};
