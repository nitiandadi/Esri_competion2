/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
import r from"../../request.js";import{parseUrl as o,asValidOptions as t,encode as s}from"../utils.js";import n from"./support/GetVersionInfosResult.js";async function e(e,u,f){const i=o(e),m=u.toJSON(),p=t(i.query,{query:s({...m,f:"json"}),...f}),a=`${i.path}/versionInfos`,{data:j}=await r(a,p);if(!j)return null;return n.fromJSON(j)}export{e as getVersionInfos};
