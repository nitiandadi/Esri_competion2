/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
import r from"../../request.js";import s from"../../core/Error.js";import{parseUrl as i,asValidOptions as t,encode as o}from"../utils.js";async function n(n,e,u){if(!e||e.length<1)throw new s("get-version:missing-guid","guid for version is missing");const m=i(n),a=t(m.query,{query:o({f:"json"}),...u});e.startsWith("{")&&(e=e.slice(1,-1));const f=`${m.path}/versions/${e}`,{data:c}=await r(f,a);return c||null}export{n as getVersion};
