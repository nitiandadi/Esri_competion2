import{ul as c}from"./mapviewstore-8a6f290e.js";import{c as i}from"./observers-4f67f1fb.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.8-next.4
 */const n=new Set;let e;const r={childList:!0};function d(o){e||(e=i("mutation",s)),e.observe(o.el,r)}function f(o){n.delete(o.el),s(e.takeRecords()),e.disconnect();for(const[t]of n.entries())e.observe(t,r)}function s(o){o.forEach(({target:t})=>{c(t)})}export{d as c,f as d};
