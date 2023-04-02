/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
import{unwrap as t,isSome as n}from"../../core/maybe.js";async function e(n,e){if("2d"===n.type)return n.hitTest(e);const s=await n.hitTest(e);if(0===s.results.length)return s;const i=s.results[0],u=(t(i.distance)??0)*(1+r),c=s.results.findIndex((t=>(t.distance??0)>u));return-1!==c&&(s.results=s.results.slice(0,c)),s}const r=.05;function s(t){return n(t)&&"graphic"===t.type}function i(t){return t.find(s)??null}function u(t){return t.filter(s)}export{u as filterGraphicHits,i as findFirstGraphicHit,e as hitTestSelectSimilarDistance};
