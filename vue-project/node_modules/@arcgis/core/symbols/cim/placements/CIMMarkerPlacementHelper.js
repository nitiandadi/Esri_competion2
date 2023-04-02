/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
import{cloneAndDecodeGeometry as r}from"../CIMCursor.js";import{getPlacementOperator as t}from"../CIMOperators.js";class e{static getPlacement(e,o,s,c,n){const m=t(o);if(!m)return null;const u=r(e);return m.execute(u,o,s,c,n)}}export{e as CIMMarkerPlacementHelper};
