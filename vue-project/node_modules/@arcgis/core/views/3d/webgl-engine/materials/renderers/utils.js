/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
import{isNone as t}from"../../../../../core/maybe.js";import{c as e}from"../../../../../chunks/vec3f64.js";import{encodeDoubleArray as r}from"../../../../webgl/doublePrecisionUtils.js";function n(e,r){return t(e)&&(e=[]),e.push(r),e}function o(e,r){if(t(e))return null;const n=e.filter((t=>t!==r));return 0===n.length?null:n}function s(t,e,n,o,s){i[0]=t.get(e,0),i[1]=t.get(e,1),i[2]=t.get(e,2),r(i,u,3),n.set(s,0,u[0]),o.set(s,0,u[1]),n.set(s,1,u[2]),o.set(s,1,u[3]),n.set(s,2,u[4]),o.set(s,2,u[5])}const i=e(),u=new Float32Array(6);export{n as addObject3DStateID,s as encodeDoubleVec3,o as removeObject3DStateID};
