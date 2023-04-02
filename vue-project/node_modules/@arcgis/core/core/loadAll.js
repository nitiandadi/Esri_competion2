/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
import{map as o,result as r}from"./asyncUtils.js";import t from"./Collection.js";import a from"./Loadable.js";import{isNone as n}from"./maybe.js";async function l(o,r){return await o.load(),i(o,r)}async function i(l,i){const c=[],f=(...o)=>{for(const r of o)n(r)||(Array.isArray(r)?f(...r):t.isCollection(r)?r.forEach((o=>f(o))):a.isLoadable(r)&&c.push(r))};i(f);let e=null;if(await o(c,(async o=>{const t=await r(s(o)?o.loadAll():o.load());!1!==t.ok||e||(e=t)})),e)throw e.error;return l}function s(o){return"loadAll"in o&&"function"==typeof o.loadAll}export{l as loadAll,i as loadAllChildren};
