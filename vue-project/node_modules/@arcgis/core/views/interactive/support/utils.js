/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
import{isSome as o}from"../../../core/maybe.js";import{pt2px as s}from"../../../core/screenUtils.js";function t(t){let e=0,a=0,r=0;return t?("cim"===t.type&&t.data.symbol&&"symbolLayers"in t.data.symbol&&t.data.symbol.symbolLayers&&t.data.symbol.symbolLayers.map((s=>{"CIMVectorMarker"===s.type&&s.anchorPoint&&(Math.abs(s.anchorPoint.x)>e&&(e=s.anchorPoint.x),Math.abs(s.anchorPoint.y)>a&&(a=s.anchorPoint.y),o(s.size)&&s.size>r&&(r=s.size))})),e=s(e),a=s(a),r=s(r),{offsetX:e,offsetY:a,size:r}):{offsetX:e,offsetY:a,size:r}}export{t as getSymbolInfo};
