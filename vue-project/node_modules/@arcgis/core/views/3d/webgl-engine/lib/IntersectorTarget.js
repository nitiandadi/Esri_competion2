/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
import{isSome as s}from"../../../../core/maybe.js";import{a as t}from"../../../../chunks/vec3f64.js";class r{constructor(s,t,r){this.object=s,this.geometryId=t,this.triangleNr=r}}class c extends r{constructor(r,c,e,o){super(r,c,e),this.center=s(o)?t(o):null}}class e extends c{}class o{constructor(s){this.layerUid=s}}class i extends o{constructor(s,t){super(s),this.graphicUid=t}}export{i as Graphic3DTarget,c as HudTarget,o as LayerTarget,r as ObjectTarget,e as ValidHudTarget};
