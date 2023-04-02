/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
import{unwrapOr as e}from"../../../../core/maybe.js";import{LodComponentResources as o}from"../../webgl-engine/lib/lodRendering/LodResources.js";function r(r){const s=new Array;return r.stageResources.geometries.forEach((e=>{const t=r.stageResources.textures;s.push(new o(e,t))})),{components:s,minScreenSpaceRadius:e(r.lodThreshold,0),pivotOffset:r.pivotOffset}}function s(e){return{levels:e.map((e=>r(e)))}}export{s as makeLodResources};
