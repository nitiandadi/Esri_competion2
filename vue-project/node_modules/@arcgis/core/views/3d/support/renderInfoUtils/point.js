/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
import{applyPerVertexElevationAlignment as e}from"../../layers/graphics/elevationAlignmentUtils.js";import{newDoubleArray as n}from"../../webgl-engine/lib/DoubleArray.js";function t(t,o,i,l,r){const s=n(3*t.length),c=n(s.length);t.forEach(((e,n)=>{s[3*n+0]=e[0],s[3*n+1]=e[1],s[3*n+2]=e.length>2?e[2]:0}));const g=e(s,o,0,c,0,s,0,s.length/3,i,l,r),a=null!=g;return{numVertices:t.length,position:s,mapPositions:c,projectionSuccess:a,sampledElevation:g}}export{t as geometryToRenderInfo};
