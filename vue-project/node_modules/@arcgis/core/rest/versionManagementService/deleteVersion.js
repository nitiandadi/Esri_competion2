/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
import t from"../../request.js";import{parseUrl as e,asValidOptions as o,encode as s}from"../utils.js";async function r(r,u,n){const a=e(r),c=u.toJSON(),i=o(a.query,{query:s({...c,f:"json"}),...n,method:"post"}),m=`${a.path}/delete`,{data:p}=await t(m,i);return p?p.success:null}export{r as deleteVersion};
