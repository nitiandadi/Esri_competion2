/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
import{unique as o}from"../../../../../core/arrayUtils.js";import{isSome as r}from"../../../../../core/maybe.js";class t{constructor(o,r=null){this.geometry=o,this.textures=r}}function e(r){const t=[];return r.levels.forEach((o=>o.components.forEach((o=>t.push(o.geometry.material))))),o(t)}function n(t){const e=new Array;return t.levels.forEach((o=>{o.components.forEach((o=>{r(o.textures)&&e.push(...o.textures)}))})),o(e)}function s(r){const t=r.components.map((o=>o.geometry));return o(t)}function c(r){const t=[];return r.levels.forEach((o=>{o.components.forEach((o=>{t.push(o.geometry)}))})),o(t)}export{t as LodComponentResources,s as geometriesFromLodLevelResources,c as geometriesFromLodResources,e as materialsFromLodResources,n as texturesFromLodResources};
