/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
import t from"../../request.js";import{parseUrl as o,asValidOptions as r,encode as e}from"../utils.js";async function n(n,s,a){const u=o(n),i=s.toJSON(),f=r(u.query,{query:e({...i,f:"json"}),...a,method:"post"}),m=`${u.path}/create`,{data:p}=await t(m,f);return p?p.versionInfo:null}export{n as createVersion};
